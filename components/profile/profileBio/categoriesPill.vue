<template>
    <div class="categoriesPill col-lg-3">
        <div class="nav flex-column nav-pills categories" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> Tentang</a>
            <a class="nav-link" id="v-pills-experience-tab" data-toggle="pill" href="#v-pills-experience" role="tab" aria-controls="v-pills-experience" aria-selected="false">Pengalaman</a>
            <a class="nav-link" id="v-pills-edu-tab" data-toggle="pill" href="#v-pills-edu" role="tab" aria-controls="v-pills-edu" aria-selected="false">Pendidikan</a>
            <a class="nav-link" id="v-pills-skill-tab" data-toggle="pill" href="#v-pills-skill" role="tab" aria-controls="v-pills-skill" aria-selected="false">Skill</a>
            <a class="nav-link" id="v-pills-certificate-tab" data-toggle="pill" href="#v-pills-certificate" role="tab" aria-controls="v-pills-certificate" aria-selected="false">Sertifikat</a>
            <a class="nav-link" id="v-pills-achievement-tab" data-toggle="pill" href="#v-pills-achievement" role="tab" aria-controls="v-pills-achievement" aria-selected="false">Penghargaan</a>
            <a class="nav-link" id="v-pills-porto-tab" data-toggle="pill" href="#v-pills-porto" role="tab" aria-controls="v-pills-porto" aria-selected="false">Portofolio, Resume, dan Tautan</a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'categoriesPill',
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