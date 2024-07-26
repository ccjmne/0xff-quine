import { readFileSync, writeFileSync } from 'fs';

const i = String(readFileSync('main.js')).replace(/\n|^\s+/gm, '')
writeFileSync(
  'out',
  i.replace(
    `s='^'`,
    `s='${i
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/'/g, `\\\'`)
    }'`,
  ),
)
