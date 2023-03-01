 function convertNumberToText(num) {
    if (num > 9999999999 || num < -9999999999) {
      throw new Error('Number out of range');
    }
    var tnum = num
    if (tnum < 0) {
      num = -num
    }
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];
  
    if (num === 0) {
      return ones[0];
    }
  
    let text = '';
    let i = 0;
  
    while (num > 0) {
      const hundreds = num % 1000;
      if (hundreds > 0) {
        let str = '';
        if (hundreds < 20) {
          str = ones[hundreds];
        } else if (hundreds < 100) {
          str = tens[Math.floor(hundreds / 10)];
          if (hundreds % 10 > 0) {
            str += ' ' + ones[hundreds % 10];
          }
        } else {
          str = ones[Math.floor(hundreds / 100)] + ' hundred';
          if (hundreds % 100 > 0) {
            str += ' ' + convertNumberToText(hundreds % 100);
          }
        }
        if (i > 0) {
          str += ' ' + thousands[i];
        }
        if (text.length > 0) {
          text = str + ', ' + text;
        } else {
          text = str;
        }
      }
      num = Math.floor(num / 1000);
      i++;
    }
    if (tnum < 0) {
      text = `minus ${text}`
    }
    return text;
  }

  function convertNumberToTextIndian(num){
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  
    if (num === 0) {
      return "zero";
    }
  
    if (num < -9999999999 || num > 9999999999) {
      return "invalid number";
    }
    var tnum=num
    if(num<0){
      num=-num
    }
    let str = "";
  
    if (Math.floor(num / 10000000) > 0) {
      str += convertNumberToTextIndian(Math.floor(num / 10000000)) + " crore ";
      num %= 10000000;
    }
  
    if (Math.floor(num / 100000) > 0) {
      str += convertNumberToTextIndian(Math.floor(num / 100000)) + " lakh ";
      num %= 100000;
    }
  
    if (Math.floor(num / 1000) > 0) {
      str += convertNumberToTextIndian(Math.floor(num / 1000)) + " thousand ";
      num %= 1000;
    }
  
    if (Math.floor(num / 100) > 0) {
      str += ones[Math.floor(num / 100)] + " hundred ";
      num %= 100;
    }
  
    if (num > 0) {
      if (str !== "") {
        str += "and ";
      }
  
      if (num < 10) {
        str += ones[num];
      } else if (num < 20) {
        str += teens[num - 10];
      } else {
        str += tens[Math.floor(num / 10)];
        if (num % 10 > 0) {
          str += " " + ones[num % 10];
        }
      }
    }
    if(tnum<0){
      str='minus '+str
    }
    return str.trim();
  }
  
  

  export const cn2t=(num)=>{
     return convertNumberToText(num);
  }
  
  export const cn2in=(num)=>{
    return convertNumberToTextIndian(num);
 }
  