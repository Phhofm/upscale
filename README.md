# README

Website can be accessed here: [https://phhofm.github.io/upscale/](https://phhofm.github.io/upscale/)

## Story

My interest in upscaling started when I generated images with Midjourney AI and thought about enlarging those so I could use one as a desktop background image.
I started using the [chaiNNer application](https://github.com/chaiNNer-org/chaiNNer "chaiNNer application") and therefore looking for models. At first I just used the UltraSharp model but after I while I got curious how it compared to other models.
So i tested the Universal Models, which led me to make a [youtube video](https://youtu.be/0TYRDmQ5LZk "youtube video") so others that were interested too could visually compare for themselves.
Then I thought upon expanding to some more models, which led me to make [this reddit post](https://www.reddit.com/r/ArtificialInteligence/comments/yaxs13/image_upscaling_models_compared_general_photo_and/?utm_source=share&utm_medium=web2x&context=3).
Which then led me to make a test with models from the art category plus more universal models for the people in the stablediffusion channel, so I created [this post](https://www.reddit.com/r/StableDiffusion/comments/yev37i/comparison_of_upscaling_models_for_ai_generated/ "this post").
And since I tested out more and more and it led to more and more examples, I decided to create this website about it so I have all the examples in one place.

## Purpose

The purpose of this website is for people to visually compare for themselves the resulting output of different upscaling models, mostly because beauty is in the eye of the beholder, meaning different people might favor different models. This will allow them to use the model they like best for upscaling their own images.

## Dev notes

These will be executed automatically when npm run docs:dev or npm run docs:build are run -

node loadSourceFiles traverses the files in the source folder to get all the images we want to include in the examples. This is to replace the imgsli images because the examples became so big in the multimodels page that I needed to drag&drop 300+ images just for a single example, and to update such an example with an additional image one would need to repeat this process. So updating examples became painful (this was why I used sets). Now I included a vue component to replace imgsli where I first used the github api to load the examples from the github folders themselves, but building the application when developing would make multiple api.github calls so I hit a request limit. So I wanted to bundle the images in. Since Vite only bundles in explicitly loaded images in code (and adds a hash to their names) I moved the image sources folder into the bundle. This script is executed first since we need to traverse the folder to get all the files we want to use in the comparisons, so we create the data.json file which we then load client side since we cannot traverse some directories with vue but we want to do it server-side with node when generating the page. This way the examples that use this stay up to date automatically with each new commit. So I can simply manage the image files and the examples will update themselves.

node generateUsedModelsList in the same way keeps the used models list page updated by extracting the base filenames (since I generally named my output file names according to the model used) and only adding unique items to that list and then sorting the list before displaying it on the page. I still need to add a new example to the examples list so these are considered.

Remember to keep the changelog updated

Now after all these changes which allow you to simply manage the files to update the examples have fun again simply testing out new models :D
