import React from "react";
import { Box, ScrollView } from "native-base";
import { Category } from "../../components/Category";
import { sharedStyles } from "../../shared/styles";

export const AtividadesRoute = 'Atividades';

export function AtividadesScreen() {
  const [opened, setOpened] = React.useState(false);
  const items = () => {
    const arr = [];
    for (let i = 0; i <= 10; i++) {
      arr.push(i)
    }
    return arr;
  }
  return (
    <ScrollView {...sharedStyles.container}>
      <Box marginBottom={5}>
        {items().map(item => {
          return (
            <Category
              showAtividades
              id={item.id}
              icon="logo-steam"
              title="Matéria"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              onPress={() => setOpened(!opened)}
            />
          );
        })}
      </Box>
    </ScrollView>
  );
};