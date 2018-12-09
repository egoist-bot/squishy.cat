<template>
  <div class='experiments'>

    <div class="locale-changer">
      <select v-model='$i18n.locale'>
        <option v-for='(lang, i) in langs' :key='`Lang${i}`' :value='lang'>{{ lang }}</option>
      </select>
    </div>

    <header>
      <div class='title'><span>squishycat</span></div>
      <div v-on:click='aboutActive = !aboutActive' class='about-button'>{{ $t('experiments.aboutButton') }}</div> -
      <a href='https://github.com/zygome/squishy.cat' target='_blank' rel='noreferrer'>{{ $t('experiments.sourceLink')}}</a>
    </header>

    <div class='about' v-if='aboutActive'>
      {{ $t('experiments.aboutText') }} :)
    </div>

    <ul>
      <li v-for='experiment in experiments'>
        <a :href='experiment.url' target='_blank' rel='noreferrer'>
          <div class='info'>
            <p class='info-title'>{{ experiment.title }}</p>
            <p class='info-desc'>{{ experiment.desc }}</p>
          </div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>

module.exports = {
  data() {
    return {
      aboutActive: false,
      experiments: '',
      langs: ['cat', 'eng', 'fil', 'jpn', 'rus']
    }
  },
  mounted() {
    this.$http.get('experiments.json').then((response) => {
      // success callback
      this.experiments = response.data
    }, (response) => {
      // error callback
      console.log(response)
    })
  }
}
</script>
