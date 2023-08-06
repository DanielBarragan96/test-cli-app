import { intro, outro, select, spinner, confirm } from "@clack/prompts";

intro(`Muestra example`);

const isQuincenal = await confirm({
  message: "Quincenal?",
  initialValue: false,
});
const uploadEnObras = await confirm({
  message: "uploadEnObras?",
  initialValue: false,
});

const projectType = await select({
  message: "Pick a project type.",
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
await new Promise((resolve) => {
  setTimeout(resolve, 1000);
});
s.stop("Generated files");
outro(`Done!`);
