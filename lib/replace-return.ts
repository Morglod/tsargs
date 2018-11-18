export type ReplaceReturn<RT, F extends Function> = F extends (...args: infer Args) => any ? ((...args: Args) => RT) : never;
