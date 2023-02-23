import { Link as ChakraLink,  Flex, Box, Stack, Text, Grid, Center, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { FiFacebook, FiGift, FiInstagram, FiMapPin, FiMessageSquare, FiShoppingCart, FiTwitter, FiYoutube } from 'react-icons/fi'

const Home = () => {
  return (
    <Stack m={'auto'} w="97%" h={'auto'} border="0px solid red" mb={30} spacing={4}>
      <Box position={'relative'} w="100%" h="230px" bgGradient="linear(to-r, red, orange, yellow, green, blue, purple)"
      borderRadius="md" display={'flex'} alignItems="center" color={'white'} >
        <Box
        position="absolute"
        right="0"
        w="40%"
        h="65%"
        bg="white"
        borderRadius="md"
        mr={90}
        color="black"
        border="1px solid black"
        overflow="hidden"
        
      >
        <Text fontWeight={'bold'}  fontSize="2xl">STAND TALL. STAND PROUD. STAND OUT.</Text>
        <Text fontSize="2xl">
        Take pride in who you are
        Celebrate individuality together.
        </Text>
        </Box>
        <Text fontWeight={'bold'} ml="500px" fontSize="2xl">
          AERO <br/> unite
        </Text>
        
      </Box>

      <Box w="100%" h="150px" borderRadius="md" display={'flex'} justifyContent="space-between" alignItems="center" mt={30} border="0px solid green">
        <Box w="40%" h="95%" border="0px solid blue" ml={1}>
          <Text  fontSize="4xl" fontWeight={'bold'}> 50-70% Off Everything!</Text>
          <Text  fontSize="3xl" > & Our Biggest Shorts Event of The Season!</Text>
        </Box>

        <Box w="40%" h="95%" border="0px solid blue" display="flex" alignItems={'center'} mr={1}>
        <Grid
         templateColumns="repeat(2, 1fr)"
         templateRows="repeat(2, 1fr)"
         gap={4}
         padding={4}
         width="100%"
  >
    <Box border="2px solid red" >Shop Girls</Box>
    <Box border="2px solid red" display="flex" gap={5} >
      <Text fontSize="1xl">Girls Shorts: </Text>
      <Text fontSize="1xl" fontWeight={'bold'}>$11.87 & UP</Text>
    </Box>
    <Box border="2px solid red" >Shop Guys</Box>

    <Box border="2px solid red"  display="flex" gap={5}  >
    <Text fontSize="1xl">Boys Shorts: </Text>
      <Text fontSize="1xl" fontWeight={'bold'}>$12.07 & UP</Text>
    </Box>
    
  </Grid>
        </Box>

      </Box>


      <Box w="100%" h="auto" borderRadius="md" display={'flex'} alignItems="center" mt={30} border="0px solid green">
      <Image src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw43c05651/images/homepage/2020/061120/DESKTOP@2x.jpg" alt="Box 1 Image" />
      
      </Box>


      <Box w="100%" h="130px" borderRadius="md" display={'flex'} alignItems="center" mt={30} border="0px solid green" bg="rgb(238,94,104)">

        <Box w="90%" h="75%" bg="white" m="auto">
          <Text fontSize="2xl" fontWeight="bold">Our Responsibility to make Our Customer Happy 😃</Text>
          <Text fontSize="3xl" fontWeight="bold">Let's do Shopping! 🛒</Text>
        </Box>

      </Box>


      <Box w="100%" h="auto" borderRadius="md" display={'flex'} gap="15px" alignItems="center" mt={30} border="0px solid green" >
        <Box width="25%" display={'flex'}>
        <Image  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw3b4b5fcf/images/homepage/2020/060420/060420%20GIRLS%20SHORTS%20PHOTO@2x.jpg" alt="Box 1 Image" />

        <Image src='https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd31e0e5c/images/jeans-guide/031320-girls-shorts-guide/CURVY.jpg' alt='first-img' />
        <Image src='https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw1d7d9d9a/images/jeans-guide/031320-girls-shorts-guide/VINTAGE%20HIGH%20RISE.jpg' alt='first-img' />
        <Image src='https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw263e01e0/images/jeans-guide/031320-girls-shorts-guide/BERMUDA.jpg' alt='first-img' />
       


        </Box>
        
      
      </Box>

      <Box w="100%" h="auto" borderRadius="md" display={'flex'} gap="15px" alignItems="center" mt={30} border="0px solid green" >
        <Box w="25%" display={'flex'} >
        <Image  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwe3f82a4b/images/homepage/2020/060420/GUYS%20SHORTS%20PHOTO@2x.jpg" alt="Box 1 Image" />
        </Box>
        <Box width="70%" background="linear-gradient(to bottom, #ff00ff, #00ffff)" >
        <Image  src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw92d6d6de/images/homepage/2020/060420/GUYS%20TEES@2x.jpg" alt="Box 1 Image" />
        </Box>

      </Box>

      <Box w="100%" h="auto" borderRadius="md"  m="auto" gap="15px"  mt={30} border="0px solid green">
        <Text fontSize="3xl" fontWeight={'bold'} color="red" m={'auto'}>Aero <br/>
          Jeans
          </Text>
          <Text color="lightBlue" fontSize="2xl">The easiest fits, the most <br />
                comfortable stretch. Complete <br />
                with special washes that make <br />
                them all your own.
                </Text>

               <Box mt={5}  mb={5}><Button bg={'white'} border="2px solid lightBlue">
                  Girl Jeans <Text fontWeight={'bold'}>$17.87 & UP</Text>
                  </Button></Box> 
                
                  <Box  mb={5}><Button bg={'white'} border="2px solid lightBlue">
                  Boys Jeans <Text fontWeight={'bold'}>$17.87 & UP</Text>
                  </Button></Box> 
      </Box>


      <Box w="100%" h="auto" borderRadius="md" display={'flex'} gap="15px" alignItems="center" mt={30} border="0px solid green">
        <Image src='https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw50dec257/images/homepage/2020/051320/ECO_DESKTOP@2x-min.jpg' alt='boxImg' />
      </Box>

      <Box w="100%" color="white" bg="black" h="auto" borderRadius="md" display={'flex'} gap="15px" alignItems="center" mt={120} border="0px solid green" paddingTop="50px">
        <Box w="20%" border="0px solid green">
        <Button mr={4} _hover={{textDecor:"underline"}} leftIcon={<FiMapPin />} variant="ghost"> Store Locator</Button>
        <Button mr={4} _hover={{textDecor:"underline"}} leftIcon={<FiShoppingCart />} variant="ghost"> Order Status</Button>

        <Button mr={4} _hover={{textDecor:"underline"}} leftIcon={<FiGift />} variant="ghost"> GiftCards/Balance</Button>

        <Button mr={4} _hover={{textDecor:"underline"}} leftIcon={<FiMessageSquare />} variant="ghost">Feedback</Button>

        </Box>
        <Box w="20%" border="0px solid green">
          <Text fontSize="2xl" fontWeight="bold">Shopping Help</Text>
          <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Help Desk</Button>
          <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Returns & Exchange</Button>
          <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Prices & Price Match Policy</Button>
          <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Shipping & Handling</Button>
          <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Size Charts</Button>
          <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Buy Online, Pick Up In Store</Button>
          <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Student Disk</Button>
        </Box>
        <Box w="20%" border="0px solid green">
        <Text fontSize="2xl" fontWeight="bold">Questions?</Text>
        
        <Box mb="15px">
        <Button mb="none" mr={4} fontSize="1xl"  variant="ghost" _hover={{textDecor:"underline"}} > Chat With Us</Button> 
        <p>Available 9AM - 12AM EST</p>
        </Box>
        
        <Box mb="15px">
        <Button  mr={4} fontSize="1xl"  variant="ghost" _hover={{textDecor:"underline"}} > Call Us</Button> 
        <p>1.877.289.2376</p>
        </Box>
        
        <Box>
        <Button mb="none" mr={4} fontSize="1xl"  variant="ghost" _hover={{textDecor:"underline"}} > Contact Us</Button>
        </Box>
         



          
          
        </Box>
        <Box w="20%" border="0px solid green">
        <Text fontSize="2xl" fontWeight="bold">About Us</Text>
        <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> About Aeropostale</Button>
        <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost">Carriers</Button>
        <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Supply Chain</Button>
        <Button mr={4} fontSize="1xl" _hover={{textDecor:"underline"}}  variant="ghost"> Aero Impact</Button>
        

        </Box>

        <Box w="15%" border="0px solid red">
        <Text fontSize="2xl" fontWeight="bold">Follow Us</Text>
        <Box marginTop="10px" display="flex" justifyContent="space-around">
        <FiInstagram />
        <FiTwitter />
        <FiFacebook />
        <FiYoutube />
        </Box>
        
        
        </Box>

      </Box>
      
    </Stack>
  )
}

export default Home