<template>
  <div class="mt-[130px]">
    <img
      class="
        rounded-full
        border-solid border-[5px] border-opacity-5 border-dark
        dark:border-light dark:border-opacity-10
      "
      :src="image"
      :width="width"
      :height="height"
      :alt="title"
      :title="title"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    width: String,
    height: String,
  },
}
</script>

<style lang="scss" scoped>
</style>
