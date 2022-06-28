<script setup lang="ts">
import axios from "axios";
import { onMounted } from 'vue';

defineProps<{
  msg: string
}>()

const callAPI = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://127.0.0.1:3000',
    responseType: 'json',
  });
  console.log(data);
};


onMounted(() => {
  callAPI();
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
