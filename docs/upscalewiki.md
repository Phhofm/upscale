---
title: Upscale Wiki
description: Visual Comparison of upscale wiki models
layout: doc
---

<script setup lang="ts">
import ImageSliderGithub from './components/imageslidergithub.vue' // the vue image slider example comparison component

// HTML5 Fullscreen API
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

// models selection (list of resulting model base filenames, for each section on the upscale wiki)
const universalModels = ['4x_CountryRoads_377000_G', '4x_foolhardy_Remacri', '4x_foolhardy_Remacri_ExtraSmoother', '4x-UltraSharp', '4x-UniScale-Balanced [72000g]', '4x-UniScale-Strong [42400g]', '4x-UniScaleNR-Balanced [34400g]','4x-UniScaleNR-Strong [62400g]', '4x-UniScale_Restore', '4x-UniScaleV2_Soft', '4x-UniScaleV2_Moderate', '4x-UniScaleV2_Sharp', 'realesrgan-x4minus', '4xFuzzyBox', '4xlollypop', '4x_UniversalUpscalerV2-Neutral_115000_swaG', '4x_UniversalUpscalerV2-Sharp_101000_G', '4x_UniversalUpscalerV2-Sharper_103000_G', '4x_NMKD-Siax_200k']
const realisticPhotos = ['4x_Valar_v1', '4xBox', '4xNickelback', '4x_NickelbackFS', '4x_NMKDSuperscale', '4x_realistic_misc_alsa']
const animeModels = ['4x-AnimeSharp', '4x-AnimeSharp-lite', 'sudo_RealESRGAN2x_3.332.758_G, 2x_Bubble_AnimeScale_Compact_v1', '50k [epoch 253, psnr 30.316, ssim 0.8508, lpips 0.052897]', '100k [epoch 507, psnr 30.517, ssim 0.83536, lpips 0.031511]', '150k [epoch 760, psnr 31.331, ssim 0.84292, lpips 0.029]', '200k [epoch 1014, psnr 31.364, ssim 0.84553, lpips 0.023954]', '250k [epoch 1268, psnr 32.062, ssim 0.84325, lpips 0.02338]', '300k [epoch 1522, psnr 31.957, ssim 0.84511, lpips 0.02156]', '2x_AnimeClassics_UltraLite_510K', '4x_BooruGan_600k', '4x_BooruGan_650k', '2x_Byousoku_5_Centimeter', '4x_OLDIES_290000_G_FINAL_interp_03', '2x_fidelbd_pokemodel_300000_G', '4x_OLDIES_ALTERNATIVE_FINAL', '2x_SHARP_ANIME_V1', '4xMeguUp130k', '4x_MeguUp_105000', '4x_NMKD-UltraYandere_300k', '4x_NMKD-UltraYandere-Lite_280k', '2x_pokemodel_lite_100000_G', '2x_SHARP_ANIME_V2', '2x_BIGOLDIES_415000_G', '2x_NMKD-YandereNeo-Lite_320k-10k', '4x_NMKD-YandereNeo-Lite_320k', '2x_Waifaux-NL3-SuperLite_latest_G', '4x_Training4Melozard_Anime_144000_G', '2x_LD-Anime_Skr_v1.0', '2x_KemonoScale_v2', 'falcoon300', '4xFalcoon']
</script>

# Upscale Wiki Model Database

State: Approved state of the page as of 23.12.2022 (since a newer unapproved version exists)

There are a lot of custom trained models on the [Upscale Wiki Model Database](https://upscale.wiki/wiki/Model_Database) that can be used for upscaling. Most of these Models use the ESRGAN architecture and can therefore be used with [chaiNNer](https://github.com/chaiNNer-org/chaiNNer).

When I first started upscaling I came across this site and was overwhelmed by the amount of models. While there is a textual description, I wanted to see the visual outputs/difference (so visually, not textually). This is why I has started this page. I thought I would now start on working to provide an example per category as they are listed in the wiki (also since I had started using models not listed there like for example on the Deblurring page the DeblurGANv2, MAXIM, NAFNet models etc so we can separate). Since the upscale wiki model database website should change/get updated from time to time these examples might not always be perfectly up-to-date/miss some models.

## Official Models

## Universal Models

Info:  
4x_2C2-ESRGAN_Nomos2K_200000_G.pth and 2x_Waifaux-NL3-SRResNet not supported by chaiNNer  
4x_muy4_035_1.pth broken download link  


<br/>
<div id="fateUniversalExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' :fileNamesList="universalModels" />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateUniversalExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button>
<br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details><summary>Example Details </summary>

 Name: Fate
 Input Image: 480x320 pixels  
 [Input Source File](https://github.com/Phhofm/upscale/tree/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg)  
 [Output Source Files](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/anime/fate)
</details>

## Realistic Photos

<br/>
<div id="buddyRealisticPhotosExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/photos/buddy.jpg' relativePathOutputFolder='output/lossless/photos/buddy' :fileNamesList="universalModels" />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('buddyRealisticPhotosExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button>
<br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details><summary>Example Details </summary>

 Name: Buddy
 Input Image: 480x320 pixels  
 [Input Source File](https://github.com/Phhofm/upscale/tree/main/sources/input/photos/buddy.jpg)  
 [Output Source Files](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/photos/buddy)
</details>

## Art/Pixel Art

## Drawn Material

### Anime

Info:  
The outputs named like '50k [epoch 253, psnr 30.316, ssim 0.8508, lpips 0.052897]' belong to the 'Sol Levante NTSC2HD' entry  

<br/>
<div id="fateAnimeExample">
<ImageSliderGithub :key="componentKey" inputImageURL='https://raw.githubusercontent.com/Phhofm/upscale/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg' relativePathOutputFolder='output/lossless/anime/fate' :fileNamesList="animeModels" />
</div>
<button v-if="fullscreenEnabled" @click="enterFullscreen('fateAnimeExample')" style="color:mediumseagreen;"><strong>FULLSCREEN (Exit with ESC)</strong></button>
<br/>
<button v-if="fullscreenEnabled" @click="forceRerender()" style="color:mediumseagreen;"><strong>Reset examples</strong></button>  
<br/>

<details><summary>Example Details </summary>

 Name: Fate
 Input Image: 480x320 pixels  
 [Input Source File](https://github.com/Phhofm/upscale/tree/main/sources/input/anime/FateStayNightUnlimitedBladeWorksOpening.jpg)  
 [Output Source Files](https://github.com/Phhofm/upscale/tree/main/sources/output/lossless/anime/fate)  
</details>

### Manga

### Cartoons

### Digital Anmiation

### Drawings

### General Animation

### Traditional Animation

## Image Restoration

### Image Compression

### Blurring

### Banding

### Halo Removal

### Noise

### Oversharpening

### DeToon

### Image De/Colorization

## Stylization
