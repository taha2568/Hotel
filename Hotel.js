export class Hotel {

    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.phones = [];
        this.rooms = [];
        this.number_of_rooms = this.rooms.length;
    }
}

export class Room{
    static #number_of_rooms = 0;

    constructor() {
        this.number = ++Room.#number_of_rooms;
        this.available = true;
    }

    isAvailable(){
        return this.available;
    }
}

export class Single extends Room{

    national_id_of_customer;

    static #number_of_rooms = 0;
    static #number_of_free_rooms = 0;

    constructor() {
        super();
        this.price = 100;
        this.type = 'Single';
        this.number_of_beds = 1;
        this.facilities = ['Television','fridge'];
        Single.#number_of_rooms++;
        Single.#number_of_free_rooms++;

    }

    allocateRoom(national_id){
        this.national_id_of_customer = national_id;
        Single.#number_of_free_rooms--;
    }

    releaseRoom(){
        this.national_id_of_customer = 0;
        Single.#number_of_free_rooms++;
    }
}

export class Double extends Room{

    national_id_of_customer;

    static #number_of_rooms = 0;
    static #number_of_free_rooms = 0;

    constructor() {
        super();
        this.price = 200;
        this.type = 'Double';
        this.number_of_beds = 2;
        this.facilities = ['Television', 'fridge', 'oven', 'fan'];
        Double.#number_of_rooms++;
        Double.#number_of_free_rooms++;
    }

    allocateRoom(national_id){
        this.national_id_of_customer = national_id;
        Single.#number_of_free_rooms--;
    }

    releaseRoom(){
        this.national_id_of_customer = 0;
        Single.#number_of_free_rooms++;
    }
}

export class Queen extends Room{

    national_id_of_customer;

    static #number_of_rooms = 0;
    static #number_of_free_rooms = 0;

    constructor() {
        super();
        this.price = 400;
        this.type = 'Queen';
        this.number_of_beds = 2;
        this.facilities = ['Television', 'fridge', 'oven', 'fan','pool', 'gym'];
        Queen.#number_of_rooms++;
        Queen.#number_of_free_rooms++;
    }


    allocateRoom(national_id){
        this.national_id_of_customer = national_id;
        Single.#number_of_free_rooms--;
    }

    releaseRoom(){
        this.national_id_of_customer = 0;
        Single.#number_of_free_rooms++;
    }
}

export class King extends Room{

    national_id_of_customer;

    static #number_of_rooms = 0;
    static #number_of_free_rooms = 0;

    constructor() {
        super();
        this.price = 600;
        this.type = 'King';
        this.number_of_beds = 2;
        this.facilities = ['Spectacular view', 'Noise-free','Television', 'fridge', 'oven', 'fan','pool', 'gym'];
        King.#number_of_rooms++;
        King.#number_of_free_rooms++;
    }


    allocateRoom(national_id){
        this.national_id_of_customer = national_id;
        Single.#number_of_free_rooms--;
    }

    releaseRoom(){
        this.national_id_of_customer = 0;
        Single.#number_of_free_rooms++;
    }
}


















