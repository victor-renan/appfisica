import { Box, ScrollView } from "native-base";
import { Video } from "../../components/Video";
import { sharedStyles } from "../../shared/styles";
import { styles } from "./styles";

export const VideosRoute = 'Videos';

export function VideosScreen() {
  return (
    <ScrollView {...sharedStyles.container}>
      <Box {...styles.videoSection}>
        <Video height={270} videoId={"TOEvU_SRfak"} />
      </Box>
    </ScrollView>
  );
};