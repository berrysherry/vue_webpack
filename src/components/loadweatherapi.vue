<template>
  <div id="test">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 p-3" v-for="list in forecast.list.slice(0,8)" :key="list.id">
          <p>日期/時間: {{ list.dt_txt }}<br>
            預測溫度: {{ list.main.temp_min }}°C ~ {{ list.main.temp_max }}°C<br>
            <!-- 描述: {{list.weather}} 這個寫法是錯的-->
            <span v-for="weathera in list.weather" :key="weathera.id">
              描述: {{weathera.description}}
               <img :src="imgurl + weathera.icon + '.png'">
            </span>
          </p>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'loadweatherapi',
      data () {
        return {
          forecast: [],
          imgurl: 'http://openweathermap.org/img/w/'
        }
      },

      filters: {
        morning (value){
          
        }
      },

      mounted(){
        var self = this;
        axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=24.1469&lon=120.683899&appid=9eb2ba239533e69f416f735f0aa8a364&lang=zh_tw&units=metric')
        .then(function(res){
            
            self.forecast = res.data;
            console.log(res.data);
            console.log(typeof(res.data));
        })
        .catch(function(error){
            console.log(error);
        })
      }

  }

</script>


<!-- <template>
  <div id="test">

    <p>Temp: {{weather.main.temp}}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'loadweatherapi',
      data () {
        return {
          weather: [
            ]
        }
      },

      mounted(){
        var self = this;
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Normal&units=imperial&city=1668284&APPID=9eb2ba239533e69f416f735f0aa8a364')
        .then(function(res){
            self.weather = res.data;
            console.log((res.data));
            console.log(typeof(res.data));
        })
        .catch(function(error){
            console.log(error);
        })
      }

  }

</script> -->