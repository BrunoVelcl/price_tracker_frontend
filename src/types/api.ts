export type Chain = "LIDL" | "KAUFLAND" | "SPAR" | "STUDENAC" | "PLODINE";

export type Store = {
    id: number;
    address: string;
    chain: Chain;
}
