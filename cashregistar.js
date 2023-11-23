function checkCashRegister(price, cash, cid) {
   function precise(x) {
  return x.toPrecision(3);
}

function financial(x) {
  return Number.parseFloat(x).toFixed(4);
}


let MathUtils = {
    roundToPrecision: function(subject, precision) {
        return +((+subject).toFixed(precision));
    }
}

  console.log(cid[[0],[1]])
  let changeArray = [0,0,0,0,0,0,0,0,0]
  let changevalue = 0
  let unit = [0.01,0.05,0.1,0.25,1,5,10,20,100]
  let counter = 0
  let cidtotal = 0
  let originalcash = cash
  console.log(changeArray.length,cash+100,price-changevalue)

  for (let i = 8; i >=0; i--) {
    cidtotal += cid[i][1]
    console.log(i,cidtotal)
  }

if (cidtotal< cash-price) return {status: "INSUFFICIENT_FUNDS", change: []}

for (let i = 8; i >= 0 ; i--) {
  while (cid[i][1] >= financial(unit[i]) && financial(cash - price) >= unit[i] && financial(cid[i][1]) != 0  ) {


    cid[i][1] = Number(financial(cid[i][1] - unit[i]))
    cash = cash - unit[i]
    changeArray[i] = Number(financial(changeArray[i] + unit[i]))
    //console.log(changevalue,"hello",cash,i,unit[i])
    changevalue = changevalue + unit[i]



    counter++
    console.log(counter,cash,changevalue,financial(cash-price),unit[i],i,cid)
    if (unit[i] == 5) {
      console.log(cid[i][1] >= financial(unit[i]),"hello",financial(cid[i][1]),financial(unit[i]))
    }


    }
    //console.log(i)
}
let can = []
let closed = [["ONE HUNDRED",changeArray[8]],["TWENTY",changeArray[7]],["TEN",changeArray[6]],["FIVE",changeArray[5]],["ONE",changeArray[4]],["QUARTER",changeArray[3]],["DIME",changeArray[2]],["NICKEL",changeArray[1]],["PENNY",changeArray[0]]]

closed = closed.reverse()


console.log("wowowow")



if (changeArray[8] > 0) {
  can.push(["ONE HUNDRED",changeArray[8]])


}
if (changeArray[7] > 0) {
  can.push(["TWENTY",changeArray[7]])


}
if (changeArray[6] > 0) {
  can.push(["TEN",changeArray[6]])


}
if (changeArray[5] > 0) {
  can.push(["FIVE",changeArray[5]])


}
if (changeArray[4] > 0) {
  can.push(["ONE",changeArray[4]])


}
if (changeArray[3] > 0) {
  can.push(["QUARTER",changeArray[3]])


}
if (changeArray[2] > 0) {
  can.push(["DIME",changeArray[2]])


}
if (changeArray[1] > 0) {
  can.push(["NICKEL",changeArray[1]])


}
if (changeArray[0] > 0) {
  can.push(["PENNY",changeArray[0]])


}



console.log(can,"1231",originalcash-changevalue-price< 0.0000001,originalcash,changevalue,price)

if (originalcash-changevalue-price > 0.0000001) return {status: "INSUFFICIENT_FUNDS", change: []}



//console.log(financial(cash),price,financial(changevalue),cid,changeArray)
  let obj = {status: "OPEN" , change: ["FIVE", 55]}
// if (cash < price) {
 // obj.status = "INSUFFICIENT_FUNDS";
//} else {
 // obj.status = "Open";
//}

 obj.change = can

console.log(obj,cidtotal+price-originalcash,closed)

if (cidtotal+price-originalcash < 0.000001) {obj.change=closed
 obj.status="CLOSED"
 console.log("if",obj)}

  return obj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
