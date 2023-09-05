export default interface Image {
  id: number;
  name: string;
  ext: string;
  size: string;
  image: Uint8Array;
  suffix?: string;
  scale?: string;
  checked: boolean;
}
