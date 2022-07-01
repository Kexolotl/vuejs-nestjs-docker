<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const msg = ref<string | null>("Hello");

const callAPI = async () => {
  console.log(apiBaseUrl);
  const result = await axios({
    method: "get",
    url: apiBaseUrl,
    responseType: "json",
  });
  console.log(result);
  msg.value = result?.data?.value;
};

onMounted(() => {
  callAPI();
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} {{ apiBaseUrl }}</h1>
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
