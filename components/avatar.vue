<template>
  <div class="mt-[100px]">
        <img class="rounded-full border-solid border-[5px] border-opacity-5 border-dark dark:border-light dark:border-opacity-10" :src="image" :width="`${width}px`" :height="`${height}px`" :alt="title" :title="title"/>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    width: Number,
    height: Number,
  },

  }
</script>

<style lang="scss" scoped>

</style>
