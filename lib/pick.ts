import { IfExtends } from "./utils";

export type ArgI<T, N extends number> = T extends (...args: infer K) => any ? IfExtends<K[-1], K[N], never, K[N]> : never;

export type Arg1<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : undefined;
export type Arg2<T> = T extends (arg1: any, arg2: infer U, ...args: any[]) => any ? U : undefined;
export type Arg3<T> = T extends (arg1: any, arg2: any, arg3: infer U, ...args: any[]) => any ? U : undefined;
export type Arg4<T> = T extends (arg1: any, arg2: any, arg3: any, arg4: infer U, ...args: any[]) => any ? U : undefined;
export type Arg5<T> = T extends (arg1: any, arg2: any, arg3: any, arg4: any, arg5: infer U, ...args: any[]) => any ? U : undefined;
export type Arg6<T> = T extends (arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: infer U, ...args: any[]) => any ? U : undefined;
export type Arg7<T> = T extends (arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: infer U, ...args: any[]) => any ? U : undefined;
export type Arg8<T> = T extends (arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: infer U, ...args: any[]) => any ? U : undefined;
export type Arg9<T> = T extends (arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: infer U, ...args: any[]) => any ? U : undefined;
export type Arg10<T> = T extends (arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: infer U, ...args: any[]) => any ? U : undefined;