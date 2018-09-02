// Test ArgN types statically

import * as a from './index';

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