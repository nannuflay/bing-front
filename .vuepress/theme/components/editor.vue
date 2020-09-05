<template>
  <div class="froala-editor">
    <froala :tag="'textarea'" :config="config" v-model="model" ></froala>  
  </div>
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg';
export default {
  data () {
    return {
      config: {
        events: {
          'froalaEditor.initialized': function () {
            console.log('initialized')
            
          },
          'froalaEditor.size': function () {
            height: 300
          } 
        }
      },
      model: ''
    }
  },
}
</script>

<style>

</style>