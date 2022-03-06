import {init} from "./init.js";
import promptSync from 'prompt-sync';

const prompt = promptSync();
let hotel = init();

loop:while (true) {
    console.log('Welcome to Grand Hotel');
    console.log('1-Booking');
    console.log('2-Leaving');
    console.log('3-Exit');
    let input_from_user = prompt('Please enter the desired number :');
    input_from_user = parseInt(input_from_user);
    switch (input_from_user) {
        case 1:
            booking();
            break;
        case 2:
            // leaving the hotel
            break;
        case 3:
            break loop;
    }
}

function booking() {
    let national_id_of_customer = getNationalID();
    hotel.numberOfAvailableRooms;
    let type_of_room = getTypeOfRoom();
    let number_of_rooms = getNumberOfRooms();
    let id_of_rooms = submitRequest(national_id_of_customer, type_of_room, number_of_rooms);
    console.log('Your rooms are :');
    console.log(id_of_rooms);
}

function getNationalID() {
    return prompt('Enter your National ID :');
}

function getTypeOfRoom() {
    return prompt('Enter the desired type of room :');
}

function getNumberOfRooms() {
    let number_of_rooms = prompt('Enter the number of rooms that you want :');
    return parseInt(number_of_rooms);
}

function submitRequest(national_id_of_customer, type_of_room, number_of_rooms) {
    let rooms = hotel.rooms;
    let number_of_available_rooms = 0;
    let id_of_rooms = [];

    number_of_available_rooms = hotel.availableRooms(type_of_room);

    if (number_of_available_rooms < number_of_rooms) {
        return `There isn't enough number of ${type_of_room} rooms`;
    } else {
        for (let i = 0; i < rooms.length; i++) {
            if (number_of_rooms !== 0) {
                if (rooms[i].type === type_of_room && rooms[i].available) {
                    rooms[i].allocateRoom(national_id_of_customer);
                    id_of_rooms.push(rooms[i].number);
                    number_of_rooms--;
                }
            } else {
                break;
            }
        }
        return id_of_rooms;
    }
}



























