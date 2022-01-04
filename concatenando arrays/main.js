const a1 = [1, 2, 3, 4, 5]
const a2 = [6, 7, 8, 9, 10]
const a3 = a1.concat(a2)
const a4 = [...a1, 'luiz', ...a2, ...['nova', 'lista']]

console.log(a3)
console.log(a4)