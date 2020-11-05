<template>
  <div class="wrapper">
    <!--    Show a dynamic amount of components-->
    <div v-for="component in comps" v-bind:key="component">
      <div v-if="component.type === 'selector'">
        <!--     Listen to which input_type is requested-->
        <InputSelector @request_input_type="updateComps"/>
      </div>
      <div v-else-if="component.type === 'text'">
        <InputText @input_data="updateInputData" :input_type="input_type"/>
      </div>
    </div>
  </div>
</template>

<script>
import InputSelector from "@/components/Input/InputSelector";
import InputText from "@/components/Input/InputText";

/**
 * Options: 'selector', 'text'. To reflect whether an InputSelector or InputText component should be loaded.
 * @type {{type: string}[]}
 */
let comps = [{
  type: 'selector'
}]

/**
 * Options: 'description', 'synonym', to reflect which type of InputText should be loaded.
 * @type {string}
 */
let input_type = ''

/**
 * JSON list. Properties 'type' (description/synonym) and 'text' (the text)
 * @type {{text: string, type: string}[]}
 */
let input_data = []

export default {
  name: 'InputWrapper',
  components: {InputSelector, InputText},
  props: ['showSelector'],
  methods: {
    // Add new InputText component to list, remove any InputSelectors
    updateComps: function (params) {
      // Prepare to take InputSelector's requested input type
      // To put it into InputText
      this.input_type = params

      console.log("Input type received ", this.input_type)
      // Add the InputText component to the list
      comps.push({type: 'text'})

      // Remove any InputSelectors still left in the list
      comps.forEach(component => {
        if (component.type === 'selector') {
          comps.splice(comps.indexOf(component), 1)
        }
      })
    },

    // Add to the list of JSON descriptors
    updateInputData: function(data) {
      input_data.push(data)
      console.log("Input data: ", input_data)
    }
  },
  data() {
    return {
      comps,
      input_type,
      input_data
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
