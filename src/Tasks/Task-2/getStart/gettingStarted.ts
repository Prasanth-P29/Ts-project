export function showProjectBanner(): void {
    const PROJECT_NAME: string = "Enterprise Automation System";
    const VERSION: string = "1.0.0";
    const AUTHOR: string = "QA Team";

    console.log("=======================")
    console.log(`${PROJECT_NAME} | ${VERSION}`);
    console.log(`Author: ${AUTHOR}`);
    console.log("Started:" + new Date().toLocaleDateString());
}

//Simple Hello World
export function helloWorld(): void {
    console.log("Hello,World: TypeScript Environment is Working.\n");
}