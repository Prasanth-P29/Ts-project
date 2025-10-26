// basePage.ts
class BasePage {
    private _url: string;
    protected sessionToken: string = "";

    constructor(url: string) {
        this._url = url;
    }

    public get url(): string {
        return this._url;
    }

    public openPage(): void {
        console.log(` Navigating to ${this._url}`);
    }

    protected setSession(token: string): void {
        this.sessionToken = token;
        console.log(" Session initialized");
    }
}

//loginPage.ts
class LoginPage extends BasePage {
    private _userName: string = "";
    private _password: string = "";

    constructor(url: string) {
        super(url);
    }

    public setCredentials(username: string)
}