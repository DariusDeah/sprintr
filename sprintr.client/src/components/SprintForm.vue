<template>
  <form @submit.prevent="createSprint()">
    <div class="form-group">
      <input type="text"
             class="from-control"
             name="name"
             placeholder="Sprint Title"
             v-model="editable.name"

             required
      >
      <div class="form-group">
        <input type="text"
               class="from-control"
               name="body"
               placeholder="Description"
               required
        >
      </div>
      <div class="form-group">
        <!-- <router-link :to="{ name: 'Project',params:{projectId:projects.id} }"> -->
        <button type="submit" class="btn btn-success">
          Post
        </button>
        <!-- </router-link> -->
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { sprintsService } from '../services/SprintsService'
import Pop from '../utils/Pop'
import { useRoute } from 'vue-router'
import { SprintModel } from '../Models/Sprint'
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
import { ProjectModel } from '../Models/Project'
const route = useRoute()
export default {
  props: {
    projects: { type: ProjectModel, required: true },
    projectId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const editable = ref({})
    return {
      editable,
      projectid: computed(() => AppState.activeProject),
      async createSprint() {
        try {
          await sprintsService.createSprint(editable.value)
          Pop.toast('sprint created', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>
