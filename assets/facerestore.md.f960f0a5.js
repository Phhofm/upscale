import{_ as a,c as i,o,a as t,b as e}from"./app.1ef1a9a3.js";const s="/upscale/assets/facerestoration_codeformer_teeth.aaa1c549.gif",y=JSON.parse('{"title":"Face Restoration","description":"Visual Comparison of face restoration models","frontmatter":{"title":"Face Restoration","description":"Visual Comparison of face restoration models","layout":"doc"},"headers":[{"level":3,"title":"Details","slug":"details","link":"#details","children":[]},{"level":2,"title":"Buddy","slug":"buddy","link":"#buddy","children":[]},{"level":2,"title":"Woman","slug":"woman","link":"#woman","children":[]}],"relativePath":"facerestore.md"}'),r={name:"facerestore.md"},n=t(`<h1 id="face-restoration" tabindex="-1">Face Restoration <a class="header-anchor" href="#face-restoration" aria-hidden="true">#</a></h1><p>Face Restoration Models are meant to restore faces after an upscale because they often come out a little weird. Here I simply use some upscales and then run the face restoration model on them so you can compare which restoration model you like best.</p><h3 id="details" tabindex="-1">Details <a class="header-anchor" href="#details" aria-hidden="true">#</a></h3><p>Creation Date: 17. Nov 2022<br> Models used: 6<br> Set Name: &#39;Face Restoration&#39;</p><details><summary>Models List</summary><pre><code>GFPGANCleanv1-NoCE-C2
GFPGANv1.2
GFPGANv1.3
GFPGANv1.4
RestoreFormer
CodeFormer
</code></pre></details><h2 id="buddy" tabindex="-1">Buddy <a class="header-anchor" href="#buddy" aria-hidden="true">#</a></h2><p>The input is the buddy example, the SwinIR-L taken from the &#39;Favorites&#39; page. CodeFormer has been run with fidelity iteration set in 0.1 steps</p>`,7),p=e("div",{style:{border:"0px solid rgb(201, 0, 1)",overflow:"hidden",margin:"15px auto","max-width":"100%"}},[e("iframe",{allowfullscreen:"",scrolling:"no",src:"https://imgsli.com/MTM0ODk1",style:{width:"100%",border:"0px none",height:"55vmin","min-height":"310px","margin-top":"-75px","margin-bottom":"-30px"}},`
  `)],-1),l=t('<p><a href="https://imgsli.com/MTM0ODk1" target="_blank">Open in external tab</a></p><details><summary>Details</summary><p><p>Creation Date: 17. Nov 2022</p><p>Original Input Image: 480x320 pixels</p><p>Scaling Factor: 4</p><p>Upscale Model: SwinIR-L</p><p>Input Image: 1920x1280 pixels</p><p>Output Image: 1920x1280 pixels</p><p>Type: Photo</p></p></details><h2 id="woman" tabindex="-1">Woman <a class="header-anchor" href="#woman" aria-hidden="true">#</a></h2><p>This input is the img_005 from the Set5 dataset, specifically the version here: <a href="https://github.com/jbhuang0604/SelfExSR/blob/master/data/Set5/image_SRF_4/img_005_SRF_4_LR.png" target="_blank" rel="noreferrer">https://github.com/jbhuang0604/SelfExSR/blob/master/data/Set5/image_SRF_4/img_005_SRF_4_LR.png</a>, upscaled 4x with SwinIR-L.</p>',4),d=e("div",{style:{border:"0px solid rgb(201, 0, 1)",overflow:"hidden",margin:"15px auto","max-width":"100%"}},[e("iframe",{allowfullscreen:"",scrolling:"no",src:"https://imgsli.com/MTM0ODk0",style:{width:"100%",border:"0px none",height:"45vmin","min-height":"310px","margin-top":"-75px","margin-bottom":"-30px"}},`
  `)],-1),h=t('<p><a href="https://imgsli.com/MTM0ODk0" target="_blank">Open in external tab</a></p><p>Just to be aware that such an effect might happen, if we go too low with CodeFormers fidelity in this example, the hat gets messed up:</p><p><img src="'+s+'" alt="Teeth"></p><details><summary>Details</summary><p><p>Creation Date: 17. Nov 2022</p><p>Original Input Image: 57x86 pixels</p><p>Scaling Factor: 4</p><p>Upscale Model: LDSR (100 steps)</p><p>Input Image: 228x344 pixels</p><p>Output Image: 228x344 pixels</p><p>Type: Photo</p></p></details>',4),m=[n,p,l,d,h];function c(_,u,g,f,x,b){return o(),i("div",null,m)}const T=a(r,[["render",c]]);export{y as __pageData,T as default};
