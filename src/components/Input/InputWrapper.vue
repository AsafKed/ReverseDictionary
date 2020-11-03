<template>
  <div class="wrapper">
    <div v-for="component in comps" v-bind:key="component">
      <div v-if="component.type === 'selector'">
        <p>Print the selector component</p>
        <InputSelector/>
      </div>
      <div v-else-if="component.type === 'text'">
        <p>Print the text component</p>
        <InputText/>
      </div>
    </div>
    <!--    <input type="text" id="description" name="description" placeholder="Enter your description here"><br><br>-->
    <!--    <input type="submit">-->
  </div>
</template>

<script>
import InputSelector from "@/components/Input/InputSelector";
import InputText from "@/components/Input/InputText";

let comps = [{
  type: 'selector'
}]
let input_type = 'selector'


export default {
  name: 'InputWrapper',
  components: {InputText, InputSelector},
  props: ['showSelector'],
  data() {
    return {
      comps, input_type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
