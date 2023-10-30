let n=[9,4,9,6,7,4];
let p={};
 for(let each of n){
    if (each in p){
        p[each]=p[each]+1;
    }else {
        p[each]=1;
    }

}
console.log(p);
for (let each in p){
    if(p[each]>1){
        console.log(p.each);
    }
}