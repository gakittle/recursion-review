// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //number, object, boolean
  console.log(obj);

  if (typeof(obj) === 'object') {

    if (Array.isArray(obj)) {
      var contents = '';
      _.each(obj, function(elem) {
        contents += stringifyJSON(elem) + ',';
      });
      contents = contents.slice(0, contents.length - 1);
      return '[' + contents + ']';
    
    } else if (obj === null) {
      return 'null';
    
    } else {
      var contents = '';
      for (var key in obj) {
        if (typeof(obj[key]) !== 'function' && obj[key] !== undefined) {
          contents += `"${key}"` + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      contents = contents.slice(0, contents.length - 1);
      return '{' + contents + '}';
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
