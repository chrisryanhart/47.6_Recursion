/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  // if not end of array
  if(nums.length === i) return 1;

  return nums[i] * product(nums, i+1);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words,i=0, count=0) {
  if(words.length === i) return count;
  let maxCount = words[i].length > count ? words[i].length : count;

  return longest(words,i+1,maxCount);
}

/** everyOther: return a string with every other letter. */
// what's time complexity here?
function everyOther(str, i=0, newString='', include=true) {
  if(str.length === i) return newString;

  if(include){
    newString += str[i];
  }
  include = !include;
  return everyOther(str, i+1, newString, include)
 
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// what's the time complexity here?
function isPalindrome(str,i=0,reverse='') {
  if(str.length === i) return true;

  let leftIdx = i;
  let rightIdx = str.length -1 - i;
  
  if(str[leftIdx] !== str[rightIdx]) return false;

  return isPalindrome(str,i+1,reverse)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(arr.length === i) return -1;

  if(arr[i] === val) return i;

  return findIndex(arr, val, i+1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, reverse='') {
  if(str.length === i) return reverse;

  reverse += str[str.length - 1 - i];
  return revString(str,i+1,reverse)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  for(let key in obj){
    if(typeof(obj[key])==='string'){
      arr.push(obj[key]);
    }
    if(typeof(obj[key])==='object') gatherStrings(obj[key],arr)
    
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
