[![NPM Version](https://badge.fury.io/js/tsargs.svg?style=flat)](https://www.npmjs.com/package/tsargs)

# tsargs

TypeScript utility types for function arguments

* Pick type of specific argument
* Prepend arguments
* Append arguments

[Tested with static asserts](/lib/test.ts)

Should use typescript `2.8` and upper

## Install & use

```
npm i tsargs
```

```ts
import { Arg2 } from 'tsargs';

function foo(a: number, b: string) {}

const secondArg: Arg2<typeof foo> = 'hello world!';
```

## Pick argument

Use Arg`N` type to pick `N` argument (max 10 arg)

```ts
import { Arg2 } from 'tsargs';

function foo(a: number, b: string) {}

const secondArg: Arg2<typeof foo> = 'hello world!';
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

Use `ArgsN` to pick unknown number of arguments (max 10)

```ts
import { ArgsN } from 'tsargs';

function foo(a: boolean, b: number, c: string) {}
const argsABC: ArgsN<typeof foo> = [ true, 123, 'Hello' ];
```

```ts
/**
 * `T` - Method  
 * `NoArgs` - Type used when no args found  
 * `ManyArgs` - Type used when 10+ args found
*/
type ArgsN<
    T extends Function,
    NoArgs = [],
    ManyArgs = Args10<T>,
>;
```

Now `ArgsN` could be used in rest arguments:

```ts
const myCallbacks = {
    foo: (a: number, b: number) => a + b,
    boo: (a: number) => a + 10,
};

function call<
    CallbackName extends keyof Callbacks,
    Callbacks extends { [k: string]: (...args: any[]) => any } = typeof myCallbacks,
    Callback extends (...args: any[]) => any = Callbacks[CallbackName],
>(callbackName: CallbackName, ...args: ArgsN<Callback>): ReturnType<Callback> {
    return (myCallbacks as { [k: string]: Function })[callbackName as any](...args);
}

call('foo', 1, 2); // ok
call('boo', 1, 2); // Error: Should be 2 args, recieved 3
```

Checkout [typed event emitter](https://github.com/Morglod/ts-event-emitter) for real-world example.

## Replace return type of function

```ts
import { ReplaceReturn } from 'tsargs';

function foo(a: number, b: string): number {}
function boo(a: number, b: string): string {}

const booFromFoo: ReplaceReturn<string, typeof foo> = boo;
```

## Roadmap

* ✔ [Example of typed event emitter](https://github.com/Morglod/ts-event-emitter)
* ✔ Pick range of arguments to array type
* ✔ Pick any number of arguments to array type
* Pick arguments to object
* Specific argument's type replace
* Remove arguments
* ✔ Replace return type

[Write issue on github](https://github.com/Morglod/tsargs/issues) if you have any trouble with arguments in typescript
