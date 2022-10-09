<template>
  <div class="flex justify-center gap-4 flex-wrap">
    <a
      v-for="item in buttons"
      :key="item.svg"
      class="
        flex
        justify-start
        bg-white
        text-dark
        px-3
        py-2
        rounded-md
        drop-shadow-sm
      "
    >
      <nuxt-img
        :class="`fill-dark ${!onlyIcon ? 'mr-2' : null}`"
        :src="`icons/${item.svg}.svg`"
      />
      <span>{{ !onlyIcon ? item.title : null }}</span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    buttons: [],
    onlyIcon: Boolean,
  },
}
</script>
<style lang="scss" scoped></style>
