import ExportedImage from "../interfaces/ExportedImage";

export default async function ExtractImages(node: SceneNode): Promise<ExportedImage[]> {
  const images: ExportedImage[] = [];
  const { exportSettings } = node;
  for (const param of exportSettings) {
    const ext = param.format.toLowerCase();
    const suffix = param.suffix;
    const scale = 1;
    // const scale = (param.constraint.type === 'SCALE') ? param.constraint.value : 1

    if (ext !== "svg") {
      const image = await node.exportAsync(param);

      images.push({
        id: Date.now(),
        ext: ext,
        raw: image,
        name: node.name,
        suffix: suffix,
      });
    }
  }
  return images;
}
