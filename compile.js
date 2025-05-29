import { readFileSync } from 'fs';
const i = String(readFileSync('main.js')).replace(/\n|^\s+/gm, '')
process.stdout.write(i.replace('^', i.replace(/\\/g, '\\\\').replace(/'/g, `\\\'`)))
