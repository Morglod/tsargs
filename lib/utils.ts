// coz inline works bad
export type IfExtends<A, B, True, False> = A extends B ? True : False;