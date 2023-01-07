---
title: Favorites
description: Favorites Page
layout: doc
---

<script setup lang="ts">

import ImageSliderGithub from './components/imageslidergithub.vue' // the vue image slider example comparison component

/*
const fullNamesList = [
  '003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN',
  '4x-UltraMix_Restore',
  '4x-UltraMix_Balanced',
  '4x-UltraSharp',
  '4x-UniScaleV2_Moderate',
  '4xRealSR_DF2K_JPEG',
  '4x_foolhardy_Remacri',
  '4x_NMKD-Siax_200k',
  'BSRGAN',
  '4x_NMKD-Yandere4_120000_G',
  'LDSR_100steps',
  'realesr-general-wdn-x4v3',
  'RealESRGAN_x4plus',
  'RealESRGAN_x4_rudalle',
  'Real_HAT_GAN_SRx4',
  'Swin2SR_RealworldSR_X4_64_BSRGAN_PSNR',
  'SwinIR-L+GFPGANv1.4',
  'SwinIR-L+CodeFormer',
  '4x_BooruGan_650k',
  'RealESRGAN_x4plus_anime_6B'
  ]
  */

  const buddyFileNamesList = [
  'SwinIR-L+CodeFormer',
  'LDSR+CodeFormer',
  'RealESRGAN_x4plus+CodeFormer',
  'BSRGAN+CodeFormer',
  'realesr-general-wdn-x4v3+CodeFormer',
  'Real_HAT+CodeFormer',
  'Remacri+CodeFormer',
  'Rudalle+CodeFormer',
  'UltraMix_Balanced+CodeFormer',
  'SwinIR-L+GFPGANv1.4',
  'SwinIR-L'
  ]

/*
  const mythenFileNamesList = [
  '003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN',
  '4x-UltraMix_Restore',
  '4x-UltraMix_Balanced',
  '4x-UltraSharp',
  '4x-UniScaleV2_Moderate',
  '4xRealSR_DF2K_JPEG',
  '4x_foolhardy_Remacri',
  '4x_NMKD-Siax_200k',
  'BSRGAN',
  '4x_NMKD-Yandere4_120000_G',
  'LDSR_100steps',
  'realesr-general-wdn-x4v3',
  'RealESRGAN_x4plus',
  'RealESRGAN_x4_rudalle',
  'Real_HAT_GAN_SRx4',
  'Swin2SR_RealworldSR_X4_64_BSRGAN_PSNR',
  'SwinIR-L+GFPGANv1.4',
  'SwinIR-L+CodeFormer',
  '4x_BooruGan_650k',
  'RealESRGAN_x4plus_anime_6B'
  ]
  */

  const fateFileNamesList = [
  '003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN',
  '4x-UltraMix_Restore',
  '4x-UltraMix_Balanced',
  '4x-UltraSharp',
  '4x-UniScaleV2_Moderate',
  '4xRealSR_DF2K_JPEG',
  '4x_foolhardy_Remacri',
  '4x_NMKD-Siax_200k',
  'BSRGAN',
  '4x_NMKD-Yandere4_120000_G',
  'LDSR_100steps',
  'realesr-general-wdn-x4v3',
  'RealESRGAN_x4plus',
  'RealESRGAN_x4_rudalle',
  'Real_HAT_GAN_SRx4',
  'Swin2SR_RealworldSR_X4_64_BSRGAN_PSNR',
  'SwinIR-L+GFPGANv1.4',
  'SwinIR-L+CodeFormer',
  '4x_BooruGan_650k',
  'RealESRGAN_x4plus_anime_6B'
  ]

  /*
  const konosubaFileNamesList = [
  '003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN',
  '4x-UltraMix_Restore',
  '4x-UltraMix_Balanced',
  '4x-UltraSharp',
  '4x-UniScaleV2_Moderate',
  '4xRealSR_DF2K_JPEG',
  '4x_foolhardy_Remacri',
  '4x_NMKD-Siax_200k',
  'BSRGAN',
  '4x_NMKD-Yandere4_120000_G',
  'LDSR_100steps',
  'realesr-general-wdn-x4v3',
  'RealESRGAN_x4plus',
  'RealESRGAN_x4_rudalle',
  'Real_HAT_GAN_SRx4',
  'Swin2SR_RealworldSR_X4_64_BSRGAN_PSNR',
  'SwinIR-L+GFPGANv1.4',
  'SwinIR-L+CodeFormer',
  '4x_BooruGan_650k',
  'RealESRGAN_x4plus_anime_6B'
  ]
  */

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

// reset button, to keep it simple this will reset all examples. This is simply because when entering fullscreen mode, dragging/moving the image out of view, and pressing esc, the image will have 'vanished' (not in view anymore) so i thought id add a reset button
import { ref } from 'vue';
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};
</script>

# Favorites

# !TODO
>DO NOT FORGET TO CHANGE THE SOURCE LINKS BACK BEFORE MERGING INTO MAIN. /dev/ needs to be /main/ also in the imageslidergithub.vue file  
ADD LINKS TO DESCRIPTION AND FILES AND SOURCES  
CHOOSE GROSSER MYTHEN FAVS  
CHOOSE KONOSUBA FAVS  
EXTEND THOSE  
THEN YOU CAN PUBLISH .. YOU CAN STILL ADD AI GENERATED EXAMPLES LATER, MAYBE NEW ONES GENERATED WTH THE NEW MIDJOURNEY AI  

## Buddy

For **photos with faces** my simplest recommendation is [SwinIR-L]() together with [CodeFormer]() in [chaiNNer]() as shown [here]().   
>Added *SwinIR-L* to show the output without face restoration, and *SwinIR-L+GFPGANv1.4* to show an alternative face restoration model.  
>Model names have been simplified. 
<div id="buddyExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/dev/sources/input/photos/buddy.jpg' relativePathOutputFolder='output/lossless/photos/buddy' :fileNamesList="buddyFileNamesList" />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('buddyExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 480x320 pixels

Scaling Factor: 4

Output Image: 1920x1280 pixels

Type: Photo with Faces

Input Image: [Image]()

Output Images: [Github Folder]()

  </p>
</details>

## Grosser Mythen

For photos of landscapes

<div id="mythenExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/photos/grossermythen.jpg' relativePathOutputFolder='output/lossless/photos/grossermythen' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('mythenExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 480x320 pixels

Scaling Factor: 4

Output Image: 1920x1280 pixels

Type: Photo

  </p>
</details>

## KonoSuba

For anime images

<div id="konosubaExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/KonoSuba.jpg' relativePathOutputFolder='output/lossless/anime/konosuba' />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('konosubaExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 480x320 pixels

Scaling Factor: 4

Output Image: 1920x1280 pixels

Type: Photo

  </p>
</details>

## Fate

For anime images with Bokeh effect

<div id="fateSelectionExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' :fileNamesList="fateFileNamesList" />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateSelectionExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 480x320 pixels

Scaling Factor: 4

Output Image: 1920x1280 pixels

Type: Photo

  </p>
</details>

<!-- not ready yet, LDSR etc missing
# Livingroom

<div id="fateSelectionExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' :fileNamesList="fileNamesList" />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateSelectionExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/><br/><br/>

-->