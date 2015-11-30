exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    var letArr = str.split('');

    for(var i = 0; i < letArr.length; i++){
      if(letArr[i] === letArr[i-amount]) {
        letArr.splice(i,1);
        i--;
      }
    }
    return letArr.join('');
  },


  wordWrap : function(str, cols) {
    var splitString = str.split(' ');
    var wordWrapString = [splitString[0]];
    for (i = 1; i < splitString.length; i++) {
      if ((wordWrapString[wordWrapString.length - 1].length + splitString[i].length + 1) <= cols) {
        wordWrapString[wordWrapString.length - 1] = wordWrapString[wordWrapString.length - 1] + " " + (splitString[i]);
      } else {
        wordWrapString.push(splitString[i]);
      };
    };
    return wordWrapString.join('\n')
  },


  reverseString: function(str) {

    var revArr = [];

    var strArr = str.split('');

    for(var i = strArr.length-1; i >= 0; i--){
      revArr.push(strArr[i]);
    }
    var final = revArr.join('');
    return final;
  }
};
