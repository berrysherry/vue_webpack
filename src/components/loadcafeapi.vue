<template>
  <div id="test">
    <h3>在忠孝新生的咖啡廳</h3>
    <div class="card-group">
      <div v-if="cafe.mrt =='忠孝新生'" class="" v-for="cafe in cafes" :key="cafe.id" style="background-color: #EEE; width: 20%; margin: 10px">
        <h4>{{ cafe.name }}</h4>
        <p>地址: {{ cafe.address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
  import axios from 'axios'
  export default {
    name: 'loadcafeapi',
      data () {
        return {
          cafes: []
        }
      },
      // mounted(){
      //   var self = this;
      //   axios.get('/cafes/taichung')
      //   .then(function(res){
      //     console.log(res.data);
      //     // self.users = res.data;
      //       // console.log('Data: ', res.data);
      //     })
      //   // .catch(function(error){
      //   //     console.log('Error: ', error);
      //   // })
        
      // }

      mounted () {
        var self = this;
        axios.get(API_PROXY + 'https://cafenomad.tw/api/v1.2/cafes/taipei')
        .then(function(res){
          self.cafes = res.data;
            console.log(res.data);
            console.log(typeof(res.data));
          })
        .catch(function(error){
            console.log('Error: ', error);
        })
      }




      // created(){
      //   axios.get('/cafes/taichung').then((response) => {
      //     console.log(response.data)
      //   })
      // },

  }

</script>