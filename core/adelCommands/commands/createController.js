import fs, { link } from 'fs';

export function createController(commandArg) {
    const controllerText = fs.readFileSync('./core/adelCommands/commands/templates/controller.txt', 'utf8')
        .replace(/\${moduleNamePascal}/g, commandArg)
        .replace(/\${moduleName}/g, commandArg.toLowerCase());

    fs.writeFileSync(`./src/modules/${commandArg}/${commandArg}.controller.ts`, controllerText);
}