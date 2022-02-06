// import axios from "axios";

export default {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "Мрачная Гавань",
        body: "Для нас стала №1 среди настольных игр. Очень продуманная, сбалансированная. Много интересных уникальных персонажей. Игра построена таким образом, что у каждого персонажа есть какая-то цель, выполнив которую он может покинуть отряд, а игрок, игравший за него, берет себе нового персонажа.",
        img: "gloomhaven.jpg",
        tags: ["кооперативная", "стратегия"],
        date: "01.01.2022",
      },

      {
        id: 2,
        title: "Мрачная Гавань. Челюсти льва",
        body: "Можно сказать, что это мини-версия обычной Мрачной Гавани. Здесь меньше персонажей и раза в 4 меньше сценариев, чем в базовой Мрачной Гавани. Но зато здесь прекрасные правила и удобный органайзер для игровых компонентов.",
        img: "gloom_lion.webp",
        tags: ["кооперативная", "стратегия"],
        date: "10.01.2022",
      },

      {
        id: 3,
        title: "Покорение Марса",
        body: "Для меня одна из лучших евро игр. В ней игрокам предстоит играя за одну из корпораций сделать Марс пригодным для жизни. Для этого они на поле Марса будут строить города, высаживать деревья, а чтобы получить на все это ресурсы, игроки будут разыгрывать карты, представляющие собой технологии, события или постройки. Как и во всех евростратегиях, в конце будет подсчет очков для определения наиболее успешного колонизатора Марса.",
        img: "Terraforming-Mars.jpg",
        tags: ["евро", "стратегия", "на двоих", "построение колоды"],
        date: "01.02.2022",
      },
    ],
    sortParam: "",
    options: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По содержимому" },
    ],
    searchQuery: "",
    currentPage: 1,
    limit: 3,
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
        post.title.toLowerCase().includes(state.searchQuery)
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
    // async fetchPosts({ state, commit }) {
    //   try {
    //     const responce = await axios(
    //       "https://jsonplaceholder.typicode.com/posts?",
    //       {
    //         params: {
    //           _limit: state.limit,
    //           _page: state.currentPage,
    //         },
    //       }
    //     );
    //     commit("setPosts", responce.data);
    //     commit(
    //       "setTotalPages",
    //       Math.ceil(responce.headers["x-total-count"] / this.limit)
    //     );
    //   } catch (e) {
    //     console.warn("Error");
    //   }
    // },
    // async fetchMorePosts({ state, commit }) {
    //   try {
    //     commit("setCurrentPage", (state.currentPage += 1));
    //     const responce = await axios(
    //       "https://jsonplaceholder.typicode.com/posts?",
    //       {
    //         params: {
    //           _limit: state.limit,
    //           _page: state.currentPage,
    //         },
    //       }
    //     );
    //     commit("setPosts", [...state.posts, ...responce.data]);
    //   } catch (e) {
    //     console.warn("Error");
    //   }
    // },
  },
  namespaced: true,
};
