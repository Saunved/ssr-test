<template>
  <div class="container">
    <n-link :to="localePath({path: '/'})">Posts</n-link>
    <p v-for="(user, idx) in users" :key="idx">{{user.name}}</p>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
    // if(process.server){
        const res = await $axios.get(`/api/users`)
        return {
        users: res.data
        }
    // }
  }
}
</script>

<style>

</style>
