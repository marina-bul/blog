<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "card-button",
};
</script>

<style scoped>
button {
  font-size: 23px;
  color: white;
  background-color: #fd6c01;
  padding: 7px 12px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 3px 7px lightgray;
}

button:hover {
  background-color: #ce5703;
  box-shadow: 0 0px 0px lightgray;
}
</style>