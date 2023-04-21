import raio from '../../assets/raio.jpg';
import { Box, Image, Heading, Text } from "native-base";
import { styles } from './styles';


export function SwiperCard() {
  return (
    <Box {...styles.card}>
      <Image source={raio} alt="Imagem" {...styles.cardImage} />
      <Box {...styles.cardText}>
        <Heading color="white">Eletrostática</Heading>
        <Text color="white">Lorem ipsum dolor sit amet consectetur.</Text>
      </Box>
    </Box>
  );
}

