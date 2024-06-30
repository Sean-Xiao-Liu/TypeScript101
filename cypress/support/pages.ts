export class Pages {
    private static complicatedPageUrl: string = 'https://ultimateqa.com/complicated-page';
    private static jsonPlaceHolderUrl: string = 'https://jsonplaceholder.typicode.com/';
    private static reqresUrl: string = 'https://reqres.in/';
    private static simpleBookUrl: string = 'https://simple-books-api.glitch.me/';
    private static fakeStoreUrl: string = 'http://fakestoreapi.com/'

    public static getComplicatedPageUrl(): string {
        return this.complicatedPageUrl;
    }

    public static getJsonPlaceHolderUrl(): string {
        return this.jsonPlaceHolderUrl;
    }

    public static getRegreUrl(): string {
        return this.reqresUrl;
    }

    public static getSimpleBookUrl(): string {
        return this.simpleBookUrl;
    }

    public static getFakeStoreUrl(): string {
        return this.fakeStoreUrl;
    }
}
