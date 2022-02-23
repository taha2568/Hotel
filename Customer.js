class Person {
    #national_id;
    #age;
    #gender;
    #phone_number;

    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    set nationalId(id) {
        this.#national_id = id;
    }

    get nationalId() {
        return this.#national_id;
    }

    set phoneNumber(phone_number) {
        this.#phone_number = phone_number;
    }

    get phoneNumber() {
        return this.#phone_number;
    }

    set setAge(age) {
        this.#age = age;
    }

    get getAge() {
        return this.#age;
    }

    set setGender(gender){
        this.#gender = gender;
    }

    get getGender(){
        return this.#gender;
    }

    generateJSON(){
        return {
            first_name : this.first_name,
            last_name : this.last_name,
            national_id : this.#national_id,
            age : this.#age,
            phone_number : this.#phone_number,
            gender : this.#gender
        };
    }
}