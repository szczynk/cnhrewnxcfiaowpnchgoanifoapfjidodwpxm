<template>
    <div class="myExperience tab-pane fade" id="v-pills-experience" role="tabpanel" aria-labelledby="v-pills-experience-tab">
       <workExperience/>
       <orgExperience/>
    </div>
</template>

<script>
import workExperience from './myExperience/workExperience.vue'
import orgExperience from './myExperience/orgExperience.vue'

export default {
  name: 'myExperience',
  components: {
    workExperience,
    orgExperience
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.myExperience {
    ul {
        li {
            list-style-type: none;
            position: relative;
            margin-left: 10px;
            margin-bottom: 10px;
        
            .position-relative {
                margin-left: 20px;
                margin-top: 30px;
            }
                    
            h5 {
                border-bottom: none !important;  
                padding-bottom: 0;
                font-weight: none;
            }            
        }
        
        li:before {
            content: "";
            position: absolute;
            left: calc(-16px);
            width: 2px;
            height: calc(100% + 25px);
            background-color: #B982E8;
            margin-top: 15px;  
            overflow: hidden;
        }
        
        li::after {
            content: "";
            position: absolute;
            top: 8px;
            left: calc(-24px);
            width: 20px;
            height: 20px;
            background-color: #B982E8;
            border-radius: 100%;
        }
    } 
}


.orgExperience {
    margin-top: 80px;
    margin-bottom: 80px;
}
</style>