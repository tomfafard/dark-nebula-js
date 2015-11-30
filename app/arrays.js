exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {

    for(var i = 0; i < arr.length; i++){
      if(arr[i]==item) {
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  },




  append : function(arr, item) {

    arr.push(item);

    return arr;

  },

  truncate : function(arr) {

    arr.pop();

    return arr;

  },

  prepend : function(arr, item) {

    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {

    arr.shift();
    return arr;

  },

  concat : function(arr1, arr2) {

    var newArray = arr1.concat(arr2);
    return newArray;

  },

  insert : function(arr, item, index) {

    arr.splice(index,0,item);
    return arr;

  },

  count : function(arr, item) {

    var counter = 0;

    for(var i = 0; i < arr.length; i++){
      if (arr[i] == item) {
        counter += 1;
      }
    }

    return counter;

  },

  duplicates : function(arr) {

    var arrayOne = [];
    var arrayTwo = [];

    for(var i = 0; i < arr.length; i++){
      if (arrayOne.includes(arr[i])) {
        if (arrayTwo.includes(arr[i]) == false) {
          arrayTwo.push(arr[i]);
        }
      }
      else{
        arrayOne.push(arr[i]);
      }
    }

    return arrayTwo;

  },

  square : function(arr) {

    squaredArr = [];

    for(var i = 0; i < arr.length; i++){
      var squared = Math.pow(arr[i], 2);
      squaredArr.push(squared);
    }

    return squaredArr;

  },

  findAllOccurrences : function(arr, target) {

    var occurences = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == target){
        occurences.push(i);
      }
    }

    return occurences;

  }
};
