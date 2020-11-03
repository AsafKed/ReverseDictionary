<template>
  <q-card class="card bg-secondary text-white">
    <q-card-section>
      <div class="word text-h6">{{ result.word }}</div>
      <div class="text-subtitle1"> {{ result.description }}</div>
      <div class="certainty text-subtitle2"> Computer certainty:
        {{ result.certainty*100 }}%</div>
    </q-card-section>

    <q-separator dark></q-separator>

    <q-card-actions vertical>
      <q-btn flat>
        This is it!
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "ResultItem",
  props: ["result"]
}
</script>

<style scoped>
.card {
  width: 30%;
  float: left;
  display: inline;
  margin: 3px;
  padding: 5px;
  height: 250px;
}
</style>