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
        <button class="btn btn-success">
          Add Task
        </button>
      </div>
      <div class="col-1">
        <i class="mdi mdi-delete selectable text-danger" @click="deleteBacklog()"></i>
      </div>
    </div>
    <div class="row card-body">
      <!-- <Task /> -->
    </div>
  </div>
</template>

<script>
import { BacklogItem } from '../Models/BacklogItem'
import { backlogItemsService } from '../services/BacklogItemsService'
import { logger } from '../utils/Logger'
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