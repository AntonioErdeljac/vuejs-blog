<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All posts</h1>
    <input type="text" v-model="search" placeholder="Search" />
    <div id="single-blog" :key="blog.id" v-for="blog in filteredBlogs">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: '',
    };
  },
  mounted() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(({ body }) => {
      this.blogs = body.slice(0, 10);
    })
  },
  mixins: [searchMixin],
  filters: {
    toUppercase: (value) => {
      return value.toUpperCase();
    },
    snippet: (value) => {
      return `${value.slice(0, 100)}...`;
    }
  },
  directives: {
    rainbow: {
      bind(element, binding, virtualNode) {
        element.style.color = `#${Math.random().toString().slice(2, 8)}`
      },
    },
    theme: {
      bind(element, binding, virtualNode) {
        const valueFactory = {
          'wide': () => element.style.maxWidth = '1200px',
          'narrow': () => element.style.maxWidth = '560px',
        };

        const argFactory = {
          'column': () => {
            element.style.background = '#ddd';
            element.style.padding = '20px';
          },
        }

        const value = valueFactory[binding.value];
        const arg = argFactory[binding.arg];

        if (value) {
          value()
        }

        if (arg) {
          arg();
        }
      },
    }
  }
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
#single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
