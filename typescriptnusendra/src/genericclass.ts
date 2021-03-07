class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}
//(...elements) rest parameter tanpa [] (1,2,3)
let numbers = new List<number>(1, 2, 3);
numbers.add(4);
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());

let random = new List<number | string>(1, "a", "b", 2);
random.add("sdad");
random.add(123);
random.addMultiple(1,"asdad");
console.log(random.getAll());
