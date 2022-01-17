<template>
  <div>
    <div class="posts-nav">
      <input
        v-model="searchQuery"
        placeholder="Найти..."
      />
      <card-button @click.native="showModal">
        Новый пост
      </card-button>
      <blog-select
        v-model="sortParam"
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

    <div
      class="observer"
      ref="observer"
    ></div>
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
import axios from "axios";
import PostsList from "@/components/PostsList.vue";
import PostForm from "@/components/PostForm.vue";

export default {
  name: "App",
  components: {
    PostsList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      showCreatePostModal: false,
      sortParam: "",
      options: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
      searchQuery: "",
      currentPage: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.sortParam]?.localeCompare(post2[this.sortParam])
      );
    },
    searchPost() {
      return this.sortedPosts.filter((post) =>
        post.title.includes(this.searchQuery)
      );
    },
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.showCreatePostModal = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
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

    async fetchPosts() {
      try {
        const responce = await axios(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              _limit: this.limit,
              _page: this.currentPage,
            },
          }
        );
        this.posts = responce.data;
        this.totalPages = Math.ceil(
          responce.headers["x-total-count"] / this.limit
        );
      } catch (e) {
        console.warn("Error");
      }
    },

    async fetchMorePosts() {
      try {
        this.currentPage += 1;
        const responce = await axios(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              _limit: this.limit,
              _page: this.currentPage,
            },
          }
        );
        this.posts = [...this.posts, ...responce.data];
      } catch (e) {
        console.warn("Error");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.currentPage < this.totalPages) {
        this.fetchMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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

input {
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
