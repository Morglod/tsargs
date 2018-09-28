import {
    Arg1,
    Arg2,
    Arg3,
    Arg4,
    Arg5,
    Arg6,
    Arg7,
    Arg8,
    Arg9,
    Arg10,
} from "./pick";

export type Args10<F extends Function> = [
    Arg1<F>,
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>,
    Arg9<F>,
    Arg10<F>
];

/*

Generator:

function gen(num, offset) {
    function rep(str, p, from, to) {
        const l = [];
        for (let i = from; i < to; ++i) {
            l.push(`    ${str}${i}${p}`);
        }
        return l.join(',\n');
    }

    return `
export type Args${num}off${offset-1}<F extends Function> = [
${rep('Arg', '<F>', offset, offset + num)}
];`;
}

var resl = [];
for (let i = 2; i <= 10; ++i) {
    for (let j = 1; j < 11-i; ++j) {
        resl.push(gen(i, j));
    }
}
resl.join('\n\n');

*/

export type Args2off0<F extends Function> = [
    Arg1<F>,
    Arg2<F>
];

export type Args2off1<F extends Function> = [
    Arg2<F>,
    Arg3<F>
];

export type Args2off2<F extends Function> = [
    Arg3<F>,
    Arg4<F>
];

export type Args2off3<F extends Function> = [
    Arg4<F>,
    Arg5<F>
];

export type Args2off4<F extends Function> = [
    Arg5<F>,
    Arg6<F>
];

export type Args2off5<F extends Function> = [
    Arg6<F>,
    Arg7<F>
];

export type Args2off6<F extends Function> = [
    Arg7<F>,
    Arg8<F>
];

export type Args2off7<F extends Function> = [
    Arg8<F>,
    Arg9<F>
];

export type Args3off0<F extends Function> = [
    Arg1<F>,
    Arg2<F>,
    Arg3<F>
];

export type Args3off1<F extends Function> = [
    Arg2<F>,
    Arg3<F>,
    Arg4<F>
];

export type Args3off2<F extends Function> = [
    Arg3<F>,
    Arg4<F>,
    Arg5<F>
];

export type Args3off3<F extends Function> = [
    Arg4<F>,
    Arg5<F>,
    Arg6<F>
];

export type Args3off4<F extends Function> = [
    Arg5<F>,
    Arg6<F>,
    Arg7<F>
];

export type Args3off5<F extends Function> = [
    Arg6<F>,
    Arg7<F>,
    Arg8<F>
];

export type Args3off6<F extends Function> = [
    Arg7<F>,
    Arg8<F>,
    Arg9<F>
];

export type Args4off0<F extends Function> = [
    Arg1<F>,
    Arg2<F>,
    Arg3<F>,
    Arg4<F>
];

export type Args4off1<F extends Function> = [
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>
];

export type Args4off2<F extends Function> = [
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>
];

export type Args4off3<F extends Function> = [
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>
];

export type Args4off4<F extends Function> = [
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>
];

export type Args4off5<F extends Function> = [
    Arg6<F>,
    Arg7<F>,
    Arg8<F>,
    Arg9<F>
];

export type Args5off0<F extends Function> = [
    Arg1<F>,
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>
];

export type Args5off1<F extends Function> = [
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>
];

export type Args5off2<F extends Function> = [
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>
];

export type Args5off3<F extends Function> = [
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>
];

export type Args5off4<F extends Function> = [
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>,
    Arg9<F>
];

export type Args6off0<F extends Function> = [
    Arg1<F>,
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>
];

export type Args6off1<F extends Function> = [
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>
];

export type Args6off2<F extends Function> = [
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>
];

export type Args6off3<F extends Function> = [
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>,
    Arg9<F>
];

export type Args7off0<F extends Function> = [
    Arg1<F>,
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>
];

export type Args7off1<F extends Function> = [
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>
];

export type Args7off2<F extends Function> = [
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>,
    Arg9<F>
];

export type Args8off0<F extends Function> = [
    Arg1<F>,
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>
];

export type Args8off1<F extends Function> = [
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>,
    Arg9<F>
];

export type Args9off0<F extends Function> = [
    Arg1<F>,
    Arg2<F>,
    Arg3<F>,
    Arg4<F>,
    Arg5<F>,
    Arg6<F>,
    Arg7<F>,
    Arg8<F>,
    Arg9<F>
];