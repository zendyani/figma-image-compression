import ExportedImage from "../interfaces/ExportedImage";

export default async function ExtractImages(node: SceneNode): Promise<ExportedImage[]> {
  const images: ExportedImage[] = [];
  const { exportSettings } = node;
  for (const exportParam of exportSettings) {
    const ext = exportParam.format.toLowerCase();
    const suffix = exportParam.suffix;
    // const scale = 1;
    const scale = (exportParam.constraint && exportParam.constraint.type === 'SCALE') ? exportParam.constraint.value : 1
  
    if (ext !== "pdf") {
      const image = await node.exportAsync(exportParam);

      images.push({
        id: Date.now(),
        ext: ext,
        raw: image,
        name: node.name,
        suffix: suffix,
        scale: scale
      });
    }
  }
  return images;
}
