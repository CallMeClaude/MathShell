// ── Command Source Bundles ────────────────────────────────────────────────────
// Loaded at build time via import.meta.glob + ?raw so the JS source of every
// command file is available as a plain string at runtime — no network fetch.

const binRaw    = import.meta.glob('./bin/*.js',     { query: '?raw', import: 'default', eager: true });
const usrBinRaw = import.meta.glob('./usr/bin/*.js', { query: '?raw', import: 'default', eager: true });
const mashRaw   = import.meta.glob('./mash/*.js',    { query: '?raw', import: 'default', eager: true });

// CMD_SOURCES: { '/bin/echo': '<js source>', '/usr/bin/grep': '<js source>', ... }
export const CMD_SOURCES = {};

for (const [path, src] of Object.entries(binRaw)) {
  const name = path.replace('./bin/', '').replace(/\.js$/, '');
  CMD_SOURCES[`/bin/${name}`] = src;
}
for (const [path, src] of Object.entries(usrBinRaw)) {
  const name = path.replace('./usr/bin/', '').replace(/\.js$/, '');
  CMD_SOURCES[`/usr/bin/${name}`] = src;
}
for (const [path, src] of Object.entries(mashRaw)) {
  const name = path.replace('./mash/', '').replace(/\.js$/, '');
  // mash commands live at /usr/bin (math, etc.)
  CMD_SOURCES[`/usr/bin/${name}`] = src;
}
