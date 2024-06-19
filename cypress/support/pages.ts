export class Pages{
    private static complicatedPageUrl: string = 'https://ultimateqa.com/complicated-page';
    private static jsonPlaceHolderUrl: string = 'https://jsonplaceholder.typicode.com/';
    private static reqresUrl: string = 'https://reqres.in/';
    public static getComplicatedPageUrl():string{
        return this.complicatedPageUrl;
    }
    public static getJsonPlaceHolderUrl():string{
        return this.jsonPlaceHolderUrl;
    }
    public static getRegreUrl(){
        return this.reqresUrl;
    }
}
