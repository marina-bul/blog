<template>
  <div>
    <div class="posts-nav">
      <input
        class="searchInput"
        :value="searchQuery"
        @input="setSearchQuery($event.target.value)"
        placeholder="Найти..."
      />
      <card-button @click.native="showModal">
        Новый пост
      </card-button>
      <blog-select
        :value="sortParam"
        @input="setSortParam"
        :options="options"
      />
    </div>
    <modal-window
      :show="showCreatePostModal"
      @updateShow="closeModal"
    >
      <h2>Создание поста</h2>
      <post-form @create="createPost" />
    </modal-window>
    <posts-list
      :posts="searchPost"
      @remove="removePost"
    />

    <!-- for cursor pagination insert: 'v-intersection="fetchMorePosts"'-->
    <div class="observer"></div>
    <!-- pagination -->
    <!-- <ul class="pages-wrapper">
      <li
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        class="page-item"
        :class="{'current-page': page == currentPage}"
      >{{page}}</li>
    </ul> -->
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import PostForm from "@/components/PostForm.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PostsList,
    PostForm,
  },
  data() {
    return {
      showCreatePostModal: false,
    };
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      sortParam: (state) => state.post.sortParam,
      options: (state) => state.post.options,
      searchQuery: (state) => state.post.searchQuery,
      currentPage: (state) => state.post.currentPage,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      searchPost: "post/searchPost",
    }),
  },
  methods: {
    ...mapMutations({
      setPosts: "post/setPosts",
      setCurrentPage: "post/setCurrentPage",
      setSearchQuery: "post/setSearchQuery",
      setSortParam: "post/setSortParam",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      // fetchMorePosts: "post/fetchMorePosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.showCreatePostModal = false;
    },
    removePost(post) {
      const filteredPosts = this.posts.filter((item) => item.id !== post.id);
      this.setPosts(filteredPosts);
    },
    showModal() {
      this.showCreatePostModal = true;
    },
    closeModal(isShow) {
      this.showCreatePostModal = isShow;
    },
    // changePage(pageNum) {
    //   this.currentPage = pageNum;
    // },
  },
  mounted() {
    this.fetchPosts();
  },

  // for pagination
  // watch: {
  //   currentPage() {
  //     this.fetchPosts();
  //   },
  // },
};
</script>

<style scoped>
.posts-nav {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}

.searchInput {
  padding: 0 5px;
  border: 2px solid #fd6c01;
  outline: none;
}

.pages-wrapper {
  margin: 15px auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  background-color: #fd6c01;
  list-style-type: none;
}
.page-item {
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
}
.current-page {
  background-color: #fff;
  color: #fd6c01;
}
.observer {
  height: 5px;
  background-color: #fd6c01;
}
</style>
