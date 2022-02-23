import {Hotel, Single, Double, Queen, King} from "./Hotel.js";


let hotel = new Hotel('Grand Hotel', 'Iran/Tehran/keshavarz street');

//adding rooms to current hotel
for (let i = 0; i < 10; i++) {
    hotel.rooms.push(new Single());
    hotel.rooms.push(new Double());

    if (i % 2)
        hotel.rooms.push(new King());
    else
        hotel.rooms.push(new Queen());
}

