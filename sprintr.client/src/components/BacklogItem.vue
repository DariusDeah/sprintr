<template>
  <div class="card">
    <div class="row card-header">
      <div class="col-4">
        {{ backlogitem.name }}
      </div>
      <div class="col-4">
        <button>Show Details</button>
      </div>
      <div class="col-4">
        <button>Add Task</button>
      </div>
    </div>
    <div class="row card-body">
      <!-- <Task /> -->
    </div>
  </div>
</template>

<script>
import { BacklogItem } from '../Models/BacklogItem'
export default {
  props: {
    backlogitem: {
      type: BacklogItem,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
