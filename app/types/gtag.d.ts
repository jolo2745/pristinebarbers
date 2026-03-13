export { };

type GtagPrimitive = string | number | boolean | null | undefined;

declare global {
    interface Window {
        gtag?: (
            command: string,
            action: string,
            params?: Record<string, GtagPrimitive>
        ) => void;
    }
}
