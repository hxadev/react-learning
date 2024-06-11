import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroesJSON from "../../src/data/heroes";
describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => { 
        const id=1;
        const heroe=getHeroeById(id);
        
        expect(typeof heroe).toBe('object');
     })

     test('getHeroeById debe retornar undefined si el heroe no existe.', () => { 
        const id=10;
        const heroe=getHeroeById(id);
        
        expect(heroe).toBeFalsy();
     })

     test('getHeroeByOwner debe retornar un arreglo con los heroes DC , length=3 to equal al arreglo filtrado' , () => { 
        const owner='DC';
        const heroes=getHeroesByOwner(owner);
        expect(heroes.length).toEqual(3);
        expect(getHeroesByOwner(owner)).toEqual(heroes);
        console.log(heroes)
     })

     test('getHeroeByOwner debe retornar un arreglo con los heroes Marvel , length=2 ', () => { 
        const owner='Marvel';
        const heroes=getHeroesByOwner(owner);
        expect(heroes.length).toEqual(2);
        expect(heroes).toEqual(heroes);
        console.log(heroes)
      })
 })