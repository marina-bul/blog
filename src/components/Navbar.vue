<template>
  <div class="navbar">
    <input
      id="menu-toggle"
      type="checkbox"
    />
    <label
      class='menu-button-container'
      for="menu-toggle"
    >
      <div class='menu-button'></div>
    </label>
    <ul class="nav-list">
      <li>
        <router-link
          to="/"
          class="nav-list__link"
        >Главная</router-link>
      </li>
      <li>
        <router-link
          to="/posts"
          class="nav-list__link"
        >Посты</router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="nav-list__link"
        >Галерея</router-link>
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
  background: linear-gradient(to bottom, #fd6c01, #eea849);
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

.nav-list__link {
  display: block;
  width: 100%;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}

#menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    position: relative;
    padding: 7px;
    width: 100%;
    height: 50px;
    background-color: #fd6c01;
    background: linear-gradient(to left, #fd6c01, #eea849);
  }

  .menu-button-container {
    display: flex;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  .nav-list {
    margin-top: 0;
    display: flex;
    justify-content: space-around;
  }

  #menu-toggle ~ .nav-list li {
    height: 0;
    margin: 0;
    padding: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .nav-list__link {
    display: none;
  }
  #menu-toggle:checked ~ .nav-list li {
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  #menu-toggle:checked ~ .nav-list .nav-list__link {
    display: block;
  }
}
</style>