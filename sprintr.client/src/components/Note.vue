<template>
  <div class="row">
    {{ note.body }}
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

</style>
