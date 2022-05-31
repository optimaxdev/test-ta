import Mock = jest.Mock;

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Window {}

    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface StoreJsStorage {
        clearAll: () => void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        each: (callback: (val: string, key: string) => any) => void;
        name: string;
        read: (key: string) => string | null;
        remove: (key: string) => void;
        write: (key: string, data: string) => void;
    }
}
