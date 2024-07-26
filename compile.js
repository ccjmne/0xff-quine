import { readFileSync } from 'fs';

const i = String(readFileSync('main.js')).replace(/\n|^\s+/gm, '')
process.stdout.write(
  i.replace(
    `s='^'`,
    `s='${i
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/'/g, `\\\'`)
    }'`,
  ),
)
