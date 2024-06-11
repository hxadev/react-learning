test("Primera prueba Demo", () => {
    // 1. Inicializacion Act
    const message="Hola mundo";
    // 2. Estimulo Arrange
    const message2=message.trim();
    // 3. Aseciones Assert
    expect(message).toBe(message2);
});
