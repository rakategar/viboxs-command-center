import { writeFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";

const clientDir = join(process.cwd(), "dist/client");
const shellPath = join(clientDir, "_shell.html");

if (existsSync(shellPath)) {
  console.log("✓ _shell.html already exists");
  process.exit(0);
}

const assetsDir = join(clientDir, "assets");
const files = readdirSync(assetsDir);

const cssFile = files.find((f) => f.endsWith(".css"));
const jsFiles = files.filter(
  (f) => f.endsWith(".js") && (f.startsWith("index-") || f === "index.js")
);

const cssTag = cssFile
  ? `  <link rel="stylesheet" crossorigin href="/assets/${cssFile}">`
  : "";

const jsTags = jsFiles
  .map((f) => `  <script type="module" crossorigin src="/assets/${f}"></script>`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>VIBOXS — Interstellar Village Agency</title>
    <meta name="description" content="Cinematic AI creative agency. Recruit a Ranger, launch a mission. NASA-grade solutions at village prices." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
${cssTag}
  </head>
  <body>
    <div id="root"></div>
${jsTags}
  </body>
</html>`;

writeFileSync(shellPath, html, "utf-8");
console.log("✓ Generated _shell.html");
console.log("  CSS:", cssFile || "none");
console.log("  JS:", jsFiles.join(", ") || "none");
