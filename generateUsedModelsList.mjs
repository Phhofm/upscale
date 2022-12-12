// since I generally use the model names as the file output names in the examples, I simply extract all unique example file base names and get an automatically updated models list this way

import data from './data.json' assert { type: "json" };
import fs from 'fs'

// Create Set so we can add only unique items so we get all the models
let models = new Set();

// TODO add one anime example to this list once updated
// traverse one kind of each example (since i used different models for anime for example than photos)
let examples = ['multimodel/current/photos/buddy','multimodel/current/ai_generated/child','deblur/GOPRO_Large/test/GOPR0384_11_00/output','denoise/output/directions','facerestoration/buddy']
examples.forEach(example => {
  // get the relevant files and extract model names
  let relevantFiles = data.filter(file => file.relativePath.startsWith(example))
  let modelNames = relevantFiles.map(file => file.basename)
  
  // only gets added if unique
  modelNames.forEach(name =>
  {
    models.add(name);
  })
});

await fs.writeFile('./models.json', JSON.stringify([...models]), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Models used data created successfully\n");
  }
});
