<template>
    <div id="app">
        <navbar/>
        <banner/>
        <main>
            <sectionFeaturesAll/>
            <sectionWorkflowsAll/>
            <sectionPricingList/>
        </main>
        <sectionFooter/>
    </div>
</template>

<script>
import navbar from '../../components/recruiter/navbar.vue'
import banner from '../../components/recruiter/home/banner.vue'
import sectionFeaturesAll from '../../components/recruiter/home/sectionFeaturesAll.vue'
import sectionWorkflowsAll from '../../components/recruiter/home/sectionWorkflowsAll.vue'
import sectionPricingList from '../../components/recruiter/home/sectionPricingList.vue'
import sectionFooter from '../../components/footer.vue'


export default {
  name: 'App',
  components: {
    navbar,
    banner,
    sectionFeaturesAll,
    sectionWorkflowsAll,
    sectionPricingList,
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

main {
    background-image: url('../../assets/LINE.png');
    background-repeat: no-repeat;
    background-position: center;
}
</style>
