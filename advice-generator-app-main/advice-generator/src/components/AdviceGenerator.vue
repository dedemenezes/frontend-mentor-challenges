<template>
  <div class='card'>
    <p>ADVICE #{{ apiAdvice.slip['id'] }}</p>
    <p>{{ apiAdvice.slip.advice }}</p>
    <img class='divider' src="../assets/pattern-divider-desktop.svg" alt="">
    <img src="../assets/icon-dice.svg" alt="Random advice">
  </div>
</template>

<script>
export default {
  name: 'AdviceGenerator',
  props: {
    advice: String
  },
  data(){
    return {
      apiAdvice: "",
      adviceId: ""
    }
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("https://api.adviceslip.com/advice");
        this.apiAdvice = await response.json();
        console.log(this.apiAdvice)
      } catch(error) {
        console.log(error)
      }
    },
  },

  created(){
    this.getData()
  }
}
</script>

<style scoped>
  .card {
    background-color: hsl(217, 19%, 38%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .divider {
    display: block;
  }
</style>
