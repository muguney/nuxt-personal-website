
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
}
