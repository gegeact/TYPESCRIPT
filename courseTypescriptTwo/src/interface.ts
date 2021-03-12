interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGamming: boolean;

    constructor(name: string, isGamming: boolean) {
        this.name = name;
        this.isGamming = isGamming;
    }
    on(): void {
        console.log('nyala');
    }
    off(): void {
        console.log('mati');
    }
    
}

class Macbook implements Laptop {
    name: string;
    keyboardLight: boolean;

    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on(): void {
        console.log('nyala');
    }
    off(): void {
        console.log('mati');
    }
    
}

let asus = new Asus('asus', true);
console.log(asus.on());
console.log(asus.off());

let mb = new Macbook('mb', true);
console.log(mb.on());
console.log(mb.off());