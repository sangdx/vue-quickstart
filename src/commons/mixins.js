export default {
  methods: {
    randomStr(length = 10) {
      return [...Array(length)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
    }
  }
}
