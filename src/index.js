module.exports = function toReadable (n) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',"eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const dozens = [' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (n == 0) { 
    return 'zero'; 

  } if (n < 20) {
    return units[n];

  } if (n == 10){
    return dozens[1];

  } if (n < 100) {
    return `${dozens[n.toString()[0]]}${n.toString()[1] > 0 ? ' ' + units[n.toString()[1]] : ''}`;

  } if (n == 100) {
    return 'one hundred';

  } 
  if (100 > n < 1000) {
    return units[n.toString()[0]] + ' hundred' + `${n % 100 ? ' ' + toReadable(n % 100) : '' }`;
  } 
}