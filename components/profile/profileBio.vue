<template>
    <div class="container">
      <div class="row my-2">
          <categoriesPill/>
          <profileBioData/>
      </div>
    </div>
</template>

<script>
import categoriesPill from './profileBio/categoriesPill.vue'
import profileBioData from './profileBio/profileBioData.vue'

export default {
  name: 'profileBio',
  components: {
    categoriesPill,
    profileBioData
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.categories {
    margin-bottom: 30px; 
    
    .nav-link[aria-selected="true"] {
        background-color: #A33DD4;
    }
}
</style>