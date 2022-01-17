<template>
  <div class="navbar">
    <card-button>BMWBlog</card-button>
    <router-link to="/posts">Посты</router-link>
    <router-link to="/about">О блоге</router-link>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.navbar {
  width: 150px;
  height: 100vh;
  background-color: #fd6c01;
}
</style>