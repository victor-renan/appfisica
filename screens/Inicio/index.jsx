import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { Video } from '../../components/Video';

import {
  Text,
  Box,
  Heading,
  ScrollView,
  Button,
  theme
} from 'native-base';

import { styles } from './styles';


export const InicioRoute = 'Início';

export function InicioScreen() {
  return (
    <ScrollView paddingX={3.5} paddingY={1}>

      <Box id='destaques' {...styles.sectionStyle}>
        <Box {...styles.titleStyle}>
          <Icon name='analytics-outline' size={24} />
          <Heading {...styles.headingStyle}>
            Destaques
          </Heading>
        </Box>

        <Box flex={1} bg="primary.600" {...styles.cardStyle}>
          <Box padding={4}>
            <Heading color="white">Eletrostática</Heading>
            <Text color="white">Lorem ipsum dolor sit amet consectetur.</Text>
          </Box>
        </Box>

      </Box>

      <Box id='material' {...styles.sectionStyle}>
        <Box {...styles.titleStyle}>
          <Icon name='book-outline' size={24} />
          <Heading {...styles.headingStyle}>
            Material de apoio
          </Heading>
        </Box>

        <Text fontSize={17} marginBottom={4}>Veja abaixo alguns dos conteúdos de Física mais importantes.</Text>

        <Box bg="primary.600" {...styles.topicStyle}>
          <Box backgroundColor="primary.500" {...styles.iconBgStyle}>
            <Icon name='thermometer-outline' color={theme.colors.primary[100]} size={36} />
          </Box>
          <Box flex={1} paddingLeft={3}>
            <Heading color="white">Dilatação volumétrica</Heading>
            <Text color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>

        <Box bg="amber.600" {...styles.topicStyle}>
          <Box backgroundColor="amber.500" {...styles.iconBgStyle}>
            <Icon name='flash-outline' color={theme.colors.amber[100]} size={36} />
          </Box>
          <Box flex={1} paddingLeft={3}>
            <Heading color="white">Força eletrica</Heading>
            <Text color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>

        <Box bg="tertiary.600" {...styles.topicStyle}>
          <Box backgroundColor="tertiary.500" {...styles.iconBgStyle}>
            <Icon name='pulse-outline' color={theme.colors.tertiary[100]} size={36} />
          </Box>
          <Box flex={1} paddingLeft={3}>
            <Heading color="white">Ondulatória</Heading>
            <Text color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>

        <Button marginTop={2} size="lg" borderRadius={8}>Veja todos</Button>
      </Box>

    </ScrollView>
  );
};