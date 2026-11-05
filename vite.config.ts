import {defineConfig} from 'vite';
export default defineConfig({base:'/the-final-ending/',build:{target:'es2022',rollupOptions:{output:{manualChunks:{three:['three'],network:['@supabase/supabase-js']}}}},server:{port:5173},preview:{allowedHosts:['terminal.local']}});
