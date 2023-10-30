let matrix = [  [8,7,6,5], [4,5,1,9], [7,8,9,8]]
for (let each of matrix){
    let count=1
    let sum = 0
    for (let number of each ){
        sum=sum+number
    }
    console.log("colum"+count+"-->" + sum);
    count++;
}