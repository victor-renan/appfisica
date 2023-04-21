import React from "react";
import { styles } from "./styles";
import { Link, Box, Heading, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Document } from "../Document";


export function Category(props) {
  const [opened, setOpened] = React.useState(false);
  const materiais = [
    {
      name: "Termometria 1",
      file: "termometria.pdf",
      type: "Material",
      category: "Termometria"
    },
    {
      name: "Óptica 1",
      file: "termometria.pdf",
      type: "Material",
      category: "Óptica"
    }
  ];
  const atividades = [
    {
      name: "Termometria 1",
      file: "termometria.pdf",
      type: "Atividade",
      category: "Termometria"
    },
    {
      name: "Óptica 1",
      file: "termometria.pdf",
      type: "Atividade",
      category: "Óptica"
    }
  ];
  return (
    <React.Fragment>
      <Link id={props.id} onPress={() => setOpened(!opened)} {...styles.category}>
        <Box {...styles.categoryIconBg}>
          <Icon name={props.icon} {...styles.categoryIcon} />
        </Box>
        <Box {...styles.categoryText}>
          <Heading {...styles.categoryHeading}>{props.title}</Heading>
          <Text {...styles.categorySub}>{props.text}</Text>
        </Box>
      </Link>
      {opened ?
        <Box marginBottom={4}>
          {props.showMateriais ? materiais.map(material => {
            return <Document {...material} />;
          }) : props.showAtividades ? atividades.map(atividade => {
            return <Document {...atividade} />;
          }) : <Text color="white">Não há documentos para mostrar.</Text>}
        </Box>
        : null}
    </React.Fragment>
  );
}