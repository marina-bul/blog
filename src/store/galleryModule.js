import { createApi } from "unsplash-js";

const unsplash = new createApi({
  accessKey: "8ow3X7OoHIZJIJMT9RYnIxxraCvf-pQ5-l8zj3Gxsmc",
  // apiUrl: 'https://mywebsite.com/unsplash-proxy',
});

export default {
  state: () => ({
    images: [],
  }),

  getters: {},

  mutations: {
    setImages(state, images) {
      state.images = images;
    },
  },

  actions: {
    fetchImages({ commit }) {
      unsplash.search
        .getPhotos({
          query: "board games",
          page: 1,
          perPage: 9,
        })
        .then((result) => {
          if (result.errors) {
            // handle error here
            console.log("error occurred: ", result.errors[0]);
          } else {
            // handle success here
            const photos = result.response.results;
            commit("setImages", photos);
          }
        });
    },
  },
  namespaced: true,
};
