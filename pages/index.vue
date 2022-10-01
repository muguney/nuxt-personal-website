<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <avatar
        :title="profile.name"
        :image="profile.avatarImg"
        width="150"
        height="150"
      />
      <h1 class="text-xl font-semibold">{{ profile.name }}</h1>
      <h2>{{ profile.profileTitle }}</h2>
      <p class="mt-3 max-w-[1200px] text-center leading-relaxed">
        {{ profile.aboutMe }}
      </p>
      <social-buttons class="mt-5 pt-5 border-t-[1px]" />
      <h3 class="mt-[65px] font-semibold text-lg">Tools & Langs</h3>
      <icon-button :buttons="tools" class="mb-4 mt-5" :text="true" />
      <icon-button :buttons="langs" class="mb-5" :text="true" />
      <h3 class="mt-40 text-xl font-semibold">Projects</h3>

      <div class="media-gallery grid sd:grid-cols-2 lg:grid-cols-3 gap-3">



      </div>

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
  </div>
</template>

<script>
import { tools, langs, profile } from 'static/data'
import iconButton from '~/components/iconButton.vue'
import avatar from '~/components/avatar.vue'
import SocialButtons from '../components/socialButtons.vue'
export default {
  components: { iconButton, SocialButtons, avatar },
  name: 'IndexPage',
  data() {
    return {
      profile: profile,
      tools: tools,
      langs: langs,
    }
  },
  mounted() {},
}
</script>
