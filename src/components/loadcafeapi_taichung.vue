<template>
  <div id="test">
    <h3>在台中的咖啡廳</h3>
     <input type="text" v-model="search" placeholder="找">
    <div id="list-countries" v-if="filteredList && filteredList.length">
      <div class="card-group">
          <!-- v-if="cafe.tasty =='5'" 添加if條件; filteredList.slice(1,5) 自定範圍-->    
        <div class="row">
          <div v-for="(cafe,index) in filteredList" :key="cafe.id" style="border: 1px dotted #CCC; padding: 10px;" class="col-lg-3">
            <h4>{{index + 1 | priceFormat}} {{ cafe.name }} {{ cafe.tasty | tastyScore }}</h4>
            <p>地址: {{ cafe.address }}</p>
            <p v-if="cafe.url !== ''">網址: <a :href="cafe.url" target="_blank">連結</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center" v-else>
      No results!
    </div>

  </div>
</template>

<script>
  const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
  import axios from 'axios'
  export default {
    name: 'loadcafeapi_taichung',
      data () {
        return {
          search: "",
          cafes: []
        }
      },

      filters: {
        priceFormat (value){
          return '第' + value + '間'
        },
        tastyScore (value){
          return value + '/5'
        } 
      },

      mounted () {
        var self = this;
        axios.get(API_PROXY + 'https://cafenomad.tw/api/v1.0/cafes/taichung')
        .then(function(res){
          self.cafes = res.data;
            // console.log(res.data);
            // console.log(typeof(res.data));
          })
        .catch(function(error){
            console.log('Error: ', error);
        })
      },

      computed: {
        filteredList() {
          return this.cafes.filter((el)=> {
            return el.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
            //              ^在此加入                         ^在此加入
            //               .toLowerCase()                   .toLowerCase()
            //               可把cafe.name一律改為小寫    　　可把關鍵字一律改為小寫
            //               如此就算輸入小寫也能找到大寫的cafe.name :D
          });
        }
      },

      // created(){
      //   axios.get('/cafes/taichung').then((response) => {
      //     console.log(response.data)
      //   })
      // }
  }

</script>