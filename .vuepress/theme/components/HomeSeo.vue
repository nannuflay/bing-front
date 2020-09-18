<template>
  <div class="navbar pt-3" style="height:450px">
    <Navbar/>
    <div class="flex flex-row  justify-center text-center search-boxs">
      <img src="../assets/logo.png" alt="logo" class="w-20 h-10 mx-10"> 
        <div class="relative sm:flex md:flex hidden">
          <input 
            class="h-12 shadow-lg  outline-none rounded-lg py-2 px-3 text-grey-darker"
            style="width: 530px"
          > 
          <div class=" absolute pin-t pin-r m-3 z-10">
            <svg class="h-6 w-6  text-teal-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
            </svg>
            <svg class="h-6 w-6 text-teal-dark cursor-pointer " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
        </div>
        <div class="arrow-down-icon h-10 w-10 bg-black rounded-lg flex items-center  cursor-pointer">
          <svg class="h-4 w-4 mx-auto text-grey-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
          </svg>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from './navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
   .navbar {
    background-image: url("../assets/CloudsPelmo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 55%;
  }
   .search-boxs {
    margin-top: 10%;
    margin-right: 35%
  }
  .arrow-down-icon {
    position: absolute;
    bottom: 10px;
    left: 200px;
  }
</style>