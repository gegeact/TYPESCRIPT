// type data pada balikan function

function getName(): string {
    return "hello, my name is Gegeact"
}

console.log(getName());

function getAge(): number {
    return 123;
}

function printName(): void {
    console.log("print name");
}

printName();

///////////argumen type

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

const result = multiply(2, 5);
console.log(result);

//function as type
type age = number;
let age: number = 123;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

console.log();

