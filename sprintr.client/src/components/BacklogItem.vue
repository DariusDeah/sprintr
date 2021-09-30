<template>
  <div class="card">
    <div class="row card-header">
      <div class="col-4">
        <h6>{{ backlogitem.name }}</h6>
        <br>
        {{ backlogitem.status }}
      </div>
      <div class="col-4">
        <button class="btn btn-info">
          Show Details
        </button>
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
    <div class="row card-body">
      <Task v-for="t in tasks" :key="t.id" :tasks="t" />
    </div>
  </div>
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
      async deleteBacklog() {
        const res = await backlogItemsService.deleteBacklog(props.backlogitem.id, props.projectId)
        logger.log('deleted Backlog', res)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
