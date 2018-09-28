import * as post from './post';
import { Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10 } from "./pick";
import { IfExtends } from "./utils";

// tslint:disable

/*

Generator:

function repeat(prefix, n) {
    var a = [];
    for (let i = 1; i <= n; ++i) a.push(`${prefix}${i}`);
    return a.join(', ');
}

function args(prefix, type, typePrefix, n, post='') {
    var a = [];
    for (let i = 1; i <= n; ++i) a.push(`${prefix}${i}: ${type || typePrefix + i}${post}`);
    return a.join(', ');
}

function genX(n) {
return `export type Post${n}ArgN<${repeat('Post', n)}, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (${args('post', undefined, 'Post', n)}) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post${n}Arg1<${repeat('Post', n)}, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post${n}Arg2<${repeat('Post', n)}, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post${n}Arg3<${repeat('Post', n)}, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post${n}Arg4<${repeat('Post', n)}, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post${n}Arg5<${repeat('Post', n)}, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post${n}Arg6<${repeat('Post', n)}, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post${n}Arg7<${repeat('Post', n)}, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post${n}Arg8<${repeat('Post', n)}, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post${n}Arg9<${repeat('Post', n)}, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post${n}Arg10<${repeat('Post', n)}, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>`;
}

function gen() {
    var result = [];
    for (let i = 1; i <= 10; ++i) {
        result.push(genX(i));
    }
    return result.join('\n');
}

*/
export type Post1ArgN<Post1, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post1Arg1<Post1, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post1Arg2<Post1, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post1Arg3<Post1, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post1Arg4<Post1, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post1Arg5<Post1, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post1Arg6<Post1, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post1Arg7<Post1, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post1Arg8<Post1, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post1Arg9<Post1, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post1Arg10<Post1, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post2ArgN<Post1, Post2, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post2Arg1<Post1, Post2, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post2Arg2<Post1, Post2, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post2Arg3<Post1, Post2, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post2Arg4<Post1, Post2, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post2Arg5<Post1, Post2, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post2Arg6<Post1, Post2, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post2Arg7<Post1, Post2, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post2Arg8<Post1, Post2, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post2Arg9<Post1, Post2, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post2Arg10<Post1, Post2, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post3ArgN<Post1, Post2, Post3, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2, post3: Post3) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post3Arg1<Post1, Post2, Post3, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post3Arg2<Post1, Post2, Post3, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post3Arg3<Post1, Post2, Post3, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post3Arg4<Post1, Post2, Post3, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post3Arg5<Post1, Post2, Post3, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post3Arg6<Post1, Post2, Post3, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post3Arg7<Post1, Post2, Post3, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post3Arg8<Post1, Post2, Post3, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post3Arg9<Post1, Post2, Post3, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post3Arg10<Post1, Post2, Post3, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post4ArgN<Post1, Post2, Post3, Post4, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2, post3: Post3, post4: Post4) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post4Arg1<Post1, Post2, Post3, Post4, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post4Arg2<Post1, Post2, Post3, Post4, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post4Arg3<Post1, Post2, Post3, Post4, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post4Arg4<Post1, Post2, Post3, Post4, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post4Arg5<Post1, Post2, Post3, Post4, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post4Arg6<Post1, Post2, Post3, Post4, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post4Arg7<Post1, Post2, Post3, Post4, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post4Arg8<Post1, Post2, Post3, Post4, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post4Arg9<Post1, Post2, Post3, Post4, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post4Arg10<Post1, Post2, Post3, Post4, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post5ArgN<Post1, Post2, Post3, Post4, Post5, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post5Arg1<Post1, Post2, Post3, Post4, Post5, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post5Arg2<Post1, Post2, Post3, Post4, Post5, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post5Arg3<Post1, Post2, Post3, Post4, Post5, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post5Arg4<Post1, Post2, Post3, Post4, Post5, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post5Arg5<Post1, Post2, Post3, Post4, Post5, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post5Arg6<Post1, Post2, Post3, Post4, Post5, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post5Arg7<Post1, Post2, Post3, Post4, Post5, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post5Arg8<Post1, Post2, Post3, Post4, Post5, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post5Arg9<Post1, Post2, Post3, Post4, Post5, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post5Arg10<Post1, Post2, Post3, Post4, Post5, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post6ArgN<Post1, Post2, Post3, Post4, Post5, Post6, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post6Arg1<Post1, Post2, Post3, Post4, Post5, Post6, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post6Arg2<Post1, Post2, Post3, Post4, Post5, Post6, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post6Arg3<Post1, Post2, Post3, Post4, Post5, Post6, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post6Arg4<Post1, Post2, Post3, Post4, Post5, Post6, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post6Arg5<Post1, Post2, Post3, Post4, Post5, Post6, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post6Arg6<Post1, Post2, Post3, Post4, Post5, Post6, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post6Arg7<Post1, Post2, Post3, Post4, Post5, Post6, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post6Arg8<Post1, Post2, Post3, Post4, Post5, Post6, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post6Arg9<Post1, Post2, Post3, Post4, Post5, Post6, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post6Arg10<Post1, Post2, Post3, Post4, Post5, Post6, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post7ArgN<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post7Arg1<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post7Arg2<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post7Arg3<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post7Arg4<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post7Arg5<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post7Arg6<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post7Arg7<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post7Arg8<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post7Arg9<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post7Arg10<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post8ArgN<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post8Arg1<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post8Arg2<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post8Arg3<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post8Arg4<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post8Arg5<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post8Arg6<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post8Arg7<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post8Arg8<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post8Arg9<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post8Arg10<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post9ArgN<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post9Arg1<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post9Arg2<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post9Arg3<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post9Arg4<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post9Arg5<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post9Arg6<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post9Arg7<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post9Arg8<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post9Arg9<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post9Arg10<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>
export type Post10ArgN<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T extends (...args: any[]) => any> =
    IfExtends<T, () => any, (post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => ReturnType<T>,
        IfExtends<T, (arg1: Arg1<T>) => any, post.Post10Arg1<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, post.Post10Arg2<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, post.Post10Arg3<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, post.Post10Arg4<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, post.Post10Arg5<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, post.Post10Arg6<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, post.Post10Arg7<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, post.Post10Arg8<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, post.Post10Arg9<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, post.Post10Arg10<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T>, (...args: any[]) => ReturnType<T>
                                            >>>>>>>>>>>