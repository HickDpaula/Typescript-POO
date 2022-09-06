import { Animal } from "./animal";


export  class Preguica extends Animal{
    
    somEmitido(): void {
        console.log("nhaaarghhwweeggg (???)");

      }

    correr(): void {
        console.log("Este animal não corre")

    }

    subirEmAvore(){
        console.log("Subindo em arvores like a preguiça")
    }
}