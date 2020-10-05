<template>
  <div id="add-blog">
    <h2>Add a new post</h2>
    <form v-if="!submitted">
      <label for="title">Title:</label>
      <input v-model.lazy="blog.title" type="text" name="title" id="title" required />
      <label for="content">Content:</label>
      <textarea v-model.lazy="blog.content" name="content" rows="5" id="content"></textarea>
      <div id="checkboxes">
        <label>Users</label>
        <input type="checkbox" v-model="blog.categories" value="users">
        <label>Articles</label>
        <input type="checkbox" v-model="blog.categories" value="articles">
        <label>Snippets</label>
        <input type="checkbox" v-model="blog.categories" value="snippets">
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option :key="author" v-for="author in authors">
          {{ author }}
        </option>
      </select>
      <button type="submit" @click.prevent="submit">
        Add post
      </button>
    </form>
    <div v-if="submitted">
      <h3>Success!</h3>
    </div>
    <div id="preview">
      <h3>Preview</h3>
      <p>Title: {{ blog.title }}</p>
      <p>Content:</p>
      <p>{{ blog.content }}</p>
      <p>Categories:</p>
      <ul>
        <li :key="category" v-for="category in blog.categories">
          <span class="capitalize">{{ category }}</span>
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authors: ['Antonio', 'Ivan', 'Marko'],
      posts: [],
      blog: {
        title: '',
        content: '',
        categories: [],
        author: '',
      },
      submitted: false,
    }
  },
  methods: {
    submit() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1,
      }).then((data) => {
        this.submitted = true;
        console.log(data)
      })
    }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes {
  display: inline-block;
  margin-right: 10px;
}
.capitalize {
  text-transform: capitalize;
}
#checkboxes label {
  display: inline-block;
}
</style>
