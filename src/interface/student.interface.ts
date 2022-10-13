import { Document } from 'mongoose';
export interface IStudent extends Document{
    readonly name: string;
    readonly roleNumber: number;
    readonly class: number;
    readonly gender: string;
    readonly marks: number;
}

//  Interface:-  It defines how our data object structure will look like. It will inherit property from the mongoose Document class. All the properties are read-only so those can’t be modified.