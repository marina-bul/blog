<template>
  <div
    id="app"
    class="container"
  >
    <navbar />
    <div class="app">
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

.app {
  margin-left: 150px;
  width: calc(100% - 150px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .container {
    display: block;
  }

  .app {
    margin-left: 0;
    width: 100%;
  }
}
</style>