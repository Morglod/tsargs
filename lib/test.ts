// Test ArgN types statically

import * as a from './index';
import { ArgsN } from './pick-rangen';
import { ReplaceReturn } from './replace-return';

function staticAssert1Args() {
    function foo(a: string, b: number) { /** */ }
    const assertion: a.Arg2<typeof foo> = 123;

    function boo(a: a.Arg1<typeof foo>, b: a.Arg2<typeof foo>) { /**/ }
    boo('hello', assertion);
}

function staticAssert2ArgN() {
    function f(
        a: string,
        b: number,
        c: boolean,
        d: undefined,
        e: object,
        f: Function,
        g: string,
        h: number,
        i: boolean,
        j: null,
    ) { /** */ }
    
    const arg1: a.Arg1<typeof f> = 'hello';
    const arg2: a.Arg2<typeof f> = 123;
    const arg3: a.Arg3<typeof f> = true;
    const arg4: a.Arg4<typeof f> = undefined;
    const arg5: a.Arg5<typeof f> = {};
    const arg6: a.Arg6<typeof f> = () => {};
    const arg7: a.Arg7<typeof f> = 'hello';
    const arg8: a.Arg8<typeof f> = 321;
    const arg9: a.Arg9<typeof f> = false;
    const arg10: a.Arg10<typeof f> = null;
}

function staticAssert3Pre() {
    function foo(a: string, b: number) {}

    let boo: (x: boolean, a: string, b: number) => void;
    boo = foo as any as a.Pre1Arg2<boolean, typeof foo>;

    let goo: (x: boolean, y: number, a: string, b: number) => void;
    goo = foo as any as a.Pre2Arg2<boolean, number, typeof foo>;
}

function staticAssert4PreN() {
    function foo(a: string, b: number) {}

    let boo: (x: boolean, a: string, b: number) => void;
    boo = foo as any as a.Pre1ArgN<boolean, typeof foo>;

    let goo: (x: boolean, y: number, a: string, b: number) => void;
    goo = foo as any as a.Pre2ArgN<boolean, number, typeof foo>;
}

function staticAssert5PickRange() {
    function foo(a: string, b: number, c: boolean) {}
    const args: a.Args2off1<typeof foo> = [ 123, true ];
}

function staticAssert6Post() {
    function foo(a: string, b: number) {}

    let boo: (a: string, b: number, x: boolean) => void;
    boo = foo as any as a.Post1Arg2<boolean, typeof foo>;

    let goo: (a: string, b: number, x: boolean, y: number) => void;
    goo = foo as any as a.Post2Arg2<boolean, number, typeof foo>;
}

function staticAssert7PickRangeN() {
    function foo(a: string, b: number, c: boolean) {}
    const args: ArgsN<typeof foo> = [ 'hello', 123, true ];
}

function staticAssert8PostN() {
    function foo(a: string, b: number) {}

    let boo: (a: string, b: number, x: boolean) => void;
    boo = foo as any as a.Post1ArgN<boolean, typeof foo>;

    let goo: (a: string, b: number, x: boolean, y: number) => void;
    goo = foo as any as a.Post2ArgN<boolean, number, typeof foo>;
}

function staticAssert9ReplaceReturn() {
    function foo(a: string, b: number) {
        return 'hello world';
    }

    let boo: (a: string, b: number, x: boolean) => number;
    boo = foo as any as ReplaceReturn<number, a.Post1ArgN<boolean, typeof foo>>;
}

function staticAssert10ReplaceReturn() {
    function foo(a: number, b: string): number { return 0; }
    function boo(a: number, b: string): string { return '0'; }
    
    const booFromFoo: ReplaceReturn<string, typeof foo> = boo;
}

function staticAssertRestArgsN() {
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
    
    call('foo', 1, 2);
}