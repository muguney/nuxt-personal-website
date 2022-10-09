<template>
  <div
    class="
      md:h-[270px]
      relative
      w-full
      object-cover
      overflow-hidden
      rounded-[20px]
      drop-shadow-xl
      group
      transition-opacity
    "
  >
    <nuxt-link :to="'/' + fixUrl(title)">
      <div
        class="
          absolute
          w-full
          h-full
          flex
          opacity-0
          group
          group-hover:opacity-100
          justify-center
          flex-col
          items-center
          bg-light bg-opacity-80
          transition
          duration-100
        "
      >
        <h4 class="text-lg font-semibold dark:text-dark">{{ title }}</h4>
        <span class="dark:text-dark">{{ scope }}</span>
      </div>
      <nuxt-img
        format="webp"
        :src="coverImg"
        width="100%"
        height="100%"
        class="object-center"
      />
    </nuxt-link>
  </div>
</template>
<script>
import common from '~/mixins/common'
export default {
  mixins: [common],
  props: {
    title: String,
    scope: String,
    coverImg: String,
  },
}
</script>
<style lang="scss" scoped>
</style>
