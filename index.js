let a=400
let b=300
let c=350
let smax

if((a>b)&&(c>b)&&(a<c) ){
    smax =a
}
else if(b > c){
    smax=b
}
else{
    smax=c
}

console.log("smax--->"+smax)