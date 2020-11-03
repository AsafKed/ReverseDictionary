<template>
  <div class="input_selector">
    <q-card>
      <q-card-actions class="input_option">
        <q-btn @click="setInput('description')" flat>Description</q-btn>
      </q-card-actions>
    </q-card>

    <q-card>
      <q-card-actions class="input_option">
        <q-btn @click="setInput('synonym')" flat>Synonym</q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
let input_type

export default {
  name: "InputSelector",
  methods: {
    setInput(input) {
      console.log("Input type: " + input)
      input_type = input
      this.$emit('clicked', input_type)
    }
  },
  data() {
    return {
      input_type
    }
  }
}
console.log("Input type: " + input_type)
</script>

<style scoped>
.input_selector {
  display: flex;
}

.input_option {
  margin: 5px;
  padding: 5px;
}
</style>