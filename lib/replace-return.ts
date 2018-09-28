import { Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10 } from "./pick";
import { IfExtends } from "./utils";

// tslint:disable

export type ReplaceReturn<RT, T extends Function> =
    IfExtends<T, () => any, () => RT,
        IfExtends<T, (arg1: Arg1<T>) => any, (arg1: Arg1<T>) => RT,
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>) => RT,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => RT,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => RT,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => RT,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => RT,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => RT,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => RT,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => RT,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => RT, (...args: any[]) => RT
                                            >>>>>>>>>>>;
