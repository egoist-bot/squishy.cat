<template>
  <div id='app'>

    <div class='view'>

      <experiments></experiments>

    </div>

  </div>
</template>

<script>
import Experiments from '@/components/experiments'

export default {
  name: 'app',
  components: { Experiments },
  data () {
    return {
    }
  },
  mounted() {
    document.title = '（=´∇｀=）'
    const name =`
                           d8b          888                                 888    
                           Y8P          888                                 888    
                                        888                                 888    
.d8888b   .d88888 888  888 888 .d8888b  88888b.  888  888  .d8888b  8888b.  888888 
88K      d88" 888 888  888 888 88K      888 "88b 888  888 d88P"        "88b 888    
"Y8888b. 888  888 888  888 888 "Y8888b. 888  888 888  888 888      .d888888 888    
     X88 Y88b 888 Y88b 888 888      X88 888  888 Y88b 888 Y88b.    888  888 Y88b.  
 88888P'  "Y88888  "Y88888 888  88888P' 888  888  "Y88888  "Y8888P "Y888888  "Y888 
              888                                     888                          
              888                                Y8b d88P                          
              888                                 "Y88P"                           `

    console.log(name)
  }
}
</script>
