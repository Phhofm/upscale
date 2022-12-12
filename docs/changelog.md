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

### 12. Dec 2022

- Images - Update Multimodels Page
  - Restructure Page, current examples on Top
  - Current examples redone in own Vue Image comparison component. Now I can simply manage files and these examples will keep themselves updated with each new build (triggered on commit, traverses files in directory with nodejs and outputs a data.json which is processed by client page load). So drag&dropping 300+ images through the imgsli website to update a single example is now in the past. With the new comparison component it is simpler to drag the image around than to try to hit the middle slider to move it around. With the mouse wheel one can be zoom in up to a hardcoded limit.
  - Added Anime 2x examples with the vue component. Models from the 'Anime' Section in the Upscale Wiki Model Database have been used additionally, also Bubbles AnimeScale swinir model.  
- Images - Remove single model pages
- Images - Models used page is now also automatically generated thorugh traversing files in some example directories since I generally named the output files according to the model used
