import express from "express";
import fs from "fs";
import path from "path";
import app from "./api/index";

// Load local .env.local / .env files automatically when running locally (never on Vercel)
function loadLocalEnvFiles() {
  if (process.env.VERCEL) return;
  const envFiles = [".env.local", ".env"];
  for (const filename of envFiles) {
    const filePath = path.join(process.cwd(), filename);
    if (!fs.existsSync(filePath)) continue;
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      for (const rawLine of content.split(/\r?\n/)) {
        const line = rawLine.trim();
        if (!line || line.startsWith("#")) continue;
        const eqIdx = line.indexOf("=");
        if (eqIdx <= 0) continue;
        const key = line.slice(0, eqIdx).trim();
        let val = line.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (key && val && !process.env[key]) {
          process.env[key] = val;
        }
      }
    } catch (e) {
      console.warn(`Could not read ${filename}:`, e);
    }
  }
}

loadLocalEnvFiles();

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  if (process.env.VERCEL) return;

  // If user adds .env.local after starting localhost:3000, pick it up automatically without needing a restart
  const server = express();
  server.use((req, _res, next) => {
    if (req.path.startsWith("/api/") && !process.env.GEMINI_API_KEY && !process.env.API_KEY) {
      loadLocalEnvFiles();
    }
    next();
  });
  server.use(app);

  if (process.env.NODE_ENV !== "production") {
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      server.use(vite.middlewares);
    } catch (e: any) {
      console.warn("Could not start Vite dev server middleware:", e);
    }
  } else {
    const distPath = path.join(process.cwd(), "dist");
    server.use(express.static(distPath));
    server.use((_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

export default app;
