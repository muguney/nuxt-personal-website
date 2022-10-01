<template>
  <div class="flex justify-center gap-4">
    <a v-for="item in buttons" :key="item.svg" class="flex justify-start ">
      <img  class="fill-dark" :src="`icons/${item.svg}.svg`" />
      <span :class="text ? 'text-base bg-red' : null">{{
        text ? item.title : null
      }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    buttons: [],
    text: Boolean,
  },
}
</script>

<style lang="scss" scoped></style>
