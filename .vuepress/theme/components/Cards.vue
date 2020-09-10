<template>
  <div class=" flex flex-col justify-center" style="height:500px">
    <div class="flex flex-row justify-between items-baseline mb-2  card-container mx-auto">
      <div>
        <span class="font-bold text-grey-darkest text-xs">LATEST FROM YOUR ORGANIZATION</span>
      </div>
      <div class="">
        <button class="icon-circle rounded-full hover:bg-grey-lighter shadow-md focus:outline-none mr-2">
          <svg class="h-4 w-4 text-grey-darker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        <button class="button rounded-full text-grey-darker font-bold hover:bg-grey-lighter text-xs shadow-md focus:outline-none">
          Feedback
        </button>
      </div>
    </div>
    <div class="flex flex-row flex-wrap justify-center">
      <div class="shadow-md mr-2 rounded-lg p-4 hover:shadow-lg cursor-pointer" style="width: 420px">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col justify-start">
            <span class=" text-grey-dark text-xs">Hi</span>
            <span class="my-2 text-sm font-bold text-grey-darkest">Welcome to Microsoft search</span>
            <span class="text-xs text-grey-dark">
              Use bring to easily find results from you... <span class=" text-purple-dark cursor-pointer">Learn more</span>
            </span>   
          </div>
          <div>
            <svg class="w-10 h-10 mt-4 text-teal-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.4a1 1 0 00-.3-.7l-5.4-5.4a1 1 0 00-.7-.3H7a2 2 0 00-2 2v11m0 5l4.9-4.9m0 0A3 3 0 1014 12 3 3 0 0010 16z"/>
            </svg>
          </div>
        </div>
        <hr class="border-top border border-grey-light border-t-0"></hr>
        <span class="text-sm text-grey-dark">Try searching for</span>
        <div class="flex flex-row">
          <div class=" mt-2 h-12 border border-grey-light rounded-lg flex items-center justify-between cursor-pointer hover:bg-grey-lighter" style="width:130px">
            <img 
              src="https://www.shareicon.net/data/512x512/2016/09/01/822712_user_512x512.png"
              alt="Avatar profile"
              class=" mx-1 w-8 h-8 rounded-full cursor-pointer"
            >
            <span class="text-xs mr-6">My profile</span>
          </div>
          <div class="mx-2  mt-2 h-12 border border-grey-light rounded-lg flex items-center justify-between cursor-pointer hover:bg-grey-lighter" style="width:130px">
            <svg class="mx-1 w-8 h-8  text-blue-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.4-2.7a1 1 0 01-.6-1V5.7a1 1 0 011.4-.9L9 7m0 13l6-3m-6 3V7m6 10l4.6 2.3a1 1 0 001.4-1V7.7a1 1 0 00-.6-.9L15 4m0 13V4m0 0L9 7"/>
            </svg>
            <span class="text-xs mr-6">My Office</span>
          </div>
        </div>
      </div>

      <div class="p-4 shadow-md mr-2 rounded-lg hover:shadow-lg cursor-pointer " style="width: 420px">
        <div class="flex flex-row justify-between align-baseline">
          <span class=" text-grey-dark text-xs">Coming up</span>
          <svg  class="h-4 w-4 text-grey-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <div class="mt-2 flex flex-row items-start">
          <svg  class=" h-6 w-6 text-grey-darker" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <div class="mx-1 flex flex-col">
            <span class="text-xs font-extrabold text-grey-darkest">Sales call</span>
            <span class="text-xs font-light text-grey-dark">Monday - 1:00pm - 1:30pm - Zoom</span>
          </div>
        </div>
        <hr class="my-4 border border-grey-light border-t-0"></hr>
        <span class="ma-4 text-sm text-grey-dark" style="margin-top:-10px" >Looks like you have just one upcoming meeting</span>
        <hr class="my-4 border border-grey-light border-t-0"></hr>
        <span class="text-sm text-grey-dark">
          Try to search for : <span class=" text-purple-dark text-xs">Book a room</span>
        </span>
      </div>

      <div class="p-4 shadow-md rounded-lg hover:shadow-lg cursor-pointer" style="width: 420px">
        <div class="flex flex-row justify-between align-baseline">
          <span class=" text-grey-dark text-xs">Resent files</span>
          <svg  class="h-4 w-4 text-grey-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <div class="mt-2 flex flex-row">
          <img 
            src="https://icon-library.com/images/word-file-icon-png/word-file-icon-png-6.jpg"
            alt="logo"
            class=" mx-1 w-8 h-8 rounded cursor-pointer"
          >
          <div class="flex flex-col">
            <span class="text-xs font-bold">19-01-01</span>
            <span class="ml-12 text-xs font-medium text-grey-dark">Edited this 22 junuary 2019</span>
          </div>
        </div>
        <hr class="my-3  border border-grey-light border-t-0"></hr>
        <div class="flex flex-row">
          <img 
            src="https://icon-library.com/images/word-file-icon-png/word-file-icon-png-6.jpg"
            alt="logo"
            class=" mx-1 w-8 h-8 rounded cursor-pointer"
          >
          <div class="flex flex-col">
            <span class="text-xs font-bold">170420</span>
            <span class="ml-12 text-xs font-medium text-grey-dark">Edited this 22 junuary 2019</span>
          </div>
        </div>
        <hr class="my-3  border border-grey-light border-t-0"></hr>
        <span class="text-xs text-purple-dark">See more</span>
      </div>
    </div>
  </div>
</template>

<script>

</script>


<style scoped>
.card-container {
    width: 1270px;
  }
  .icon-circle {
    height: 30px;
    width: 30px
  }
  .button {
    width: 100px;
    height: 30px
  }
</style>