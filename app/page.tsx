'use client'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import { Formik, Field } from 'formik'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from '@chakra-ui/react'
import { SelectControl } from 'formik-chakra-ui'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [gratitude, setGratitude] = useState('')

  const initialValues = {
    category: 'person',
    personName: '',
    personPronount: 'she/her',
    petType: '',
    petName: '',
    placeName: '',
    thingName: '',
  }

  async function repeat(prompt: string) {
    setGratitude('')
  }

  return (
    <main>
    <Flex
      bg={useColorModeValue("gray.50", "gray.700")}
      color={useColorModeValue("gray.700", "gray.200")}
      align="center"
      justify="center"
      h="83vh"
    >
      <VStack spacing={4} align="center" textAlign={"center"}>
        <Box p={{ base: 2, md: 6 }}>
          <Heading
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Generate a thought of <br />
            <Text as={"span"} color={"purple.400"}>
              gratitude
            </Text>
            {" and "}
            <Text as={"span"} color={"orange.400"}>
              appreciation
            </Text>
          </Heading>
        </Box>

        <Box p={6} rounded="md" w={80} bg="white" color="black">
          <Formik
            initialValues={initialValues}
            onSubmit={}
          >
            {({ handleSubmit, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isRequired>
                    <FormLabel htmlFor="category">Select an option</FormLabel>
                    <SelectControl name="category">
                      <option value="person">Person</option>
                      <option value="pet">Pet</option>
                      <option value="place">Place</option>
                      <option value="thing">Thing</option>
                    </SelectControl>
                    <FormErrorMessage>{errors.category}</FormErrorMessage>
                  </FormControl>
                  {values.category === "person" && (
                    <>
                      <FormControl isRequired>
                        <FormLabel htmlFor="personName">
                          What is their name?
                        </FormLabel>
                        <Field
                          as={Input}
                          id="personName"
                          name="personName"
                          type="name"
                          variant="filled"
                          bg="gray.200"
                        />
                        <FormErrorMessage>
                          {errors.personName}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel htmlFor="personPronoun">
                          Pronouns
                        </FormLabel>
                        <SelectControl name="personPronoun">
                          <option value="she/her">she/her</option>
                          <option value="he/his">he/his</option>
                          <option value="they/them">they/them</option>
                        </SelectControl>
                      </FormControl>
                    </>
                  )}
                  {values.category === "pet" && (
                    <>
                      <FormControl isRequired>
                        <FormLabel htmlFor="petType">
                          What type of pet do you have?
                        </FormLabel>
                        <Field
                          as={Input}
                          id="petType"
                          name="petType"
                          type="name"
                          variant="filled"
                          bg="gray.200"
                        />
                        <FormErrorMessage>{errors.petType}</FormErrorMessage>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel htmlFor="petName">
                          What's your pet's name?
                        </FormLabel>
                        <Field
                          as={Input}
                          id="petName"
                          name="petName"
                          type="name"
                          variant="filled"
                          bg="gray.200"
                        />
                        <FormErrorMessage>{errors.petName}</FormErrorMessage>
                      </FormControl>
                    </>
                  )}
                  {values.category === "place" && (
                    <>
                      <FormControl isRequired>
                        <FormLabel htmlFor="placeName">
                          What's the name of the place?
                        </FormLabel>
                        <Field
                          as={Input}
                          id="placeName"
                          name="placeName"
                          type="name"
                          variant="filled"
                          bg="gray.200"
                        />
                        <FormErrorMessage>
                          {errors.placeName}
                        </FormErrorMessage>
                      </FormControl>
                    </>
                  )}
                  {values.category === "thing" && (
                    <>
                      <FormControl isRequired>
                        <FormLabel htmlFor="thingName">
                          What's the thing?
                        </FormLabel>
                        <Field
                          as={Input}
                          id="thingName"
                          name="thingName"
                          type="name"
                          variant="filled"
                          bg="gray.200"
                        />
                        <FormErrorMessage>
                          {errors.thingName}
                        </FormErrorMessage>
                      </FormControl>
                    </>
                  )}
                  <Button type="submit" colorScheme="purple" width="full">
                    Generate Thought
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
        {gratitude && (
          <Box bg="white" p={6} rounded="md" w={80}>
            <Text fontWeight={700} color={"purple.400"}>
              {gratitude}
            </Text>
          </Box>
        )}
      </VStack>
    </Flex>
  </main>
  )
}
