import { Box } from "native-base";
import { Video } from "../../components/Video";

export const VideosRoute = 'Videos';

export function VideosScreen() {
  return (
    <Box flex={1}>
      <Video height={270} videoId={"TOEvU_SRfak"} />
    </Box>
  );
};