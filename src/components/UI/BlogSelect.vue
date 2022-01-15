<template>
  <select
    v-model="value"
    @change="changeOption"
  >
    <option
      disabled
      value=""
    >Выберите из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >{{option.name}}</option>
  </select>
</template>

<script>
export default {
  name: "blog-select",
  props: {
    value: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
select {
  border: 2px solid #fd6c01;
  outline: none;
}
</style>