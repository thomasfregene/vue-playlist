<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Your first vue file. woooow!'
    }
  },
  methods:{
    greeting: function(){
      return 'welcome dudes!'
    }
  }
}
</script>

<style>
</style>
