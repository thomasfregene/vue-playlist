<template>
  <div>
      <form-helper>
          <div slot="form-header">
              <h3>Form one - Contact Us</h3>
              <p>fill in this form to contact us</p>
          </div>
          <div slot="form-fields">
              <input type="text" placeholder="name" required>
              <label for="">Your Message:</label>
              <textarea></textarea>
          </div>
          <div slot="form-controls">
              <button v-on:click="handleSubmit">Submit</button>
          </div>
      </form-helper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue'

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
