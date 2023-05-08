import React from "react";
import { Box, Button, HStack, ScrollView, Text, View } from "native-base";
import { RefreshControl } from "react-native-gesture-handler";
import { sharedStyles } from "../../shared/styles";
import { WebView } from "react-native-webview";
import { Jogo } from "../../components/Jogo";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";


export const JogosRoute = "Jogos";

export function JogosScreen() {
  const [open, setOpen] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <ScrollView {...sharedStyles.container} display={open ? "none" : "flex"}>
        <Jogo name={"Simulador de Ondulatória"} onPress={() => { setOpen(true) }} />
      </ScrollView>
      {open
        ? (
          <React.Fragment>
            <Button {...styles.button} onPress={() => setOpen(false)}>
              <HStack>
                <Icon name="arrow-back-outline" size={20} color={"white"} />
                <Text ml={1} color={"white"}>Voltar</Text>
              </HStack>
            </Button>
            <WebView
              style={{
                width: "100%",
                height: "100%",
                flex: 1
              }}
              source={{ uri: 'https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_all.html?locale=pt_BR' }}
            />
          </React.Fragment>
        )
        : null}
    </React.Fragment>
  )
}