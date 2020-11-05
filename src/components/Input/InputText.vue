<template>
  <div class="q-pa-md">
    <!--    <h5>Do something with {{input_type}} </h5>-->
    <q-input id="enter_description" v-if="input_type === 'description'"
             v-model="ph" :placeholder="'Enter your ' + input_type" filled autogrow
    />
    <q-input @input="setText(value)" id="enter_synonym" v-else-if="input_type === 'synonym'"
             v-model="ph" :placeholder="'Enter your ' + input_type" filled
    />

  </div>
</template>

<!--<template v-if="input_type === 'description'">-->
<!--  <input placeholder="Enter your description" key="description-input">-->
<!--</template>-->
<!--<template v-else>-->
<!--  <input placeholder="Enter your synonym" key="synonym-input">-->
<!--</template>-->

<script>
let input_data = {
  type: String,
  text: String
}

export default {
  name: "InputText",
  props: {['input_type']: String},
  methods: {
    setText(text) {
      this.input_data.type = this.input_type
      this.input_data.text = text
    }
  },
  data() {
    return input_data
  },
  watch: {
    input_data: function() {
      this.$emit('input_data', this.input_data)
    }
  }
}
</script>

<style scoped>
#enter_description {
  max-width: 70%;
}

#enter_synonym {
  max-width: 300px;
}
</style>