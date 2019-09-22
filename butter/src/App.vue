<template>

  <div id="app">
    <a href="/" class="mob-logo"><img src="../src/assets/logo.svg"></a>
    <div class="mob-menu" :class="mobMenu">
      <div class="menu-container">
        <ul>
          <li><router-link class="navbar-item" to="/beers">
            Beers
          </router-link></li>
          <li><router-link class="navbar-item" to="/styles">
            Styles
          </router-link></li>
          <li><router-link class="navbar-item" to="/location">
            Locations
          </router-link></li>
          <li><router-link class="navbar-item" to="/blog">
            Blog
          </router-link></li>
        </ul>
      </div>
    </div>
    <nav class="navbar">
      <div class="mob-toggle" @click="toggleMenu">{{menuText}}</div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="/">
            <img src="../src/assets/logo.svg" class="logo">
          </a>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/beers">
            Beers
          </router-link>
          <router-link class="navbar-item" to="/styles">
            Styles
          </router-link>
          <router-link class="navbar-item" to="/location">
            Locations
          </router-link>
          <router-link class="navbar-item" to="/blog">
            Blog
          </router-link>
          
        </div>
      </div>
    </nav>
  
    <router-view/>
  
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <div class="columns">
            <div class="column">

            </div>
          </div>
            <div class="columns">
              <div class="column is-half has-text-left">
                <h4>Recommended Social:</h4>
                <ul class="social-menu">
                  <li><a href="https://www.instagram.com/explore/tags/craftbeer/?hl=en" target="_blank">#Craftbeer</a></li>
                </ul>
                
              </div>
              <div class="column is-half has-text-right">
                <a href="https://buttercms.com" target="_blank"><img src="./assets/butter-w.png" width="100px;"></a>
                  &copy;2019 Portugal Craft Beer All Rights Reserved
              </div>
            </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>


  export default {
    name: 'app',
    data() {
      return {
        mobMenu: '',
        menuText: 'MENU'
      }
    },
    methods: {
      toggleMenu() {
        if(this.mobMenu === ''){
          this.mobMenu = 'mob-show';
          this.menuText = 'CLOSE';
        }
        else{
          this.mobMenu = '';
          this.menuText = "MENU";
        }
      }
    },

    watch: {
      $route() {
        this.mobMenu = '';
        this.menuText = 'MENU';
      }
    }
  }
</script>

<style>

body{
    background:none;
    font-family: 'Noto Sans', sans-serif;
}

h1,h2,h3,h4,h5,h6, .navbar-item{
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 1px;
  display:block;
}

.modal-content{
  background:#fff;
  padding:40px;
  border:10px double #893e0b;
}

h1{
  font-size:3em;
  color:#640d00;
  text-transform: uppercase;
}

h2{
  font-size:5.5em;
  color:#CC9933;
  line-height: 1;
  font-weight: 800;
}

.navbar{
  margin-top:30px;
  padding-right: 50px;
  border-top:2px solid #893e0b;
  border-bottom:2px solid #893e0b;
}

.home-content p{
  font-size:1.5em;
}

.navbar-item{
  color:#893e0b;
  text-transform:uppercase;
  font-size:1.2em;
  position: relative;
}

a.navbar-item.is-active, a.navbar-item:hover, a.navbar-link.is-active, a.navbar-link:hover{
  color:#000;
  background:none;
}

a{
  color:#893e0b;
  text-decoration: none;
  font-weight: 800;
}

.navbar-item:after{
  content: "";
  border:1px solid transparent;
  width:0;
  position:absolute;
  right:10%;
  bottom:10px;
  transition:.5s all;
}

hr{
  border-bottom:none;
  border-top:10px double #640d00;
  background:none;
  margin-bottom:50px;
  margin-top:0;
}

.navbar-item:before{
  content: "";
  border:1px solid transparent;
  width:0;
  position:absolute;
  right:10%;
  bottom:5px;
  transition:1s all
}

.navbar-item:hover:after, .navbar-item:hover:before{
  width:80%;
  border:1px solid #893e0b;
}

.logo{
  position: absolute;
  width:200px;
  height:auto;
  left:20px;
  top:-100px;
  z-index: 3;
}

  footer.footer {
    background-color:#151212;
    color:#fff;
    margin-top: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
  }

  .button-1{
    padding:10px 20px;
    border:3px #893e0b solid;
    color:#fff;
    background:#893e0b;
    box-sizing: border-box;
    display: inline-block;
    font-family: 'Fjalla One', sans-serif;
    margin:20px 0;
    position: relative;
    transition: .5s all;
    overflow: hidden;
  }

  .button-2{
    padding:10px 20px;
    border:3px #893e0b solid;
    color:#893e0b;
    background:#fff;
    box-sizing: border-box;
    display: inline-block;
    font-family: 'Fjalla One', sans-serif;
    margin:20px 0;
    position: relative;
    transition: .5s all;
    overflow: hidden;
  }



  

  .button-1:hover{
    background:#fff;
    color:#893e0b;
  }

  .button-1:before{
    content: "";
    border:1px solid transparent;
    width:100%;
    position:absolute;
    right:10%;
    bottom:-50px;
    transition:1s all;
    transform:rotate(-45deg) translateX(50px);
  }
  .button-1:after{
    content: "";
    border:1px solid transparent;
    width:100%;
    position:absolute;
    right:10%;
    bottom:-55px;
    transition:1s all;
    transform:rotate(-45deg) translateX(50px);
  }

  .button-1:hover:before, .button-1:hover:after{
    border:1px solid #893e0b;
    width:100%
  }

  .button-2:hover{
    background:#893e0b;
    color:#fff;
  }

  .mob-menu, .mob-logo, .mob-toggle{
    display: none;
  }

  .menu-container{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }

  .menu-container a{
    font-size:1.5em;
  }
  

  @media (max-width:1023px){
    .mob-menu{
      display: block;
      position: fixed;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background:#CC9933;
      transition: .5s all;
      z-index: -1;
      opacity: 0;
    }
    .mob-show{
      z-index: 100;
      opacity: 1;
    }
    .mob-logo{
      display: block;
      position:absolute;
      top:-60px;
      z-index: 101;
      left:20px;
      width:190px;
    }
    .mob-toggle{
      position:absolute;
      display: block;
      top:12px;
      font-weight: 800;
      right:20px;
      z-index: 101;
      cursor: pointer;
    }
  }


</style>
