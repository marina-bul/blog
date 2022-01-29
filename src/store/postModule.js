export default {
  state: () => ({
    likes: 25,
  }),
  getters: {},
  mutations: {
    setLikes(state, likes) {
      state.likes = likes;
    },
  },
  actions: {},
};
