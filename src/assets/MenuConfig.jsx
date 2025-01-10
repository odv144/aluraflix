import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style

  list: {
    // this will style the MenuList component
    py: '4',
    
    borderRadius: '5px',
    border: 'none',
    bg: 'rgba(82, 82, 82, 0.7)',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: 'gray.600',
   
    _hover: {
      bg: 'gray.300',
    },
    _focus: {
      bg: 'blue.600',
    },
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'blue',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '1',
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4',
  },
  divider: {
    // this will style the MenuDivider component
    my: '2',
    borderColor: 'white',
    borderBottom: '2px dotted',
  },
})
// export the base styles in the component theme
export const MenuConfig = defineMultiStyleConfig({ baseStyle })