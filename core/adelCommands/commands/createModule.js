import fs, { link } from 'fs';

export function createModuleFolder(commandArg) {
    const path = `./src/modules/${commandArg.toLowerCase()}`;
    fs.mkdirSync(path, { recursive: true })
}