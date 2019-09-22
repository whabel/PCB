<template>
  <div id="location-home" class="section">
    <div :class="modalClass" class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <h3 class="has-text-right">{{selectedName}}</h3>
    <h5 class="has-text-right">{{selectedCity}}</h5>
    <hr>
      <img :src="selectedImage"><br>
        <h4><em>{{selectedBrewer}}</em></h4>
        <p v-html="selectedInfo"></p>
        <div class="map" v-html="selectedType"></div>
  </div>
  <button @click="modalClass = ''" class="modal-close is-large" aria-label="close"></button>
</div>
    <div class="container">
      <h1 class="has-text-right">{{ page_title }}</h1>
      <hr>
      <div class="columns is-multiline">
        <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
        <div class="column is-half" v-for="(location,index) in location" :key="index">
          
            <div class="box">
              <article class="media">
                <div class="media-left">
                    <!-- Bind results using a ':' -->
                    
                </div>
                <div class="media-content">
                    <h3>{{ location.location_name }}</h3>
                    <h5><strong>{{location.location_city}}</strong></h5>
                    <a @click="[modalClass = 'is-active', selectedName = location.location_name, selectedImage = location.location_image, selectedInfo = location.location_info, selectedStyle = location.location_city, selectedType = location.location_map, selectedCity = location.location_city]" class=" modal-button button-1" data-target="modal" aria-haspopup="true">More Info</a>
                    <a :href="location.location_url" class="button-2" target="_blank" data-target="modal" aria-haspopup="true">Visit Website</a>
                    
                </div>
              </article>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import ButterCMS from 
  import { butter } from '@/buttercms'
  export default {
    name: 'location-home',
    data() {
      return {
        modalClass: '',
        page_title: 'Locations',
        selectedName: '',
        selectedType: '',
        selectedStyle: '',
        selectedInfo: '',
        selectedBrewer: '',
        selectedImage: '',
        selectedCity: '',
        // Create array to hold the pages from ButterCMS API
        location: []
      }
    },


    methods: {
      // Get List of Customer Pages
      getlocation() {
        butter.content.retrieve(['location'])
          .then((res) => {
            this.location = res.data.data.location;
            console.log(this.location);
          })
      },
      selectlocation() {
        this.selectedName = location.location_name;
        console.log('hello');
      }
    },
    created() {
      // Fire on page creation
      this.getlocation()
    }
  }
</script>

<style scoped>
  h3{
    font-size:2.3em;
    color:#feb004;
  }  

  .modal hr{
    margin:20px 0!important
  }

  .map{
    margin-top:30px;
  }

  .box{
    margin-bottom:30px;
  }

  h4{
    font-size: 1.2em;
    font-style: italic;
    margin-bottom:20px;
    margin-top:-10px;
  }
</style>
