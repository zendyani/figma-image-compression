import ExtractImagesFromSelection from "./lib/ExtractImagesFromSelection";

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 500, height: 550 });

figma.on("selectionchange", async () => {
  figma.ui.postMessage({
    type: "updateSelection",
    data: {
      loadingNewSelection: true,
    },
  });
  await ExtractImagesFromSelection();

});

figma.once("run", async () => {
  figma.ui.postMessage({
    type: "updateSelection",
    data: {
      loadingNewSelection: true,
    },
  });
  await ExtractImagesFromSelection();
});

// posted message.
// figma.ui.onmessage = async (msg) => {
//   if (msg.type === "compress") {
//     await ExtractImagesFromSelection();
//   }
// };

