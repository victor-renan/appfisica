import React from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView, Center, FlatList, FormControl, HStack, Text, VStack, Box, Button, Input, TextArea, Select, useToast } from "native-base";
import { Title } from "../../components/Title";
import { sharedStyles } from "../../shared/styles";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { instance } from "../../shared/api";
import { RefreshControl } from "react-native";

export const AdminRoute = "Admin"

export function AdminScreen() {
  const toast = useToast();
  // Form das materias
  const [materia, setMateria] = React.useState('');
  const [materiaDesc, setMateriaDesc] = React.useState('');
  const createMateria = async () => {
    try {
      const response = await instance.post("materias/create", {
        name: materia,
        description: materiaDesc,
      })
      loadMaterias();
      console.log(response.data)
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }
  const updateMateria = async (id, ...values) => {
    try {
      const response = await instance.post(`materias/update/${id}`, {
        ...values
      })
      loadMaterias();
      console.log(response.data)
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }
  const deleteMateria = async (id) => {
    try {
      const response = await instance.post(`materias/delete/${id}`)
      loadMaterias();
      console.log(response.data)
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }
  const handleMateria = (event) => {
    console.log("Materia", { name: materia, description: materiaDesc });
    event.preventDefault();
    createMateria();
  }

  // Form dos materiais
  const [material, setMaterial] = React.useState('');
  const [materialCateg, setmaterialCateg] = React.useState('');
  const [materialFile, setmaterialFile] = React.useState('');
  const handleMaterial = (event) => {
    console.log("Material", { name: material, materia: materialCateg, file: materialFile });
    event.preventDefault();
  }

  // Form das atividades
  const [atividade, setAtividade] = React.useState('');
  const [atividadeCateg, setAtividadeCateg] = React.useState('');
  const [atividadeFile, setAtividadeFile] = React.useState('');
  const handleAtividade = (event) => {
    console.log("Atividade", { name: atividade, materia: atividadeCateg, file: atividadeFile });
    event.preventDefault();
  }

  // Form dos videos
  const [video, setVideo] = React.useState('');
  const [videoCateg, setVideoCateg] = React.useState('');
  const handleVideo = (event) => {
    console.log("Video", { name: video, materia: videoCateg });
    event.preventDefault();
  }

  // Form dos jogos
  const [jogo, setJogo] = React.useState('');
  const [jogoCateg, setJogoCateg] = React.useState('');
  const [jogoLink, setJogoLink] = React.useState('');
  const handleJogo = (event) => {
    console.log("Jogo", { name: jogo, materia: jogoCateg, link: jogoLink });
    event.preventDefault();
  }


  const [materias, setMaterias] = React.useState([]);
  const [loadedMaterias, setLoadedMaterias] = React.useState(false);

  const [materiais, setMateriais] = React.useState([]);
  const [loadedMateriais, setLoadedMateriais] = React.useState(false);

  const [atividades, setAtividades] = React.useState([]);
  const [loadedAtividades, setLoadedAtividades] = React.useState(false);

  const [videos, setVideos] = React.useState([]);
  const [loadedVideos, setLoadedVideos] = React.useState(false);

  const [jogos, setJogos] = React.useState([]);
  const [loadedJogos, setLoadedJogos] = React.useState(false);

  const loadMaterias = async () => {
    try {
      const response = await instance.get("materias/find")
      console.log(response.data)
      setMaterias(response.data);
      setLoadedMaterias(true);

    } catch (err) {
      console.log(err)
    }
  }
  const loadMateriais = async () => {
    try {
      const response = await instance.get("materiais/find")
      console.log(response.data)
      setMateriais(response.data);
      setLoadedMateriais(true);
    } catch (err) {
      console.log(err)
    }
  }
  const loadVideos = async () => {
    try {
      const response = await instance.get("videos/find")
      console.log(response.data)
      setVideos(response.data);
      setLoadedVideos(true);
    } catch (err) {
      console.log(err)
    }
  }
  const loadJogos = async () => {
    try {
      const response = await instance.get("jogos/find")
      console.log(response.data)
      setJogos(response.data);
      setLoadedJogos(true);
    } catch (err) {
      console.log(err)
    }
  }
  const loadAtividades = async () => {
    try {
      const response = await instance.get("atividades/find")
      console.log(response.data)
      setAtividades(response.data);
      setLoadedAtividades(true);
    } catch (err) {
      console.log(err)
    }
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadMateriais();
    loadMaterias();
    loadAtividades();
    loadVideos()
    loadJogos()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    loadMaterias();
    loadMateriais();
    loadAtividades();
  }, [])


  return (
    <ScrollView {...sharedStyles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Center justifyContent={"flex-start"} paddingTop={6}>
        <Title icon="hammer-outline" text="Painel" />
        <VStack {...sharedStyles.form}>
          <Text {...styles.text}>Matérias (Materias)</Text>
          {loadedMaterias ? null : (<ActivityIndicator color="orange" size="large" />)}
          {materias.length > 0
            ? materias.map((item) => (
              <Box {...styles.card} key={item._id}>
                <VStack>
                  <HStack marginBottom={2}>
                    <Text bold {...styles.cardTitle}>{item.name}</Text>
                    <HStack {...styles.actions}>
                      <Button {...styles.button}>
                        <Icon name="pencil-outline" color="white" size={18} />
                      </Button>
                      <Button {...styles.button}>
                        <Icon onPress={() => deleteMateria(item._id)} name="trash-outline" color="white" size={18} />
                      </Button>
                    </HStack>
                  </HStack>
                  <Text {...styles.cardText}>{item.description}</Text>
                </VStack>
              </Box>
            ))
            : (<Text color={"amber.300"}>Não há matérias!</Text>)}
          <VStack marginTop={2}>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setMateria(value)} {...sharedStyles.formInput} type="text" placeholder="Nova Materia" />
            </FormControl>
            <FormControl {...sharedStyles.formControl} marginBottom={0}>
              <TextArea onChangeText={value => setMateriaDesc(value)} placeholder="Descrição" {...sharedStyles.formInput} />
            </FormControl>
            <Button onPress={(e) => handleMateria(e)} {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>

        <VStack {...sharedStyles.form}>
          <Text {...styles.text}>Materiais (Drive)</Text>
          {loadedMateriais ? null : (<ActivityIndicator color="orange" size="large" />)}
          {materiais.length > 0
            ? materiais.map((item) => (
              <Box {...styles.card} key={item._id}>
                <VStack>
                  <HStack marginBottom={2}>
                    <Text bold {...styles.cardTitle}>{item.name}</Text>
                    <HStack {...styles.actions}>
                      <Button {...styles.button}>
                        <Icon name="pencil-outline" color="white" size={18} />
                      </Button>
                      <Button {...styles.button}>
                        <Icon name="trash-outline" color="white" size={18} />
                      </Button>
                    </HStack>
                  </HStack>
                  <Text {...styles.cardText}>{item.file}</Text>
                  <Text italic color={"amber.400"}>{item.materia}</Text>
                </VStack>
              </Box>
            ))
            : (<Text color={"amber.300"}>Não há matériais!</Text>)}
          <VStack marginTop={2}>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setMaterial(value)}  {...sharedStyles.formInput} type="text" placeholder="Novo Material" />
            </FormControl>
            <Select onChange={value => setMaterial(value)} marginBottom={2} placeholder="Materia" {...sharedStyles.formInput}>
              {materias
                ? materias.map((item) => (
                  <Select.Item label={item.name} value={item.name} />
                ))
                : null}
            </Select>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setmaterialFile(value)}  {...sharedStyles.formInput} type="text" placeholder="Link do Arquivo (Drive)" />
            </FormControl>
            <Button {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>

        <VStack {...sharedStyles.form}>
          <Text {...styles.text}>Atividades (Drive)</Text>
          {loadedAtividades ? null : (<ActivityIndicator color="orange" size="large" />)}
          {loadedVideos ? null : (<ActivityIndicator color="orange" size="large" />)}
          {atividades.length > 0
            ? atividades.map((item) => (
              <Box {...styles.card} key={item._id}>
                <VStack>
                  <HStack marginBottom={2}>
                    <Text bold {...styles.cardTitle}>{item.name}</Text>
                    <HStack {...styles.actions}>
                      <Button {...styles.button}>
                        <Icon name="pencil-outline" color="white" size={18} />
                      </Button>
                      <Button {...styles.button}>
                        <Icon name="trash-outline" color="white" size={18} />
                      </Button>
                    </HStack>
                  </HStack>
                  <Text {...styles.cardText}>{item.file}</Text>
                  <Text italic color={"amber.400"}>{item.materia}</Text>
                </VStack>
              </Box>
            ))
            : (<Text color={"amber.300"}>Não há atividades!</Text>)}
          <VStack marginTop={2}>
            <FormControl {...sharedStyles.formControl}>
              <Input onChange={() => { }} {...sharedStyles.formInput} type="text" placeholder="Nova Atividade" />
            </FormControl>
            <Select onChange={value => setAtividade(value)} marginBottom={2} placeholder="Materia" {...sharedStyles.formInput}>
              {materias
                ? materias.map((item) => (
                  <Select.Item label={item.name} value={item.name} />
                ))
                : null}
            </Select>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setmaterialFile(value)}  {...sharedStyles.formInput} type="text" placeholder="Link do Arquivo (Drive)" />
            </FormControl>
            <Button {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>

        <VStack {...sharedStyles.form}>
          <Text {...styles.text}>Vídeos (Youtube)</Text>
          {loadedAtividades ? null : (<ActivityIndicator color="orange" size="large" />)}
          {videos.length > 0
            ? videos.map((item) => (
              <Box {...styles.card} key={item._id}>
                <VStack>
                  <HStack >
                    <Text bold {...styles.cardTitle}>{item.videoId}</Text>
                    <HStack {...styles.actions}>
                      <Button {...styles.button}>
                        <Icon name="pencil-outline" color="white" size={18} />
                      </Button>
                      <Button {...styles.button}>
                        <Icon name="trash-outline" color="white" size={18} />
                      </Button>
                    </HStack>
                  </HStack>
                  <Text italic color={"amber.400"}>{item.materia}</Text>
                </VStack>
              </Box>
            ))
            : (<Text color={"amber.300"}>Não há vídeos!</Text>)}
          <VStack marginTop={2}>
            <Select onChange={value => setAtividade(value)} marginBottom={2} placeholder="Materia" {...sharedStyles.formInput}>
              {materias
                ? materias.map((item) => (
                  <Select.Item label={item.name} value={item.name} />
                ))
                : null}
            </Select>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setmaterialFile(value)}  {...sharedStyles.formInput} type="text" placeholder="Id do video (Youtube)" />
            </FormControl>
            <Button {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>

        <VStack {...sharedStyles.form}>
          <Text {...styles.text}>Jogos (PHET)</Text>
          {loadedJogos ? null : (<ActivityIndicator color="orange" size="large" />)}
          {jogos.length > 0
            ? jogos.map((item) => (
              <Box {...styles.card} key={item._id}>
                <VStack>
                  <HStack marginBottom={1}>
                    <Text bold {...styles.cardTitle}>{item.name}</Text>
                    <HStack {...styles.actions}>
                      <Button {...styles.button}>
                        <Icon name="pencil-outline" color="white" size={18} />
                      </Button>
                      <Button {...styles.button}>
                        <Icon name="trash-outline" color="white" size={18} />
                      </Button>
                    </HStack>
                  </HStack>
                  <Text italic color={"amber.400"}>{item.materia}</Text>
                </VStack>
              </Box>
            ))
            : (<Text color={"amber.300"}>Não há jogos!</Text>)}
          <VStack marginTop={2}>
            <FormControl {...sharedStyles.formControl}>
              <Input onChange={value => setVideo(value)} {...sharedStyles.formInput} type="text" placeholder="Novo jogo" />
            </FormControl>
            <Select onChange={value => setVideoCateg(value)} marginBottom={2} placeholder="Materia" {...sharedStyles.formInput}>
              {materias
                ? materias.map((item) => (
                  <Select.Item label={item.name} value={item.name} />
                ))
                : null}
            </Select>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setJogoLink(value)}  {...sharedStyles.formInput} type="text" placeholder="Link do jogo (Site da PHET)" />
            </FormControl>
            <Button {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>
      </Center >
    </ScrollView>
  );
}