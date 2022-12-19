---
title: Changelog
description: Updates List
layout: doc
---
# Changelog

### 17. Nov 2022

- Images - Face Restoration Page
  - Remove duplicate examples
  - Add CodeFormer
  - Add additional woman example  
- Add Changelog Page

### 20. Nov 2022

- Images - Add Denoise Page
  - Add Directions example
  - Add Stefantiek example

### 24. Nov 2022

- Images - Add Deblurring Page
  - Add three GoPro examples
- Add Image Files Links for Deblurring, Denoise, Face Restoration and Favorites Page in details

### 25. Nov 2022

- Images - Update Deblurring Page
  - Add DeblurGANv2_MobileNet
  - Add DeblurGANv2_InceptionResNet-v2

### 01. Dec 2022

- Images - Update Multimodel Page with [Set 5](multimodels.md#set-5)
  - Add Set 5 Photo [Buddy example](multimodels.md#buddy-2)
    - Add HAT versions, Real_HAT_GAN_SRx4 was just released a week ago on 24 Nov 2022  
    - Add Swin2SR versions which released 27 Sept 2022
    - Add FeMaSE which released Oct 2022
    - Add LBNet which released Mai 2022
    - Add Poll (Voting for best results)
    - P.S. just as info "ruDALL-E-SR" is the re-trained version of Real-ESRGAN with custom dataset by Igor Pavlov which is used by ruDALL-E [Repo1](https://github.com/chenxwh/rudalle-sr) [Repo2](https://github.com/ai-forever/Real-ESRGAN) [Model](https://drive.google.com/drive/folders/16PlVKhTNkSyWFx52RPb2hXPIQveNGbxS)
  - Add Community Top 5 page template
  - Add Set 5 Photo [Grosser Mythen example](multimodels.md#grosser-mythen)
  - Add Set 5 Photo [Painting example](multimodels.md#painting-1)
  - Add Set 5 Photo [PC Build example](multimodels.md#pc-build-1)
  - Add Set 5 Photo [Snowboard example](multimodels.md#snowboard)

### 15. Dec 2022

- Images - Update Multimodels Page
  - Restructure Page, current (now updatable) examples on Top
  - Current examples redone in own Vue Image comparison component with vue select and fore rerender component when selection happens so that multi-image comparison is possible. The list is built by traversing the folders with nodejs and saving filenames and paths in a data.json file so the frontend can use it on page load, the images get bundled with the application. Now I can simply manage files and these examples will keep themselves updated with each new build (drag&dropping 300+ images through the imgsli website to update a single example is now in the past). With the new comparison component it is simpler to drag the image around than to try to hit the middle slider to move it around. With the mouse wheel one can zoom in up to a hardcoded limit.
  - Added AI Generated Images examples with vue component
  - Added Anime examples with the vue component. Models from the 'Anime' Section in the Upscale Wiki Model Database have been used additionally.
- Images - Remove single model pages
- Images - Models used page is now also automatically generated thorugh traversing files in some example directories since I generally named the output files according to the model used
- Images - update all examples from imgsli to new local vue component
- Images - Bundle all image sources files inside the app

### 16. Dec 2022

- Images - Multimodels
  - Replace anime example source files. 
  
  Based on feedback, I had overdone it with image compression (mozjpeg) (for page speed reasons) which led to artifacts appearing on all images. Reverted those back to the original jpg 100% output files I still have, additionally compressed with fileoptimizer. Will need to do the same for the other examples. I might redo all the upscales, but with a lossless image format output (either PNG (together with oxiPNG maybe or fileoptimizer again) or WEBP Lossless).

### 17. Dec 2022

- Images - Multimodels
  - Replace photo and ai-generated example source files. 
  - Fix file links (input and output source files) for these examples

### 19. Dec 2022

- Externalize image source files, not bundled into app anymore but load directly from github folders through github links (reduce bundle size because of github pages artifacts size limit (deploy abort because of timeout error) and also bundle/deploy times (shot up from ~8 min to >30min when bundling image sources) reduction). Also important if more files are added in the future. For the externalized sources folder the image sources files have been re-imported from commit 70420bd136c31e26c6bba8cf19e8d630848dc67e to make sure the image files are from before I had bundled and overdone it with compression (so to get the output files I got when running chaiNNer with JPG 100% output, still lossy though since jpg format) - added anime examples from later states again
  - Adapt component, load files from github links (raw.githubusercontent.com)
  - Adapt source links for examples (externalized source folder)