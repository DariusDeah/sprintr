<template>
  <Child-nav />

  <div class="row justify-content-end">
    <div class="col-11">
      <div class="row visually-hidden justify-content-center" id="BacklogForm">
        <form @submit.prevent="createBacklog()" class="col-8">
          <div class="form-group row">
            <label for="name">Backlog Name:</label>
            <input type="text" name="name" v-model="editable.name">
          </div>
          <div class="form-group row">
            <label for="description">Backlog Description:</label>
            <input type="text" name="decription" v-model="editable.description">
          </div>
          <div class="row">
            <button type="submit" @click="toggleBacklogForm()">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-1">
      <button @click="toggleBacklogForm()">
        Add Backlog
      </button>
    </div>
  </div>
  <router-view />
  <BacklogItem v-for="b in backlogItems" :key="b.id" :backlogitem="b" :project-id="route.params.projectId" />
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { projectService } from '../services/ProjectService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { backlogItemsService } from '../services/BacklogItemsService'
import Pop from '../utils/Pop'
import { tasksService } from '../services/TasksService'
export default {
  setup() {
    const editable = ref({})
    // allows us to use the id in the url
    const route = useRoute()
    onMounted(async() => {
      await projectService.getProjectsById(route.params.projectId)
      await backlogItemsService.getBacklogItemsByProjectId(route.params.projectId)
      await tasksService.getTasks(route.params.projectId)
    })
    return {
      route,
      editable,
      backlogItems: computed(() => AppState.backlogItems),
      projects: computed(() => AppState.activeProject),
      toggleBacklogForm() {
        document.getElementById('BacklogForm').classList.toggle('visually-hidden')
      },
      async createBacklog() {
        try {
          await backlogItemsService.createBacklog(route.params.projectId, editable.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>
