<template>
  <div id="app">
    <NavbarTop class="bb-5" />
    <RouterView />
    <FooterBottom />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import FooterBottom from './components/FooterBottom.vue';
import NavbarTop from './components/NavbarTop.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    NavbarTop,
    FooterBottom
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.red-maroon {
  background-color: #991311;
}

.header {
  background-color: #991311 !important;
}

.title-1 {
  color: white;
  font-size: 60px;
  font-weight: 400;
  text-shadow: 4px 3px 9px rgba(0, 0, 0, 0.7);
  line-height: 30px;
}

.title-no-shadow {
  color: white;
  font-size: 60px;
  font-weight: 400;
}

.title-2 {
  color: white;
  font-size: 23px;
}

.tombol {
  text-decoration: none;
  background-color: #FFFFFF;
  height: 50px;
  width: 62%;
  border-radius: 20px;
  font-weight: 700;
  line-height: 41px;
  text-align: center;
  color: #991311;
  border: 2px solid grey;
}

.tombol:hover {
  color: #991311 !important;
}

.cards {
  width: 90%;
  border-radius: 20px;
  box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.1);
}

.cardTop {
  width: 100%;
  background-color: #f5f5f5;
  height: 125px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.cardBottom {
  width: 100%;
  background-color: #f5f5f5;
  height: 150px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.space {
  margin-top: 5%;
  margin-bottom: 5%;
}

.pict {
  width: 90%;
  margin-top: -30%;
}

.reverse {
  display: flex;
  flex-direction: none;
}

.spaceContent {
  padding: 5%;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.box-carousel {
  width: 70%;
}

.edit-tombol:hover {
  box-shadow: #991311;
}

html {
  scroll-behavior: smooth;
}

@media (max-width: 700px) {

  .title-1 {
    font-size: 45px;
    text-align: center;
  }

  .title-2 {
    font-size: 17px;
    text-align: center;
  }

  .reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  .tombol {
    margin: 0 auto;
  }

  .pict {
    width: 65%;
    margin-top: -15%;
  }

  .space {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .shadow-block {
    border: 10px solid;
    border-image: linear-gradient(90deg, purple, orange)
  }

  /* STYLING */
  .container-tab {  
      max-width: 620px; 
      min-width: 420px;
      margin: 40px auto;
      font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
      color: #888;
  }

  /* Style the tabs */
  .tabs {
      overflow: hidden;
      margin-left: 20px;
      margin-bottom: -2px;
  }

  .tabs ul {
      list-style-type: none;
      margin-left: 20px;
  }

  .tabs a{
      float: left;
      cursor: pointer;
      padding: 12px 24px;
      transition: background-color 0.2s;
      border: 1px solid #ccc;
      border-right: none;
      background-color: #f1f1f1;
      border-radius: 10px 10px 0 0;
      font-weight: bold;
  }
  .tabs a:last-child { 
      border-right: 1px solid #ccc;
  }

  /* Change background color of tabs on hover */
  .tabs a:hover {
      background-color: #aaa;
      color: #fff;
  }

  /* Styling for active tab */
  .tabs a.active {
      background-color: #fff;
      color: #484848;
      border-bottom: 2px solid #fff;
      cursor: default;
  }

  /* Style the tab content */
  .tabcontent {
      padding: 30px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 3px 3px 6px #e1e1e1
  }
}
</style>