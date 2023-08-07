import { intro, outro, select, spinner, confirm, text } from "@clack/prompts";

intro(`Muestra example`);

const otherDate = await text({
  message: "Older date?",
  placeholder: "yyyy-mm",
  initialValue: "",
});

const isQuincenal = await confirm({
  message: "Quincenal?",
  initialValue: false,
});
const uploadEnObras = await confirm({
  message: "uploadEnObras?",
  initialValue: false,
});

const operationType = await select({
  message: "Pick an operation.",
  initialValue: "GEN_MONGODB",
  options: [
    {
      value: "GEN_EXCEL",
      label: "GEN_EXCEL",
      hint: "generate from excel file",
    },
    {
      value: "GEN_MONGODB",
      label: "GEN_MONGODB",
      hint: "generate from mongodb",
    },
    {
      value: "EXCEL2MONGODB",
      label: "EXCEL2MONGODB",
      hint: "export to mongodb",
    },
    {
      value: "ENOBRA2MONGODB",
      label: "ENOBRA2MONGODB",
      hint: "export to mongodb",
    },
  ],
});

const s = spinner();
s.start("Working on it...");

// Create command
let cmd = `cd ~/Desktop/Cuentas && java -jar Muestra.jar ${operationType} `;
if (uploadEnObras) cmd += "uploadEnObras ";
if (isQuincenal) cmd += "quincenal ";
if (otherDate) cmd += `fecha=${otherDate}`;

// Delay to see the spinner
await new Promise((resolve) => {
  setTimeout(resolve, 500);
});

s.stop("Generated files");

outro(`Done!`);
