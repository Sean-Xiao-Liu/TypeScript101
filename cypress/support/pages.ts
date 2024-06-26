export class Pages{
    private static complicatedPageUrl: string = 'https://ultimateqa.com/complicated-page';
    private static jsonPlaceHolderUrl: string = 'https://jsonplaceholder.typicode.com/';
    private static reqresUrl: string = 'https://reqres.in/';
    private static simpleBookUrl: string = 'https://simple-books-api.glitch.me/';
    public static getComplicatedPageUrl():string{
        return this.complicatedPageUrl;
    }
    public static getJsonPlaceHolderUrl():string{
        return this.jsonPlaceHolderUrl;
    }
    public static getRegreUrl(){
        return this.reqresUrl;
    }
    public static getSimpleBookUrl(){
        return this.simpleBookUrl;
    }
}
