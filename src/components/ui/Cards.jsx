import { Card, CardHeader, CardBody, CardFooter, Badge } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { ButtonGroup } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

function Cards(props) {
  const { imageUrl, altText, title, description, price, promotion } = props;
  
  // Styles
  const cardStyles = {
    width: promotion?"200%" : "",
    padding: "10px",
    maxW: promotion ? '80%' : 'sm',
    bg: '#181A1B', // Background color
    borderRadius: promotion ? 'xl' : 'lg', // Increase border radius if promotion attribute is present
    display: 'flex', // Display image and content side by side
    position: 'relative', // Add position relative for badge positioning
  };

  const imageStyles = {
    borderRadius: promotion ? 'xl' : 'lg', // Increase border radius for image
    alignSelf: promotion ? 'stretch' : 'auto', // Align image to stretch vertically if promotion
  };

  const contentStyles = {
    flex: 1, // Allow content to take remaining width
    pl: promotion ? '0' : '4', // Add padding only if not in promotion mode
  };

  return (
    <Card {...cardStyles}>
      {promotion && (
        <Badge
          position="absolute"
          top="0"
          left="0"
          bg="blue.500"
          color="white"
          fontSize="sm"
          px="2"
          py="1"
          borderRadius="md"
          zIndex="1"
        >
          Promoted
        </Badge>
      )}
      <Image
        src={imageUrl || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        alt={altText || title}
        borderRadius={promotion ? 'xl' : 'lg'} // Increase border radius for image
        maxW={promotion ? '100%' : '50%'} // Limit width of image to half if in promotion mode
        {...imageStyles}
      />
      <Stack {...contentStyles} mt='6' spacing='3'>
        <Heading size='md' color='gray.100'>{title}</Heading>
        <Text color='gray.200' fontSize={promotion ? 'lg' : 'md'}> {/* Increase font size if promotion */}
          {description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          {price}
        </Text>
      </Stack>
      <Divider />
      <CardFooter w='full' textAlign='center'> {/* Make the footer full width */}
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Cards;
