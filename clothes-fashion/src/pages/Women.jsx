// Note : import the the mentioned components from chakra UI and remove the follwoing once imported

import { useState, useEffect, useReducer} from "react";
import { Box, Button, Center, Img, SimpleGrid, Text, VStack, Select, Spinner  } from "@chakra-ui/react";



const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
    return {
      ...state, 
      isLoading: true,
      error: null,
    };
    case "FETCH_SUCCESS":
    return {
      ...state,
      isLoading:false,
      data: action.payload,
    };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      default:
  };
};

export default function Women() {
   const [state, dispatch] = useReducer(reducer, initialState);
   const { data, isLoading, error } = state;

   const handleSortByAsc = () => {
    const sortedData = data.sort((a, b) => a.cost - b.cost);
    dispatch({ type: "FETCH_SUCCESS", payload: sortedData })
   }

   const handleSortByDesc = () => {
    const sortedData = data.sort((a, b) => b.cost - a.cost);
    dispatch({ type: "FETCH_SUCCESS", payload: sortedData })
   };

   

   useEffect(() => {
    dispatch({ type:"FETCH_INIT" });
    fetch(`http://localhost:9090/WomenProd`)
    .then((response) => response.json())
    .then((data) => {
      const catsData = data.map((item) => {
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          cost: Math.floor(Math.random() * 200) + 100,
          
        };
      });
      dispatch({ type: "FETCH_SUCCESS", payload: catsData })
    })
    .catch((error) => {
      dispatch({ type:"FETCH_FAILURE", payload: error.message })
    });
   }, []);

   if(isLoading){
    return <Spinner />;
   }

   if(error) {
    return <div>Error: {error}</div>
   }

  return (
    <div>
      <div className="sortingButtons">
        <Button colorScheme={"green"} className="sortByCostAsc" onClick={handleSortByAsc}>
          Sort by Asc
        </Button>
        <Button colorScheme={"red"} className="sortByCostDesc" m={2} onClick={handleSortByDesc}>
          Sort by Desc
        </Button>
      </div>
      

      {/* Map the below container against your data */}
      <Spinner />
      <SimpleGrid columns={4} spacing={10} className="main_container">
        {data.map((items) => (
          <Box className="catsDetails" key={items.id}>
          <Center>
            <Img src={items.image} />
          </Center>

          <VStack spacing={2} p={2}>
            <Text className="name" fontSize={"20px"} fontWeight="bold"></Text>
            <Text className="cost">${items.cost}</Text>
            
            <Box gap={5} display="flex" alignItems="center"><Button bg="green">Add to Cart</Button>
            </Box>
          </VStack>
        </Box>
        ))}
        
      </SimpleGrid>
    </div>
  );
}
