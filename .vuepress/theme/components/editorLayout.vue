<template>
  <div class=" container mx-auto" style="margin-top:40px">
    <span class=" text-grey-darkest text-xl font-extrabold my-3">Editor text:</span>
    <p class=" text-grey-dark text-sm my-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas iste ea. Eum ad voluptatum ratione rerum assumenda,
       consequuntur repellendus vel adipisci, voluptatibus dolores suscipit neque id debitis, ullam veniam!
      </p>
    <Editor class="mt-6"/>
  </div>
</template>

<script>
import Editor from './editor'

export default {
  components: { Editor }

}
</script>

<style lang="stylus">
  @import '../styles/theme';
</style>
