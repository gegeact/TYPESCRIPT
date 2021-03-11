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

//deafult parameter
const fulName = (first: string, last: string = "Gumelar"): string => {
    return first + " " + last;
}
// last: string = "gumelar" -> adalah default field, sehingga bila di panggil ahnya 1 nama,
//akan menggunakan default parameter
console.log(fulName("Gegeact"));

//optional parameter
const getUmur = (val1: string, val2?: string): string => {
    return val1 + " " + val2;
}
//optional parameter yaitu, bilakita data b tidak di isi 
//maka yang muncul adalah undifine
//optional parameter (?)
//type data number ga bisa di undifine or optional parameter
console.log(getUmur("A","gege"));




