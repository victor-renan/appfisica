import React from "react";
import { Box, ScrollView } from "native-base";
import { Materia } from "../../components/Materia";
import { sharedStyles } from "../../shared/styles";
import { ActivityIndicator } from "react-native";
import { instance } from "../../shared/api";
import { searchByMateria } from "../../shared/utils";
import { RefreshControl } from "react-native";

// Rota para a tela "Material"
export const MaterialRoute = 'Material';

// Tela em si
export function MaterialScreen({ navigation }) {
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
      {loadedMaterias ? null : (<ActivityIndicator color="orange" size="large" />)}
      <Box>
        {materias.length > 0
          ? materias.map((item) => (
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
    </ScrollView>
  );
}