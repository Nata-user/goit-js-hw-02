const formatString = function (string) {
  const result = string.length
  if (result <= 40) {
    string;
   return string;
  } 
  else 
  string.slice(0, 40).split(' ').join('...');
 return  string.slice(0, 40).split(' ').join('...');
}
  
console.log(formatString("Curabitur ligula sapien, tincidunt non."))
// вернется оригинальная строка
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."))
// вернется форматированная строка
console.log(formatString("Curabitur ligula sapien."))
// вернется оригинальная строка
console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."))
// вернется форматированная строка

 


