<template>
  <div
    class="modal"
    v-if="show"
    @click="closeModal"
  >
    <div
      class="modal-content"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-window",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("updateShow", false);
    },
  },
};
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.modal-content {
  margin: auto;
  height: 300px;
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border: 3px solid #fd6c01;
  border-radius: 10px;
}
</style>
