import { site } from 'static/data'
export default {
  methods: {
    fixUrl(x) {
      let val = x ? x : ''
      return val
        .toString()
        .trim()
        .toLowerCase()
        .replace(/-/g, ' ')
        .replace(/ /g, '-')
        .replace(/å/g, 'a')
        .replace(/ä/g, 'a')
        .replace(/ń/g, 'n')
        .replace(/ó/g, 'o')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ğ/g, 'g')
        .replace(/ç/g, 'c')
        .replace(/ş/g, 's')
    },
  },
  head() {
    const data = {
      title: this.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta_desc ,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta_title ,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta_desc,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta_title,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: site.domain + this.$route.path,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.ogImage
            ? site.domain + this.ogImage
            : site.domain + '/og-image.png',
        },
      ],
    }
    return data
  },
}
