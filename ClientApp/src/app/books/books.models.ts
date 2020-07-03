export class Book {

    id: number;
    title: string;
    yearOfRelease: number;
    author: string;
    bookGenre: BookGenre
    }


export enum BookGenre {
    Romance,
    Fantasy,
    Science,
    Mistery,
    Action
}
