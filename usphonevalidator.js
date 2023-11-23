function telephoneCheck(str) {

  let phone = str.match(/\d/g)
  let phonelength = phone.length
  let paren = []
  let dash = []

  if (str.match(/[()]/g) != null) {paren = str.match(/[()]/g) }
  if (str.match(/\-/g) != null) {dash = str.match(/\-/g) }


  console.log(paren)
  console.log(str.match(/[()]/g))
  console.log(paren.length != 2 && paren.length != 0)
  console.log(/^[()].*[()]$/gi.test(str))
  console.log(dash.length >= 3)

  if (dash.length >= 3) return false
  if (/^[()].*[()]$/gi.test(str)) return false
  if ((paren.length != 2 && paren.length != 0)) return false
  if (str[0] == "-") return false
  if (phone.length > 11 | phone.length < 9) return false
  if (phonelength == 10) return true
  return (phonelength == 11 && phone[0] == 1)




  return false;
}

telephoneCheck("2(757)6227382");
