<template>
    <div class="orgExperience">
        <h5 class="section-header">Pengalaman Organisasi: <span><a href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Pengalaman Organisasi</a></span></h5>
        <ul>
            <li v-for="myOrgExperience in orgExperience" v-bind:key="myOrgExperience.id" class="myOrgExperience">
                <div class="position-relative">
                    <h4>{{myOrgExperience.name}}<span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h4>
                    <h5>{{myOrgExperience.position}}</h5>
                    <h6>{{myOrgExperience.date}}</h6>
                    <br>
                    <p>
                        {{myOrgExperience.description}}
                    </p>
                </div>
            </li>
        </ul>                
    </div>
</template>

<script>

export default {
  name: 'orgExperience',
  data: function() {
        return {
            orgExperience: [
                {
                    id: 1,
                    name: 'Unit Kesenian Mahasiswa Universitas Negeri Jakarta',
                    position: 'Digital Talent Scholarship (KOMINFO)',
                    date: 'December 2015 - July 2019',
                    description: "An organization and an student unit that serves as a place for the student of State University of Jakarta to express their artistic side. Active as a daily staff for years, I’m responsible for managing the organization’s administration. I'm oftenly volunteered to be part of a crew in many events that held by this organization."
                }
            ]
        };  
    },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>