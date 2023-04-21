import React from "react";
import { Box, ScrollView } from "native-base";
import { Category } from "../../components/Category";
import { sharedStyles } from "../../shared/styles";
import { CategoriaScreen } from "../Categoria";

// Rota para a tela "Material"
export const MaterialRoute = 'Material';

// Tela em si
export function MaterialScreen({ navigation }) {
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
              icon="logo-steam"
              title="Cinemática"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              onTouchStart={() => navigation.navigate("Categoria")}
            />
          );
        })}
      </Box>
    </ScrollView>
  );
}