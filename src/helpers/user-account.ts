import { faker } from "@faker-js/faker";

export interface User {
    gender: Gender,
    email: string;
    password: string,
    firstName: string,
    lastName: string,
}

export type Gender = 'male' | 'female';

export function generateUser(gender: Gender): User {
    return {
        'gender' : gender,
        'firstName': faker.person.firstName(gender),
        'lastName': faker.person.lastName(gender),
        'email': faker.internet.email(),
        'password': faker.internet.password({ length: 20 })
    }
}

export const userForAuthentication: User = {
    gender: 'male',
    email: 'Jayson41@gmail.com',
    password: 'jKaF7QZ3ilvsStDqPKXz',
    firstName: 'Elmer',
    lastName: 'Senger',
}