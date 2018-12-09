import '@/styl/main.styl'
import Vue from 'vue'
import App from '@/App.vue'
import VueI18n from 'vue-i18n'
import VueResource from 'vue-resource'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueI18n)
Vue.use(VueResource)
Vue.use(VueLazyLoad)

// ready translated locale messages
const messages = {
  cat: {
    experiments: {
      title: 'experiments',
      aboutButton: 'sobre',
      aboutText: 'squishycat és un pati d\'esbarjo per a experiments aleatoris',
      sourceLink: 'font'
    }
  },
  eng: {
    experiments: {
      title: 'experiments',
      aboutButton: 'about',
      aboutText: 'squishycat is a playground for random experiments.',
      sourceLink: 'source'
    }
  },
  fil: {
    experiments: {
      title: 'mga eksperimento',
      aboutButton: 'tungkol sa',
      aboutText: 'Ang squishycat ay isang palaruan para sa mga random na eksperimento',
      sourceLink: 'pinagmulan'
    }
  },
  jpn: {
    experiments: {
      title: '実験',
      aboutButton: '約',
      aboutText: 'squishycatは無作為実験のための遊び場です',
      sourceLink: 'ソース'
    }
  },
  rus: {
    experiments: {
      title: 'эксперименты',
      aboutButton: 'около',
      aboutText: 'squishycat - игровая площадка для случайных экспериментов',
      sourceLink: 'источник'
    }
  }
}

// create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'eng', // set locale
  messages, // set locale messages
})

new Vue({
  i18n,
  el: '#app',
  render: h => h(App)
})
