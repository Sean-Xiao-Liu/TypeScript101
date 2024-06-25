export class ClientNameAndEmailGenerator {
    private name: string;
    private email: string;

    constructor() {
        this.email = '';
        this.name = '';
    }

    public generateRandomClient(): { name: string, email: string } {
        this.name = generateRandomName(20);
        this.email = generateRandomEmail(20);
        return {name: this.name, email: this.email};
    }
}

function generateRandomName(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function generateRandomEmail(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result+'@gmail.com';
}
