class SuperArray extends Array {
  snail(rowsCount, colsCount) {
    if (!Number.isInteger(rowsCount) || !Number.isInteger(colsCount)) {
      return [];
    }
    if (rowsCount <= 0 || colsCount <= 0) {
      return [];
    }
    if (rowsCount * colsCount !== this.length) {
      return [];
    }

    const rellenar = Array.from({ length: rowsCount }, () => Array(colsCount));
    let i = 0;
    for (let c = 0; c < colsCount; c++) {
      if (c % 2 === 0) {
        for (let r = 0; r < rowsCount; r++) {
          rellenar[r][c] = this[i++];
        }
      } else {
        for (let r = rowsCount - 1; r >= 0; r--) {
          rellenar[r][c] = this[i++];
        }
      }
    }
    return rellenar;
  }
}

module.exports = { SuperArray };
