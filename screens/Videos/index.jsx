import React from "react";
import { Box, ScrollView, Text } from "native-base";
import { Video } from "../../components/Video";
import { sharedStyles } from "../../shared/styles";
import { RefreshControl } from "react-native";
import { styles } from "./styles";
import { Title } from "../../components/Title";
import { instance } from "../../shared/api";
import { ActivityIndicator } from "react-native";
import { searchByMateria } from "../../shared/utils";


export const VideosRoute = 'Videos';

export function VideosScreen() {
  const [materias, setMaterias] = React.useState([]);
  const [loadedMaterias, setLoadedMaterias] = React.useState(false);
  const [videos, setVideos] = React.useState([]);

  const loadMaterias = async () => {
    try {
      const response = await instance.get("materias/find")
      
      setMaterias(response.data);
      setLoadedMaterias(true);

    } catch (err) {
      console.log(err)
    }
  }

  const loadVideos = async () => {
    try {
      const response = await instance.get("videos/find")
      
      setVideos(response.data);

    } catch (err) {
      console.log(err)
    }
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    loadVideos();
    loadMaterias();

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    loadMaterias();
    loadVideos();
  }, [])

  return (
    <ScrollView {...sharedStyles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {loadedMaterias ? null : (<ActivityIndicator color="orange" size="large" />)}
      {materias.length > 0
        ? materias.map(item => (
          <Box key={item._id} marginBottom={5}>
            <Title
              icon="bookmark-outline"
              text={item.name}
            />
            {searchByMateria(videos, item.name).length > 0
              ? searchByMateria(videos, item.name).map(video => (
                <Video key={video._id} videoId={video.videoId} />
              ))
              : (<Text color="amber.500">Ainda não há videos para mostrar!</Text>)
            }
          </Box>
        ))
        : null}

    </ScrollView>
  );
};