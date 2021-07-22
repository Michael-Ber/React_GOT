export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(char);
    }
    getAllHouses = async () => {
        const res = await this.getResource('/houses?page=2&pageSize=10')
        return res.map(this._transformHouse);
    }
    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`)
        return this._transformHouse(res); 
    }
    getAllBooks = async () => {
        const res = await this.getResource('/books?page=1&pageSize=15')
        return res.map(this._transformBook);
    }
    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`)
        return this._transformBook(res);
    }
    _checkEmpty = (item) => {
        if(item !== '') {
            return item
        }else {
            return 'no data :('
        }
    }
    _extractId = (item) => {
        const reg = /\/([0-9]*)$/;
        return item.url.match(reg)[1];
    }
    _transformCharacter = (char) =>
     {
        return {
            id: this._extractId(char),
            name: this._checkEmpty(char.name),
            gender: this._checkEmpty(char.gender),
            born: this._checkEmpty(char.born),
            died: this._checkEmpty(char.died),
            culture: this._checkEmpty(char.culture)
        }
    }
    
    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}

// const got = new GotService();
// got.getHouse(17).then(console.log);