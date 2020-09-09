<template>
    <div class="jobSearchbar container">
        <div class="container my-2">
            <div class="row">
                <div class="col-lg-12 mt-4">
                    <form>
                        <div class="search-bar p-1  rounded rounded-pill shadow-sm mb-4">
                            <div class="input-group">
                            <input type="search" placeholder="Cari Pekerjaan" aria-describedby="button-addon1" class="form-control border-0 bg-transparent">
                            <div class="input-group-append">
                                <button id="button-addon1" type="submit" class="btn btn-link" ><i class="fa fa-search" ></i></button>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="container my-1">
            <div class="d-flex row row-search-filter text-center">
                <div class="d-flex search-filter col-lg-2 col-md-6 col-sm-12 mx-auto my-2">
                    <select multiple id="select-bidang" placeholder="Bidang"> 
                        <option data-description="Akuntan">Accountant</option>
                        <option data-description="Graphic Designer">Graphic Designer</option>
                        <option data-description="Front-End Web Developer">Front-End Web Developer</option>
                    </select> 
                </div>
                <div class="d-flex search-filter col-lg-2 col-md-6 col-sm-12 mx-auto my-2">
                    <select multiple id="select-pendidikan" placeholder="Pendidikan"> 
                        <option >SMA</option>
                        <option >Sarjana</option>
                        <option >Magister</option>
                        <option >Doktor</option>
                    </select> 
                </div>
                <div class="d-flex search-filter col-lg-2 col-md-6 col-sm-12 mx-auto my-2">
                    <select multiple id="select-lokasi" placeholder="Lokasi"> 
                        <optgroup label="Negara">
                            <option >Indonesia</option>
                        </optgroup>
                        <optgroup label="Kota">
                            <option >Jakarta</option>
                            <option >Bandung</option>
                            <option >Surabaya</option>
                        </optgroup>
                    </select> 
                </div>
                <div class="d-flex search-filter col-lg-3 col-md-6 col-sm-12 mx-auto my-2">
                    <select multiple id="select-pengalaman" placeholder="Pengalaman"> 
                        <option >Kurang dari satu tahun</option>
                        <option >1 - 3 tahun</option>
                        <option >3 - 5 tahun</option>
                        <option >5 - 10 tahun</option>
                        <option >Lebih dari 10 tahun</option>
                    </select> 
                </div>

                <div class="d-flex search-filter col-lg-3 col-md-6 col-sm-12 mx-auto my-2">
                    <select multiple id="select-salary" placeholder="Salary"> 
                        <option >IDR 0 - 2.000.000</option>
                        <option >IDR 2.000.000 - 5.000.000</option>
                        <option >IDR 5.000.000  - 10.000.000</option>
                        <option > > IDR 10.000.000</option>
                    </select> 
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="move-container selected-filter"><span>Filters:  </span></div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'jobSearchbar',
    mounted() {
        tail.select("select", {
            search: true,
            multiLimit: 15,
            hideSelected: true,
            hideDisabled: true,
            multiShowCount: false,
            multiContainer: '.move-container'
        });
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
form {
    .search-bar {
        border: 1px solid #A33DD4;
        color:white;

        .form-control {
            color: #A33DD4;
        }

        .input-group-append {
            .btn-link {
                color: #A33DD4;
            }
        }
    }
}

.tail-select {
    .select-label {
        border-color: #A33DD4 !important;
    }
}

.tail-select-container {
    .select-handle {
        background-color: #A33DD4 !important;
    }

    .select-handle:before {
        content: "\f00d";
        font-family: FontAwesome;
        float: right;
        margin-left: 4px;
        font-size: 10px;
    }
} 
</style>