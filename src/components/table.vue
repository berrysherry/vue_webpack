<template>
  

  <div id="test">
    <b-table stacked="sm" :fields="fields" :items="items">
    <!-- A virtual column -->
    <template slot="No." slot-scope="data">
      {{data.index + 1}}
    </template>
    <!-- A custom formatted column -->
<!--     <template slot="name" slot-scope="data">
      {{data.value.first}} {{data.value.last}}
    </template>
 -->    <!-- A virtual composite column -->
<!--     <template slot="nameage" slot-scope="data">
      {{data.item.name.first}} is {{data.item.age}} years old
    </template> -->
  </b-table>

<!--     <h3>在台中的咖啡廳</h3>
     <input type="text" v-model="search" placeholder="找">
    <div id="list-countries" v-if="filteredList && filteredList.length">
      <div class="card-group">
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
    </div> -->

  </div>
</template>

<script>
  const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
  import axios from 'axios'
  export default {
    name: 'table',
      data () {
        return {
          search: "",
          cafes: [],
          fields: [
        // A virtual column that doesn't exist in items
        'No.',

        // A column that needs custom formatting
        // { key: 'name', label: 'Full Name' },

        // A regular column
        'name',
        // A regular column
        'address',
      ],
      items: []
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
          self.items = res.data;
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