import { swatch, fileIcon, ai, logoPick, stylishPick } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  // {
  //   name: "aipicker",
  //   icon: ai,
  // },
];

export const FilterTabs = [
  {
    name: "logoPick",
    icon: logoPick,
  },
  {
    name: "stylishPick",
    icon: stylishPick,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoPick",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishPick",
  },
};
