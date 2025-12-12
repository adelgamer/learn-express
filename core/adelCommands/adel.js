import fs from 'fs';

console.log("\x1b[32mWelcome to Adel's command prompt\n\n\x1b[0m");

if (process.argv[2] === 'controller' && process.argv[3]) {
    fs.writeFileSync(`./src/controllers/${process.argv[3]}.controller.ts`, '')
}