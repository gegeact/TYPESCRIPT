import Ilaptop from "./Ilaptop";
import * as Keyboard from "./Keyborad";
import { b } from "./Keyborad";

//karna keyboard banyak data yang di import jadi pakai * as
//kalo mau import salah satu data pakai { lalu masukan nama data}
abstract class BaseLaptop<T> implements Ilaptop<T> {
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(
        name: string, 
        type: T,
        numeric: boolean,
        touchButton: boolean 
    ) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }

    a(): void {
        console.log(Keyboard.a());
    }

    b(): void {
        console.log(Keyboard.b());
        
    }

}

export default BaseLaptop;


