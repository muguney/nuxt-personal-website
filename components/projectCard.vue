<template>
  <div
    class="
      md:h-[270px]
      relative
      w-full
      object-cover
      overflow-hidden
      rounded-[10px]
      drop-shadow-xl
      group
      transition-opacity
    "
  >
    <nuxt-link class="relative flex w-full h-full" :to="'/' + fixUrl(title)">
      <div
        class="
          sm:opacity-100
          md:opacity-0
          absolute
          w-full
          h-[70px]
          md:h-full
          flex
          group
          group-hover:opacity-100
          justify-center
          flex-col
          items-center
          bg-light bg-opacity-80
          transition
          duration-100
          bottom-0
        "
      >
        <h4 class="font-semibold dark:text-dark text-base md:text-lg">{{ title }}</h4>
        <span class="dark:text-dark text-sm md:text-base">{{ scope }}</span>
      </div>
      <nuxt-img
        format="webp"
        :src="coverImg"
        class="object-cover w-full"
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
