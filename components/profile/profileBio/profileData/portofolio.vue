<template>
    <div class="portofolio tab-pane fade" id="v-pills-porto" role="tabpanel" aria-labelledby="v-pills-porto-tab">
        <div class="porto-pane">
            <h5 class="section-header mb-4">Social Links: <span><a><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
            <ul>
                <li>
                    <div class="position-relative">
                        <h4>Github </h4>
                        <h6>https://github.com/Ilham-Fauzi02</h6>
                    </div>

                    <div class="position-relative">
                        <h4>Linkedin </h4>
                        <h6>https://www.linkedin.com/in/ilham--fauzi02/</h6>
                    </div>
                </li>
            </ul>

            <h5 class="section-header mt-4">Attachments: <span><a><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
            <ul>
                <li>
                    <div class="position-relative">
                        <img src="/assets/pdf-icon.png">
                        <h6>Resume.pdf </h6>
                    </div>
                </li>
            </ul>

            <ul>
                <li>
                    <div class="position-relative">
                        <img src="/assets/pdf-icon.png">
                        <h6>The study of blockchain technology 
                            in election system.pdf
                        </h6>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'portofolio',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.portofolio {
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
}
</style>