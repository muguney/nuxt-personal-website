<template>
  <div class="flex flex-col justify-center items-center p-5">
    <header
      class="
        max-w-[1440px]
        flex flex-col
        items-center
        w-full
        relative
        mt-10
        md:mt-20
        pb-10
      "
    >
      <div class="w-full relative flex flex-row items-center">
        <nuxt-link to="/">
          <back class="fill-dark dark:fill-light" width="40px" height="40px" />
        </nuxt-link>
        <div class="w-full flex flex-col items-end md:items-center">
          <h1 class="text-lg md:text-xl font-semibold">{{ project.title }}</h1>
          <h2>{{ project.scope }}</h2>
        </div>
      </div>
      <p class="mt-5 max-w-[1000px] text-right md:text-center">
        {{ project.description }}
      </p>
    </header>
    <div
      v-for="(items, index) in project.images"
      :key="index"
      class="max-w-[1440px] w-full mb-10"
    >
      <nuxt-img :src="items.imgUrl" class="w-full rounded-xl drop-shadow-lg" />
    </div>
    <Footer />
    <scroll-top />
  </div>
</template>
<script>
import Footer from '~/components/footer'
import { projects } from 'static/data'
import back from 'static/icons/back.svg'
import common from '~/mixins/common'
import ScrollTop from '~/components/scrollTop.vue'
export default {
  mixins: [common],
  components: {
    Footer,
    ScrollTop,
    back,
  },
  data() {
    return {
      project: [],
      meta_title: '',
      meta_desc: '',
    }
  },
  beforeMount(){

  },
  mounted() {
    // We created new array
    // We converted title and create urlParam field like url paramater with fixurl func for find which project page we are
    let newArr = projects.map((x) => {
      return {
        rowId: x.rowId,
        coverImg: x.coverImg,
        title: x.title,
        urlParam: this.fixUrl(x.title),
        scope: x.scope,
        description: x.description,
        images: x.images,
      }
    })
    this.project = newArr.find((x) => (x.urlParam == this.$route.params.name))
    this.meta_title = 'Project - ' + this.project.title
    this.meta_desc = this.project.description
    this.ogImage = this.project.images[0].imgUrl
  },
}
</script>

<style lang="scss" scoped>
</style>
