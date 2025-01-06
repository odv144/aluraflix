import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonConfig = defineStyleConfig({
  // Estilos base que se aplican a todos los botones
  baseStyle: {},
  // Variantes predefinidas
  variants: {
    outline:{
      color:'white',
      fontWeight:300,

    },
    alura:{
      color:'blue.300',
      bg:'black',
      borderColor:'blue.300',
      border:'2px solid',
    },
    custom: {
      textTransform: "uppercase",
      border: "1px solid white",
      borderRadius: "15px",
      color: "white",
      letterSpacing:'0.3em',
      background: "black",
      _hover: {
        backgroundColor: "white",
        color: "black",
      },
      _active: {
        bg: "green.700",
      },
    },
  },
  // Tamaños predefinidos
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  // Configuración por defecto
  defaultProps: {
    size: "md",
    variant: "custom",
  },
});
