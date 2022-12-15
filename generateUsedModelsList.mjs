// since I generally use the model names as the file output names in the examples, I simply extract all unique example file base names and get an automatically updated models list this way

import data from './data.json' assert { type: "json" };
import fs from 'fs'
import Os from 'os'

// Create Set so we can add only unique items so we get all the models
let models = new Set();

// traverse one kind of each example (since i used different models for anime for example than photos)
let examples = ['multimodel/current/photos/buddy', 'multimodel/current/ai_generated/child', 'multimodel/current/anime/fate', 'deblur/GOPRO_Large/test/GOPR0384_11_00/output', 'denoise/output/directions', 'facerestoration/buddy']

// dont use windows, i mean it works here but for the examples on the markdown pages I pass as a props a hardcoded relative path string.
// on windows /images/ .. would look like \\images\\, so on the vue image comparison component i would need to check for os and replace all / with \\ in the file path strings.
// But I mean i just shall not switch between windows and ubuntu machines for development. Because for the github build job I have defined ubuntu-latest for the build.
if (Os.platform() === 'win32') {
  console.log('Windows system detected, using backslashes')
  examples = ['multimodel\\curren\\photos\\buddy', 'multimodel\\current\\ai_generated\\child', 'multimodel\\current\\anime\\fate', 'deblur\\GOPRO_Large\\test\\GOPR0384_11_00\\output', 'denoise\\output\\directions', 'facerestoration\\buddy']
}

examples.forEach(example => {
  // get the relevant files and extract model names
  let relevantFiles = data.filter(file => file.relativePath.startsWith(example))
  let modelNames = relevantFiles.map(file => file.basename)

  // only gets added if unique
  modelNames.forEach(name => {
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
