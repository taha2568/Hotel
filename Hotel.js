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
    static number_of_rooms = 0;

    constructor() {
        this.number = ++Room.number_of_rooms;
        this.available = true;
    }
}

export class Single extends Room{

    constructor() {
        super();
        this.price = 100;
        this.type = 'Single';
        this.number_of_beds = 1;
        this.facilities = ['Television','fridge'];
    }
}

export class Double extends Room{

    constructor() {
        super();
        this.price = 200;
        this.type = 'Double';
        this.number_of_beds = 2;
        this.facilities = ['Television', 'fridge', 'oven', 'fan'];
    }
}

export class Queen extends Room{

    constructor() {
        super();
        this.price = 400;
        this.type = 'Queen';
        this.number_of_beds = 2;
        this.facilities = ['Television', 'fridge', 'oven', 'fan','pool', 'gym'];
    }
}

export class King extends Room{

    constructor() {
        super();
        this.price = 600;
        this.type = 'King';
        this.number_of_beds = 2;
        this.facilities = ['Spectacular view', 'Noise-free','Television', 'fridge', 'oven', 'fan','pool', 'gym'];
    }
}


















