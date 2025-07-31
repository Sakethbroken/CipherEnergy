import { PluginOption } from "vite";
import path from "path";

const viteDebugInfo = (): PluginOption => ({
  name: "vite-debug-info",
  apply: "serve", // only apply in dev
  configResolved(config) {
    console.log("[viteDebugInfo] Project root resolved to:", config.root);

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

    return code.slice(0, valueIndex) + "value: source" + code.slice(valueIndex + 11);
  },
});

export default viteDebugInfo;
