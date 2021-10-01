<template>
  <div class="row">
    <div class="col-2">
      <img :src="note.creator.picture" class="Icon">
    </div>
    <div class="col-2">
      {{ note.creator.name }}
    </div>
    {{ note.body }}
    <div class="col-1">
      <i class="mdi mdi-delete text-danger"></i>
    </div>
  </div>
</template>

<script>
import { Note } from '../Models/Note'
export default {
  props: {
    note: {
      type: Note,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.Icon{
  height: 25px;
}
</style>
