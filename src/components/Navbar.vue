<template>
  <div class="navbar">
    <card-button @click.native="$router.push('/')">BMWBlog</card-button>
    <ul class="nav-list">
      <li>
        <router-link
          to="/posts"
          class="nav-link"
        >Посты</router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="nav-link"
        >О блоге</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 150px;
  height: 100vh;
  background-color: #fd6c01;
}

.nav-list {
  margin-top: 15px;
  list-style-type: none;
}

li {
  margin-bottom: 10px;
  padding: 5px;
}

li:hover {
  background-color: #ce5703;
  box-shadow: 0 0px 0px lightgray;
}

.nav-link {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}
</style>