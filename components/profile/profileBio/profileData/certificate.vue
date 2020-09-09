<template>
    <div class="certificate tab-pane fade" id="v-pills-certificate" role="tabpanel" aria-labelledby="v-pills-certificate-tab">
        <div class="certificate-pane">
            <h5 class="section-header">Sertifikasi: <span><a href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Sertifikasi</a></span></h5>
            <ul>
                <li v-for="myCertificate in certificate" v-bind:key="myCertificate.id" class="myCertificate">
                    <div class="position-relative">
                        <h4>{{myCertificate.name}} <span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h4>
                        <h5>Published by: {{myCertificate.publisher}}</h5>
                        <h6 v-if="myCertificate.ExpiryDate !== null">Issued on {{myCertificate.IssueDate}} - Expired on {{myCertificate.ExpiryDate}}</h6>
                        <h6 v-else>Issued on {{myCertificate.IssueDate}} - No Expiry Date</h6>
                        <p>
                            <a href="#">Credential ID: {{myCertificate.credentialID}}</a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'certificate',
  data: function() {
    return {
        certificate: [
            {
                id: 1,
                name: 'Convolutional Neural Networks',
                publisher: 'Coursera',
                IssueDate: 'Dec 2019',
                ExpiryDate: null,
                credentialID: '93T9DAMWGZMT'
            },
            {
                id: 1,
                name: 'Machine Learning Basic',
                publisher: 'Dicoding',
                IssueDate: 'June 2020',
                ExpiryDate: 'June 2023',
                credentialID: 'KERZR822QPYV'
            }
        ]
    };  
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.certificate {

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
</style>