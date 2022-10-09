<template>
  <div
    v-if="scTop"
    class="
      w-[70px]
      h-[70px]
      right-5
      bottom-5
      cursor-pointer
      fixed
      transition
      ease-in-out
      delay-150
    "
  >
    <div
      @click="scrollTop()"
      class="
        fill-dark
        dark:fill-light
        bg-dark
        border-4
        bg-opacity-5
        dark:bg-opacity-100
        border-[#FFFFFF]
        dark:border-dark dark:border-opacity-50
        rounded-full
        w-full
        h-full
        flex
        justify-center
        items-center
      "
    >
      <scrollTopIcon width="24" height="24" />
    </div>
  </div>
</template>

<script>
import scrollTopIcon from 'static/icons/scrolltop.svg'
// import common from '~/mixins/common'
export default {
  // mixins: [common],
  data() {
    return {
      scTop: false,
    }
  },
  components: {
    scrollTopIcon,
  },
  methods: {
    handleScroll() {
      this.scTop = window.scrollY > 200
    },
    scrollTop() {
      window.scrollTo(0, 0)
    },
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
