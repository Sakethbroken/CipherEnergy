import { PluginOption } from "vite";
import path from "path";

export const viteDebugInfo = (): PluginOption => ({
    name: "react-click-to-component",
    apply: "serve",
    configResolved(config) {
        console.log("[viteDebugInfo] Project root resolved to:", config.root);

        // Example of how you could use it — e.g., join a file path
        const exampleFilePath = path.join(config.root, "some-relative-path");
        console.log("[viteDebugInfo] Example path:", exampleFilePath);
    },
    transform(code, id) {
        if (!id.includes("jsx-dev-runtime.js")) return;
        if (code.includes("_source")) return;
        const defineIndex = code.indexOf('"_debugInfo"');
        if (defineIndex === -1) return;
        const valueIndex = code.indexOf("value: null", defineIndex);
        if (valueIndex === -1) return;
        return (
            code.slice(0, valueIndex) + "value: source" + code.slice(valueIndex + 11)
        );
    },
});

export default viteDebugInfo;
