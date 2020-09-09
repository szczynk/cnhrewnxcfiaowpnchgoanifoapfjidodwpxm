<template>
  <div id="profile">
    <navbar/>
    <div class="container">
      <div class="row my-4 justify-content-center">
        <div class="col-lg-3 col-md-6 col-sm-12 my-auto mx-auto">
          <profileCard/>
        </div>
        <div class="ccol-lg-9 col-md-9 col-sm-12 my-auto mx-auto">
          <videoProfile/>
        </div>
      </div>
    </div>
    <profileBio/>
    <sectionFooter/>
  </div>
</template>

<script>
import navbar from '../../components/navbar.vue'
import profileCard from '../../components/profile/profileCard.vue'
import videoProfile from '../../components/profile/videoProfile.vue'
import profileBio from '../../components/profile/profileBio.vue'
import sectionFooter from '../../components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    profileCard,
    videoProfile,
    profileBio,
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
  background-color: rgba($color: #9e9886, $alpha: 0.7);

  .navbar-nav {
    .nav-link {
      font-size: 1rem;

      &:hover {
        font-weight: bold;
      }
    }
  }
}

.container {
  margin-top: 45px;
}
</style>
