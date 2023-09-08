import { create } from "zustand";
import ImagesState from "./intrerfaces/ImagesState";

interface ImagesStore {
  imagesData: ImagesState[];
  setImagesData: (data: ImagesState[]) => void;
  setError: (val: string) => void;
  updateProperty: (
    id: number,
    property: "checked" | "loading",
    val: string | boolean | null
  ) => void;
  checkAll: (val: boolean) => void;
  error: string;
}

const useImagesStore = create<ImagesStore>((set) => ({
  imagesData: [],
  error: "",

  setImagesData: (data) => set((state) => ({ imagesData: data })),

  setError: (val) => set((state) => ({ error: val })),

  checkAll: (val) =>
    set((state) => ({
      imagesData: state.imagesData.map((s) => ({ ...s, checked: val })),
    })),

  updateProperty: (id, property, val) =>
    set((store) => ({
      imagesData: store.imagesData.map((s) =>
        s.id === id ? { ...s, [property]: val } : s
      ),
    })),
}));

export default useImagesStore;
