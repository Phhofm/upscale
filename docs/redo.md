---
title: Upscale Wiki
description: Visual Comparison of upscale wiki models
layout: doc
---

<script setup lang="ts">
import ImageSliderGithub from './components/imageslidergithub.vue' // the vue image slider example comparison component

//HTML5 Fullscreen API
const fullscreenEnabled = document.fullscreenEnabled; //check if fullscreen is possible
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
//document.addEventListener('fullscreenchange', (event) => { console.log("FULLSCREEN CHANGE");});

// reset button, to keep it simple this will reset all examples. This is simply because when entering fullscreen mode, dragging/moving the image out of view, and pressing esc, the image will have 'vanished' (not in view anymore) so i thought id add a reset button
import { ref } from 'vue';
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};


const fileNamesList = ['003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN','RealESRGAN_x4plus_anime_6B']

</script>

# Redo Test

An example with just every file in the github output folder. Redone upscales as png files. Once started to iterate over these by converting them to jxl files (JPEG XL) with quality 100 and effort 9 but man, it takes a while to process so i stopped it and just use png currently. Could still maby convert in the future to compress for to faster fetch the single image, it would be a lossless conversion/compression, but takes a while, first I will redo all the examples with png. Made sure to have LDSR output that is not cropped since i am redoing these examples.
<div id="fateExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button>
<br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button> 
<br/>
<br/>
<br/>

A selection example, only displaying the SwinIR-L and the RealESRGAN_x4plus_anime_6B Models but still accessing the exact same github output folder files. This allows me to just keep all the outputs of an example on a central github folder but using only selections of it for different examples like upscalewiki page sections
<div id="fateSelectionExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' :fileNamesList="fileNamesList" />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateSelectionExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/><br/><br/>


Output files folder on github that is accessed for these examples: [Github Folder Link](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/anime/fate)

<br/> <br/>

Non-draggable (downgrade since i cant zoom in and drag to the specific area i want to compare). Need to click somethwere to get the divisor there. Also divisor is super hard to hit (click and then click&drag right away to easily hit it) i personally do not like it at all so i will not use this version, just placing here to try out:
<div id="fateExample2">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' nondraggable="true"/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateExample2')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button> <br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button> 
<br/><br/><br/>

