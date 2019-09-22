<template>
  <div id="beers-home" class="section">
    <div :class="modalClass" class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <h3 class="has-text-right">{{selectedName}}</h3>
    <h5 class="has-text-right">{{selectedStyle + '-' + selectedType}}</h5>
    <hr>
    <div class="columns is-vcentered">
      <div class="column is-three-fifths">
        <h4><em>{{selectedBrewer}}</em></h4>
        <p v-html="selectedInfo"></p>
      </div>
      <div class="column is-two-fifths">
        <img :src="selectedImage">
      </div>
    </div>
  </div>
  <button @click="modalClass = ''" class="modal-close is-large" aria-label="close"></button>
</div>
    <div class="container">
      <h1 class="has-text-right">{{ page_title }}</h1>
      <hr>
      <div class="columns is-multiline">
        <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
        <div class="column is-half" v-for="(beer,index) in Beers" :key="index">
          
            <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128">
                    <!-- Bind results using a ':' -->
                    <img :src="beer.beer_logo" :alt="beer.beer_name">
                  </figure>
                </div>
                <div class="media-content">
                    <h3>{{ beer.beer_name }}</h3>
                    <h4>{{beer.beer_brewer}}</h4>
                    <h5><strong>{{beer.beer_type.type_name}}</strong><br>{{beer.beer_style.style_name}}</h5>
                    <a @click="[modalClass = 'is-active', selectedName = beer.beer_name, selectedImage = beer.beer_logo, selectedInfo = beer.beer_info, selectedStyle = beer.beer_style.style_name, selectedType = beer.beer_type.type_name], selectedBrewer = beer.beer_brewer" class=" modal-button button-1" data-target="modal" aria-haspopup="true">More Info</a>
                    
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
    name: 'beers-home',
    data() {
      return {
        modalClass: '',
        page_title: 'Beers',
        selectedName: '',
        selectedType: '',
        selectedStyle: '',
        selectedInfo: '',
        selectedBrewer: '',
        selectedImage: '',
        // Create array to hold the pages from ButterCMS API
        Beers: []
      }
    },


    methods: {
      // Get List of Customer Pages
      getBeers() {
        butter.content.retrieve(['beers'])
          .then((res) => {
            this.Beers = res.data.data.beers;
            console.log(this.Beers);
          })
      },
      selectBeer() {
        this.selectedName = beer.beer_name;
        console.log('hello');
      }
    },
    created() {
      // Fire on page creation
      this.getBeers()
    }
  }
</script>

<style scoped>
  h3{
    font-size:2em;
    color:#feb004;
  }  

  .modal hr{
    margin:20px 0!important
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
