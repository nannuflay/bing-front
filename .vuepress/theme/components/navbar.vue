<template>
  <div class="flex flex-row justify-between" style="margin: 0px 190px">
    <div class="md:inline-flex hidden sm:inline-flex">
      <router-link to="/">
        <button class=" text-grey-light text-sm mr-8 focus:outline-none hover:text-grey">Images</button>
      </router-link>
      <router-link to="/articles">
        <button class=" text-grey-light text-sm focus:outline-none hover:text-grey">Articles</button>
      </router-link>
      <svg class="h-4 w-4 mx-8 text-grey-light cursor-pointer hover:text-grey" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h0m7 0h0m7 0h0M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
      </svg>
    </div>
    <div class="inline-flex">
      <img 
        src="https://www.shareicon.net/data/512x512/2016/09/01/822712_user_512x512.png"
        alt="Avatar"
        class="w-6 h-6 rounded-full cursor-pointer hidden sm:flex md:flex"
      >
      <svg class="h-6 w-6 text-grey-light mx-2 cursor-pointer hover:text-grey" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

</style>