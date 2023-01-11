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
  'RealESRGAN_x4plus+CodeFormer',
  'BSRGAN+CodeFormer',
  'realesr-general-wdn-x4v3+CodeFormer',
  'Real_HAT+CodeFormer',
  'Remacri+CodeFormer',
  'Rudalle+CodeFormer',
  'UltraMix_Balanced+CodeFormer',
  'SwinIR-L+GFPGANv1.4',
  'SwinIR-L',
  '4xLDSR_50steps+CodeFormer',
  ]

  const mythenFileNamesList = [
  '003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN',
  '4xJaypeg90',
  '4xRealSR_DF2K_JPEG',
  //'4x-UltraMix_Restore',
  '4x-UltraMix_Balanced',
  '4x-UltraSharp',
  '4xRealSR_DF2K_JPEG',
  '4x_NMKD-Siax_200k',
  'BSRGAN',
  'LDSR_100steps',
  'realesr-general-wdn-x4v3',
  'RealESRGAN_x4plus',
  'RealESRGAN_x4_rudalle',
  'Real_HAT_GAN_SRx4',
  '4xLDSR_200steps',
  ]

  const fateFileNamesList = [
  //'003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN',
  '4x-UltraMix_Restore',
  //'4x-UltraMix_Balanced',
  //'4x-UltraSharp',
  '4xRealSR_DF2K_JPEG',
  '4x_foolhardy_Remacri',
  '4x_NMKD-Siax_200k',
  //'BSRGAN',
  '4x_NMKD-Yandere4_120000_G',
  //'4xLDSR_100steps',
  'realesr-general-wdn-x4v3',
  //'RealESRGAN_x4plus',
  //'RealESRGAN_x4_rudalle',
  //'Real_HAT_GAN_SRx4',
  //'Swin2SR_RealworldSR_X4_64_BSRGAN_PSNR',
  '4x_BooruGan_650k',
  'RealESRGAN_x4plus_anime_6B',
  '4x-AnimeSharp',
  '4x_NMKD-UltraYandere_300k',
  '4x_NMKD-YandereNeo-F64B2_200k'
  ]

  const konosubaFileNamesList = [
  '003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN',
  //'4x-UltraMix_Restore',
  '4x-UltraMix_Balanced',
  '4x-UltraSharp',
  '4xRealSR_DF2K_JPEG',
  '4x_foolhardy_Remacri',
  //'4x_NMKD-Siax_200k',
  'BSRGAN',
  //'4x_NMKD-Yandere4_120000_G',
  '4xLDSR_50steps',
  //'realesr-general-wdn-x4v3',
  //'RealESRGAN_x4plus',
  //'RealESRGAN_x4_rudalle',
  //'Real_HAT_GAN_SRx4',
  //'Swin2SR_RealworldSR_X4_64_BSRGAN_PSNR',
  //'4x_BooruGan_650k',
  'RealESRGAN_x4plus_anime_6B',
  '4x-AnimeSharp',
  '4x_NMKD-UltraYandere_300k',
  //'4x_NMKD-YandereNeo-F64B2_200k'
  ]

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

On this page I present my favorite upscaling models for a given example together with a simple recommendation. If you want all the upscaling outputs of these examples, head on over to the [multimodels page](./multimodels.md).
>Example Controls: Left mouse button to drag the image or to move the slider, mouse wheel to zoom in, right mouse button to toggle left model on/off, releasing middle mouse button will activate a short flicker test for the left side of the slider. Do not work on mobile.

## Buddy

For **photos with faces** my simplest recommendation is [SwinIR-L](https://github.com/JingyunLiang/SwinIR/releases/download/v0.0/003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN.pth) together with [CodeFormer](https://github.com/sczhou/CodeFormer/releases/download/v0.1.0/codeformer.pth) in [chaiNNer](https://github.com/chaiNNer-org/chaiNNer) as shown [here](https://raw.githubusercontent.com/Phhofm/upscale/main/assets/images/favorites/screenshotBuddySwinIRLCodeFormer.png).
>LDSR, especially with higher step count, starts messing up the faces too much, even when used with face restoration models, in my opinion.
<div id="buddyExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/photos/buddy.jpg' relativePathOutputFolder='output/lossless/photos/buddy' :fileNamesList="buddyFileNamesList"/>
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

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/photos/buddy.jpg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/photos/buddy)

  </p>
</details>

## Grosser Mythen

For photos of landscapes my simplest recommendation is [Real_HAT_GAN_SRx4](https://drive.google.com/file/d/1Ma12vCWT27P9M99-s2RXnynKN-OQsBrv/view) with [chaiNNer](https://github.com/chaiNNer-org/chaiNNer).
>LDSR also gives good results here but is not supported by chaiNNer. If you are using LDSR (with [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) or [Replicate](https://replicate.com/nightmareai/latent-sr)) always check your output for completeness. Oftentimes the input is not in the correct dimensions and therefore unintentional cropping will occur, then you need to manually pad the [input](https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/photos/grossermythen_ldsr_padded.jpg) and crop the output.

<div id="mythenExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/photos/grossermythen.jpg' relativePathOutputFolder='output/lossless/photos/grossermythen' :fileNamesList="mythenFileNamesList"/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('mythenExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 427x320 pixels

Scaling Factor: 4

Output Image: 1708x1280 pixels

Type: Photo Landscape

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/photos/grossermythen.jpg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/photos/grossermythen)

  </p>
</details>

## KonoSuba

For anime images my simplest recommendation is [RealESRGAN_x4plus_anime_6B](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth) with [chaiNNer](https://github.com/chaiNNer-org/chaiNNer).

<div id="konosubaExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/KonoSuba.jpg' relativePathOutputFolder='output/lossless/anime/konosuba' :fileNamesList="konosubaFileNamesList"/>
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('konosubaExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 640x360 pixels

Scaling Factor: 4

Output Image: 2560x1440 pixels

Type: Anime Image

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/anime/KonoSuba.jpg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/anime/konosuba)

  </p>
</details>

## Fate

For anime images with bokeh effect my simplest recommendation is [AnimeSharp]() with [chaiNNer](https://github.com/chaiNNer-org/chaiNNer).

If only a 2x upscale is needed, you can also try out [2x_Bubble_AnimeScale_SwinIR_Small_v1](https://github.com/Bubblemint864/AI-Models/releases/download/2x_Bubble_AnimeScale_SwinIR_Small_v1/2x_Bubble_AnimeScale_SwinIR_Small_v1.pth) with [chaiNNer](https://github.com/chaiNNer-org/chaiNNer).

>RealESRGAN_x4plus_anime_6B this time does not belong my favorites, I left it in here for you to notice what it does to the blurry background.

<div id="fateSelectionExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' :fileNamesList="fateFileNamesList" />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateSelectionExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button><br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details>
  <summary>Details</summary>
  <p>

Input Image: 640x360 pixels

Scaling Factor: 4

Output Image: 2560x1440 pixels

Type: Anime Image with Bokeh Effect

Input Image: [Image](https://github.com/Phhofm/upscale/blob/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg)

Output Images: [Github Folder](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/anime/fate)

  </p>
</details>
