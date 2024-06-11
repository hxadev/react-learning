import { getUser } from "../../src/base-pruebas/05-funciones"

describe('Pruebas 05-funciones.js', () => { 
    test('getUser debe retornar un objeto', () => { 
        const testUser=getUser();
        expect(typeof testUser).toBe('object');
    })

    test('getUser debe retornar un objeto con la propiedad username', () => { 
        const testUser=getUser();
        expect(testUser.username).toBe('El_Papi1502');
    });

    test('getUser debe de contener username y uid', () => { 
        const testUser=getUser();
        expect(testUser).toHaveProperty('username');
        expect(testUser).toHaveProperty('uid');
    })
 })