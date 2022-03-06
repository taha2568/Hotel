export class Hotel {

    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.phones = [];
        this.rooms = [];
    }

    set phone(phone_number) {
        this.phones.push(phone_number);
    }

    get phone() {
        return this.phones;
    }

    get numberOfRooms() {
        return this.rooms.length;
    }

    get numberOfAvailableRooms() {
        console.log('--------------');
        console.log(`Single : ${Single.availableRooms}`);
        console.log(`Double : ${Double.availableRooms}`);
        console.log(`Queen : ${Queen.availableRooms}`);
        console.log(`King : ${King.availableRooms}`);
        console.log('--------------');
    }

    availableRooms(type) {
        let number_of_available_rooms = 0;
        if (type === 'Single') {
            number_of_available_rooms = Single.availableRooms;
        } else if (type === 'Double') {
            number_of_available_rooms = Double.availableRooms;
        } else if (type === 'Queen') {
            number_of_available_rooms = Queen.availableRooms;
        } else if (type === 'King') {
            number_of_available_rooms = King.availableRooms;
        } else {
            number_of_available_rooms = 0;
        }
        return number_of_available_rooms;
    }
}


export class Room {
    static #number_of_rooms = 0;

    constructor() {
        this.number = ++Room.#number_of_rooms;
        this.available = true;
    }

    isAvailable() {
        return this.available;
    }
}

export class Single extends Room {

    national_id_of_customer;

    static #number_of_rooms = 0;
    static #number_of_available_rooms = 0;

    constructor() {
        super();
        this.price = 100;
        this.type = 'Single';
        this.number_of_beds = 1;
        this.facilities = ['Television', 'fridge'];
        Single.#number_of_rooms++;
        Single.#number_of_available_rooms++;

    }

    allocateRoom(national_id) {
        this.national_id_of_customer = national_id;
        this.available = false;
        Single.#number_of_available_rooms--;
    }

    releaseRoom() {
        this.national_id_of_customer = null;
        this.available = true;
        Single.#number_of_available_rooms++;
    }

    static get availableRooms() {
        return Single.#number_of_available_rooms;
    }
}

export class Double extends Room {

    national_id_of_customer;

    static #number_of_rooms = 0;
    static #number_of_available_rooms = 0;

    constructor() {
        super();
        this.price = 200;
        this.type = 'Double';
        this.number_of_beds = 2;
        this.facilities = ['Television', 'fridge', 'oven', 'fan'];
        Double.#number_of_rooms++;
        Double.#number_of_available_rooms++;
    }

    allocateRoom(national_id) {
        this.national_id_of_customer = national_id;
        this.available = false;
        Double.#number_of_available_rooms--;
    }

    releaseRoom() {
        this.national_id_of_customer = null;
        this.available = true;
        Double.#number_of_available_rooms++;
    }

    static get availableRooms() {
        return Double.#number_of_available_rooms;
    }
}

export class Queen extends Room {

    national_id_of_customer;

    static #number_of_rooms = 0;
    static #number_of_available_rooms = 0;

    constructor() {
        super();
        this.price = 400;
        this.type = 'Queen';
        this.number_of_beds = 2;
        this.facilities = ['Television', 'fridge', 'oven', 'fan', 'pool', 'gym'];
        Queen.#number_of_rooms++;
        Queen.#number_of_available_rooms++;
    }


    allocateRoom(national_id) {
        this.national_id_of_customer = national_id;
        this.available = false;
        Queen.#number_of_available_rooms--;
    }

    releaseRoom() {
        this.national_id_of_customer = null;
        this.available = true;
        Queen.#number_of_available_rooms++;
    }

    static get availableRooms() {
        return Queen.#number_of_available_rooms;
    }
}

export class King extends Room {

    national_id_of_customer;

    static #number_of_rooms = 0;
    static #number_of_available_rooms = 0;

    constructor() {
        super();
        this.price = 600;
        this.type = 'King';
        this.number_of_beds = 2;
        this.facilities = ['Spectacular view', 'Noise-free', 'Television', 'fridge', 'oven', 'fan', 'pool', 'gym'];
        King.#number_of_rooms++;
        King.#number_of_available_rooms++;
    }


    allocateRoom(national_id) {
        this.national_id_of_customer = national_id;
        this.available = false;
        King.#number_of_available_rooms--;
    }

    releaseRoom() {
        this.national_id_of_customer = null;
        this.available = true;
        King.#number_of_available_rooms++;
    }

    static get availableRooms() {
        return King.#number_of_available_rooms;
    }
}


















