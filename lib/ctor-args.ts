/**
 * ```ts
 * class A {
 *      constructor(
 *          public x: number,
 *          public y: string,
 *          public z: boolean,
 *      ) {}
 *  }
 *
 *  const args: CtorArgs<typeof A> = [ 123, 'hello', false ];
 *  ```
 */
export type CtorArgs<CtorT extends new (...args: any) => any> = CtorT extends new (...args: infer K) => any ? K : never;
export type CtorArgsI<CtorT extends new (...args: any) => any, I extends number> = CtorArgs<CtorT>[I];