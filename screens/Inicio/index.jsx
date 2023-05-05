import React from 'react';
import { Swiper } from '../../components/Swiper';
import { SwiperCard } from '../../components/SwiperCard';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { Text, Box, ScrollView } from 'native-base';
import { MaterialRoute } from '../Material';
import { sharedStyles } from '../../shared/styles'
import { Materia } from '../../components/Materia';

// Route
export const InicioRoute = 'Início';

// Component
export function InicioScreen({ navigation }) {
  const documents = [
    {
      type: "Atividade",
      name: "ASdasd",
      file: "adasdasd.pdf",
    }
  ]
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
          <Materia 
            documents={documents}
            title="Termometria"
            text="Lorem ipsum dolor sit amet consequotoir adspicing elit."
            icon="thermometer-outline"
          />
          <Materia 
            documents={documents}
            title="Termometria"
            text="Lorem ipsum dolor sit amet consequotoir adspicing elit."
            icon="thermometer-outline"
          />
          <Materia
            documents={documents}
            title="Termometria"
            text="Lorem ipsum dolor sit amet consequotoir adspicing elit."
            icon="thermometer-outline"
          />
        </Box>
        <Button onPress={() => navigation.navigate(MaterialRoute)}>
          Veja todos
        </Button>
      </Box>
    </ScrollView>
  );
};