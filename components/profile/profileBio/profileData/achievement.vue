<template>
    <div class="achievement tab-pane fade" id="v-pills-achievement" role="tabpanel" aria-labelledby="v-pills-achievement-tab">
        <div class="achievement-pane">
            <h5 class="section-header">Penghargaan: <span><a href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Penghargaan</a></span></h5>
            <ul>
                <li v-for="myAchievement in achievement" v-bind:key="myAchievement.id" class="myAchievement">
                    <div class="position-relative">
                        <h4>{{myAchievement.name}} <span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h4>
                        <h5>{{myAchievement.award}}</h5>
                        <h6>{{myAchievement.date}}</h6>
                        <br>
                        <p>
                            {{myAchievement.description}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'achievement',
  data: function() {
      return {
          achievement: [
              {
                  id: 1,
                  name: 'Festival Teater Jakarta Timur',
                  award: "1st Winner of 'Naskah Terbaik'",
                  date: '2019',
                  description: 'Created a theatrical play scenario that placed 1st as the best play scenario, representating Castra Mardika Theatre Group.'
              },
              {
                  id: 1,
                  name: 'Pekan Seni Mahasiswa Daerah Provinsi DKI Jakarta 2018',
                  award: "1st Winner - Tangkai Lomba Penulisan Lakon",
                  date: '2018',
                  description: 'Won the 1st place of theatrical play writing contest held by Badan Pembina Seni Mahasiswa Indonesia.'
              }
          ]
      };  
    },

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.achievement {
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