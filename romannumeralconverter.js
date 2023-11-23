function convertToRoman(num) {

    let roman = ["M" , "CM" , "D" , "CD" , "C" , "XC" , "L" , "XL" , "X" , "IX" , "V" , "IV" , "I" ];
    let arabic = [1000, 900, 500, 400, 100, 90, 50 ,40 ,10 ,9 , 5 ,4 ,1 ]
   //console.log(arabic.length == roman.length)
   let romanum = num
   let result = ""

   for (let i = 0; i < roman.length; i++) {
     //console.log(i)
     while (romanum >= arabic[i] ) {
       romanum = romanum - arabic[i];
       result = result + roman[i];
       //console.log(num,romanum,i ,result, num-romanum)
       if (romanum === 0 ) return result ;
     }
   }



   }

   convertToRoman(3);
