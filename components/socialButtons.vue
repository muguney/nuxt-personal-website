<template>
  <div class="flex justify-center gap-4">
    <a
      :href="socials.dribble"
      target="_blank"
      class="hover:scale-110 transition-transform"
      alt="Dribble Porfolio"
      title="Dribble Portfolio"
    >
      <dribble :class="iconColor"
    /></a>
    <a
      :href="socials.behance"
      target="_blank"
      alt="Behance Porfolio"
      class="hover:scale-110 transition-transform"
      title="Behance Portfolio"
      ><behance :class="iconColor"
    /></a>
    <a
      :href="socials.instagram"
      target="_blank"
      class="hover:scale-110 transition-transform"
      alt="Instagram"
      title="Instagram"
      ><instagram :class="iconColor"
    /></a>
    <a
      :href="socials.linkedin"
      class="hover:scale-110 transition-transform"
      target="_blank"
      alt="Linkedin"
      title="Linkedin"
      ><linkedin :class="iconColor"
    /></a>
    <a
      :href="socials.github"
      target="_blank"
      class="hover:scale-110 transition-transform"
      alt="Github Projects"
      title="Github Projects"
      ><github :class="iconColor"
    /></a>
    <a
      :href="`mailto:` + socials.email"
      target="_blank"
      class="hover:scale-110 transition-transform"
      alt="Email to me"
      title="Email to me"
      ><email :class="iconColor"
    /></a>
  </div>
</template>
<script>
import dribble from 'static/icons/dribble.svg'
import behance from 'static/icons/behance.svg'
import instagram from 'static/icons/instagram.svg'
import linkedin from 'static/icons/linkedin.svg'
import github from 'static/icons/github.svg'
import email from 'static/icons/email.svg'
import { profile } from 'static/data.js'
export default {
  data() {
    return {
      iconColor: 'fill-dark dark:fill-light',
      socials: profile.socials,
    }
  },
  components: {
    dribble,
    behance,
    instagram,
    linkedin,
    github,
    email,
  },
}
</script>
<style lang="scss" scoped>
</style>
