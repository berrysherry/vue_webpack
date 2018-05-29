<template>
  <div id="test">
    <div class="container">
      <div class="weatherbox">
        
        <div class="info">
          <div class="city">
            <span class="cityname">{{weather.name}}</span><br>
            <span class="temp" v-if="isReady">{{ gettemp() }}<i class="wi wi-celsius"></i> </span><br>
            <span class="cityname" v-for="weathera in weather.weather" :key="weathera.id">{{weathera.description}}</span>
          </div>
          <div class="icon" v-for="weathera in weather.weather" :key="weathera.id">
            <i v-if="weathera.icon == '01d'" class="wi wi-day-sunny"></i>
            <i v-if="weathera.icon == '02d'" class="wi wi-day-cloudy"></i>
            <i v-if="weathera.icon == '03d'" class="wi wi-cloud"></i>
            <i v-if="weathera.icon == '04d'" class="wi wi-cloudy"></i>
            <i v-if="weathera.icon == '09d'" class="wi wi-showers"></i>
            <i v-if="weathera.icon == '10d'" class="wi wi-day-rain-mix"></i>
            <i v-if="weathera.icon == '11d'" class="wi wi-day-thunderstorm"></i>
            <i v-if="weathera.icon == '13d'" class="wi wi-day-snow"></i>
            <i v-if="weathera.icon == '50d'" class="wi wi-day-fog"></i>
            <i v-if="weathera.icon == '01n'" class="wi wi-night-clear"></i>
            <i v-if="weathera.icon == '02n'" class="wi wi-night-alt-cloudy"></i>
            <i v-if="weathera.icon == '03n'" class="wi wi-cloud"></i>
            <i v-if="weathera.icon == '04n'" class="wi wi-cloudy"></i>
            <i v-if="weathera.icon == '09n'" class="wi wi-showers"></i>
            <i v-if="weathera.icon == '10n'" class="wi wi-night-rain-mix"></i>
            <i v-if="weathera.icon == '11n'" class="wi wi-night-thunderstorm"></i>
            <i v-if="weathera.icon == '13n'" class="wi wi-night-snow"></i>
            <i v-if="weathera.icon == '50n'" class="wi wi-night-fog"></i>
          </div>
        </div>

        <div class="row details">
          <div class="col">
            <span v-if="isReady"><i class="fa fa-tint"></i> {{weather.main.humidity}}</span>
          </div>
          <div class="col">
            <span v-if="isReady"><i class="wi wi-strong-wind"></i> {{weather.wind.speed}}</span>
          </div>
          <div class="col">
            <span v-if="isReady"><i class="fa fa-eye"></i> {{weather.visibility/1000}}km</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'loadnowweatherapi',
      data () {
        return {
          weather: [],
          isReady: false
        }
      },

      methods: {
        gettemp: function(){
          return this.weather.main.temp;
        }
      },

      mounted(){
        var self = this;
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=24.1469&lon=120.683899&appid=3932d0c4669d50acb88ab567414ec6cc&lang=zh_tw&units=metric')
        .then(function(res){
            self.weather = res.data;
            console.log(res.data);
            self.isReady = true;
        })
        .catch(function(error){
            console.log(error);
        })

      }
  }

</script>