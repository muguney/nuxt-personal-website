<template>
  <div class="flex justify-center gap-4">
    <a href="https://dribbble.com/mustafaguney" target="_blank">
      <dribble :class="iconColor()"
    /></a>
    <a href="https://www.behance.net/mustafagney" target="_blank"
      ><behance :class="iconColor()"
    /></a>
    <a href="https://www.instagram.com/mmustafaguneyy" target="_blank"
      ><instagram :class="iconColor()"
    /></a>
    <a
      href="https://www.linkedin.com/in/mustafa-g%C3%BCney-57858220a/"
      target="_blank"
      ><linkedin :class="iconColor()"
    /></a>
    <a href="https://github.com/muguney" target="_blank"
      ><github :class="iconColor()"
    /></a>
    <a href="mailto:mail@mustafaguney.com" target="_blank"
      ><email :class="iconColor()"
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
export default {
  components: {
    dribble,
    behance,
    instagram,
    linkedin,
    github,
    email,
  },
  methods: {
    iconColor() {
      return 'fill-dark dark:fill-light'
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
