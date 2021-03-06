interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGamming!: boolean;

    constructor(name: string, isGamming: boolean) {
        this.name = name;
        this.isGamming  = isGamming;
    }
    
    on(): void {
        console.log("nyala");
    }
    off(): void {
        console.log("Mati");
    }
    
}

class MacBook implements Laptop {
    name: string;
    keyboardLight: boolean;

    constructor(name : string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight  = keyboardLight;
    }
    on(): void {
        console.log("nyala");
    }
    off(): void {
        console.log("Mati");
    }
    
}

let asus = new Asus('Asus', true);
console.log(asus.on());
console.log(asus.off());