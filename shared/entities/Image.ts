export default interface Image {
  id: number;
  name: string;
  ext: string;
  size: string;
  raw: Uint8Array;
  suffix?: string;
  scale?: string;
}
