import { View, Text } from "native-base";
import { Video } from "../../components/Video";

export const VideosRoute = 'Videos';

export function VideosScreen() {
  return (
    <View flex={1}>
      <Video height={260} videoId={"TOEvU_SRfak"} />
    </View>
  );
};