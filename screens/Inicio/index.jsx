import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { Video } from '../../components/Video';

import {
  View,
  Text,
  Box,
  Heading,
  ScrollView,
  Button,
  theme
} from 'native-base';


export const InicioRoute = 'Início';

export function InicioScreen() {
  return (
    <ScrollView>

      <Box
        safeAreaTop={true}
        flex={1}
        padding={3.5}
      >

        <Box>
          <Video height={200} videoId={"bHQqvYy5KYo"} />
        </Box>

        <Heading marginBottom={2} marginTop={5}>Partes da Física</Heading>
        <Text fontSize={18} marginBottom={4}>Veja abaixo alguns dos temas de física mais abrangentes da atualidade.</Text>

        <Box
          bg="primary.600"
          borderRadius={12}
          height={95}
          marginBottom={1}
          flexDirection="row"
          alignItems="center"
          padding={2}
        >
          <Box
            width={65}
            height={65}
            borderRadius={8}
            backgroundColor="primary.500"
            justifyContent="center"
            alignItems="center"
          >
            <Icon name='thermometer-outline' color={theme.colors.primary[100]} size={36} />
          </Box>

          <Box
            flex={1}
            paddingLeft={3}
          >
            <Heading color="white">Dilatação volumétrica</Heading>
            <Text color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>
        <Box
          bg="amber.600"
          borderRadius={12}
          height={95}
          marginBottom={1}
          flexDirection="row"
          alignItems="center"
          padding={2}
        >
          <Box
            width={65}
            height={65}
            borderRadius={8}
            backgroundColor="amber.500"
            justifyContent="center"
            alignItems="center"
          >
            <Icon name='flash-outline' color={theme.colors.amber[100]} size={36} />
          </Box>

          <Box
            flex={1}
            paddingLeft={3}
          >
            <Heading color="white">Força eletrica</Heading>
            <Text color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>
        <Box
          bg="tertiary.600"
          borderRadius={12}
          height={95}
          marginBottom={1}
          flexDirection="row"
          alignItems="center"
          padding={2}
        >
          <Box
            width={65}
            height={65}
            borderRadius={8}
            backgroundColor="tertiary.500"
            justifyContent="center"
            alignItems="center"
          >
            <Icon name='pulse-outline' color={theme.colors.tertiary[100]} size={36} />
          </Box>

          <Box
            flex={1}
            paddingLeft={3}
          >
            <Heading color="white">Ondulatória</Heading>
            <Text color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus</Text>
          </Box>
        </Box>

        <Button
          marginTop={2}
          size="lg"
          borderRadius={8}
        >
          Veja todos
        </Button>
      </Box>
    </ScrollView>
  );
};