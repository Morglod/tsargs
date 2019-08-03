import { Args10, Args9off0, Args8off0, Args7off0, Args6off0, Args5off0, Args4off0, Args3off0, Args2off0, } from "./pick-range";
import { Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10 } from "./pick";
import { IfExtends } from "./utils";

// tslint:disable
/**
 * `T` - Method  
 * `NoArgs` - Type used when no args found  
 * `ManyArgs` - Type used when 10+ args found
*/
export type ArgsN_Old<
    T extends Function,
    NoArgs = [],
    ManyArgs = Args10<T>,
> =
    IfExtends<T, () => any, NoArgs,
        IfExtends<T, (arg1: Arg1<T>) => any, [Arg1<T>],
            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>) => any, Args2off0<T>,
                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>) => any, Args3off0<T>,
                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>) => any, Args4off0<T>,
                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>) => any, Args5off0<T>,
                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>) => any, Args6off0<T>,
                                IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>) => any, Args7off0<T>,
                                    IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>) => any, Args8off0<T>,
                                        IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>) => any, Args9off0<T>,
                                            IfExtends<T, (arg1: Arg1<T>, arg2: Arg2<T>, arg3: Arg3<T>, arg4: Arg4<T>, arg5: Arg5<T>, arg6: Arg6<T>, arg7: Arg7<T>, arg8: Arg8<T>, arg9: Arg9<T>, arg10: Arg10<T>) => any, Args10<T>, ManyArgs
                                            >>>>>>>>>>>;

export type ArgsN<T extends (...args: any[]) => any> = T extends (...args: infer K) => any ? K : never;
export type ArgsNum<T extends (...args: any[]) => any> = T extends (...args: infer K) => any ? K["length"] : never;

export type Args<T extends (...args: any[]) => any> = ArgsN<T>;