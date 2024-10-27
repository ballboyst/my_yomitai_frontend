declare module 'quagga' {
    export interface QuaggaJSConfigObject {
      inputStream: {
        name: string;
        type: string;
        target: HTMLElement | string;
        constraints: {
          width: number;
          height: number;
          facingMode: string;
        };
        singleChannel: boolean;
      };
      frequency: number;
      locator: {
        patchSize: string;
        halfSample: boolean;
        willReadFrequently: boolean;
      };
      decoder: {
        readers: Array<{
          format: string;
          config: object;
        }>;
      };
      numOfWorker: number;
      locate: boolean;
    }
  
    export function init(config: QuaggaJSConfigObject, callback: (err: Error | null) => void): void;
    export function start(): void;
  }