<template>
  <div>
    <div class="flex flex-col justify-center items-center gap-2">
      <h1>My Personal Website</h1>
      <div class="flex flex-row gap-5 mb-3">
        <div
          @click="$colorMode.preference = 'dark'"
          class="
            cursor-pointer
            px-2
            py-1
            bg-white
            rounded-md
            text-dark
            drop-shadow-md
          "
        >
          Test Dark Theme
        </div>
        <div
          @click="$colorMode.preference = 'light'"
          class="
            cursor-pointer
            px-2
            py-1
            bg-white
            rounded-md
            text-dark
            drop-shadow-md
          "
        >
          Test Light Theme
        </div>
      </div>
    </div>
    <icon-button :buttons="tools" :text="true" />
    <icon-button :buttons="langs" :text="true" />
    <social-buttons />
  </div>
</template>

<script>
import { tools, langs, social } from 'static/data'
import iconButton from '~/components/iconButton.vue'
import SocialButtons from '../components/socialButtons.vue'
export default {
  components: { iconButton, SocialButtons },
  name: 'IndexPage',
  data() {
    return {
      tools: tools,
      langs: langs,
      social: social,
    }
  },
}
</script>
