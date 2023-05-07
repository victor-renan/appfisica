import React, { useCallback, useState } from 'react';
import YoutubeIframe, { PLAYER_STATES } from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';


export function Video({height, videoId}) {
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
        opacity: 0.99,
        height: 270
      }}
      webViewProps={{
        javaScriptEnabled: true
      }}
      play={playing}
      height={height}
      videoId={videoId}
    />
  );
}