import { extendVariants, Chip } from "@nextui-org/react";


export const MyChip = extendVariants(Chip, {
  variants: {
    // color: {
    //     encriptador: {
    //       content: "text-base",
    //       color:'0A3871',
    //     },
    //   },
    size: {
      sm: {
        base: "min-w-24 py-2 size-28 h-8 text-center gap-1 rounded-full font-mono font-black",
        content: "text-small"
        // add other slot styles here
      },
      md: {
        base: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
        content: "text-small",
        // add other slot styles here
      },
      lg: {
        base: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
        content: "text-large",
        // add other slot styles here
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

