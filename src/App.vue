<template>
  <div>
    <form-helper>
      <h2 slot="title">I am the slot title</h2>
      <p slot="text">I am the paragraph text for the slot</p>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  components:{
  'form-helper': formHelper
},
  data () {
    return{
    }
  },
  methods:{
  }
}
</script>

<style scoped></style>
