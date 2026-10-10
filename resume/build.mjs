// Builds public/resume-en.pdf and public/resume-ru.pdf from resume/data.mjs
// using headless Chrome (DevTools protocol). Run: npm run resume

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resumes } from "./data.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const outDir = path.join(here, "out");
fs.mkdirSync(outDir, { recursive: true });

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const host = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const icon = {
  mail: '<path d="M3 5h18v14H3z"/><path d="m3.5 6 8.5 6.5L20.5 6"/>',
  phone: '<path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4Z"/>',
  send: '<path d="m21.5 3.5-19 7.5 6.5 2.5 2.5 6.5z"/><path d="m9 13.5 5-5"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5"/>',
  in: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
};
const svg = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon[name]}</svg>`;

function render(r) {
  const L = r.labels;
  const photo = pathToFileURL(path.join(root, "public", "shuhrat.jpg")).href;
  const contact = (ic, label, href) =>
    `<li><span class="ic">${svg(ic)}</span>${href ? `<a href="${href}">${esc(label)}</a>` : esc(label)}</li>`;

  return `<!doctype html><html lang="${r.lang}"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap&subset=cyrillic" rel="stylesheet">
<style>
@page { size: A4; margin: 0 }
* { box-sizing: border-box; margin: 0; padding: 0 }
html, body { width: 210mm; height: 297mm }
body { font-family: Manrope, Arial, sans-serif; font-size: 8.4pt; line-height: 1.4; color: #27272a; display: grid; grid-template-columns: 66mm 1fr; -webkit-print-color-adjust: exact; print-color-adjust: exact }
a { color: inherit; text-decoration: none }

.side { background: #0e0e10; color: #d4d4d8; padding: 11mm 7mm 9mm; display: flex; flex-direction: column; gap: 6.5mm }
.photo { width: 100%; aspect-ratio: 4/4.4; border-radius: 4mm; overflow: hidden; position: relative; outline: 0.3mm solid #2a2a2e; outline-offset: 1.3mm }
.photo img { width: 100%; height: 100%; object-fit: cover; object-position: center 22%; filter: grayscale(1) contrast(1.05) }
.side h3 { font-family: "JetBrains Mono", monospace; font-weight: 500; font-size: 7.4pt; letter-spacing: .06em; text-transform: uppercase; color: #c4f25a; margin-bottom: 2.6mm }
.contacts { list-style: none; display: grid; gap: 1.9mm; font-size: 8pt }
.contacts li { display: flex; align-items: center; gap: 2.2mm; white-space: nowrap; letter-spacing: -.01em }
.contacts a:hover { color: #c4f25a }
.ic { width: 4.6mm; height: 4.6mm; flex: none; border-radius: 1.2mm; background: #1c1c20; color: #c4f25a; display: grid; place-items: center }
.ic svg { width: 2.8mm; height: 2.8mm }
.group { margin-bottom: 2.4mm }
.group b { display: block; font-size: 7.4pt; font-weight: 600; color: #a1a1aa; margin-bottom: 1.2mm }
.chips { display: flex; flex-wrap: wrap; gap: 1.1mm }
.chips span { font-size: 7.4pt; padding: .5mm 2mm; border-radius: 10mm; border: .25mm solid #303036; color: #e4e4e7 }
.langs { list-style: none; display: grid; gap: 1.4mm; font-size: 8pt }
.langs li { display: flex; justify-content: space-between }
.langs span { color: #a1a1aa }

.main { padding: 10mm 10mm 8mm 9mm; display: flex; flex-direction: column; gap: 4mm }
.head h1 { font-size: 23pt; line-height: 1.05; font-weight: 800; letter-spacing: -.02em; color: #0a0a0b }
.head .role { margin-top: 1.6mm; display: flex; align-items: center; gap: 3mm; font-size: 11pt; font-weight: 700; color: #4d7c0f }
.head .role i { width: 9mm; height: .8mm; background: #c4f25a; border-radius: 1mm }
.head .meta { margin-top: 2mm; display: flex; gap: 4mm; font-size: 8pt; color: #52525b }
.head .meta a { color: #3f6212; font-weight: 600 }
.head .meta span { display: inline-flex; align-items: center; gap: 1.2mm }
.head .meta svg { width: 3mm; height: 3mm }

h2 { display: flex; align-items: center; gap: 2.5mm; font-size: 10pt; font-weight: 800; color: #0a0a0b; text-transform: uppercase; letter-spacing: .04em; margin-bottom: 2.2mm }
h2::after { content: ""; flex: 1; height: .25mm; background: #e4e4e7 }
.summary { color: #3f3f46 }

.job-top, .edu-top { display: flex; justify-content: space-between; align-items: baseline; gap: 3mm }
.job-top b, .edu-top b { font-size: 9.6pt; font-weight: 700; color: #0a0a0b }
.job-top .place { color: #4d7c0f; font-weight: 700 }
.period { font-family: "JetBrains Mono", monospace; font-size: 7.2pt; color: #71717a; white-space: nowrap }
ul.bul { margin: 1.3mm 0 0 3.6mm; display: grid; gap: .7mm }
ul.bul li::marker { color: #84cc16 }
.stack { margin-top: 1.3mm; font-family: "JetBrains Mono", monospace; font-size: 6.9pt; color: #71717a }

.projects { display: grid; gap: 2.2mm }
.proj { padding-left: 3mm; border-left: .6mm solid #d9f99d }
.proj-top { display: flex; justify-content: space-between; align-items: baseline; gap: 2mm }
.proj-top b { font-size: 9.2pt; font-weight: 700; color: #0a0a0b }
.proj-top em { font-style: normal; font-size: 7.6pt; color: #71717a; margin-left: 1.5mm }
.plinks { display: flex; gap: 2.4mm; font-size: 7.4pt; font-weight: 600; white-space: nowrap }
.plinks a { color: #3f6212 }
.plinks a::after { content: " ↗"; font-size: 6.5pt }
.proj p { margin-top: .6mm; color: #3f3f46 }

.edu { display: grid; gap: 2.2mm }
.edu-top .place { color: #52525b; font-weight: 600 }
.edu p { color: #52525b; font-size: 8pt }
</style></head><body>
<aside class="side">
  <div class="photo"><img src="${photo}" alt=""></div>
  <section><h3>${L.contacts}</h3><ul class="contacts">
    ${contact("mail", r.links.email, "mailto:" + r.links.email)}
    ${contact("phone", r.links.phone, r.links.phoneHref)}
    ${contact("send", "@" + r.links.telegram.split("/").pop(), r.links.telegram)}
    ${contact("in", "LinkedIn", r.links.linkedin)}
    ${contact("code", "GitHub", r.links.github)}
    ${contact("link", L.portfolio, r.links.portfolio)}
  </ul></section>
  <section><h3>${L.skills}</h3>
    ${Object.entries(r.skills)
      .map(([k, list]) => `<div class="group"><b>${r.skillGroups[k]}</b><div class="chips">${list.map((s) => `<span>${esc(s)}</span>`).join("")}</div></div>`)
      .join("")}
  </section>
  <section><h3>${L.languages}</h3><ul class="langs">
    ${r.languages.map(([l, lvl]) => `<li>${l}<span>${lvl}</span></li>`).join("")}
  </ul></section>
</aside>
<main class="main">
  <header class="head">
    <h1>${esc(r.name)}</h1>
    <div class="role"><i></i>${esc(r.role)}</div>
    <div class="meta"><span>${svg("pin")}${esc(r.location)}</span><span>${svg("link")}<a href="${r.links.portfolio}">${host(r.links.portfolio)}</a></span></div>
  </header>
  <section><h2>${L.summary}</h2><p class="summary">${esc(r.summary)}</p></section>
  <section><h2>${L.experience}</h2>
    ${r.experience
      .map(
        (j) => `<div class="job"><div class="job-top"><div><b>${esc(j.title)}</b> · <span class="place">${esc(j.place)}</span> · <a class="plinks" href="${j.url}" style="display:inline;color:#3f6212;font-weight:600">${j.urlLabel}</a></div><span class="period">${j.period}</span></div>
      <ul class="bul">${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul><div class="stack">${esc(j.stack)}</div></div>`
      )
      .join("")}
  </section>
  <section><h2>${L.projects}</h2><div class="projects">
    ${r.projects
      .map(
        (p) => `<div class="proj"><div class="proj-top"><div><b>${esc(p.name)}</b><em>${esc(p.tag)}</em></div><div class="plinks">${p.links.map(([t, u]) => `<a href="${u}">${t}</a>`).join("")}</div></div>
      <p>${esc(p.text)}</p><div class="stack">${esc(p.stack)}</div></div>`
      )
      .join("")}
  </div></section>
  <section><h2>${L.education}</h2><div class="edu">
    ${r.education
      .map((e) => `<div><div class="edu-top"><div><b>${esc(e.title)}</b> · <span class="place">${esc(e.place)}</span></div><span class="period">${e.period}</span></div><p>${esc(e.text)}</p></div>`)
      .join("")}
  </div></section>
</main>
</body></html>`;
}

// --- headless Chrome via DevTools protocol ---
const chromePaths = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean);
const chromePath = chromePaths.find((p) => fs.existsSync(p));
if (!chromePath) throw new Error("Chrome not found. Set CHROME_PATH.");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const port = 9400 + Math.floor(Math.random() * 400);
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "resume-chrome-"));
const chrome = spawn(chromePath, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--allow-file-access-from-files", "about:blank"]);

let tabs;
for (let i = 0; i < 60 && !tabs; i++) {
  try {
    tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  } catch {
    await sleep(250);
  }
}
const ws = new WebSocket(tabs.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = {};
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (pending[m.id]) (pending[m.id](m.result ?? m.error), delete pending[m.id]);
};
const send = (method, params = {}) => new Promise((r) => ((pending[++id] = r), ws.send(JSON.stringify({ id, method, params }))));
const evaluate = async (expression) => (await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true })).result.value;

for (const r of Object.values(resumes)) {
  const htmlPath = path.join(outDir, `resume-${r.lang}.html`);
  fs.writeFileSync(htmlPath, render(r));
  await send("Page.navigate", { url: pathToFileURL(htmlPath).href });
  await sleep(1500);
  await evaluate("document.fonts.ready.then(() => true)");

  // A4 at 96 dpi is 1123px tall; warn if content overflows onto a second page
  const height = await evaluate("Math.max(document.querySelector('.main').scrollHeight, document.querySelector('.side').scrollHeight)");
  if (height > 1123) console.warn(`⚠ ${r.lang}: content is ${height}px tall, more than one A4 page (1123px)`);

  const pdf = await send("Page.printToPDF", { printBackground: true, preferCSSPageSize: true, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 });
  const pdfPath = path.join(root, "public", `resume-${r.lang}.pdf`);
  fs.writeFileSync(pdfPath, Buffer.from(pdf.data, "base64"));

  await send("Emulation.setDeviceMetricsOverride", { width: 794, height: 1123, deviceScaleFactor: 2, mobile: false });
  const png = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(outDir, `resume-${r.lang}.png`), Buffer.from(png.data, "base64"));
  await send("Emulation.clearDeviceMetricsOverride");

  console.log(`✓ ${path.relative(root, pdfPath)} (${height}px of 1123px)`);
}

chrome.kill();
process.exit(0);
