interface Configuration {
    readonly apiEndpoint: string;
}

declare module "config" {
    const config: Configuration;

    export default config;
}
