const fs = require("node:fs");

const resolve = (id) => require.resolve(id, { paths: [process.cwd()] });
const tscPath = resolve("typescript/lib/tsc");
const loadJs = require.extensions[".js"];

require.extensions[".js"] = (module, filename) =>
  filename === tscPath
    ? module._compile(fs.readFileSync(filename, "utf8"), filename)
    : loadJs(module, filename);

require(resolve("vue-tsc/bin/vue-tsc.js"));
