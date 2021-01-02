<template>
  <div class="container">
    <n-link :to="localePath({path: '/users'})">Users</n-link>
    <p v-for="(post, idx) in posts" :key="idx">{{post.title}}</p>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
    /* Activating this condition prevents the data from loading on route change! */
    // if(process.server){
      const res = await $axios.get(`/api/posts`)
      return {
        posts: res.data
      }
    // }
  }
}
</script>

<style>

</style>
