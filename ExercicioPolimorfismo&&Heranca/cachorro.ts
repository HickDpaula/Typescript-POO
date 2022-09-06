import { Animal } from "./animal";


export class Cachorro extends Animal{

    somEmitido(): void {
        console.log("AUUU AUUUU AUU!!!");
    }
    correr(): void {
        console.log("CORRENDO LIKE A DOG")
    }

}