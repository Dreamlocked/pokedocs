export interface Base{
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}

export interface Name{
    english: string;
    japanese: string;
}

export interface Pokemon {
    id: number;
    name: Name;
    type: string[];
    base: Base;
}