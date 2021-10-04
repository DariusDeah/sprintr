<template>
  <form @submit.prevent="createTask()">
    <div class="form-group">
      <input type="text"
             class="from-control"
             name="title"
             placeholder="Task Name"
             v-model="task.name"
             required
      >
      <div class="form-group">
        <input type="number"
               class="from-control"
               name="body"
               placeholder="weight"
               v-model="task.weight"
               required
        >
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { Modal } from 'bootstrap'
import { tasksService } from '../services/TasksService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  props: {
    idProp: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const task = ref({})
    return {
      task,
      project: computed(() => AppState.activeProject),
      async createTask() {
        try {
          task.value.backlogItemId = props.idProp
          task.value.projectId = this.project.id
          await tasksService.createTask(task.value, this.project.id)
          Pop.toast('Task Added', 'success')
          const modal = Modal.getInstance(document.getElementById('task-form'))
          modal.hide()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
