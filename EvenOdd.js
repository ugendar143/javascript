let n=23456789
let evensum=0;
let oddsum=0;
while(n > 0){
    let r = n % 10;
    n = math.floor(n / 10);
    if(r%2===0) evensum+=r;
    if(r%2!=0) oddsum+=r;
}
console.log("even sum="+evensum);
console.log("oddsum="+oddsum);S