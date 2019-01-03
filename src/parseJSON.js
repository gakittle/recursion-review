// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
const parseJSON = json => {
  console.log(json);
  // if character at [0] is {
    // declare {}
    // split contents between first { and last }
    // split contents by commas into key-value pairs
    // for each pair
      // split between key and value
      // assign obj.key = parseJSON(value);
    // return obj;
  
  if (json[0] === '{') {
    console.log('its an object!');
    let obj = {};
    const contents = json.substring(1, json.length - 1);
    if (contents.length > 0) {
      const pairs = contents.split(',');
      _.each(pairs, function(pair) {
        const splitPair = pair.split(':');
        obj.splitPair[0] = parseJSON(splitPair[1]);
      });
    }
    
    return obj;
  
  } else if (json[0] === '[') {
    let arr = [];
    const contents = json.substring(1, json.length - 1);
    if (contents.length > 0) {
      const elements = contents.split(',');
      _.each(elements, function(elem) {
        arr.push(parseJSON(elem));
      });
    }
    
    return arr;
  }
  
  // else if character at [0] is [
    // declare [];
    // slice contents from first [ and last ]
    // split contents by comma into elements
    // for each element
      // arr.push(parseJSON(element));
    // return arr;
  

  else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (json === 'null') {
    return null;
  } else return json;
};
