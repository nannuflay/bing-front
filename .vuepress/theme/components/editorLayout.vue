<template>
  <div class="">
    <div class="h-10 p-2 w-full bg-grey-lighter ">
      <div class="flex flex-row justify-between" style="margin: 0px 190px">
        <div class="md:inline-flex hidden sm:inline-flex">
          <router-link to="/">
            <button class=" text-grey-darker text-sm mr-4 focus:outline-none hover:text-black">Images</button>
          </router-link>
          <router-link to="/articles">
            <button class=" text-grey-darker text-sm focus:outline-none hover:text-black">Articles</button>
          </router-link>
          <svg class="h-4 w-4 mx-6 text-grey-darker cursor-pointer hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h0m7 0h0m7 0h0M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
          </svg>
        </div>
        <div class="inline-flex">
          <img 
            src="https://www.shareicon.net/data/512x512/2016/09/01/822712_user_512x512.png"
            alt="Avatar"
            class="w-6 h-6 rounded-full cursor-pointer hidden sm:flex md:flex"
          >
          <svg class="h-6 w-6 text-grey-darker mx-2 cursor-pointer hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </div>
      </div> 
   </div>

    <div class=" container mx-auto" style="margin-top:90px">
      <span class=" text-grey-darkest text-xl font-extrabold my-3">Editor text:</span>
      <p class=" text-grey-dark text-sm my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas iste ea. Eum ad voluptatum ratione rerum assumenda,
          consequuntur repellendus vel adipisci, voluptatibus dolores suscipit neque id debitis, ullam veniam!
        </p>
      <Editor class="mt-6"/>
    </div>
  </div>
</template>

<script>
import Editor from './editor'
import Navbar from './navbar'

export default {
  components: { Editor, Navbar }

}
</script>

<style lang="stylus">
  @import '../styles/theme';
</style>
