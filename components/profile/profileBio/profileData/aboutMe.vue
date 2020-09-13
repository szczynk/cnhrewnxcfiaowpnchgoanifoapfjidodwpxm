<template>
    <div class="aboutMe tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
       <h5 class="section-header">Tentang Saya: <span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
        <p>
        {{user.about_me}}
        </p>         
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'aboutMe',
  computed: {
    ...mapState(['user'])
  }, 
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