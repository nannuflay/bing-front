<template>
  <div >
    <HomeSeo></HomeSeo>
    <Cards />
    <div id="app" class="container mx-auto mt-20" style="height:500px">
      <froala :tag="'textarea'" :config="config" v-model="model"></froala>  
    </div>
   </div>
</template>

<script>
import HomeSeo from './components/HomeSeo'
import Cards from './components/Cards'
import VueFroala from 'vue-froala-wysiwyg';

export default {
  name: 'app',
  components: {
    Cards, HomeSeo 
    },
  data () {
    return {
      config: {
        events: {
          'froalaEditor.initialized': function () {
            console.log('initialized')
          }
        }
      },
      model: ''
    }
  }
}
</script>

<style lang="stylus">
  @import './styles/theme.styl';
</style>