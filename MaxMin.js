let num =98756
let remainder
let max=0
let min=9
while(num!=0){
    remainder=num%10
    num=num/10
    num=parseInt(num,10)
    if (remainder>max)max=remainder
    if(remainder<min)min=remainder
}
console.log("max--->"+max)
console.log("min--->"+min)