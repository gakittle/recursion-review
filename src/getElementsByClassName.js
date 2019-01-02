// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var $body = document.body;
  var elementsWithClass = [];

  var traverseChildNodes = function(elem) {
    var elemClasses = elem.classList;
    if (_.contains(elemClasses, className)) {
      elementsWithClass.push(elem);
    }
    var children = elem.children;
    if (elem.children.length > 0) {
      _.each(children, function(child) {
        traverseChildNodes(child);
      });
    }
  };

  traverseChildNodes($body);

  return elementsWithClass;
};
