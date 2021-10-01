<template>
  <div class="card my-1">
    <div class="row card-header">
      <div class="col-4">
        <h6>{{ backlogitem.name }}</h6>
        <br>
        {{ backlogitem.status }}
      </div>
      <div class="col-3">
        <button class="btn btn-info my-1" @click="toggleBacklogDetails()">
          Show Tasks
        </button> <br>
        <button class="btn btn-info" :data-bs-target="'#backlog-modal-' + backlogitem.id" data-bs-toggle="modal">
          Show Details
        </button>
      </div>
      <div class="col-1">
        <i class="mdi mdi-weight text-info">{{ totalComputedTaskWeight }}</i>
      </div>
      <div class="col-3">
        <button class="btn btn-success" :data-bs-target="'#task-modal-' + backlogitem.id" data-bs-toggle="modal">
          Add Task
        </button>
      </div>
      <div class="col-1">
        <i class="mdi mdi-delete selectable text-danger" @click="deleteBacklog()"></i>
      </div>
      <div class="col-12">
        <div class="row">
          <Modal :id="'task-modal-' + backlogitem.id">
            <template #modal-title>
              <h4>New Task</h4>
            </template>
            <template #modal-body>
              <TaskForm :id-prop="backlogitem.id" />
            </template>
          </Modal>
        </div>
      </div>
    </div>
    <div class="row card-body visually-hidden" :id="'task-' + backlogitem.id">
      <Task v-for="t in tasks" :key="t.id" :task="t" />
    </div>
  </div>
  <Modal :id="'backlog-modal-' + backlogitem.id">
    <template #modal-title>
      <h4>{{ backlogitem.name }}</h4> <br>
      <div class="row">
        <div class="col-6">
          {{ backlogitem.status }}
        </div>
        <div class="col-6">
          <select name="ChangeStatus" :selected="backlogitem.status" @change="onStatusChange($event, backlogitem.projectId, backlogitem.id)">
            <option value="0">
              ---- Select Status ----
            </option>
            <option value="Pending">
              Pending
            </option>
            <option value="In Progress">
              In Progress
            </option>
            <option value="In Reveiw">
              In Reveiw
            </option>
            <option value="Done">
              Done
            </option>
          </select>
        </div>
      </div>
    </template>
    <template #modal-body>
      <NoteForm :backlog-item-id="backlogitem.id" />
    </template>
  </Modal>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { BacklogItem } from '../Models/BacklogItem'
import { backlogItemsService } from '../services/BacklogItemsService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  props: {
    backlogitem: {
      type: BacklogItem,
      required: true
    },
    projectId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      tasks: computed(() => AppState.tasks.filter(t => t.backlogItemId === props.backlogitem.id)),
      totalComputedTaskWeight: computed(() => AppState.tasks.filter(t => t.backlogItemId === props.backlogitem.id).reduce(function(prev, cur) { return prev + cur.weight }, 0)),
      async deleteBacklog() {
        const res = await backlogItemsService.deleteBacklog(props.backlogitem.id, props.projectId)
        logger.log('deleted Backlog', res)
      },
      toggleBacklogDetails() {
        document.getElementById(`task-${props.backlogitem.id}`).classList.toggle('visually-hidden')
      },
      async onStatusChange(e, projectId, backlogId) {
        const status = e.target.value
        logger.log('status', status)
        await backlogItemsService.updateBacklog(status, projectId, backlogId)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
