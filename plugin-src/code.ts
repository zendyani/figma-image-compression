import ExtractImagesFromSelection from "./lib/ExtractImagesFromSelection";

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 500, height: 550 });

figma.on("selectionchange", async () => {
  await ExtractImagesFromSelection();
});

figma.once("run", async () => {
  await ExtractImagesFromSelection();
});
