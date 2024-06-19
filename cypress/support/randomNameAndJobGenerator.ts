export class RandomNameAndJobGenerator {
    private names: string[];
    private jobs: string[];
    private name: string;
    private job: string;

    constructor() {
        this.names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'];
        this.jobs = ['Engineer', 'Doctor', 'Artist', 'Teacher', 'Lawyer'];
        this.name = '';  // Initialize as empty string
        this.job = '';   // Initialize as empty string
    }

    public generate(): { name: string, job: string } {
        this.name = this.names[Math.floor(Math.random() * this.names.length)];
        this.job = this.jobs[Math.floor(Math.random() * this.jobs.length)];
        return { name: this.name, job: this.job };
    }

    // Getter methods
    public getName(): string {
        return this.name;
    }

    public getJob(): string {
        return this.job;
    }
}
