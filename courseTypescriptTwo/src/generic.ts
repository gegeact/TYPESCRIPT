function getData(value: any) {
    return value;
}

console.log(getData("gegeact").length);
console.log(getData(123).length);


//generic
function myData<T>(value: T) {
    return value;
}

console.log(myData("gegeact").length);
console.log(myData(123));

const arrowfucntion = <T>(value: T) => {
//kalo pakai jsx pakai extends < T extend > || <T,>
}


