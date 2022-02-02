export interface AppConfig {
    production: boolean;
    serverUri: string;
    accessTokenNameCache: string;
    expireInNameCache: string;
    timeCacheInMinute: number;
}