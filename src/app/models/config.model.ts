export interface Printer {
    Name: string;
}

export interface Config {
    DbConnect: string;
    Printers?: [Printer];
}
