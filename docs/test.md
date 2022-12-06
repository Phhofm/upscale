---
title: Test
description: Visual Comparison BSRGAN
layout: doc
---

<script setup>
import { useData } from 'vitepress'
import { ref, watch } from 'vue'
import imageCompare from 'vue-image-compare2'

// Example 1
// the selection options
let options = ref();
// the very first examples loaded to show a fast result before in the background the selector has been build by fetching the github folder sources 
const after = ref('https://raw.githubusercontent.com/Phhofm/upscale/main/sources/multimodel/current/photos/buddy/001_classicalSR_DF2K_s64w8_SwinIR-M_x4.jpg'); // left
const before = ref('https://raw.githubusercontent.com/Phhofm/upscale/main/sources/multimodel/current/photos/buddy/4x-AnimeSharp.jpg'); // right
// the defined key on the component so it will tigger a rerender if we change this value
const componentKey = ref(0);
// the watchers, which detect selection change and trigger a force rerender on the image comparison slider component
watch(after, () => {
  forceRerender(componentKey)
});
watch(before, () => {
  forceRerender(componentKey)
});
// we force the image comparison slider component rerender because otherwise it will build only on page load and you can never change images to compare
function forceRerender(key) {
  key.value += 1;
}
// set zoom options (doesnt make sense to zoom too deep since it will be pixelated just because of image size)
const zoom = {min: 1, max: 5}

// fetch all files from the github repo
async function fetchFilesJSON() {
  const response = await fetch('https://api.github.com/repos/phhofm/upscale/contents/sources/multimodel/current/ai_generated/landscape');
  const files = await response.json();
  return files;
}

fetchFilesJSON().then(files => {
  options.value = []; // empty options array
  files; // fetches files

  // build the options array with the correct syntax
  files.forEach((file) => {
    let text = file.name.split('.').slice(0, -1).join('.') // remove file extension from model name
    let value = file.download_url
    let object = { text : text, value: value}
    options.value.push(object)
});
// set image slider comparison images, also this will trigger a component refresh since we have set the forceRenderer on value change
after.value = options.value[0].value
before.value = options.value[1].value
});
</script>

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
@touchmove.prevent
@scroll.prevent/>

<style>
  .before-name{
    color: black;
  }
  .after-name{
    color: black;
  }
  .right{
    position:absolute;
    right: 0px;
    text-align:center;
    max-width: 49.5%;
  }
    .left{
    text-align: center;
    width: 49.5%;
  }
</style>
