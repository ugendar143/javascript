
let a=[4,6,8,1,5,9];


function sorting(array){
    for (i=0; i<array.length; i++){
        for (j=i+1;j<=array.length; j++){
            if (array[i]>array[j]){
                let temp = array[i];
                array[i]=array[j];
                array[j]=temp;
                // console.log(i, j , c);
            }
        }
    }
    console.log(array);

}

sorting(a);



