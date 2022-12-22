---
title: Upscale Wiki
description: Visual Comparison of upscale wiki models
layout: doc
---

<script setup lang="ts">
import ImageSliderGithubSelection from './components/imageslidergithubselection.vue' // the vue image slider example comparison component

//HTML5 Fullscreen API
function enterFullscreen(elementName) {
  var element = document.getElementById(elementName);
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
}
</script>

# Redo Test

An example with just every file in the github output folder. Redone upscales as png files. Once started to iterate over these by converting them to jxl files (JPEG XL) with quality 100 and effort 9 but man, it takes a while to process so i stopped it and just use png currently. Could still maby convert in the future to compress for to faster fetch the single image, it would be a lossless conversion/compression, but takes a while, first I will redo all the examples with png. Made sure to have LDSR output that is not cropped since i am redoing these examples.
<div id="fateExample">
<ImageSliderGithubSelection inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' />
</div>
<button @click="enterFullscreen('fateExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button> 
<br/><br/><br/>

A selection example, only displaying the SwinIR-L and the RealESRGAN_x4plus_anime_6B Models but still accessing the exact same github output folder files. This allows me to just keep all the outputs of an example on a central github folder but using only selections of it for different examples like upscalewiki page sections
<div id="fateSelectionExample">
<ImageSliderGithubSelection inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' :fileNamesList="['003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN','RealESRGAN_x4plus_anime_6B']" />
</div>
<button @click="enterFullscreen('fateSelectionExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button> 
<br/><br/><br/>


Output files folder on github that is accessed for these examples: [Github Folder Link](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/anime/fate)

