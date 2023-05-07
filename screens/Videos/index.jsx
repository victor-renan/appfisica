import React from "react";
import { Box, ScrollView } from "native-base";
import { Video } from "../../components/Video";
import { sharedStyles } from "../../shared/styles";
import { RefreshControl } from "react-native-gesture-handler";
import { styles } from "./styles";

export const VideosRoute = 'Videos';

export function VideosScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView {...sharedStyles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
        <Video height={270} videoId={"mB-QXgtoItA"} />
    </ScrollView>
  );
};