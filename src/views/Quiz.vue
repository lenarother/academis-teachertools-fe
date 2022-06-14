<template>
<section class="section container is-fluid">

<div class="columns">

  <div class='column'>
    <p class="subtitle">Question</p>
    <textarea class="textarea" v-model="questionText" placeholder="Paste your question here" rows="10"></textarea>
    <br>
    <a class="button is-primary is-light is-medium is-focused" v-on:click="celebrate">
      Post your question
    </a>

  </div>

  <div class='column'>
    <p class="subtitle">Preview</p>
    <div class="card" rows="10">
      <div class="card-content" rows="10">
        <p>{{ questionText }}</p>
      </div>
    </div>
  </div>

</div>



</section>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Chris',
        message: 'hello world',
        questionText: `
1) Which Python package would you like to learn more about?

- pandas
- numpy
- flask
- matplotlib`
      }
    }
 }
</script>

