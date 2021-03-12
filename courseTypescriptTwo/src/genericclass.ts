class list<T>  {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }
    //why (...elements) karena itu untuk pasing 3 parameter-> rest parameter 

    add(elements: T): void {
        this.data.push(elements);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}

let numbers = new list<number>(1, 2, 3); 
numbers.add(4);
numbers.addMultiple(1,2,3);
console.log(numbers.getAll());

let random = new list<number | string>(1,2,'b',2);
random.add("duewhudha");
random.add(1233);
random.addMultiple('dwd',12);
console.log(random.getAll());


