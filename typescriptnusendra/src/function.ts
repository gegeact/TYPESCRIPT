// typedata pada balika function

function getName(): string {
    return "Hello, My name is Gege";
}

console.log(getName());

function getAge(): number {
    return 123;

}

function printName(): void {
    console.log("print name");
}

printName();

//////////argument as type

function multiply(val1: number, val2:number): number {
    return val1 * val2;
}

const result = multiply(12, 5);
console.log(result);

///////// function as type

type Tambah = (val1:number, val2:number)=> number;

const Add: Tambah = (val1:number, val2:number); number => {
    return val1 + val2;
}
