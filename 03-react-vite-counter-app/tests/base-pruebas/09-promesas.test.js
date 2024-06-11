import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("debe de retornar un heroe", () => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(typeof heroe).toBe("object");
      expect(heroe.id).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("debe de retornar un error si heroe no existe", () => {
    const id = 100;
    getHeroeByIdAsync(id)
    
        .catch((err) => {
            expect(err).toBe("No se pudo encontrar el héroe " + id);
            done();
        });
  });
});
 