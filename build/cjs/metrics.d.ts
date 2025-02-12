export interface MetricsOptions {
    onError: OnError;
    onSent?: OnSent;
    appName: string;
    metricsInterval: number;
    disableMetrics?: boolean;
    url: URL | string;
    clientKey: string;
    fetch: any;
    headerName: string;
    customHeaders?: Record<string, string>;
    metricsIntervalInitial: number;
    connectionId: string;
}
interface VariantBucket {
    [s: string]: number;
}
interface Bucket {
    start: Date;
    stop: Date | null;
    toggles: {
        [s: string]: {
            yes: number;
            no: number;
            variants: VariantBucket;
        };
    };
}
interface Payload {
    bucket: Bucket;
    appName: string;
    instanceId: string;
}
type OnError = (error: unknown) => void;
type OnSent = (payload: Payload) => void;
export default class Metrics {
    private onError;
    private onSent;
    private bucket;
    private appName;
    private metricsInterval;
    private disabled;
    private url;
    private clientKey;
    private timer;
    private fetch;
    private headerName;
    private customHeaders;
    private metricsIntervalInitial;
    private connectionId;
    constructor({ onError, onSent, appName, metricsInterval, disableMetrics, url, clientKey, fetch, headerName, customHeaders, metricsIntervalInitial, connectionId, }: MetricsOptions);
    start(): false | undefined;
    stop(): void;
    createEmptyBucket(): Bucket;
    private getHeaders;
    sendMetrics(): Promise<void>;
    count(name: string, enabled: boolean): boolean;
    countVariant(name: string, variant: string): boolean;
    private assertBucket;
    private startTimer;
    private bucketIsEmpty;
    private getPayload;
}
export {};
//# sourceMappingURL=metrics.d.ts.map