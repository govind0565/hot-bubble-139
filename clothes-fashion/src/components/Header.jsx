import { Link as ChakraLink, Flex, Input, InputGroup, InputRightElement, Button,  Image } from "@chakra-ui/react";
import { FiSearch, FiUser, FiShoppingCart, FiMapPin } from "react-icons/fi";

const Header = () => {
  const handleSearch = () => {
    console.log("clicked");
  };

  return (
    <Flex bg={"teal"} as="nav" alignItems="center" justifyContent="space-between" position="fixed"
    top="0"
    left="0"
    right="0"
    zIndex="1"  padding="1rem" >
      <Flex alignItems="center">
        <ChakraLink href="/" mr={8}>
          <Image src="https://scontent.fnag6-2.fna.fbcdn.net/v/t39.30808-6/332687507_3112817625691423_3413547972692156329_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Lc0xYa7aA40AX-O-vrl&_nc_ht=scontent.fnag6-2.fna&oh=00_AfBV0N2MHVzTiVj04v1mg0FiPByCak-4O2ZgxuPiQBDI4w&oe=63FBD833" alt="Logo" height="50px" />
        </ChakraLink>
        <ChakraLink fontWeight="bold" href="/women" mr={4} title="Women's clothing">
          Women
        </ChakraLink>
        <ChakraLink fontWeight="bold" href="/men" mr={4} title="Men's clothing">
          Men
        </ChakraLink>
        <ChakraLink fontWeight="bold" href="/jeans" mr={4} title="Jeans">
          Jeans
        </ChakraLink>
        <ChakraLink fontWeight="bold" href="/" mr={4} title="All categories">
          Clearance
        </ChakraLink>
      </Flex>
      <Flex alignItems="center">
        <InputGroup mr={8}>
          <InputRightElement pointerEvents="auto" children={<FiSearch onClick={handleSearch} />} />
          <Input type="text" placeholder="Search items" />
        </InputGroup>
        <Button mr={8} leftIcon={<FiMapPin />} variant="ghost">
          
        </Button>
        <Button mr={8} href="/login" leftIcon={<FiUser />} variant="ghost" title="login and  page">
          
        </Button>
        <Button mr={4} href="/cart" leftIcon={<FiShoppingCart />} variant="ghost">
          (0)
        </Button>
      </Flex>

    </Flex>
   
   
    
  );
};

export default Header;
