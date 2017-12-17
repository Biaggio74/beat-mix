// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (reqType,index,newPresetArray) => {
  let array = [];
  if (reqType === 'GET' || reqType === 'PUT') {
    if ( index >= 0  &&  index < presets.length) {
      array.unshift(200);
      if (reqType === 'GET') {
        // for GET requests
        array.push(presets[index]);
      } else {
        //for PUT requests
        array.push(presets[index]=newPresetArray)
      }
      return array;
    } else {
      array.unshift(404)
    };
    return array;
  }
  return [400];
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
