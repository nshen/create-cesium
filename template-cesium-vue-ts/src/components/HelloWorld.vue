<template>
  <h1>{{ msg }}</h1>
  <div class="cesium-container" ref="mapRef" />
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>|
    <a
      href="https://cesium.com/docs/cesiumjs-ref-doc/index.html"
      target="_blank"
      >Cesium Documentation</a
    >
    |
    <a href="https://github.com/nshen/create-cesium" target="_blank">
      Create Cesium 🌏
    </a>
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
/**
 * You can also import Cesium Object like this
 *
 * import * as Cesium from 'cesium';
 * const viewer = new Cesium.Viewer('cesiumContainer');
 */
import { Viewer } from "cesium";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const mapRef = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      mapRef.value && new Viewer(mapRef.value);
    });
    return { mapRef };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.cesium-container {
  width: 500px;
  height: 250px;
  margin: 0 auto;
}
</style>
