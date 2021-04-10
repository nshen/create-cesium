<template>
  <h1>{{ msg }}</h1>
  <div class="cesium-container" ref="mapRef" />
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>|
    <a
      href="https://cesium.com/docs/cesiumjs-ref-doc/index.html"
      target="_blank"
      >Cesium Documentation</a
    >
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { Viewer } from "cesium";

defineProps({
  msg: String,
});

const mapRef = ref(null);

onMounted(() => {
  const map = new Viewer(mapRef.value);
});
</script>

<style scoped>
a {
  color: #42b983;
}
.cesium-container {
  width: 500px;
  height: 250px;
  margin: 0 auto;
}
</style>
