function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works correctly
printNumbers(0); // Unexpected behavior: prints nothing
printNumbers(-5); // Unexpected behavior: prints nothing