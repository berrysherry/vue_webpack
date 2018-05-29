<template>
  <div id="test">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="el in groupweather.list" :key="el.id">
          <div class="weatherbox">
          <div class="info">
            <div class="city">
              <span class="cityname">{{ el.name }}</span><br>
              <span class="temp" >{{ el.main.temp.toFixed(0) }}<i class="wi wi-celsius"></i> </span><br>
              <span class="cityname" v-for="weathera in el.weather" :key="weathera.id">{{weathera.description}}</span>
            </div>
            <div class="icon" v-for="weathera in el.weather.slice(0,1)" :key="weathera.id">
              <i v-if="weathera.icon == '01d'" class="wi wi-day-sunny"></i>
              <i v-else-if="weathera.icon == '02d'" class="wi wi-day-cloudy"></i>
              <i v-else-if="weathera.icon == '03d'" class="wi wi-cloud"></i>
              <i v-else-if="weathera.icon == '04d'" class="wi wi-cloudy"></i>
              <i v-else-if="weathera.icon == '09d'" class="wi wi-showers"></i>
              <i v-else-if="weathera.icon == '10d'" class="wi wi-day-rain-mix"></i>
              <i v-else-if="weathera.icon == '11d'" class="wi wi-day-thunderstorm"></i>
              <i v-else-if="weathera.icon == '13d'" class="wi wi-day-snow"></i>
              <i v-else-if="weathera.icon == '50d'" class="wi wi-day-fog"></i>
              <i v-else-if="weathera.icon == '01n'" class="wi wi-night-clear"></i>
              <i v-else-if="weathera.icon == '02n'" class="wi wi-night-alt-cloudy"></i>
              <i v-else-if="weathera.icon == '03n'" class="wi wi-cloud"></i>
              <i v-else-if="weathera.icon == '04n'" class="wi wi-cloudy"></i>
              <i v-else-if="weathera.icon == '09n'" class="wi wi-showers"></i>
              <i v-else-if="weathera.icon == '10n'" class="wi wi-night-rain-mix"></i>   
              <i v-else-if="weathera.icon == '11n'" class="wi wi-night-thunderstorm"></i>
              <i v-else-if="weathera.icon == '13n'" class="wi wi-night-snow"></i>
              <i v-else-if="weathera.icon == '50n'" class="wi wi-night-fog"></i>
            </div>
          </div>
          <div class="row details">
            <div class="col">
              <span v-if="isReady"><i class="fa fa-tint"></i> {{el.main.humidity}}</span>
            </div>
            <div class="col">
              <span v-if="isReady"><i class="wi wi-strong-wind"></i> {{el.wind.speed.toFixed(0)}}</span>
            </div>
            <div class="col">
              <span v-if="el.visibility != null"><i class="fa fa-eye"></i> {{ getvis(el.visibility) }}km</span>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'loadgroupweatherapi',
      data () {
        return {
          groupweather: [],
          imgurl: 'http://openweathermap.org/img/w/',
          ifReady: false,
        }
      },

      methods: {
        getvis: function(value){
          var val = value/1000;
          var newval = val.toFixed(0);
          return newval;
        }
      },

      mounted(){
        var self = this;
        axios.get('https://api.openweathermap.org/data/2.5/group?id=1668399,1668341,1675151,1819729,1850147,1722263&units=metric&appid=3932d0c4669d50acb88ab567414ec6cc&lang=zh_tw')
        .then(function(res){
            
            self.groupweather = res.data;
            console.log(res.data);
            console.log(typeof(res.data));
            self.isReady = true
        })
        .catch(function(error){
            console.log(error);
        })
      }

  }

</script>