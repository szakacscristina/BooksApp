export interface Book {

    id: number;
    title: string;
    yearOfRelease: number;
    author: string;
    bookGenre: BookGenre;
    publisher: any;
    }


export enum BookGenre {
    Romance,
    Fantasy,
    Science,
    Mistery,
    Action
}
