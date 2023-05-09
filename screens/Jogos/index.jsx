import React from "react";
import { Box, Button, HStack, ScrollView, Text, View } from "native-base";
import { RefreshControl } from "react-native-gesture-handler";
import { sharedStyles } from "../../shared/styles";
import { WebView } from "react-native-webview";
import { Jogo } from "../../components/Jogo";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { instance } from "../../shared/api";

export const JogosRoute = "Jogos";

export function JogosScreen() {
  const [open, setOpen] = React.useState({ open: false, link: '' });
  const [refreshing, setRefreshing] = React.useState(false);

  const [jogos, setJogos] = React.useState([]);

  const loadJogos = async () => {
    try {
      const response = await instance.get("jogos/find");
      console.log(response.data);
      setJogos(response.data);
      setLoadedJogos(true);
    } catch (err) {
      console.log(err);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    loadJogos();
  }, []);

  return (
    <React.Fragment>
      <ScrollView {...sharedStyles.container} display={open.open ? "none" : "flex"}>
        {jogos ? (
          jogos.length > 0 ? (
            jogos.map((jogo) => (
              <Box key={jogo._id} mb={2}>
                <Jogo
                  name={jogo.name}
                  onPress={() => {
                    setOpen({ open: true, link: jogo.link });
                    console.log(jogo.link)
                  }}
                />
              </Box>
            ))
          ) : null
        ) : (
          <Text>Não há jogos para mostrar!</Text>
        )}
      </ScrollView>
      {open.open ? (
        <React.Fragment>
          <Button {...styles.button} onPress={() => setOpen({ open: false, link: '' })}>
            <HStack>
              <Icon name="arrow-back-outline" size={20} color={"white"} />
              <Text ml={1} color={"white"}>
                Voltar
              </Text>
            </HStack>
          </Button>
          <WebView
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
            }}
            source={{
              uri: open.link,
            }}
          />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
