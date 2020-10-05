<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
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
    this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(({ body }) => this.blog = { ...body })
  }
}
</script>

<style>

</style>
