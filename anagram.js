//This file will take input two strings and check whether the one string is an anagram of the other one.
function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
  }
  
  // This function will break both the stings and check whether the string are anagram or not.
  function formatStr(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
  
  module.exports = isAnagram;