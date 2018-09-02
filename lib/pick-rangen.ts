// import { Args10, Args9off0, Args8off0, Args7off0, Args6off0, Args5off0, Args4off0, Args3off0, Args2off0, } from "./pick-range";
// import { Arg1 } from "./pick";

// export type ArgsN<T extends (...args: any[]) => any> =
//     T extends (arg1: infer A) => any ?
//         T extends (arg1: infer A, arg2: infer B) => any ?
//             T extends (arg1: infer A, arg2: infer B, arg3: infer C) => any ?
//                 T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D) => any ?
//                     T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E) => any ?
//                         T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F) => any ?
//                             T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G) => any ?
//                                 T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H) => any ?
//                                     T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I) => any ?
//                                         T extends (arg1: infer A, arg2: infer B, arg3: infer C, arg4: infer D, arg5: infer E, arg6: infer F, arg7: infer G, arg8: infer H, arg9: infer I, arg10: infer J) => any ?
//                                         Args10<T> :
//                                     Args9off0<T> :
//                                 Args8off0<T> :
//                             Args7off0<T> :
//                         Args6off0<T> :
//                     Args5off0<T> :
//                 Args4off0<T> :
//             Args3off0<T> :
//         Args2off0<T> :
//     [ Arg1<T> ] :
// [];