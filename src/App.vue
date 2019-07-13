<template>
<v-app>

  <app-header></app-header>

<v-content>
  <router-view/>
  <br>
  <chart v-if="this.$store.getters.isUserAutheticated"></chart>
  <ring v-if="this.$store.getters.isUserAutheticated"></ring>
</v-content>

<app-footer></app-footer>
</v-app>
</template>

<script>

import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import Chart from './views/Chart'
import Ring from './views/Ring'
export default {
  components: {
    AppHeader,
    AppFooter,
    Chart,
    Ring
    
  },
  data () {
    return {
      //
    }
  }
}
</script>
