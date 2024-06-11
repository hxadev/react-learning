import { getImagen } from "../../src/base-pruebas/11-async-await";



describe("probando 11-async-await", () => {
  test("getImagen debe de retornar una url", async () => {
    const url=await getImagen();
    expect(typeof url).toBe("string");
  });
});
