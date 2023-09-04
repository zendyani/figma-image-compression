figma.showUI(__html__, { themeColors: true, width: 500, height: 550 });

figma.on("selectionchange", async () => {

  const images = [
    { id: 1, name: "image 1", ext: "png", size: "1 mb", checked: false },
    { id: 2, name: "image 2", ext: "png", size: "1.1 mb", checked: false },
    { id: 3, name: "image 3", ext: "png", size: "0.1 mb", checked: false },
    { id: 4, name: "image 4", ext: "png", size: "2.1 mb", checked: false },
    { id: 5, name: "image 5", ext: "png", size: "0.5 mb", checked: false },
  ];

  figma.ui.postMessage({
    type: "sendCompression",
    data: {
      images,
    },
  });
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-rectangles") {
    const nodes = [];

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};
