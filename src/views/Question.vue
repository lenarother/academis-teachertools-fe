<template>
<section class="section container is-fluid">

    <div class="card ml-6 mr-6" v-if="data">
      <div class="card-content">


        <p class="block mt-4">
           <vue-markdown-it :source="data.text" />
        </p>

        <ul class="mb-6">
          <li class="block" v-for="(answer) in data.answers" :key="answer.uuid">
            <a class="button is-info is-light" style="width:80%">
              <vue-markdown-it :source="answer.text" />
            </a>
          </li>
        </ul>

      </div>
    </div>

     <h2 v-else>
       No such question. Your url might be incorrect.
     </h2>

    <div class="block mt-6" v-if="data">
        <p><strong>Share Question URL:</strong> {{ questionUrl }} </p>
    </div>

</section>
</template>

<script>
  import axios from "axios";
  import VueMarkdownIt from 'vue3-markdown-it';
  export default {
    data() {
      return {
        data: null,
        questionUrl: window.location.origin + this.$route.path,
        uuid: this.$route.params.uuid,
        uuidmock: 'cd8f45bff57448288e51daa71a5155ad',
        message: 'hello world',
        apiUrl: 'https://secure-thicket-32032.herokuapp.com/api/v1'
      }
    },
    components: {
      VueMarkdownIt
    },
    mounted () {
      const url = `${this.apiUrl}/quiz/${this.uuid}`;
      axios
        .get(url)
        .then(response => (this.data = response.data))
    }
  }
</script>