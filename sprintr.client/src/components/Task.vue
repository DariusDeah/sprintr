<template>
  <div class="card my-1">
    <div class="row">
      <div class="col-1">
        <div>
          <input type="checkbox">
        </div>
      </div>
      <div class="col-5">
        <h4 class="card-title">
          {{ task.name }}
        </h4>
      </div>
      <div class="col-5">
        <p class="card-text">
          <i class="mdi mdi-weight">{{ task.weight }}</i>
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
