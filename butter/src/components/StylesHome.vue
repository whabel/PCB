<template>
  <div id="styles-home" class="section">
    <div class="container">
      <h1 class="has-text-right">{{ page_title }}</h1>
      <hr>
      <div class="columns is-multiline">
        <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
        <div class="column is-one-third" v-for="(style,index) in Styles" :key="index">
          
            <div class="box is-vcentered">
              
                <div class="img-container">
                  <figure >
                    <img :src="style.style_image" width="100%" alt="">
                  </figure>
                
                  <div class="img-content has-text-centered">
                    <div class="text-container">
                    <h3>{{ style.style_name}}</h3>
                    <p>{{ style.style_info}}</p>
                    </div>
                  </div>
                </div>
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
    name: 'styles-home',
    data() {
      return {
        page_title: 'Styles',
        // Create array to hold the pages from ButterCMS API
        Styles: []
      }
    },


    methods: {
      // Get List of Customer Pages
      getStyles() {
        butter.content.retrieve(['style'])
          .then((res) => {
            this.Styles = res.data.data.style;
            console.log(this.Styles);
          })
      }
    },
    created() {
      // Fire on page creation
      this.getStyles()
    }
  }
</script>

<style>

.img-container{
  padding:20px;
  position: relative;
}

.box{
  padding: 0;
}

.img-content{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background:rgba(0,0,0,.6);
  opacity:0;
  transition: .5s all;
}

.text-container{
  position: absolute;
  top:50%;
  left:50%;
  width:90%;
  transform: translate(-50%,-50%);
}

.text-container p{
  color:#fff;
}

.text-container h3{
  color:#feb004;
  text-transform: uppercase;
  font-size:2em;
}

.img-container:hover .img-content{
  opacity:1;
}

  .box{
    border:none;
    transition:.5s all;
    box-shadow: none;
  }
  
</style>
