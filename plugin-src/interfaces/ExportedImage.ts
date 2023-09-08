export default interface ExportedImage {
    id: number;
    ext: string;
    raw: Uint8Array;
    name: string;
    suffix?: string;
  }