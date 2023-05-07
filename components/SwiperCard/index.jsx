import raio from '../../assets/images/raio.jpg';
import prisma from '../../assets/images/prisma.jpg';
import forja from '../../assets/images/forja.jpg';
import { Box, Image, Heading, Text, Link } from "native-base";
import { styles } from './styles';

export const imagens = {
  raio,
  prisma,
  forja
}

export function SwiperCard({ image, title, text }) {
  return (
    <Link {...styles.card}>
      <Image source={image} alt="Imagem" {...styles.cardImage} />
      <Box {...styles.cardText}>
        <Heading color="white">{title}</Heading>
        <Text color="white">{text}</Text>
      </Box>
    </Link>
  );
}

