const { SuperArray } = require("./ejercicio_2_haizea_lertxundi.js");

describe("SuperArray.snail", () => {
  test("Ejemplo del enunciado 5x4", () => {
    const nums = new SuperArray(19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15);
    const expected = [
      [19, 17, 16, 15],
      [10, 1, 14, 4],
      [3, 2, 12, 20],
      [7, 5, 18, 11],
      [9, 8, 6, 13],
    ];
    expect(nums.snail(5, 4)).toEqual(expected);
  });

  test("Producto inválido -> []", () => {
    const nums = new SuperArray(1, 2, 3, 4, 5);
    expect(nums.snail(2, 3)).toEqual([]);
  });

  test("1xX conserva orden en una sola fila", () => {
    const nums = new SuperArray(1, 2, 3, 4);
    expect(nums.snail(1, 4)).toEqual([[1, 2, 3, 4]]);
  });

  test("Xx1 conserva el orden en columna", () => {
    const nums = new SuperArray(7, 8, 9);
    expect(nums.snail(3, 1)).toEqual([[7], [8], [9]]);
  });


  test("No muta el array original", () => {
    const original = new SuperArray(1, 2, 3, 4);
    const copy = original.slice();
    original.snail(2, 2);
    expect(original).toEqual(copy);
  });

  test("Zig-zag por columnas correcto (3x4)", () => {
    const nums = new SuperArray(...Array.from({ length: 12 }, (_, i) => i + 1));
    const expected = [
      [1, 6, 7, 12],
      [2, 5, 8, 11],
      [3, 4, 9, 10],
    ];
    expect(nums.snail(3, 4)).toEqual(expected);
  });


  test("Funciona con strings", () => {
    const s = new SuperArray("a", "b", "c", "d");
    expect(s.snail(2, 2)).toEqual([
      ["a", "d"],
      ["b", "c"],
    ]);
  });
});
