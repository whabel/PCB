<template>
  <div id="types-home" class="section">
    <div class="container">
      <h1 class="has-text-right">{{ page_title }}</h1>
      <hr>
      <div class="columns with-break is-multiline is-vcentered" v-for="(type,index) in Types" :key="index">
        <div class="column is-one-fifth is-offset-one-fifth" >
            <h2 class="display-1 has-text-right">{{ type.type_name}}</h2>
        </div>
        <div class="column is-two-fifths">
             <p class="type-content">{{ type.type_description}}</p>
        </div>     
      </div>
    </div>
  </div>
</template>

<script>
  // import ButterCMS from 
  import { butter } from '@/buttercms'
  export default {
    name: 'types-home',
    data() {
      return {
        page_title: 'Types',
        // Create array to hold the pages from ButterCMS API
        Types: []
      }
    },


    methods: {
      // Get List of Customer Pages
      getTypes() {
        butter.content.retrieve(['types'])
          .then((res) => {
            this.Types = res.data.data.types;
            console.log(this.Types);
          })
      }
    },
    created() {
      // Fire on page creation
      this.getTypes()
    }
  }
</script>

<style scoped>
    .display-1{
        font-size:2em;
        text-transform:uppercase;
    }

    .type-content{
        font-size:1.2em;
    }

    .with-break{
        margin-bottom:60px;
        position: relative;
    }

    .with-break:after{
        content: "";
        position: absolute;
        left:50%;
        bottom:-30px;
        width:100px;
        border-bottom:10px double #000;
    }

</style>
