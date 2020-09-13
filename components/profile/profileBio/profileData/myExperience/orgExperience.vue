<template>
    <div class="org_experience">
        <h5 class="section-header">Pengalaman Organisasi: <span><a href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Pengalaman Organisasi</a></span></h5>
        <ul>
            <li v-for="myOrgExperience in org_experience" v-bind:key="myOrgExperience.id" class="myOrgExperience">
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
    name: 'org_experience',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>