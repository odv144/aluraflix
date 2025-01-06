import { background, extendTheme } from "@chakra-ui/react";
import { ButtonConfig } from "./ButtonConfig";
import { InputConfig } from "./InputConfig";
import { MenuConfig } from "./MenuConfig";


const colors = {
  brand: {
    100: "#F6e7f6",
    200: "#F5e5f5",
    300: "#E5e5e5",
    400: "#D5e5D5",
    500: "#C5e5C5",
    600: "#B5e5B5",
    700: "#A5e5A5",
    800: "#90e090",
  },
  primary: "#5252f2",
};
const fonts = {
  heading: "Roboto,Courier New , sans-serif",
  body: "Roboto, sans-serif",
};

export const themePropio = extendTheme({
  colors,
  fonts,
  components: {
    Button: ButtonConfig,
    Input: InputConfig,
    Menu: MenuConfig,
  },
});

// export const themePropio = extendTheme({colors,fonts,components:{Button:buttonAlura}});
