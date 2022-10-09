<template>
  <div
    class="
      max-w-[1440px]
      flex
      text-center
      justify-center
      flex-col
      lg:flex-row
      w-full
      relative
      mt-10
      pt-4
      border-t-[1px]
      dark:border-gray-600
      pb-4
    "
  >
    <div class="flex flex-col md:flex-row gap-2 justify-center">
      <p>
        You can get the source codes of this website on my
        <a
          :href="profile.socials.github"
          target="_blank"
          alt="Github Projects"
          title="Github Projects"
          ><b>Github</b></a
        >
      </p>
      <div class="flex flex-row gap-2 justify-center">
        <a
          :href="profile.socials.github"
          target="_blank"
          alt="Github Projects"
          title="Github Projects"
        >
          <github class="fill-dark dark:fill-light transition-transform"
        /></a>
        <div
          @click="$colorMode.preference = 'dark'"
          v-if="$colorMode.value == 'light'"
          class="cursor-pointer hover:scale-110 transition-transform"
        >
          <dark class="fill-dark dark:fill-light" />
        </div>
        <div
          @click="$colorMode.preference = 'light'"
          v-if="$colorMode.value == 'dark'"
          class="cursor-pointer hover:scale-110 transition-transform"
        >
          <light class="fill-dark dark:fill-light" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { profile } from 'static/data'
import github from 'static/icons/github.svg'
import light from 'static/icons/light.svg'
import dark from 'static/icons/dark.svg'
export default {
  components: {
    github,
    light,
    dark,
  },
  data() {
    return {
      profile: profile,
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
