# Wasm-Calc

Simple React calculator, with the calculating functions built on Rust and compiled to WebAssembly.

Features simple arithmetic operators, with negative and floating point numbers. Clear display and delete last input are also added.

Calculations are limited to two numbers and one operator.
<br></br>

## How to install

Clone repository with

```
git clone https://github.com/vncsreis/wasm-calculator.git
```

Install Node dependencies
```
cd wasm-calculator
npm i
```

Compile Rust to WASM
```
cd lib
wasm-pack build --target web
```

Now start the dev server
```
cd ../..
npm run dev
```

