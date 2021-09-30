<template>
  <nav class="navbar navbar-expand-lg bg-primary px-3 ">
    <div class="col-lg-6">
      <h1 class="text-light fs-1">
        {{ projects.name }}
      </h1>
    </div>
    <div class="col-lg-6">
      <button @click="toggleBacklogForm()">
        Add Backlog
      </button>
    </div>
  </nav>
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
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { backlogItemsService } from '../services/BacklogItemsService'
import { logger } from '../utils/Logger'
export default {
  props: {
    projectId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const editable = ref({})
    return {
      editable,
      projects: computed(() => AppState.activeProject),
      toggleBacklogForm() {
        document.getElementById('BacklogForm').classList.toggle('visually-hidden')
      },
      async createBacklog() {
        // const form = event.target
        // const formdata = {
        //   name: form.name,
        //   description: form.description
        // }
        const res = await backlogItemsService.createBacklog(props.projectId, editable.value)
        logger.log('created Backlog', res)
      }
    }
  }
}
</script>

<style>

</style>
