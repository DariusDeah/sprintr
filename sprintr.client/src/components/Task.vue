<template>
  <div class="card my-1">
    <div class="row d-flex">
      <div class="col-6">
        <h4 class="card-title">
          {{ task.name }}
        </h4>
      </div>
      <div class="col-5">
        <p class="card-text">
          Weight: {{ task.weight }}
        </p>
      </div>
      <div class="col-1 align-items-end">
        <i class="mdi mdi-delete text-danger selectable"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
