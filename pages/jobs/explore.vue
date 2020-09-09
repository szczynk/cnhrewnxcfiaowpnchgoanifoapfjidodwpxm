<template>
  <div id="JobExplore">
    <navbar/>
    <jobSearchbar/>
    <div class="container">
      <categoriesTab/>
      <div class="tab-content overflow-auto pd-2" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-registered" role="tabpanel" aria-labelledby="v-pills-registered-tab"> 
          <jobCard/>
        </div>

        <div class="tab-pane fade" id="v-pills-saved" role="tabpanel" aria-labelledby="v-pills-saved-tab">
          <jobCard/>
        </div>

        <div class="tab-pane fade" id="v-pills-applicant" role="tabpanel" aria-labelledby="v-pills-applicant-tab">
          <jobCard/>
        </div>
      </div>
    </div>
    <sectionFooter/>
  </div>
</template>

<script>
import navbar from '../../components/navbar.vue'
import jobSearchbar from '../../components/jobExplore/jobSearchbar'
import jobCard from '../../components/jobExplore/jobCard'
import categoriesTab from '../../components/jobExplore/categoriesTab'
import sectionFooter from '../../components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    jobSearchbar,
    jobCard,
    categoriesTab,
    sectionFooter
  }
}
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  font-family: 'Assistant', sans-serif;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.navbar-light { 
  border-bottom: 1px solid #B982E8 !important;

  .navbar-nav {
    .nav-link {
      color: #2c3e50 !important;
      font-size: 1rem;
      
      &:hover {
        font-weight: bold;
      }
    }
  }
}

.navbar-light.scrolled {
  border-bottom: none;

  .navbar-nav {
    .nav-link {
      color: #fff !important;
      
      &:hover {
        font-weight: bold;
      }
    }
  }
}

.jobSearchbar {
  margin-top: 80px;
}

</style>
