import fs from 'node:fs';
import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!doctype html><body></body>');
globalThis.window = dom.window; globalThis.document = dom.window.document;
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
const mermaid = (await import('mermaid')).default;
const md = fs.readFileSync(process.argv[2],'utf8');
const blocks=[...md.matchAll(/```mermaid\n([\s\S]*?)```/g)].map(m=>m[1]);
let bad=0;
for (const [i,b] of blocks.entries()) {
  try { const r = await mermaid.parse(b); console.log(`bloco ${i+1}: OK (${r.diagramType})`); }
  catch(e){ bad++; console.log(`bloco ${i+1}: ERRO`, String(e.message||e).slice(0,400)); }
}
console.log(`${blocks.length} blocos, ${bad} com erro`); process.exit(bad?1:0);
