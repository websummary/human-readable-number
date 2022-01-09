module.exports = function toReadable (n) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',"eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
   if (n < 20) {
     return units[n];}

   if (n < 100) {
     return `${dozens[String(n)[0]]}${String(n)[1] > 0 ? ' ' + units[String(n)[1]] : ''}`;}

   if (n < 1000) {
     return `${units[String(n)[0]]} hundred${n % 100 ? ' ' + toReadable(n % 100) : '' }`;} 
}