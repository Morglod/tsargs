[![NPM Version](https://badge.fury.io/js/tsargs.svg?style=flat)](https://www.npmjs.com/package/tsargs)

[![NPM Downloads](https://img.shields.io/npm/dw/tsargs)](https://www.npmjs.com/package/tsargs)

# tsargs

TypeScript utility types for function arguments  
Use [Parameters\<T\>](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype) instead, if you dont need something special

* [Pick type of argument](#pick-argument)
* [Pick args of class constructor](#class-constructor)
* [Get arguments number](#get-arguments-number)
* [Replace return type of function](#replace-return-type-of-function)
* [Pick specific range of arguments](#pick-range-of-arguments)
* [Prepend arguments](#prepend-arguments)
* [Append arguments](#append-arguments)

Checkout [typed event emitter](https://github.com/Morglod/tsee) for real-world example.

[Tested with static asserts](/lib/test.ts)

⚠️ Should use latest typescript version. ⚠️

For typescript `2.8.x` switch to `ts280` branch.

<details>
<summary>
How to use ts280 branch
</summary>

```
npm install git://github.com/morglod/tsargs.git#ts280
```

</details>

## Install & use

```
npm i tsargs
```

```ts
import { ArgI, Arg2, Args } from 'tsargs';

function foo(a: number, b: string) {}

// Pick all args
const args: Args<typeof foo> = [ 123, 'hello' ];

// Pick by index
const firstArg: ArgI<typeof foo, 0> = 'hello world!';

// Pick by definition
const secondArg: Arg2<typeof foo> = 'hello world!';
```

## Pick argument

Use `ArgI<Function, Index>` to pick argument by it's index.

```ts
import { ArgI } from 'tsargs';

function foo(a: number, b: string) {}

const secondArg: ArgI<typeof foo, 1> = 'hello world!';
```

<details>
<summary>
ArgN variant
</summary>

Use Arg`N` type to pick `N` argument (max 10 arg)  

```ts
import { Arg2 } from 'tsargs';

function foo(a: number, b: string) {}

const secondArg: Arg2<typeof foo> = 'hello world!';
```
</details>

## Class constructor

Use `CtorArgs` to pick all args from constructor.

```ts
import { CtorArgs } from 'tsargs';

class A {
    constructor(
        public x: number,
        public y: string,
        public z: boolean,
    ) {}
}

const args: CtorArgs<typeof A> = [ 123, 'hello', false ];
```

## Get arguments number

```ts
import { ArgsNum } from 'tsargs';

function foo(a: number, b: string): number { return 0; }
function boo(a: number, b: string, c: boolean): string { return '0'; }

const fooI: ArgsNum<typeof foo> = 2;
const booI: ArgsNum<typeof boo> = 3;
```

## Replace return type of function

```ts
import { ReplaceReturn } from 'tsargs';

function foo(a: number, b: string): number {}
function boo(a: number, b: string): string {}

const booFromFoo: ReplaceReturn<string, typeof foo> = boo;
```

## Prepend arguments

Useful for typed callbacks, rpc or event 

Use Pre`N`Arg`J` type to prepend `N` arguments to function with `J` arguments (max 10 arg)  
or Pre`N`ArgN type to prepend `N` arguments to function with unknown arguments number

```ts
import { Pre1Arg2, Pre1ArgN } from 'tsargs';

function foo(a: number, b: string) {}
function boo(x: string, a: number, b: string) {}

const booFromFoo: Pre1Arg2<string, typeof foo> = boo;
const booFromFoo2: Pre1ArgN<string, typeof foo> = boo;
```

Pre`N`ArgN type may cause low ts performance

## Append arguments

Useful for typed callbacks, rpc or event 

Use Post`N`Arg`J` type to append `N` arguments to function with `J` arguments (max 10 arg)  
or Post`N`ArgN type to append `N` arguments to function with unknown arguments number

```ts
import { Post1Arg2, Post1ArgN } from 'tsargs';

function foo(a: number, b: string) {}
function boo(a: number, b: string, x: string) {}

const booFromFoo: Post1Arg2<string, typeof foo> = boo;
const booFromFoo2: Post1ArgN<string, typeof foo> = boo;
```

Post`N`ArgN type may cause low ts performance

## Pick range of arguments

Callbacks & arguments list

Use `Args10` to pick 10 args of function  

Use Args`N`off`Offset` to pick `N` args with `Offset` offset (max 10 arg)

```ts
import { Args2off1 } from 'tsargs';

function foo(a: boolean, b: number, c: string) {}
const argsBC: Args2off1<typeof foo> = [ 123, 'Hello' ];
```

Use `Args` to pick all arguments

```ts
import { Args } from 'tsargs';

function foo(a: boolean, b: number, c: string) {}
const argsABC: Args<typeof foo> = [ true, 123, 'Hello' ];
```

`Args` could be used in rest arguments:

```ts
const myCallbacks = {
    foo: (a: number, b: number) => a + b,
    boo: (a: number) => a + 10,
};

function call<
    CallbackName extends keyof Callbacks,
    Callbacks extends { [k: string]: (...args: any[]) => any } = typeof myCallbacks,
    Callback extends (...args: any[]) => any = Callbacks[CallbackName],
>(
    callbackName: CallbackName,
    ...args: Args<Callback> // <<<<---------------
): ReturnType<Callback> {
    return (myCallbacks as { [k: string]: Function })[callbackName as any](...args);
}

call('foo', 1, 2); // ok
call('boo', 1, 2); // Error: Should be 2 args, recieved 3
```

Checkout [typed event emitter](https://github.com/Morglod/tsee) for real-world example.

## Roadmap

* ✔️ [Example of typed event emitter](https://github.com/Morglod/tsee)
* ✔️ Pick range of arguments to array type
* ✔️ Pick any number of arguments to array type
* ❌ Pick arguments to object (not needed, use tuples instead)
* ✔️ Replace return type
* Specific argument's type replace
* Remove arguments

[Write issue on github](https://github.com/Morglod/tsargs/issues) if you have any trouble with arguments in typescript

## Contributors

Thanks [CallumDenby](https://github.com/CallumDenby) for ArgI solution!