<template>
  <div id="app">
    <navbar/>
    <banner/>
    <sectionFeaturesAll/>
    <videoCarousel/>
    <sectionSearchBar/>
    <sectionFooter/>
  </div>
</template>

<script>
import navbar from '../../components/navbar.vue'
import banner from '../../components/banner.vue'
import videoCarousel from '../../components/home/videoCarousel.vue'
import sectionFooter from '../../components/footer.vue'
import sectionSearchBar from '../../components/home/searchBar.vue'
import sectionFeaturesAll from '../../components/home/sectionFeaturesAll.vue'


export default {
  name: 'App',
  components: {
    navbar,
    banner,
    sectionFeaturesAll,
    videoCarousel,
    sectionSearchBar,
    sectionFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-light { 
    border-bottom: none;

    .navbar-nav {
        margin-right: 90px;
        .nav-link {
            font-size: 1rem;
            color: #fff !important;

            &:hover {
                font-weight: bold;
            }
        }
    }
}
</style>
