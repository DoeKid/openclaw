import express from "express";

const app = express();

// Healthcheck Endpoint für Railway
app.get("/health", (req, res) => res.send("OK"));

// Test-Endpunkt
app.get("/", (req, res) => res.send("OpenClaw läuft!"));

// Railway Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server läuft auf Port ${port}`));
