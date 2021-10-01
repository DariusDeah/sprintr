<template>
  <div class="row">
    <div class="col-12">
      <div class="card row">
        <div class="col-11">
          <div class="card-body">
            <h4 class="card-title">
              {{ sprint.name }}
            </h4>
            <p class="card-text">
              start date:{{ sprint.createdAt }}
            </p>
          </div>
        </div>
        <div class="col-1">
          <i class="mdi mdi-delete text-danger" @click="deleteSprint()"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { SprintModel } from '../Models/Sprint'
import { sprintsService } from '../services/SprintsService'
import { AppState } from '../AppState'
export default {
  props: {
    sprint: { type: SprintModel, required: true }
  },
  setup(props) {
    return {
      project: computed(() => AppState.activeProject),
      async deleteSprint() {
        await sprintsService.deleteSprint(this.project.id, props.sprint.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
