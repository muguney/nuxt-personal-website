<template>
  <div
    class="
      max-w-[1440px]
      flex
      justify-between
      w-full
      relative
      mt-10
      pt-4
      border-t-[1px]
      dark:border-gray-600
      pb-4
    "
  >
    <div>
      © {{ new Date().getFullYear() }} {{ profile.name }},
      <a
        :href="`mailto:` + profile.socials.email"
        class="font-semibold hover:opacity-80 transition-opacity"
      >
        {{ profile.socials.email }}</a
      >
    </div>
    <div class="flex gap-2">
      You can get the source codes of this website on my
      <a
        :href="profile.socials.github"
        target="_blank"
        class="flex gap-2 group"
        alt="Github Projects"
        title="Github Projects"
        ><b>Github</b>
        <github
          class="
            fill-dark
            dark:fill-light
            group-hover:scale-110
            transition-transform
          "
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
