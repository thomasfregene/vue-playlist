<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input v-model="search" type="text" placeholder="search blog">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase}}</h2></router-link> 
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {
  data() {
    return {
      blogs: [],
      search: ''
    };
  },
  methods: {},
  created() {
    this.$http.get("https://vue-playlist-992d9-default-rtdb.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      }).then(function(data){
        console.log(data);
        var blogsArray = [];
        for(let key in data){
          data[key].id = key
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray
      });
  },
  computed:{
  },
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  directives:{
    'rainbow':{
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2, 8)
      }
    }
  },
  mixins:[searchMixin]
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
