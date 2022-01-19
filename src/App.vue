<template>
  <div class="container">
    <navbar />
    <div id="app">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: space-between;
}

#app {
  margin-left: 150px;
  width: calc(100% - 150px);
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  padding: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>