<template>
  <form @submit.prevent="createSprint()">
    <div class="form-group">
      <input type="text"
             class="from-control"
             name="title"
             placeholder="Sprint Title"
             v-model="editable.name"
             required
      >
      <div class="form-group">
        <input type="text"
               class="from-control"
               name="body"
               placeholder="Description"
               v-model="editable.description"
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
const editable = ref({})
const route = useRoute()
export default {
  setup() {
    return {
      async createSprint() {
        try {
          await sprintsService.createSprint(editable.value, route.params.projectId)
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
