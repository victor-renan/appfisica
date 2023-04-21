import React from 'react';
import { Swiper } from '../../components/Swiper';
import { SwiperCard } from '../../components/SwiperCard';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { Text, Box, ScrollView } from 'native-base';
import { MaterialRoute } from '../Material';
import { Category } from '../../components/Category';
import { sharedStyles } from '../../shared/styles'
import { Document } from '../../components/Document';

// Route
export const InicioRoute = 'Início';

// Component
export function InicioScreen({ navigation }) {
  return (
    <ScrollView {...sharedStyles.container}>
      {/* Slides dos destaques */}
      <Box id='destaques' {...sharedStyles.section}>
        <Title text="Destaques" icon="analytics-outline" />
        <Swiper>
          <SwiperCard />
          <SwiperCard />
          <SwiperCard />
        </Swiper>
      </Box>

      {/* Sessão do material de apoio */}
      <Box id='material' {...sharedStyles.section}>
        <Title text="Material de Apoio" icon="book-outline" />
        <Text color='gray.400' fontSize={17} marginBottom={4}>Veja abaixo alguns dos conteúdos de Física mais importantes.</Text>
        <Box>
          <Category
            showMateriais
            icon="thermometer-outline"
            title="Termometria"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus"
          />
          <Category
            showMateriais
            icon="thermometer-outline"
            title="Termometria"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus"
          />
          <Category
            showAtividades
            icon="thermometer-outline"
            title="Termometria"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus"
          />
        </Box>
        <Button onPress={() => navigation.navigate(MaterialRoute)}>
          Veja todos
        </Button>
      </Box>
    </ScrollView>
  );
};