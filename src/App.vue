<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog';

export default {
  components: {
    'add-blog': addBlog,
  }
}
</script>

<style>
  body {
    font-family: 'Nunito SemiBold';
  }
</style>
