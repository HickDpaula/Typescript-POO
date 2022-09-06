

import { Cachorro } from "./cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";

let cachorro1 = new Cachorro("bob", 5)
cachorro1.somEmitido()
cachorro1.correr()


let cavalo1 = new Cavalo("alipio", 9)
cavalo1.somEmitido()
cavalo1.correr()


let preguica1 = new Preguica("Robsons five", 6)
preguica1.correr()
preguica1.somEmitido()
preguica1.subirEmAvore()