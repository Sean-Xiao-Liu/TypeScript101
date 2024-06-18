export class Pages{
    private static complicatedPageUrl: string = 'https://ultimateqa.com/complicated-page';
    private static jsonPlaceHolderUrl: string = 'https://jsonplaceholder.typicode.com/';
    public static getComplicatedPageUrl():string{
        return this.complicatedPageUrl;
    }
    public static getJsonPlaceHolderUrl():string{
        return this.jsonPlaceHolderUrl;
    }
}
