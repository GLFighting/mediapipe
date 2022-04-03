<template>
  <div class="container">
    <video class="input_video"></video>
    <div class="canvas-container">
      <canvas class="output_canvas" width="1280px" height="720px"></canvas>
    </div>
  </div>
  <div class="control-panel"></div>
</template>
<script>
import { script } from "../assets/js/script"
import { onMounted } from "vue";
export default {
  // name: "Pose",
  setup() {
    onMounted(() => {
      script()
    })
  }
};
</script>

<style scoped lang="less">
@import url("../assets/css/face_mesh.less");
</style>