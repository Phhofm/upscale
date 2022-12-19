<template>
  <div>
    <select v-model="after" class="left">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select v-model="before" class="right">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>

  <image-compare :before="before" :after="after" isDraggable isZoomable :key="componentKey" :zoom="zoom" @wheel.prevent
    @touchmove.prevent @scroll.prevent />
</template>

<script setup>
import { ref, watch, defineProps } from "vue";
import imageCompare from "vue-image-compare2";
import data from "../../data.json";

// the props
const props = defineProps({
  inputImage: String,
  localFolder: String,
});

// the selection options
let options = ref();
// the very first examples loaded to show a fast result before in the background the selector has been build by fetching the github folder sources
const after = ref(); // left
const before = ref(); // right
// the defined key on the component so it will tigger a rerender if we change this value
const componentKey = ref(0);
// the watchers, which detect selection change and trigger a force rerender on the image comparison slider component
watch(after, () => {
  forceRerender();
});
watch(before, () => {
  forceRerender();
});
// we force the image comparison slider component rerender because otherwise it will build only on page load and you can never change images to compare
function forceRerender() {
  componentKey.value += 1;
}
// set zoom options (doesnt make sense to zoom too deep since it will be pixelated just because of image size)
const zoom = { min: 1, max: 5 };

// get relevant files from the data.json object
let relevantFiles = data.filter((file) =>
  file.relativePath.startsWith(props.localFolder + '/') // needed to add '/' because otherwise examplefolder that start the same get overwritten (like 'sao' will get overwritten by the 'sao2' example image files)
);
let relativePaths = relevantFiles.map((file) => file.relativePath);
let modelNames = relevantFiles.map((file) => file.basename);

options.value = []; // empty options array
options.value.push({ text: "Input", value: props.inputImage }); // push first image as input which is not in the upscale folder but the inputs folder
// build the options array with the data
for (let i = 0; i < relativePaths.length; i++) {
  let text = modelNames[i];
  let value = "/upscale/main/sources/" + relativePaths[i];
  let object = { text: text, value: value };
  options.value.push(object);
}
// set image slider comparison images, also this will trigger a component refresh since we have set the forceRenderer on value change
after.value = options.value[0].value;
before.value = options.value[1].value;
</script>

<style>
.before-name {
  color: black;
}

.after-name {
  color: black;
}

.right {
  position: absolute;
  right: 0px;
  text-align: center;
  max-width: 49.5%;
}

.left {
  text-align: center;
  width: 49.5%;
}
</style>
