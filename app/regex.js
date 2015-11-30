exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var matches = str.match(/\d+/g);
    if (matches != null) {
        return true;
      }
    else {
      return false;
    }
  },

  containsRepeatingLetter : function(str) {

    var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str)
    return hasDuplicates;

  },

  endsWithVowel : function(str) {

    var char = str.slice(-1).toLowerCase();

    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
      return true;
    }
    else {
      return false;
    }

  },

  captureThreeNumbers : function(str) {
    if (/(\d{3})/.test(str)){
      return (str.match(/(\d{3})/))[0];
    } else {
      return false;
    };
  },

  matchesPattern : function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD : function(str) {
    return /^\$(([1-9][0-9]{0,2}(,\d{3})*)|0)?(\.\d{2})?$/.test(str)
  }
};
