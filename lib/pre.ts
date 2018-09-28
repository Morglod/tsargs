import * as pick from './pick';

// tslint:disable

/*
Generator:

function args(prefix, type, typePrefix, n, post='') {
    var a = [];
    for (let i = 1; i <= n; ++i) a.push(`${prefix}${i}: ${type || typePrefix + i}${post}`);
    return a.join(', ');
}

function repeat(prefix, n) {
    var a = [];
    for (let i = 1; i <= n; ++i) a.push(`${prefix}${i}`);
    return a.join(', ');
}

function gen() {
    var result = [];
    for (let ipre = 1; ipre <= 10; ++ipre) {
        for (let iarg = 1; iarg <= 10; ++iarg) {
            result.push(`export type Pre${ipre}Arg${iarg}<${repeat('Pre', ipre)}, T extends (...args: any[]) => any> = (${args('pre', undefined, 'Pre', ipre)}, ${args('arg', undefined, 'Arg', iarg, '<T>')}) => ReturnType<T>;`);
        }
    }
    return result.join('\n');
}
*/

export type Pre1Arg1<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre1Arg2<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre1Arg3<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre1Arg4<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre1Arg5<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre1Arg6<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre1Arg7<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre1Arg8<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre1Arg9<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre1Arg10<Pre1, T extends (...args: any[]) => any> = (pre1: Pre1, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre2Arg1<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre2Arg2<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre2Arg3<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre2Arg4<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre2Arg5<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre2Arg6<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre2Arg7<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre2Arg8<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre2Arg9<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre2Arg10<Pre1, Pre2, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre3Arg1<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre3Arg2<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre3Arg3<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre3Arg4<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre3Arg5<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre3Arg6<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre3Arg7<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre3Arg8<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre3Arg9<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre3Arg10<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre4Arg1<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre4Arg2<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre4Arg3<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre4Arg4<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre4Arg5<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre4Arg6<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre4Arg7<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre4Arg8<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre4Arg9<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre4Arg10<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre5Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre5Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre5Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre5Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre5Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre5Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre5Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre5Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre5Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre5Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre6Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre6Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre6Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre6Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre6Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre6Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre6Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre6Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre6Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre6Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre7Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre7Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre7Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre7Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre7Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre7Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre7Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre7Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre7Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre7Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre8Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre8Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre8Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre8Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre8Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre8Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre8Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre8Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre8Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre8Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre9Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre9Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre9Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre9Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre9Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre9Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre9Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre9Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre9Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre9Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
export type Pre10Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>) => ReturnType<T>;
export type Pre10Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>) => ReturnType<T>;
export type Pre10Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>) => ReturnType<T>;
export type Pre10Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>) => ReturnType<T>;
export type Pre10Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>) => ReturnType<T>;
export type Pre10Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>) => ReturnType<T>;
export type Pre10Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>) => ReturnType<T>;
export type Pre10Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>) => ReturnType<T>;
export type Pre10Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>) => ReturnType<T>;
export type Pre10Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> = (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: pick.Arg1<T>, arg2: pick.Arg2<T>, arg3: pick.Arg3<T>, arg4: pick.Arg4<T>, arg5: pick.Arg5<T>, arg6: pick.Arg6<T>, arg7: pick.Arg7<T>, arg8: pick.Arg8<T>, arg9: pick.Arg9<T>, arg10: pick.Arg10<T>) => ReturnType<T>;
