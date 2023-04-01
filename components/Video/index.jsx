import React, { useCallback, useState } from 'react';
import YoutubeIframe, { PLAYER_STATES } from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Box } from 'native-base';

export function Video(props) {
  const [playing, setPlaying] = useState(false);

  const onFullScreenChange = useCallback((isFullScreen) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, [])

  const onStateChange = useCallback((state) => {
    if (state === PLAYER_STATES.ENDED) {
      setPlaying(false);
    }
  }, []);

  return (
    <YoutubeIframe
      onChangeState={onStateChange}
      onFullScreenChange={onFullScreenChange}
      contentScale={0.82}
      webViewStyle={{
        opacity: 0.99
      }}
      webViewProps={{
        javaScriptEnabled: true
      }}
      play={playing}
      {...props}
    />
  );
}