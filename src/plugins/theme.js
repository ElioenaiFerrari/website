import Vue from 'vue'


const theme = Vue.use({
  install(Vue) {
    Vue.prototype.$theme = {
      primaryColor: '#092532',
      accentColor: '#fa7d09',
      textTheme: {
        button: 'font-weight-bold white--text',
        header: 'headline white--text',
        title: 'headline font-weight-bold grey--text'
      }
    }
  }
})

export default theme;