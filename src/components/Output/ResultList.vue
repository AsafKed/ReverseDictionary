<template>
  <div class="wrapper" v-show="showResults">
<!--    <h3> Which word are you most satisfied with? </h3>-->
    <div v-for="result in results" :key="result.word">
      <ResultItem v-bind:result="result"> </ResultItem>
    </div>
  </div>
</template>

<script>
import ResultItem from "@/components/Output/ResultItem";
export default {
  name: "ResultList.vue",
  components: {ResultItem},
  component() {
    ResultItem
  },
  props:
    ["results"],
    showResults: Boolean
}
</script>
