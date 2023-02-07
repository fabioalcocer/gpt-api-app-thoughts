import { MoonIcon } from '@chakra-ui/icons'
import { SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Button,
  Text,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react'

function NavBar() {
  const {colorMode, toggleColorMode} = useColorMode()
  
  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.700')}
        px={{ base: 4, sm: 10, md: 100 }}
        py={4}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box>
            <Text
              fontWeight={650}
              lineHeight={1.2}
              fontSize={{ base: 'lg', md: '3xl' }}
            >
              🙏 Thankful Thoughts
            </Text>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
