export class User {
    public name: string;
    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    }
}
//jadi public name dan this name bisa tidak di pakai, karena enggunakan publicname pada constructor

// let user = new User("Gumelar", 24);
// console.log(user.name);

// public =bisa di aksews di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri

class Admin  extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string | undefined;
    private _email:string = "";
    static getRoleName: string = "Admin";

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.name = phone;
        
    }

    static getNameRole() {
        return "hey";
    }

    getRole(): { read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        };
    };

    set email(value: string) {
        if(value.length < 5) {
            this._email = "Email Salah"
        } else {
            this._email = value;
        }
        
    }

    get email(): string {
        return this._email;
    }

}

// let admin = new Admin("084747","gege", 25);
// admin.getName();
// admin.getRole();
// admin.setName("gege");
// admin.phone;

// admin.email = 'wegewgfwgeg.com';
// console.log(admin.email); 

// karna email di private jadi ga bisa di akses dari luar, pasti eror

let admin = Admin.getNameRole();
console.log(admin);
