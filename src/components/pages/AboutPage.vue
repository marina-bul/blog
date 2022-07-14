<template>
  <div>
    <h2>Галерея фотографий с игр</h2>
    <ul class="gallery">
      <li
        v-for="image in images"
        :key="image.id"
      >
        <img
          :src="image.urls.raw"
          alt="фото с игры"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      images: (state) => state.images.images,
    }),
  },
  methods: {
    ...mapMutations({
      setImages: "images/setImages",
    }),
    ...mapActions({
      fetchImages: "images/fetchImages",
    }),
  },
  mounted() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.gallery {
  margin-top: 20px;
  max-width: 1600px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
  list-style-type: none;
}

li:nth-child(2),
li:nth-child(6) {
  grid-row: span 2;
}

li:nth-child(3) {
  grid-column: span 2;
}

li:nth-child(7) {
  grid-row: span 2;
  grid-column: span 2;
}

.gallery li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 560px) {
  li:nth-child(2),
  li:nth-child(6) {
    grid-row: span 1;
  }

  li:nth-child(3) {
    grid-column: span 1;
  }

  li:nth-child(7) {
    grid-row: span 1;
    grid-column: span 1;
  }
}
</style>