import { ParseFlags } from "@angular/compiler";

export interface Drzave {
    unMember: boolean;
    name: Name;
    capital: string[];
    region: string;
    subregion: string;
    area: number;
    population: number;
    cioc: string;
    flag: string;
    flags: Flags;
}

export interface Flags{
    png:string;
}

export interface Name{
    common: string;
}