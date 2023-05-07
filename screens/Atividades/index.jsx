import React from "react";
import { Box, ScrollView } from "native-base";
import { Materia } from "../../components/Materia";
import { sharedStyles } from "../../shared/styles";
import { ActivityIndicator } from "react-native";
import { instance } from "../../shared/api";
import { searchByMateria } from "../../shared/utils";
import { RefreshControl } from "react-native";


export const AtividadesRoute = 'Atividades';

export function AtividadesScreen() {
  const [materias, setMaterias] = React.useState([]);
  const [loadedMaterias, setLoadedMaterias] = React.useState(false);
  const [atividades, setAtividades] = React.useState([]);

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
  const loadAtividades = async () => {
    try {
      const response = await instance.get("atividades/find")
      console.log(response.data)
      setAtividades(response.data);

    } catch (err) {
      console.log(err)
    }
  }

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadMaterias();
    loadAtividades();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    loadAtividades();
    loadMaterias();
  }, [])


  return (
    <ScrollView {...sharedStyles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {loadedMaterias ? null : (<ActivityIndicator size="large" />)}
      <Box>
        {materias.length > 0
          ? materias.map((item) => (
            <Materia
              icon={"atividades"}
              key={item._id}
              name={item.name}
              description={item.description.slice(0, 68) + "..."}
              items={searchByMateria(atividades, item.name)}
            />
          ))
          : null}
      </Box>
    </ScrollView>
  );
};