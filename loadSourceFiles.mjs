// getting all the image source files. So we can build the vue image comparison slider component locally bundled in instead over github api (limited requests)
// im writing all the source files into a large data.json file

import readdir from 'readdir-plus'
import fs from 'fs'

readdir('sources', { stat: false }, async function (err, files) {

  // clean up object, remove unnessesary attributes from object to make the json.data smaller
  const keys = Object.keys(files);

  keys.forEach((key) => {
    delete files[key].name;
    delete files[key].path;
    delete files[key].extension;
    delete files[key].type;
  });

  let data = JSON.stringify(files);

  await fs.writeFile('./data.json', data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("Source json data created successfully\n");
    }
  });
});



// it is a big array with objects in them
// this is what a single object in the array looks like
// * would look like if i did not clean it up
/*
{
    name: 'snowboard.jpg',
    path: '/home/phhofm/Dokumente/GitHub/upscale/sources/favorites/input/snowboard.jpg',
    relativePath: 'favorites/input/snowboard.jpg',
    basename: 'snowboard',
    extension: '.jpg',
    stat: Stats {
      dev: 2049,
      mode: 33204,
      nlink: 1,
      uid: 1001,
      gid: 1001,
      rdev: 0,
      blksize: 4096,
      ino: 28574627,
      size: 99585,
      blocks: 200,
      atimeMs: 1670835939178.3894,
      mtimeMs: 1669794373809.7283,
      ctimeMs: 1669794373809.7283,
      birthtimeMs: 1669794373809.7283,
      atime: 2022-12-12T09:05:39.178Z,
      mtime: 2022-11-30T07:46:13.810Z,
      ctime: 2022-11-30T07:46:13.810Z,
      birthtime: 2022-11-30T07:46:13.810Z
    },
    type: 'file'
  }
  */