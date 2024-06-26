export class ClientNameAndEmailGenerator {
    private clientName: string;
    private clientEmail: string;

    constructor() {
        this.clientEmail = '';
        this.clientName = '';
    }

    public generateRandomClient(): { clientName: string, clientEmail: string } {
        this.clientName = generateRandomName(20);
        this.clientEmail = generateRandomEmail(20);
        return {clientName: this.clientName, clientEmail: this.clientEmail};
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
