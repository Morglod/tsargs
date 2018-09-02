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

## Roadmap

* Example of typed event emitter
* Pick range of arguments to array type
* Pick arguments to object
* Specific argument's type replace
* Replace return type
* Remove arguments

[Write issue on github](https://github.com/Morglod/tsargs/issues) if you have any trouble with arguments in typescript
