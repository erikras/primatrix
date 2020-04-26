export function calculateRow(n: number, multiplier: number, columns: number) {
  const row: boolean[] = []
  for (let i = 1; i <= columns; i++) {
    row.push(isPrime(n + multiplier * i))
  }
  return row
}

const isPrime = (value: number) => {
  if (value === 1) return false
  value += 2

  const sieve = new Array(value).fill(true)
  for (let i = 2; i <= value; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < value; j += i) {
        sieve[j] = false
      }
    }
  }

  return sieve[value - 2]
}
