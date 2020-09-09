<template>
    <div class="aboutMe tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
       <h5 class="section-header">Tentang Saya: <span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
        <p>
        I'm a person who likes challenges, always striving for a way to improve myself.  
        Love to play with data. Interested in and currently learning about Data Science, 
        Artificial Intelligence, Machine Learning, and Blockchain. Currently writing 
        my final year’s thesis to gain a bachelor's degree in physics at the 
        tate University of Jakarta, computational physics to be exact, with current GPA of 3.04.                     
        <br>
        <br>
        Skilled in machine learning, deep learning, and data visualization in python. 
        One out of thousands of applicant who got accepted and finished Digital Talent Scholarship 
        - Machine Learning training from the Indonesia Ministry of Communication and Information Technology (KOMINFO).
        </p>         
    </div>
</template>

<script>

export default {
  name: 'aboutMe',
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