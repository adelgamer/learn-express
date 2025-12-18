import fs, { link } from 'fs';

const commands = ["create:module"];

// 1- Validating command
const userCommand = process.argv[2];
const commandArg = process.argv[3];
const commandFlags = process.argv[4];

if (userCommand && !commands.includes(userCommand)) {
    console.error('Command does not exists');
    process.exit(1);
}

if (!commandArg) {
    console.error(`No argument is provided`);
    process.exit(1);
}


switch (process.argv[2]) {

    case undefined:
        console.log("\x1b[32mWelcome to Adel's command prompt\n\n\x1b[0m");
        break;

    case "create:module":
        console.log("\x1b[32mCreating a module\n\n\x1b[0m");
        // 1- Adding a new route to mainRouter.ts
        const mainRouterLinesArray = fs.readFileSync('./src/mainRouter.ts', 'utf8').split('\n');

        const pattern = /export.*default.*mainRouter/;

        for (const [index, line] of mainRouterLinesArray.entries()) {
            if (pattern.test(line)) {
                // Go back two linesand add
                const insertPosition = index - 2 <= 0 ? 0 : index - 2;

                const newRoute = `mainRouter.use('/${commandArg}', ${commandArg}Router);`;
                mainRouterLinesArray.splice(insertPosition, 0, newRoute);
                break;
            }
        }
        console.log(mainRouterLinesArray.join('\n'));
        fs.writeFileSync('./src/mainRouter.ts', mainRouterLinesArray.join('\n'));

        // 2- Adding a new prisma modal
        let prismaSchemaText = fs.readFileSync('./prisma/schema.prisma', 'utf8');
        prismaSchemaText +=
            `
model ${commandArg} {
  id String @id @default(uuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt()
}
\n\n
`
        fs.writeFileSync('./prisma/schema.prisma', prismaSchemaText);

        break;

    default:
        break;
}

// if (process.argv[2] === 'controller' && process.argv[3]) {
//     fs.writeFileSync(`./src/controllers/${process.argv[3]}.controller.ts`, '')
// }