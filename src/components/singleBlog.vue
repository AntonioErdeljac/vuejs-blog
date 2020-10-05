<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <ul>
      <li :key="category" v-for="category in blog.categories">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    }
  },
  mounted() {
    this.$http.get(`https://vuejs-blog-79691.firebaseio.com/posts/${this.id}.json`)
      .then(({ body }) => this.blog = { ...body })
  }
}
</script>

<style>

</style>
