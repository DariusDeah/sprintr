<template>
  <div class="card my-1">
    <div class="row">
      <div class="col-1">
        <div>
          <input type="checkbox" @click="toggleIsComplete()" :checked="task.isComplete">
        </div>
      </div>
      <div class="col-5">
        <h4 class="card-title">
          {{ task.name }}
        </h4>
      </div>
      <div class="col-5">
        <p class="card-text">
          <i class="mdi mdi-weight text-info">{{ task.weight }}</i>
        </p>
      </div>
      <div class="col-1 align-items-" v-if="account.id === project.creatorId">
        <i class="mdi mdi-delete text-danger selectable" @click="deleteTask(task.id, task.projectId)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { tasksService } from '../services/TasksService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      project: computed(() => AppState.activeProject),
      account: computed(() => AppState.account),
      async toggleIsComplete() {
        await tasksService.toggleIsComplete(props.task.id)
      },
      async deleteTask(taskId, projectId) {
        try {
          await tasksService.deleteTask(taskId, projectId)
        } catch (error) {
          Pop.toast('Oh No!', error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
