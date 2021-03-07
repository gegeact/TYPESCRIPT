function getData(value: any) {
    return value;
}
//(value adalah parameter)
console.log(getData("Gegeact").length);
console.log(getData(123).length);
//any tanpa generic type angka bisa di LENGTH
//hstudny angka tidak bisa di lenght
//jadi pakai generic type

//generic
function myData<T>(value: T) {
    return value;
}
//<T>/type ga harus T sebenernya
console.log(myData("Gegeact").length);
console.log(myData(123));

//arrowfuntion typescript biasa
const arrowFunc = <T>(value: T) => {

}

//typescript jsx
const arrowFunc2 = <T, >(value: T) => {

}
