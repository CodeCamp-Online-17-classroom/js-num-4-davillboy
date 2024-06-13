// write code here
function formatNumber(number) {

  if (isNaN(number)) {
    return "โปรดใส่ตัวเลข";
  }
  
  let formattedNumber = parseFloat(number).toFixed(2);

  return formattedNumber;
}

console.log(formatNumber(10));     
console.log(formatNumber(5.1));     
console.log(formatNumber(3.1289));  
console.log(formatNumber("abc"));  
