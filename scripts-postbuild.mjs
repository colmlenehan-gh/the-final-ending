import {readdir,readFile,writeFile,copyFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
await copyFile('dist/index.html','dist/404.html');
const files=['./','./index.html','./404.html','./logo.svg','./manifest.webmanifest',...(await readdir('dist/assets')).map(f=>'./assets/'+f)];
const version=createHash('sha256').update(await readFile('dist/index.html')).digest('hex').slice(0,12);
await writeFile('dist/sw.js',`const CACHE='tfe-${version}';const ASSETS=${JSON.stringify(files)};self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('tfe-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):Response.error())))});`);
