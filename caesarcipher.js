function rot13(str) {
  let alphabet = [ "A", "B", "C", "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V", "W" , "X" ,"Y" ,"Z" ];
  //console.log(alphabet)

  let rotarr= [...alphabet]


 let rotlength = 13;

for (let i = 0; i < alphabet.length - rotlength; i++ ) {

  rotarr[i] = alphabet[i+rotlength]
  //console.log(i,alphabet.length,rotarr)
  //console.log(alphabet,"alphabet",rotarr,"rotarr",i)

}

for (let i = 0; i < rotlength; i++) {

  rotarr[i-rotlength+alphabet.length] = alphabet[i];
  //console.log(rotarr)
}


  //str.map(num => )

  //return str;
  //console.log(rotarr[1].toLowerCase())


for (let i = 0; i < alphabet.length; i++) {
  let regex = new RegExp(alphabet[i],"g")
  let alpha = alphabet[i]
  str = str.replaceAll(regex,rotarr[i].toLowerCase())
  //console.log(str.replaceAll(regex,alphabet[i]).toUpperCase(),rotarr[i],alphabet[i],regex,i)
  //console.log(str)

}
//console.log(str.toUpperCase())

return str.toUpperCase()

}

//console.log(rotarr)

//str1 = "pattern"
//var re = new RegExp(str1, "g");
//"pattern matching .".replace(re, "regex");




rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
