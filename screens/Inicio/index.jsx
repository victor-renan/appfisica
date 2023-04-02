import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import raio from '../../assets/raio.jpg';
import { Dimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { styles } from './styles';
import {
  Text,
  Box,
  Heading,
  ScrollView,
  Button,
  Image,
  theme
} from 'native-base';

// Route
export const InicioRoute = 'Início';

// Component
export function InicioScreen() {
  return (
    <ScrollView paddingX={3.5} paddingY={1} backgroundColor='gray.900'>

      <Box id='destaques' {...styles.sectionStyle}>
        <Box {...styles.titleStyle}>
          <Icon name='analytics-outline' {...styles.headingIconStyle} />
          <Heading color='white' {...styles.headingStyle}>
            Destaques
          </Heading>
        </Box>

        <SwiperFlatList {...styles.swiperStyle}>
          <Box {...styles.cardStyle}>
            <Image source={raio} alt="Imagem" {...styles.cardImageStyle} />
            <Box {...styles.cardTextStyle}>
              <Heading color="white">Eletrostática</Heading>
              <Text color="white">Lorem ipsum dolor sit amet consectetur.</Text>
            </Box>
          </Box>
          <Box {...styles.cardStyle}>
            <Image source={raio} alt="Imagem" {...styles.cardImageStyle} />
            <Box {...styles.cardTextStyle}>
              <Heading color="white">Eletrostática</Heading>
              <Text color="white">Lorem ipsum dolor sit amet consectetur.</Text>
            </Box>
          </Box>
          <Box {...styles.cardStyle}>
            <Image source={raio} alt="Imagem" {...styles.cardImageStyle} />
            <Box {...styles.cardTextStyle}>
              <Heading color="white">Eletrostática</Heading>
              <Text color="white">Lorem ipsum dolor sit amet consectetur.</Text>
            </Box>
          </Box>
        </SwiperFlatList>
      </Box>

      <Box id='material' {...styles.sectionStyle}>
        <Box {...styles.titleStyle}>
          <Icon name='book-outline' {...styles.headingIconStyle} />
          <Heading color='white' {...styles.headingStyle}>
            Material de apoio
          </Heading>
        </Box>

        <Text color='gray.400' fontSize={17} marginBottom={4}>Veja abaixo alguns dos conteúdos de Física mais importantes.</Text>

        <Box bg="gray.800" {...styles.topicStyle}>
          <Box backgroundColor="gray.600" {...styles.iconBgStyle}>
            <Icon name='thermometer-outline' color={theme.colors.gray[100]} size={36} />
          </Box>
          <Box {...styles.topicTextStyle}>
            <Heading {...styles.topicHeadingStyle}>Termometria</Heading>
            <Text {...styles.topicSubStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>

        <Box bg="gray.800" {...styles.topicStyle}>
          <Box backgroundColor="gray.600" {...styles.iconBgStyle}>
            <Icon name='flash-outline' color={theme.colors.gray[100]} size={36} />
          </Box>
          <Box {...styles.topicTextStyle}>
            <Heading {...styles.topicHeadingStyle}>Força e carga</Heading>
            <Text {...styles.topicSubStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>

        <Box bg="gray.800" {...styles.topicStyle}>
          <Box backgroundColor="gray.600" {...styles.iconBgStyle}>
            <Icon name='pulse-outline' color={theme.colors.gray[100]} size={36} />
          </Box>
          <Box {...styles.topicTextStyle}>
            <Heading {...styles.topicHeadingStyle}>Ondulatória</Heading>
            <Text {...styles.topicSubStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>

        <Button {...styles.btnStyle}>Veja todos</Button>
      </Box>

    </ScrollView>
  );
};