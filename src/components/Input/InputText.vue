<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-input
        v-model="text"
        filled
        autogrow
    />
  </div>
</template>

<template v-if="input_type === 'description'">
  <input placeholder="Enter your description" key="description-input">
</template>
<template v-else>
  <input placeholder="Enter your synonym" key="synonym-input">
</template>

<script>

export default {
name: "InputText",
  props: ['input_type']
}
</script>

<style scoped>

</style>