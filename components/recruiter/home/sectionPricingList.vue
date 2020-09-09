<template>
    <section class="sectionPricingList" id="pricingList">
        <div class="heading-pricing container text-left">
            <h1><a id="pricing">HOW MUCH IT COSTS</a></h1>
            
        </div>
        <div class="container">
            <div class="section-pricing row justify-content-center">
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <h3 class="heading-price-basic">Layanan kami dirancang <br>
                        untuk mengoptimasi proses <br>
                        perekrutan kandidat anda.</h3>
                    <div class="card-pricing text-center d-flex flex-column align-items-stretch" style="background-color: #F8615A">
                        <h3 class="text-center">Free Account</h3>
                        <ul class="list-unstyled">
                            <li>
                                <h5>Posting Lowongan</h5>
                                <h6>1 Kali</h6>
                                <br>
                            </li>
                            <li>
                                <h5>Kandidat Masuk</h5>
                                <h6>10 Kandidat</h6>
                                <br>
                            </li>
                            <li>
                                <h5>Undang Kandidat</h5>
                                <h6>5 Kandidat</h6>
                                <br>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-lg btn-block btn-hiring-free px-10 py-10 mt-4">Start Hiring For Free</a>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="card-pricing text-center d-flex flex-column" style="background-color: #A33DD4">
                        <h3 class="text-center">Basic Account</h3>
                        <ul class="list-unstyled">
                            <li>
                                <h5>Periode Paket</h5>
                                <h6>3 Bulan</h6>
                                <br>
                            </li>
                            <li>
                                <h5>Posting Lowongan</h5>
                                <h6>10 Kali</h6>
                                <br>
                            </li>
                            <li>
                                <h5>Kandidat Masuk</h5>
                                <h6>Tidak Terbatas</h6>
                                <br>
                            </li>
                            <li>
                                <h5>Undang Kandidat</h5>
                                <h6>20 Kandidat</h6>
                                <br>
                            </li>
                        </ul>
                        <h4 class="text-center">1,299,000</h4>
                        <h5 class="text-center">IDR per Month</h5>
                    </div>
                    <a href="#" class="btn btn-lg btn-block btn-hiring-basic px-10 py-10 mt-4">Contact Sales</a>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="card-pricing text-center d-flex flex-column" style="background-color: #8600ed">
                        <h3 class="text-center">Premium Account</h3>
                        <ul class="list-unstyled">
                            <li>
                                <h5>Periode Paket</h5>
                                <h6>6 Bulan</h6>
                                <br>
                            </li>
                            <li>
                                <h5>Posting Lowongan</h5>
                                <h6>50 Kali</h6>
                                <br>
                            </li>
                            <li>
                                <h5>Kandidat Masuk</h5>
                                <h6>Tidak Terbatas</h6>
                                <br>
                            </li>
                            <li>
                                <h5>Undang Kandidat</h5>
                                <h6>100 Kandidat</h6>
                                <br>
                            </li>
                        </ul>
                        <h4 class="text-center">2,499,000</h4>
                        <h5 class="text-center">IDR per Month</h5>
                    </div>
                    <a href="#" class="btn btn-lg btn-block btn-hiring-premium px-10 py-10 mt-4">Contact Sales</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'sectionPricingList'

}
</script>

<style lang='scss' scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
    .sectionPricingList {
        margin-top: 30px;
        margin-bottom: 100px;
        font-family: 'Roboto', sans-serif;

        .heading-pricing {
            margin-bottom: 30px;
            
        }

        .heading-price-basic {
            margin-bottom: 30px;
            margin-right: 100px;
            font-size: larger;
        }

        .btn-hiring-free {
            border-color: #F8615A;
            margin-bottom: 50px;

            .a {
                font-size: 30px;
            }

            &:hover {
                color: #fff;
                background-color: #F8615A;
            }

        }

        .btn-hiring-basic {
            background-color: #A33DD4;
            color: #fff;

            &:hover {
                color: #fff;
                background-color: #A94DD5;
            }
        }

        .btn-hiring-premium {
            background-color: #8600ed;
            color: #fff;

            &:hover {
                color: #fff;
                background-color: #A94DD5;
            }
        }

        .card-pricing {
        padding: 60px 60px 80px 60px;

        h3, h4, h5 {
            color: #fff;
            font-weight: bold;
        }

        h3 {
            margin-bottom: 30px;
            font-size: xx-large;
        }
        

        ul {
            color: #fff;
            font-size: 24px;
        }

        h4 {
            margin-top: 20px;
                font-size: 50px;
        }
        }
    }
</style>