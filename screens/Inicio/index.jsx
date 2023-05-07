import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Swiper } from '../../components/Swiper';
import { SwiperCard, imagens } from '../../components/SwiperCard';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { Text, Box, ScrollView } from 'native-base';
import { MaterialRoute } from '../Material';
import { sharedStyles } from '../../shared/styles'
import { Materia } from '../../components/Materia';
import { instance } from "../../shared/api";
import { searchByMateria } from '../../shared/utils';
import { RefreshControl } from 'react-native-gesture-handler';

// Route
export const InicioRoute = 'Início';

// Component
export function InicioScreen({ navigation }) {
  const [materias, setMaterias] = React.useState([]);
  const [loadedMaterias, setLoadedMaterias] = React.useState(false);
  const [materiais, setMateriais] = React.useState([]);

  const loadMaterias = async () => {
    try {
      const response = await instance.get("materias/find")
      console.log(response.data)
      setMaterias(response.data);
      setLoadedMaterias(true);

    } catch (err) {
      console.log(err)
    }
  }

  const loadMateriais = async () => {
    try {
      const response = await instance.get("materiais/find")
      console.log(response.data)
      setMateriais(response.data);

    } catch (err) {
      console.log(err)
    }
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    loadMateriais();
    loadMaterias();

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    loadMateriais();
    loadMaterias();
  }, [])

  return (
    <ScrollView {...sharedStyles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {/* Slides dos destaques */}
      <Box id='destaques' {...sharedStyles.section}>
        <Title text="Destaques" icon="analytics-outline" />
        <Swiper>
          <SwiperCard
            title="Eletrostática"
            text="Parte da física que aborda a eletricidade."
            image={imagens.raio}
          />
          <SwiperCard
            title="Óptica"
            text="Área que estuda os fenômenos da a luz."
            image={imagens.prisma}
          />
          <SwiperCard
            title="Termometria"
            text="Campo que compreende a temperatura."
            image={imagens.forja}
          />
        </Swiper>
      </Box>

      {/* Sessão do material de apoio */}
      <Box id='material' {...sharedStyles.section}>
        <Title text="Material de Apoio" icon="book-outline" />
        <Text color='gray.400' fontSize={17} marginBottom={4}>Veja abaixo alguns dos conteúdos de Física mais importantes.</Text>
        {loadedMaterias ? null : (<ActivityIndicator size="large" />)}
        <Box>
          {materias.length > 0
            ? materias.slice(0, 3).map((item) => (
              <Materia
                icon={"materiais"}
                key={item._id}
                name={item.name}
                description={item.description.slice(0, 68) + "..."}
                items={searchByMateria(materiais, item.name)}
              />
            ))
            : null}
        </Box>
        <Button onPress={() => navigation.navigate(MaterialRoute)}>
          Veja todos
        </Button>
      </Box>
    </ScrollView>
  );
};