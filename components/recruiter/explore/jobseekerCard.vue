<template>
    <div class="row">
        <div v-for="jobseekerCardDetails in jobseekerCardDetail" v-bind:key="jobseekerCardDetails.id" class="jobs-card col-lg-4 col-md-12 col-sm-12 mx-auto my-2 text-right">
            <div class="d-flex row my-3">
                <div class="profile-card col-lg-3 col-md-6 col-sm-6 float-center mx-auto text-center">
                    <img class="card-profile-picture my-2" src="../../../assets/profpic.png" width="100" height="100">
                    <div class="card-info col justify-content-center">
                        <h5>{{jobseekerCardDetails.name}}</h5>
                        <p>{{jobseekerCardDetails.title}}</p>
                        <p>{{jobseekerCardDetails.location}}</p>
                        <div class="profile-card-button">
                            <a href="#" class="btn btn-profile-detail px-2 mt-2 mr-2">Info Detail</a>
                            <a href="#" class="btn btn-profile-video px-2 mt-2 mr-2">Lihat Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'jobseekerCard',
    data: function() {
        return {
            jobseekerCardDetail: [
                {
                    id: 1,
                    name: 'Thomas Frank',
                    title: 'Graphic Designer',
                    location: 'Jakarta Indonesia'                        
                },
                {
                    id: 2,
                    name: 'Thomas Asep',
                    title: 'Graphic Designer',
                    location: 'Jakarta Indonesia'  
                },
                {
                    id: 3,
                    name: 'Randi Septiawan',
                    title: 'Graphic Designer',
                    location: 'Jakarta Indonesia'
                },
                {
                    id: 4,
                    name: 'Randi Septiawati',
                    title: 'Graphic Designer',
                    location: 'Jakarta Indonesia'
                },
                {
                    id: 5,
                    name: 'Bagus Nuryasin',
                    title: 'Graphic Designer',
                    location: 'Jakarta Indonesia'
                },
                {
                    id: 6,
                    name: 'Bagus Nur Al-Fatihan',
                    title: 'Graphic Designer',
                    location: 'Jakarta Indonesia'
                },
                {
                    id: 7,
                    name: 'Bagus Nur Kursi',
                    title: 'Graphic Designer',
                    location: 'Jakarta Indonesia' 
                }
            ]
        };  
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.profile-card {
    background-color: #E7E1E9;
    border-radius: 8px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 12px;
    max-width: 230px;
    min-width: 230px;
    box-shadow: 5px 5px 2.5px 0px rgba(219,212,219,1);
    

    .card-profile-picture {
        border-radius: 100px;
        object-fit: cover;
    }

    .card-info {
        h5 {
            font-weight: bold;
        }
    }

    .btn-profile-detail {
        background-color: #980DDC;
        color: #fff; 
        float: center;
    }

    .btn-profile-video {
        background-color: #fff;
        color: #980DDC;
        border: 1px #980DDC;
        float: center;
    }
}
</style>