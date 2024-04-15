import React from "react";
import { Box, Heading, Text, Button, Image, Flex, Stack, SimpleGrid } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaSwimmer } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero section */}
      <Box bgImage="https://images.unsplash.com/photo-1678449784071-9b231055f636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnViYSUyMGJlYWNofGVufDB8fHx8MTcxMzE2NTQ1MHww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" py={40}>
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h1" size="3xl" color="white" mb={4}>
            Vacaciones en Aruba
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            Disfruta de playas paradisíacas, hoteles de lujo y diversión en familia
          </Text>
          <Button colorScheme="blue" size="lg">
            Reserva ahora
          </Button>
        </Box>
      </Box>

      {/* Services section */}
      <Box maxW="6xl" mx="auto" mt={20} px={4}>
        <Heading textAlign="center" mb={10}>
          Nuestros Servicios
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <Box textAlign="center">
            <FaPlane size={40} />
            <Heading as="h3" size="lg" mt={4}>
              Vuelos
            </Heading>
            <Text mt={2}>Vuelos directos desde las principales ciudades</Text>
          </Box>
          <Box textAlign="center">
            <FaHotel size={40} />
            <Heading as="h3" size="lg" mt={4}>
              Hoteles
            </Heading>
            <Text mt={2}>Hoteles de lujo frente a la playa</Text>
          </Box>
          <Box textAlign="center">
            <FaUmbrellaBeach size={40} />
            <Heading as="h3" size="lg" mt={4}>
              Playas
            </Heading>
            <Text mt={2}>Las mejores playas del Caribe</Text>
          </Box>
          <Box textAlign="center">
            <FaSwimmer size={40} />
            <Heading as="h3" size="lg" mt={4}>
              Actividades
            </Heading>
            <Text mt={2}>Diversión para toda la familia</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Hotels section */}
      <Box maxW="6xl" mx="auto" mt={20} px={4}>
        <Heading textAlign="center" mb={10}>
          Hoteles Destacados
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBhcnViYXxlbnwwfHx8fDE3MTMxNjU0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hotel 1" />
            <Heading as="h3" size="lg" mt={4}>
              Hotel Riu Palace Aruba
            </Heading>
            <Text mt={2}>Habitaciones de lujo frente al mar, piscinas, restaurantes y casino</Text>
            <Button mt={4} colorScheme="blue">
              Ver hotel
            </Button>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1625870649704-4b796255930f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnViYSUyMHJlc29ydHxlbnwwfHx8fDE3MTMxNjU0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hotel 2" />
            <Heading as="h3" size="lg" mt={4}>
              Divi Aruba Phoenix Beach Resort
            </Heading>
            <Text mt={2}>Suites equipadas, piscinas, restaurantes y actividades</Text>
            <Button mt={4} colorScheme="blue">
              Ver hotel
            </Button>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1508895531775-e4ae3b8994f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnViYSUyMGFsbCUyMGluY2x1c2l2ZSUyMHJlc29ydHxlbnwwfHx8fDE3MTMxNjU0NTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hotel 3" />
            <Heading as="h3" size="lg" mt={4}>
              Barceló Aruba
            </Heading>
            <Text mt={2}>Resort todo incluido con playa privada, piscinas y entretenimiento</Text>
            <Button mt={4} colorScheme="blue">
              Ver hotel
            </Button>
          </Box>
        </SimpleGrid>
      </Box>

      {/* CTA section */}
      <Box bgImage="https://images.unsplash.com/photo-1642114556088-e537a211a79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnViYSUyMGJlYWNoJTIwc3Vuc2V0fGVufDB8fHx8MTcxMzE2NTQ1MXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" py={40} mt={20}>
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="2xl" color="white" mb={4}>
            ¿Listo para vivir tus vacaciones soñadas?
          </Heading>
          <Button colorScheme="blue" size="lg">
            Reserva ahora
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
