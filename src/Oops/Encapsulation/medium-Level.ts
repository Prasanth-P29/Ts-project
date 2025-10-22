
// baseTest.ts
class Base_Test {
  private _browser: string = "Chrome";

  public get browser(): string {
    return this._browser;
  }

  public set browser(value: string) {
    if (["Chrome", "Edge", "Firefox"].includes(value)) {
      this._browser = value;
    } else {
      throw new Error("Invalid browser type");
    }
  }

  public launch() {
    console.log(`Launching ${this._browser} browser`);
  }
}

// execution
const tests = new Base_Test();
tests.launch();
tests.browser = "Firefox"; // valid
tests.launch();

// test.browser = "Safari"; // throws error
