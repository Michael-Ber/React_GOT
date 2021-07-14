export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=50`);
        return res.map(this._transformCharacter)
    }
    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(char);
    }
    async getAllHouses() {
        const res = await this.getResource('/houses?page=5&pageSize=5')
        return res.map(this._transformHouse);
    }
    async getHouse(id) {
        const res = await this.getResource(`/houses/${id}`)
        return this._transformHouse(res); 
    }
    async getAllBooks() {
        const res = await this.getResource('/books?page=1&pageSize=5')
        return res.map(this._transformBook);
    }
    async getBook(id) {
        const res = await this.getResource(`/books/${id}`)
        return this._transformBook(res);
    }
    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}
