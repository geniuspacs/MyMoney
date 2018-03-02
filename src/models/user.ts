export class User {

    name: String;
    surname: String;
    gender: String;
    email: String;
    password: String;
    birth_date: Date;

    // Setters

    set Name(name: String) {
        this.name = name;
    }

    set Surname(surname: String) {
        this.surname = surname;
    }

    set Gender(gender: String) {
        this.gender = gender;
    }

    set Email(email: String) {
        this.email = email;
    }

    set Password(password: String) {
        this.password = password;
    }

    set Birth_date(birth_date: Date) {
        this.birth_date = birth_date;
    }

    // Getters

    get Name() {
        return this.name;
    }

    get Surname() {
        return this.surname;
    }

    get Gender() {
        return this.gender;
    }

    get Email() {
        return this.email;
    }

    get Password() {
        return this.password;
    }

    get Birth_date() {
        return this.birth_date;
    }

}