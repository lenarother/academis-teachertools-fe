<template>
<section class="section container is-fluid">

<div class="columns">

  <div class='column'>
    <p class="subtitle">Question</p>
    <textarea class="textarea" v-model="questionText" placeholder="Paste your question here" rows="10"></textarea>
    <br>
    <a class="button is-primary is-light is-medium is-focused" v-on:click="postQuestion(questionText)">
      Post your question
    </a>

  </div>

  <div class='column'>
    <p class="subtitle">Preview</p>
    <div class="card" rows="10">
      <div class="card-content" rows="10">
        <p>
          <vue-markdown-it :source='questionText' />
        </p>
      </div>
    </div>
  </div>

</div>



</section>
</template>

<script>
  import axios from 'axios';
  import VueMarkdownIt from 'vue3-markdown-it';
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
    },
    components: {
      VueMarkdownIt
    },
    methods: {
        postQuestion: function(questionText) {

          event.preventDefault();
          let self = this
          axios.post(
            'https://secure-thicket-32032.herokuapp.com/api/v1/quiz/',
            {
              body: questionText,
            })
            .then(function(response){
              console.log(response.status)
              //const status = JSON.parse(response.data.response.status);

              //redirect logic
              if (response.status == '201') {
                console.log('HERE')
                console.log(response)

                self.$router.push({ name: "Question", params: {uuid: response.data.uuid} })
              }
            }
          )
        }
      },
    }

</script>
