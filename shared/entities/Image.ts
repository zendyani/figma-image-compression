export default interface Image {
  id: number;
  name: string;
  ext: string;
  size: string;
  image: Uint8Array;
  dataUrl: string;
  checked: boolean;
  suffix?: string;
  scale?: string;
  loading?: boolean;
}
