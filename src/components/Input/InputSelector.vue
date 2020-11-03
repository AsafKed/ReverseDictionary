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
    // Let button declare which input type should be entered
    setInput(input) {
      this.input_type = input
    }
  },
  data() {
    return {
      input_type
    }
  },
  watch: {
    input_type: function() {
      // Update the parent everytime that something is selected
      this.$emit('requested_input_type', this.input_type)
    }
  }
}
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