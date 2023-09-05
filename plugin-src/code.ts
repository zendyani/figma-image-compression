import ExtractImagesFromSelection from "./lib/ExtractImagesFromSelection";

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 500, height: 550 });

figma.on("selectionchange", async () => {
  await ExtractImagesFromSelection();
});

figma.once("run", async () => {
  await ExtractImagesFromSelection();
});

// posted message.
figma.ui.onmessage = async (msg) => {
  if (msg.type === "compress") {
    await ExtractImagesFromSelection();
  }

  // if (msg.type === "exportNode") {
  //   const { id, node, exportSetting } = msg.data;
  //   const frame = figma.getNodeById(node.id) as FrameNode;

  //   const image = await frame.exportAsync(exportSetting);

  //   figma.ui.postMessage({
  //     type: "manageExportedNode",
  //     data: {
  //       id: id,
  //       image: image,
  //     },
  //   });
  // }
};

