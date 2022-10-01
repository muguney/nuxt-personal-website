<template>
  <div class="flex justify-center gap-2">
    <dribble class="fill-dark dark:fill-light" />
    <behance class="fill-dark dark:fill-light" />
    <instagram class="fill-dark dark:fill-light" />
    <linkedin class="fill-dark dark:fill-light" />
    <github class="fill-dark dark:fill-light" />
    <email class="fill-dark dark:fill-light" />
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
}
</script>

<style lang="scss" scoped>
</style>
