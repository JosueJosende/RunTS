import { create } from "zustand";
import { persist } from "zustand/middleware";

type TLayout = "vertical" | "horizontal";
type ConfigEditor = {
  fontSize: number;
  wordWrap: boolean;
  lineNumbers: boolean;
  whiteSpace: boolean;
  fontFamily: string;
  refreshTime: number | null;
  minimap: boolean;
  layout: TLayout;
  updates: boolean;
  setUpdates: (enabled: boolean) => void;
  setFontSize: (size: number) => void;
  setWordWrap: (enabled: boolean) => void;
  setLineNumbers: (enabled: boolean) => void;
  setWhiteSpace: (enabled: boolean) => void;
  setFontFamily: (fontFamily: string) => void;
  setRefreshTime: (time: number | null) => void;
  setMinimap: (enabled: boolean) => void;
  setLayout: (layout: TLayout) => void;
};
export const useConfigStore = create<ConfigEditor>()(
  persist(
    (set) => ({
      updates: true,
      fontSize: 18,
      wordWrap: true,
      lineNumbers: true,
      whiteSpace: true,
      fontFamily: '"Cascadia Code"',
      refreshTime: 1000,
      minimap: true,
      layout: "horizontal",
      setUpdates: (enabled) => set({ updates: enabled }),
      setFontSize: (size) => set({ fontSize: size }),
      setWordWrap: (enabled) => set({ wordWrap: enabled }),
      setLineNumbers: (enabled) => set({ lineNumbers: enabled }),
      setWhiteSpace: (enabled) => set({ whiteSpace: enabled }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
      setRefreshTime: (time) => set({ refreshTime: time }),
      setMinimap: (enabled) => set({ minimap: enabled }),
      setLayout: (layout) => set({ layout }),
    }),
    {
      name: "config-editor",

      partialize: (state) => ({
        fontSize: state.fontSize,
        wordWrap: state.wordWrap,
        lineNumbers: state.lineNumbers,
        whiteSpace: state.whiteSpace,
        fontFamily: state.fontFamily,
        refreshTime: state.refreshTime,
        minimap: state.minimap,
        layout: state.layout,
        updates: state.updates,
      }),
    },
  ),
);
