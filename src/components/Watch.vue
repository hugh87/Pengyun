<template>
  <div class="watch">
    <p>
      Ask a yes/no question:
      <input type="text" v-model="question">
    </p>
    <p>{{answer}}</p>
  </div>
</template>

<script>
  import reqwest from 'reqwest'
  import _ from 'lodash'

  export default{
    name: 'watch',
    data () {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    watch: {
      question: function (newQestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
      getAnswer: _.debounce(
        function () {
          var vm = this
          if (this.question.indexOf('?') === -1) {
            vm.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          vm.answer = 'Thinking...'
          reqwest({
            url: 'https://yesno.wtf/api',
            crossOrigin: true
          })
          .then(function (resp) {
            vm.answer = _.capitalize(resp.answer)
          })
        },
        500
      )
    }
  }
</script>