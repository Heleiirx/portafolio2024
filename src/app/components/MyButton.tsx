import {extendVariants, Button} from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      encriptador1: "text-[#000] bg-[#0A3871]",
      encriptador2: "text-[#fff] bg-[#D8DFE8]",
      nooks1: "text-[#000] bg-[#4EA966]",
      nooks2: "text-[#fff] bg-[#C5FF9D]",
      nooks3: "text-[#fff] bg-[#FAF4D2]",
      hs1: "text-[#fff] bg-[#EF9CA6]",
      hs2: "text-[#fff] bg-[#F4DD51]",
      hs3: "text-[#000] bg-[#191919]",
    },
    size: {
      xs: "min-w-4 size-6 h-6 text-tiny rounded-full p-0",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
    },
  },
});