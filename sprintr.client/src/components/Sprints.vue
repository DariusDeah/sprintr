<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            {{ sprint.name }}
          </h4>
          <p class="card-text">
            start date:{{ sprint.createdAt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SprintModel } from '../Models/Sprint'
export default {
  props: {
    sprint: { type: SprintModel, required: true }
  },
  setup() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
