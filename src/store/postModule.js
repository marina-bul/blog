import axios from "axios";

export default {
  state: () => ({
    posts: [],
    sortParam: "",
    options: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По содержимому" },
    ],
    searchQuery: "",
    currentPage: 1,
    limit: 10,
    totalPages: 0,
  }),

  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.sortParam]?.localeCompare(post2[state.sortParam])
      );
    },
    searchPost(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.includes(state.searchQuery)
      );
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setSortParam(state, sortParam) {
      state.sortParam = sortParam;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },

  actions: {
    async fetchPosts({ state, commit }) {
      try {
        const responce = await axios(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              _limit: state.limit,
              _page: state.currentPage,
            },
          }
        );
        commit("setPosts", responce.data);
        commit(
          "setTotalPages",
          Math.ceil(responce.headers["x-total-count"] / this.limit)
        );
      } catch (e) {
        console.warn("Error");
      }
    },

    async fetchMorePosts({ state, commit }) {
      try {
        commit("setCurrentPage", (state.currentPage += 1));
        const responce = await axios(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              _limit: state.limit,
              _page: state.currentPage,
            },
          }
        );
        commit("setPosts", [...state.posts, ...responce.data]);
      } catch (e) {
        console.warn("Error");
      }
    },
  },
  namespaced: true,
};
