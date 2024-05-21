import {extendVariants, Button} from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      encriptador1: "text-[#000] bg-[#0A3871]",
      encriptador2: "text-[#fff] bg-[#D8DFE8]",
    },
    size: {
      xs: "px-2 min-w-8 h-8 text-tiny gap-1 rounded-full",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
    },
  },
});