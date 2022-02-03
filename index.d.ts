export declare interface NameThatColor{
    init: () => void;
    name: (color: string) => [string, string, boolean];
    hsl: (color: string) => [number, number, number];
    rgb: (color: string) => [number, number, number];
}
