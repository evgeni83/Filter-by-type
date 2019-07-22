'use strict';

function filterByType() {
  var arr = Array.prototype.slice.call(arguments);
  var dataType = arr[0];
  arr.shift();
  var newArr = arr.filter(function (item) {
    return typeof(item) === dataType;
  });
  console.log(newArr);
};

filterByType('number', 12, 'hello', 885, 32, 'world', true, 'Yo!', false, 8);
filterByType('boolean', 12, 'hello', 885, 32, 'world', true, 'Yo!', false, 8);
filterByType('string', 12, 'hello', 885, 32, 'world', true, 'Yo!', false, 8);
