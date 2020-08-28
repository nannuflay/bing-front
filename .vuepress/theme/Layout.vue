<template>
  <div >
    <HomeSeo></HomeSeo>
   <Cards />
  </div>
</template>

<script>
import HomeSeo from './components/HomeSeo'
import Cards from './components/Cards'
export default {
  components: {
    Cards, HomeSeo
  }
}
</script>

<style lang="stylus">
  @import './styles/theme.styl';
</style>