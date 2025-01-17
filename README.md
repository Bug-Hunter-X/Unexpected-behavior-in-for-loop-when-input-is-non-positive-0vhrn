# TypeScript For Loop Bug

This repository demonstrates an unexpected behavior in a simple TypeScript `for` loop when a non-positive number is passed as input. The function `printNumbers` is expected to print numbers from 1 to `n`, but when `n` is 0 or negative, it prints nothing.

## Bug Description

The issue stems from the loop condition `i <= n`. When `n` is 0 or negative, the condition `i <= n` is false from the start, and the loop body is never executed, resulting in no output.

## Solution

The solution involves modifying the loop condition to handle non-positive inputs appropriately.  The corrected loop ensures that the loop executes the correct number of times.  For example, if you want to print numbers from 1 to n, inclusive, you would need to add an explicit check for n being less than or equal to zero.