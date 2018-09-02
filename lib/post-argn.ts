import * as post from './post';

/*

Generator:

function genX(n) {
return `export type Post${n}ArgN<${repeat('Post', n)}, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, ${args('post', undefined, 'Post', n)}) => any ?
        T extends (arg1: infer A, arg2: infer B, ${args('post', undefined, 'Post', n)}) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, ${args('post', undefined, 'Post', n)}) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, ${args('post', undefined, 'Post', n)}) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, ${args('post', undefined, 'Post', n)}) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, ${args('post', undefined, 'Post', n)}) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, ${args('post', undefined, 'Post', n)}) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, ${args('post', undefined, 'Post', n)}) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, ${args('post', undefined, 'Post', n)}) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, ${args('post', undefined, 'Post', n)}) => any ?
                                        post.Post${n}Arg10<${repeat('Post', n)}, T> :
                                    post.Post${n}Arg9<${repeat('Post', n)}, T> :
                                post.Post${n}Arg8<${repeat('Post', n)}, T> :
                            post.Post${n}Arg7<${repeat('Post', n)}, T> :
                        post.Post${n}Arg6<${repeat('Post', n)}, T> :
                    post.Post${n}Arg5<${repeat('Post', n)}, T> :
                post.Post${n}Arg4<${repeat('Post', n)}, T> :
            post.Post${n}Arg3<${repeat('Post', n)}, T> :
        post.Post${n}Arg2<${repeat('Post', n)}, T> :
    post.Post${n}Arg1<${repeat('Post', n)}, T> :
(${args('post', undefined, 'Post', n)}) => ReturnType<T>;`;
}

function genXN(n) {
	var a = [];
	for (let i = 1; i <= 10; ++i) {
		a.push(genX(i))
    }
	return a.join('\n\n');
}

*/

export type Post1ArgN<Post1, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1) => any ?
                                        post.Post1Arg10<Post1, T> :
                                    post.Post1Arg9<Post1, T> :
                                post.Post1Arg8<Post1, T> :
                            post.Post1Arg7<Post1, T> :
                        post.Post1Arg6<Post1, T> :
                    post.Post1Arg5<Post1, T> :
                post.Post1Arg4<Post1, T> :
            post.Post1Arg3<Post1, T> :
        post.Post1Arg2<Post1, T> :
    post.Post1Arg1<Post1, T> :
(post1: Post1) => ReturnType<T>;

export type Post2ArgN<Post1, Post2, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2) => any ?
                                        post.Post2Arg10<Post1, Post2, T> :
                                    post.Post2Arg9<Post1, Post2, T> :
                                post.Post2Arg8<Post1, Post2, T> :
                            post.Post2Arg7<Post1, Post2, T> :
                        post.Post2Arg6<Post1, Post2, T> :
                    post.Post2Arg5<Post1, Post2, T> :
                post.Post2Arg4<Post1, Post2, T> :
            post.Post2Arg3<Post1, Post2, T> :
        post.Post2Arg2<Post1, Post2, T> :
    post.Post2Arg1<Post1, Post2, T> :
(post1: Post1, post2: Post2) => ReturnType<T>;

export type Post3ArgN<Post1, Post2, Post3, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2, post3: Post3) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2, post3: Post3) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2, post3: Post3) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2, post3: Post3) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2, post3: Post3) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2, post3: Post3) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2, post3: Post3) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2, post3: Post3) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2, post3: Post3) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2, post3: Post3) => any ?
                                        post.Post3Arg10<Post1, Post2, Post3, T> :
                                    post.Post3Arg9<Post1, Post2, Post3, T> :
                                post.Post3Arg8<Post1, Post2, Post3, T> :
                            post.Post3Arg7<Post1, Post2, Post3, T> :
                        post.Post3Arg6<Post1, Post2, Post3, T> :
                    post.Post3Arg5<Post1, Post2, Post3, T> :
                post.Post3Arg4<Post1, Post2, Post3, T> :
            post.Post3Arg3<Post1, Post2, Post3, T> :
        post.Post3Arg2<Post1, Post2, Post3, T> :
    post.Post3Arg1<Post1, Post2, Post3, T> :
(post1: Post1, post2: Post2, post3: Post3) => ReturnType<T>;

export type Post4ArgN<Post1, Post2, Post3, Post4, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2, post3: Post3, post4: Post4) => any ?
                                        post.Post4Arg10<Post1, Post2, Post3, Post4, T> :
                                    post.Post4Arg9<Post1, Post2, Post3, Post4, T> :
                                post.Post4Arg8<Post1, Post2, Post3, Post4, T> :
                            post.Post4Arg7<Post1, Post2, Post3, Post4, T> :
                        post.Post4Arg6<Post1, Post2, Post3, Post4, T> :
                    post.Post4Arg5<Post1, Post2, Post3, Post4, T> :
                post.Post4Arg4<Post1, Post2, Post3, Post4, T> :
            post.Post4Arg3<Post1, Post2, Post3, Post4, T> :
        post.Post4Arg2<Post1, Post2, Post3, Post4, T> :
    post.Post4Arg1<Post1, Post2, Post3, Post4, T> :
(post1: Post1, post2: Post2, post3: Post3, post4: Post4) => ReturnType<T>;

export type Post5ArgN<Post1, Post2, Post3, Post4, Post5, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => any ?
                                        post.Post5Arg10<Post1, Post2, Post3, Post4, Post5, T> :
                                    post.Post5Arg9<Post1, Post2, Post3, Post4, Post5, T> :
                                post.Post5Arg8<Post1, Post2, Post3, Post4, Post5, T> :
                            post.Post5Arg7<Post1, Post2, Post3, Post4, Post5, T> :
                        post.Post5Arg6<Post1, Post2, Post3, Post4, Post5, T> :
                    post.Post5Arg5<Post1, Post2, Post3, Post4, Post5, T> :
                post.Post5Arg4<Post1, Post2, Post3, Post4, Post5, T> :
            post.Post5Arg3<Post1, Post2, Post3, Post4, Post5, T> :
        post.Post5Arg2<Post1, Post2, Post3, Post4, Post5, T> :
    post.Post5Arg1<Post1, Post2, Post3, Post4, Post5, T> :
(post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5) => ReturnType<T>;

export type Post6ArgN<Post1, Post2, Post3, Post4, Post5, Post6, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => any ?
                                        post.Post6Arg10<Post1, Post2, Post3, Post4, Post5, Post6, T> :
                                    post.Post6Arg9<Post1, Post2, Post3, Post4, Post5, Post6, T> :
                                post.Post6Arg8<Post1, Post2, Post3, Post4, Post5, Post6, T> :
                            post.Post6Arg7<Post1, Post2, Post3, Post4, Post5, Post6, T> :
                        post.Post6Arg6<Post1, Post2, Post3, Post4, Post5, Post6, T> :
                    post.Post6Arg5<Post1, Post2, Post3, Post4, Post5, Post6, T> :
                post.Post6Arg4<Post1, Post2, Post3, Post4, Post5, Post6, T> :
            post.Post6Arg3<Post1, Post2, Post3, Post4, Post5, Post6, T> :
        post.Post6Arg2<Post1, Post2, Post3, Post4, Post5, Post6, T> :
    post.Post6Arg1<Post1, Post2, Post3, Post4, Post5, Post6, T> :
(post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6) => ReturnType<T>;

export type Post7ArgN<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => any ?
                                        post.Post7Arg10<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
                                    post.Post7Arg9<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
                                post.Post7Arg8<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
                            post.Post7Arg7<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
                        post.Post7Arg6<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
                    post.Post7Arg5<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
                post.Post7Arg4<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
            post.Post7Arg3<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
        post.Post7Arg2<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
    post.Post7Arg1<Post1, Post2, Post3, Post4, Post5, Post6, Post7, T> :
(post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7) => ReturnType<T>;

export type Post8ArgN<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => any ?
                                        post.Post8Arg10<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
                                    post.Post8Arg9<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
                                post.Post8Arg8<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
                            post.Post8Arg7<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
                        post.Post8Arg6<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
                    post.Post8Arg5<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
                post.Post8Arg4<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
            post.Post8Arg3<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
        post.Post8Arg2<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
    post.Post8Arg1<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, T> :
(post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8) => ReturnType<T>;

export type Post9ArgN<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => any ?
                                        post.Post9Arg10<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
                                    post.Post9Arg9<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
                                post.Post9Arg8<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
                            post.Post9Arg7<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
                        post.Post9Arg6<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
                    post.Post9Arg5<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
                post.Post9Arg4<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
            post.Post9Arg3<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
        post.Post9Arg2<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
    post.Post9Arg1<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, T> :
(post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9) => ReturnType<T>;

export type Post10ArgN<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T extends (...args: any[]) => any> =
    T extends (arg1: infer A, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
        T extends (arg1: infer A, arg2: infer B, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
            T extends (arg1: infer A, arg2: infer B, arg3: infer C, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
                            T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
                                T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
                                    T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
                                        T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J, post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => any ?
                                        post.Post10Arg10<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
                                    post.Post10Arg9<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
                                post.Post10Arg8<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
                            post.Post10Arg7<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
                        post.Post10Arg6<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
                    post.Post10Arg5<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
                post.Post10Arg4<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
            post.Post10Arg3<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
        post.Post10Arg2<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
    post.Post10Arg1<Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, T> :
(post1: Post1, post2: Post2, post3: Post3, post4: Post4, post5: Post5, post6: Post6, post7: Post7, post8: Post8, post9: Post9, post10: Post10) => ReturnType<T>;