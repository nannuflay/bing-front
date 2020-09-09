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
        placeholderText: 'Edit Your Content Here!',
        height: 430,
        toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', 'html', '|', 'undo', 'redo'],
      },
      model: ''
    }
  },
}
</script>

<style>

</style>