export class User {
    public name: string;
    constructor(name: string, public age: number) {
        this.name = name;
    }
    // //as simple
    // constructor(public name: string) {
    // } 
    setName(value: string): void {
        this.name = value;
    }
    getName = (): string => {
        return this.name;DOMTokenList
    }
}

// let user = new User("Gegeact",29);
// console.log(user);


//public =bisa di akses dari semua class / dari luar class
//protected = hanya bisa d akses dari class tersebut, dan kelas turunannya
//private = hanya bisa di akses dari class itu sendiri
//INHERITANE = Kelas turunan
class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string; 
    private _email: string = "";
    static getRoleName: string = "Admin";

    constructor(phone: string, name: string, age:number) {
        super(name, age);
        this.phone = phone
    }

    static getNameRole() {
        return "hei";
    }
        

    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        };
    };

    set email(value: string) {
        if(value.length < 5) {
            this._email = "Email Salah";
        } else {
            this._email = value;
        }
    }

    get email(): string {
        return this._email; 
    }
}

// let admin = new Admin("0974724","Gege",29);
// admin.getName();
// admin.getRole();
// admin.setName("Gege");
// admin.phone;

// admin.email = ".com"
// console.log(admin.phone);


let admin = Admin.getNameRole();

console.log(admin);
