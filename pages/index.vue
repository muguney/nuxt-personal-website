<template>
  <div>
    <div class="flex flex-col justify-center items-center p-5">
      <avatar
        :title="profile.name"
        :image="profile.avatarImg"
        width="150"
        height="150"
      />
      <h1 class="text-xl font-semibold">{{ profile.name }}</h1>
      <h2>{{ profile.profileTitle }}</h2>
      <p
        class="mt-3 max-w-[1200px] text-center leading-relaxed"
        v-html="profile.aboutMe"
      ></p>
      <social-buttons class="mt-5 pt-5 border-t-[1px] dark:border-gray-600" />
      <h3 class="mt-[65px] font-semibold text-lg">Tools & Langs</h3>
      <icon-button :buttons="tools" class="mb-4 mt-5" :onlyIcon="false" />
      <icon-button :buttons="langs" class="mb-5" :onlyIcon="false" />
      <h3 class="mt-[80px] mb-5 text-xl font-semibold">Projects</h3>
      <div
        class="
          max-w-[1440px]
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          mb-10
        "
      >
        <ProjectCard
          v-for="(project, index) in projects"
          :title="project.title"
          :scope="project.scope"
          :coverImg="project.coverImg"
          :key="index"
        />
      </div>
      <Footer />
      <scroll-top />
    </div>
  </div>
</template>
<script>
import Footer from '~/components/footer'
import ProjectCard from '~/components/projectCard'
import { tools, langs, profile, projects, site } from 'static/data'
import iconButton from '~/components/iconButton'
import avatar from '~/components/avatar'
import SocialButtons from '~/components/socialButtons'
import ScrollTop from '~/components/scrollTop.vue'
import common from '~/mixins/common'
export default {
  mixins: [common],
  components: {
    Footer,
    ProjectCard,
    iconButton,
    SocialButtons,
    avatar,
    ScrollTop,
  },
  name: 'IndexPage',
  data() {
    return {
      meta_title: site.homePageTitle,
      meta_desc: site.homePageDesc,
      profile: profile,
      tools: tools,
      langs: langs,
      projects: projects.sort((a, b) => b.rowId - a.rowId)
    }
  },
  mounted() {},
}
</script>
