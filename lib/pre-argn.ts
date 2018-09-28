import * as pre from './pre';

// tslint:disable

/*

Generator:

function genX(n) {
return `export type Pre${n}ArgN<${repeat('Pre', n)}, T extends (...args: any[]) => any> =
    T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A) => any ?
        T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B) => any ?
            T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (${args('pre', undefined, 'Pre', n)}, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre${n}Arg10<${repeat('Pre', n)}, T> :
                                    pre.Pre${n}Arg9<${repeat('Pre', n)}, T> :
                                pre.Pre${n}Arg8<${repeat('Pre', n)}, T> :
                            pre.Pre${n}Arg7<${repeat('Pre', n)}, T> :
                        pre.Pre${n}Arg6<${repeat('Pre', n)}, T> :
                    pre.Pre${n}Arg5<${repeat('Pre', n)}, T> :
                pre.Pre${n}Arg4<${repeat('Pre', n)}, T> :
            pre.Pre${n}Arg3<${repeat('Pre', n)}, T> :
        pre.Pre${n}Arg2<${repeat('Pre', n)}, T> :
    pre.Pre${n}Arg1<${repeat('Pre', n)}, T> :
(${args('pre', undefined, 'Pre', n)}) => ReturnType<T>;`;
}

function genXN(n) {
	var a = [];
	for (let i = 1; i <= 10; ++i) {
		a.push(genX(i))
    }
	return a.join('\n\n');
}

*/

export type Pre1ArgN<Pre1, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, arg1: infer A) => any ?
        T extends (pre1: Pre1, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre1Arg10<Pre1, T> :
                                    pre.Pre1Arg9<Pre1, T> :
                                pre.Pre1Arg8<Pre1, T> :
                            pre.Pre1Arg7<Pre1, T> :
                        pre.Pre1Arg6<Pre1, T> :
                    pre.Pre1Arg5<Pre1, T> :
                pre.Pre1Arg4<Pre1, T> :
            pre.Pre1Arg3<Pre1, T> :
        pre.Pre1Arg2<Pre1, T> :
    pre.Pre1Arg1<Pre1, T> :
(pre1: Pre1) => ReturnType<T>;

export type Pre2ArgN<Pre1, Pre2, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre2Arg10<Pre1, Pre2, T> :
                                    pre.Pre2Arg9<Pre1, Pre2, T> :
                                pre.Pre2Arg8<Pre1, Pre2, T> :
                            pre.Pre2Arg7<Pre1, Pre2, T> :
                        pre.Pre2Arg6<Pre1, Pre2, T> :
                    pre.Pre2Arg5<Pre1, Pre2, T> :
                pre.Pre2Arg4<Pre1, Pre2, T> :
            pre.Pre2Arg3<Pre1, Pre2, T> :
        pre.Pre2Arg2<Pre1, Pre2, T> :
    pre.Pre2Arg1<Pre1, Pre2, T> :
(pre1: Pre1, pre2: Pre2) => ReturnType<T>;

export type Pre3ArgN<Pre1, Pre2, Pre3, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre3Arg10<Pre1, Pre2, Pre3, T> :
                                    pre.Pre3Arg9<Pre1, Pre2, Pre3, T> :
                                pre.Pre3Arg8<Pre1, Pre2, Pre3, T> :
                            pre.Pre3Arg7<Pre1, Pre2, Pre3, T> :
                        pre.Pre3Arg6<Pre1, Pre2, Pre3, T> :
                    pre.Pre3Arg5<Pre1, Pre2, Pre3, T> :
                pre.Pre3Arg4<Pre1, Pre2, Pre3, T> :
            pre.Pre3Arg3<Pre1, Pre2, Pre3, T> :
        pre.Pre3Arg2<Pre1, Pre2, Pre3, T> :
    pre.Pre3Arg1<Pre1, Pre2, Pre3, T> :
(pre1: Pre1, pre2: Pre2, pre3: Pre3) => ReturnType<T>;

export type Pre4ArgN<Pre1, Pre2, Pre3, Pre4, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre4Arg10<Pre1, Pre2, Pre3, Pre4, T> :
                                    pre.Pre4Arg9<Pre1, Pre2, Pre3, Pre4, T> :
                                pre.Pre4Arg8<Pre1, Pre2, Pre3, Pre4, T> :
                            pre.Pre4Arg7<Pre1, Pre2, Pre3, Pre4, T> :
                        pre.Pre4Arg6<Pre1, Pre2, Pre3, Pre4, T> :
                    pre.Pre4Arg5<Pre1, Pre2, Pre3, Pre4, T> :
                pre.Pre4Arg4<Pre1, Pre2, Pre3, Pre4, T> :
            pre.Pre4Arg3<Pre1, Pre2, Pre3, Pre4, T> :
        pre.Pre4Arg2<Pre1, Pre2, Pre3, Pre4, T> :
    pre.Pre4Arg1<Pre1, Pre2, Pre3, Pre4, T> :
(pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4) => ReturnType<T>;

export type Pre5ArgN<Pre1, Pre2, Pre3, Pre4, Pre5, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre5Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
                                    pre.Pre5Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
                                pre.Pre5Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
                            pre.Pre5Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
                        pre.Pre5Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
                    pre.Pre5Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
                pre.Pre5Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
            pre.Pre5Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
        pre.Pre5Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
    pre.Pre5Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, T> :
(pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5) => ReturnType<T>;

export type Pre6ArgN<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre6Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
                                    pre.Pre6Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
                                pre.Pre6Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
                            pre.Pre6Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
                        pre.Pre6Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
                    pre.Pre6Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
                pre.Pre6Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
            pre.Pre6Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
        pre.Pre6Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
    pre.Pre6Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, T> :
(pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6) => ReturnType<T>;

export type Pre7ArgN<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre7Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
                                    pre.Pre7Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
                                pre.Pre7Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
                            pre.Pre7Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
                        pre.Pre7Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
                    pre.Pre7Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
                pre.Pre7Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
            pre.Pre7Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
        pre.Pre7Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
    pre.Pre7Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, T> :
(pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7) => ReturnType<T>;

export type Pre8ArgN<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre8Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
                                    pre.Pre8Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
                                pre.Pre8Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
                            pre.Pre8Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
                        pre.Pre8Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
                    pre.Pre8Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
                pre.Pre8Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
            pre.Pre8Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
        pre.Pre8Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
    pre.Pre8Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, T> :
(pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8) => ReturnType<T>;

export type Pre9ArgN<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre9Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
                                    pre.Pre9Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
                                pre.Pre9Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
                            pre.Pre9Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
                        pre.Pre9Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
                    pre.Pre9Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
                pre.Pre9Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
            pre.Pre9Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
        pre.Pre9Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
    pre.Pre9Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, T> :
(pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9) => ReturnType<T>;

export type Pre10ArgN<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T extends (...args: any[]) => any> =
    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A) => any ?
        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B) => any ?
            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B, arg3: infer C) => any ?
                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
                            T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
                                T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
                                    T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
                                        T extends (pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10, arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
                                        pre.Pre10Arg10<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
                                    pre.Pre10Arg9<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
                                pre.Pre10Arg8<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
                            pre.Pre10Arg7<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
                        pre.Pre10Arg6<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
                    pre.Pre10Arg5<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
                pre.Pre10Arg4<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
            pre.Pre10Arg3<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
        pre.Pre10Arg2<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
    pre.Pre10Arg1<Pre1, Pre2, Pre3, Pre4, Pre5, Pre6, Pre7, Pre8, Pre9, Pre10, T> :
(pre1: Pre1, pre2: Pre2, pre3: Pre3, pre4: Pre4, pre5: Pre5, pre6: Pre6, pre7: Pre7, pre8: Pre8, pre9: Pre9, pre10: Pre10) => ReturnType<T>;