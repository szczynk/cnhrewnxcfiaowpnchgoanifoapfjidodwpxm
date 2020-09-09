<template>
    <div class="sectionSearchBar">
        <div class="container-fluid my-4">
            <div class="row align-items-center my-4">
                <div class="col-lg-12 mt-4 text-center">
                    <h1>
                        Siap Untuk Punya Profesi Keren?
                    </h1>
                    <hr>
                    <p> 
                        Bergabunglah bersama kami dan ribuan pencari kerja lainnya. <br>
                        Promosikan diri kalian ke ratusan perusahaan rekan kami.
                    </p>
                </div>
            </div>
            <div class="d-flex flex-row align-items-center my-4">
                <div class="col-lg-12 mt-4">
                    <form>
                        <div class="search-bar p-1  rounded rounded-pill shadow-sm mb-4">
                            <div class="input-group">
                              <input type="search" placeholder="Cari lowongan pekerjaan" aria-describedby="button-addon1" class="form-control border-0 bg-transparent">
                              <div class="input-group-append">
                                <button id="button-addon1" type="submit" class="btn btn-link" ><i class="fa fa-search" ></i></button>
                              </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .sectionSearchBar {
        margin-bottom: 30px;

        h1 {
            font-size: 2rem;
            color: #A33DD4;
            font-weight: bold;
        }

        p {
            font-size: 1.2rem;
        }

        form {
            .search-bar {
                border: 1px solid #A33DD4;
                color:white;
                
        
                .form-control {
                    color: #A33DD4;
                    font-size: 1rem;
                }
        
                .input-group-append {
                    
                    .btn-link {
                        color: #A33DD4;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
</style>