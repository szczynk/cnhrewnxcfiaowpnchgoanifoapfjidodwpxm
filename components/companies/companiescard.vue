<template>
    <div class="row">
        <div v-for="companiesCardDetails in companiesCardDetail" v-bind:key="companiesCardDetails.id" class="companies-card col-lg-4 col-md-12 col-sm-12 mx-auto my-2 text-right">
            <div class="row mb-4">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 mx-auto ">
                    <img class="card-profile-picture" src="../../assets/netzap-logo.png" alt="profile picture" width="80px">
                </div>

                <div class="companies-button col-lg-6 col-md-6 col-sm-6 col-6 mx-auto ">
                    <a href="#" class="btn btn-block btn-companies-detail px-4 mt-2 mr-4">Details</a>
                    <a href="#" class="btn btn-block btn-companies-video px-4 mt-2 mr-4">Video</a>
                </div>   
            </div>

            <div class="row">
                <div class="companiesCardDetail col-lg-12 text-left">
                    <h5>{{companiesCardDetails.name}}</h5>
                    <p>
                        {{companiesCardDetails.location}}
                    </p>
                    <hr>
                    <p>{{companiesCardDetails.active}} active jobs</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'companiesCard',
    data: function() {
        return {
            companiesCardDetail: [
                {
                    id: 1,
                    name: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    active: '4'                
                    
                },
                {
                    id: 2,
                    name: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    active: '4'                
                    
                },
                {
                    id: 3,
                    name: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    active: '4'                
                    
                },
                {
                    id: 4,
                    name: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    active: '4'                
                    
                },
            ]
        };  
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.companies-card {
    background-color: #E7E1E9;
    border-radius: 8px;
    padding-top: 20px;
    margin-bottom: 12px;
    max-width: 300px;
    min-width: 300px;
    

    .card-profile-picture {
        border-radius: 100px;
        float: left;
        background-color: #fff;
    }

    .card-info {
        h5 {
            font-weight: bold;
        }
    }

    .btn-companies-detail {
        background-color: #980DDC;
        color: #fff; 
        float: right;
        font-size: smaller;
    }

    .btn-companies-video {
        background-color: #fff;
        color: #980DDC;
        border: 1px #980DDC;
        float: right;
        font-size: smaller;
    }
}
</style>