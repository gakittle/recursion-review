// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //number, object, boolean
  console.log(obj);

  if (typeof(obj) === 'object') {

    if (obj === null) {
      return 'null';
    }
  
  } else if (typeof(obj) === 'number') {
    return obj.toString();
  
  } else if (typeof(obj) === 'boolean') {
    if (obj) {
      return 'true';
    } else {return 'false';}
  
  } else if (typeof(obj) === 'string') {
    return `"${obj}"`;
  }
};
