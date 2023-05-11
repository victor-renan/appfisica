import React from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView, Center, FormControl, HStack, Text, VStack, Box, Button, Input, TextArea, Select, useToast } from "native-base";
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
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }
  const deleteMateria = async (id) => {
    try {
      loadMaterias();
      const response = await instance.post(`materias/delete/${id}`)

      loadMaterias();
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }

  const handleCreateMateria = (event) => {
    console.log("Materia", { name: materia, description: materiaDesc });
    event.preventDefault();
    createMateria()
  }

  // Form dos materiais
  const [material, setMaterial] = React.useState('');
  const [materialCateg, setmaterialCateg] = React.useState('');
  const [materialFile, setmaterialFile] = React.useState('');

  const createMaterial = async () => {
    try {
      const response = await instance.post("materiais/create", {
        name: material,
        materia: materialCateg,
        file: materialFile,
      });

      loadMateriais();
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }
  const deleteMaterial = async (id) => {
    try {
      loadMateriais();
      const response = await instance.post(`materiais/delete/${id}`);
      loadMateriais();

    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message);
    }
  }

  const handleCreateMaterial = (event) => {
    console.log("Materiai", { name: materia, materia: materialCateg, file: materialFile });
    event.preventDefault();
    createMaterial()
  }

  // Form das atividades
  const [atividade, setAtividade] = React.useState('');
  const [atividadeCateg, setAtividadeCateg] = React.useState('');
  const [atividadeFile, setAtividadeFile] = React.useState('');
  const [criandoAtividade, setCriandoAtividade] = React.useState(false);

  const createAtividade = async () => {
    try {
      setCriandoAtividade(true)
      {criandoAtividade ? (<ActivityIndicator />) : null}
      const response = await instance.post("atividades/create", {
        name: atividade,
        materia: atividadeCateg,
        file: atividadeFile,
      });

      loadAtividades();
      setCriandoAtividade(false)
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }
  const deleteAtividade = async (id) => {
    try {
      loadAtividades();
      const response = await instance.post(`atividades/delete/${id}`);
      loadAtividades();

    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }

  const handleCreateAtividade = (event) => {
    console.log("Atividade", { name: atividade, materia: atividadeCateg, file: atividadeFile });
    event.preventDefault();
    createAtividade();
  }

  // Form dos videos
  const [video, setVideo] = React.useState('');
  const [videoCateg, setVideoCateg] = React.useState('');

  const createVideo = async () => {
    try {
      const response = await instance.post("videos/create", {
        videoId: video,
        materia: videoCateg,
      });
      loadVideos();
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }
  const deleteVideo = async (id) => {
    try {
      loadVideos();
      const response = await instance.post(`videos/delete/${id}`);
      loadVideos();
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }

  const handleCreateVideo = (event) => {
    console.log("Video", { videoId: video, materia: videoCateg });
    event.preventDefault();
    createVideo();
  }

  // Form dos jogos
  const [jogo, setJogo] = React.useState('');
  const [jogoCateg, setJogoCateg] = React.useState('');
  const [jogoLink, setJogoLink] = React.useState('');

  const createJogo = async () => {
    try {
      const response = await instance.post("jogos/create", {
        name: jogo,
        materia: jogoCateg,
        link: jogoLink,
      });
      loadJogos();
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }
  const deleteJogo = async (id) => {
    try {
      loadJogos();
      const response = await instance.post(`jogos/delete/${id}`)
      loadJogos();
    } catch (err) {
      toast.show({
        description: err.response.data.message
      })
      console.log(err.response.data.message)
    }
  }

  const handleCreateJogo = (event) => {
    console.log("Jogo", { name: jogo, materia: jogoCateg, link: jogoLink });
    event.preventDefault();
    createJogo();
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

      setMaterias(response.data);
      setLoadedMaterias(true);

    } catch (err) {
      console.log(err)
    }
  }
  const loadMateriais = async () => {
    try {
      const response = await instance.get("materiais/find")

      setMateriais(response.data);
      setLoadedMateriais(true);
    } catch (err) {
      console.log(err)
    }
  }
  const loadAtividades = async () => {
    try {
      const response = await instance.get("atividades/find")

      setAtividades(response.data);
      setLoadedAtividades(true);
    } catch (err) {
      console.log(err)
    }
  }
  const loadVideos = async () => {
    try {
      const response = await instance.get("videos/find")

      setVideos(response.data);
      setLoadedVideos(true);
    } catch (err) {
      console.log(err)
    }
  }
  const loadJogos = async () => {
    try {
      const response = await instance.get("jogos/find")

      setJogos(response.data);
      setLoadedJogos(true);
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
    loadVideos();
    loadJogos();
  }, [])

  return (
    <ScrollView {...sharedStyles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Center justifyContent={"flex-start"} paddingTop={6}>
        <Title icon="hammer-outline" text="Painel" />

        {/* Formulario das materias */}
        <VStack {...sharedStyles.form}>
          <Text {...styles.text}>Matérias (Materias)</Text>
          {loadedMaterias ? null : (<ActivityIndicator color="orange" size="large" />)}
          {materias.length > 0
            ? materias.map((item) => (
              <Box {...styles.card} key={item._id}>
                <VStack>
                  <HStack marginBottom={2} alignItems={"center"}>
                    <Text bold {...styles.cardTitle}>{item.name}</Text>
                    <HStack {...styles.actions}>
                      <Button onPress={() => deleteMateria(item._id)} {...styles.button}>
                        <Icon name="trash-outline" color="white" size={18} />
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
            <Button onPress={(e) => handleCreateMateria(e)} {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>

        {/* Formulario dos MATERIAIS */}
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
                      <Button onPress={() => deleteMaterial(item._id)} {...styles.button} bg={"red.500"}>
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
            <Select onValueChange={value => setmaterialCateg(value)} marginBottom={2} placeholder="Materia" {...sharedStyles.formInput}>
              {materias
                ? materias.map((item) => (
                  <Select.Item key={item.name} label={item.name} value={item.name} />
                ))
                : null}
            </Select>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setmaterialFile(value)}  {...sharedStyles.formInput} type="text" placeholder="Link do Arquivo (Drive)" />
            </FormControl>
            <Button onPress={(e) => handleCreateMaterial(e)} {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>

        {/* Formulario das ATIVIDADES */}
        <VStack {...sharedStyles.form}>
          <Text {...styles.text}>Atividades (Drive)</Text>
          {loadedAtividades ? null : (<ActivityIndicator color="orange" size="large" />)}
          {atividades.length > 0
            ? atividades.map((item) => (
              <Box {...styles.card} key={item._id}>
                <VStack>
                  <HStack marginBottom={2}>
                    <Text bold {...styles.cardTitle}>{item.name}</Text>
                    <HStack {...styles.actions}>
                      <Button onPress={() => deleteAtividade(item._id)} {...styles.button} bg={"red.500"}>
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
              <Input onChangeText={value => setAtividade(value)} {...sharedStyles.formInput} type="text" placeholder="Nova Atividade" />
            </FormControl>
            <Select onValueChange={value => setAtividadeCateg(value)} marginBottom={2} placeholder="Materia" {...sharedStyles.formInput}>
              {materias
                ? materias.map((item) => (
                  <Select.Item key={item.name} label={item.name} value={item.name} />
                ))
                : null}
            </Select>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setAtividadeFile(value)} {...sharedStyles.formInput} type="text" placeholder="Link do Arquivo (Drive)" />
            </FormControl>
            <Button onPress={(e) => handleCreateAtividade(e)} {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>

        {/* Formulario dos VIDEOS */}
        <VStack {...sharedStyles.form}>
          <Text {...styles.text}>Vídeos (Youtube)</Text>
          {loadedVideos ? null : (<ActivityIndicator color="orange" size="large" />)}
          {videos.length > 0
            ? videos.map((item) => (
              <Box {...styles.card} key={item._id}>
                <VStack>
                  <HStack >
                    <Text bold {...styles.cardTitle}>{item.videoId}</Text>
                    <HStack {...styles.actions}>
                      <Button onPress={() => deleteVideo(item._id)} {...styles.button}>
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
            <Select onValueChange={value => setVideoCateg(value)} marginBottom={2} placeholder="Materia" {...sharedStyles.formInput}>
              {materias
                ? materias.map((item) => (
                  <Select.Item key={item.name} label={item.name} value={item.name} />
                ))
                : null}
            </Select>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setVideo(value)}  {...sharedStyles.formInput} type="text" placeholder="Id do video (Youtube)" />
            </FormControl>
            <Button onPress={(e) => handleCreateVideo(e)} {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>

        {/* Formulario dos JOGOS */}
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
                      <Button onPress={() => deleteJogo(item._id)} {...styles.button}>
                        <Icon name="trash-outline" color="white" size={18} />
                      </Button>
                    </HStack>
                  </HStack>
                  <Text {...styles.cardText}>{item.link}</Text>
                  <Text italic color={"amber.400"}>{item.materia}</Text>
                </VStack>
              </Box>
            ))
            : (<Text color={"amber.300"}>Não há jogos!</Text>)}
          <VStack marginTop={2}>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setJogo(value)} {...sharedStyles.formInput} type="text" placeholder="Novo jogo" />
            </FormControl>
            <Select onValueChange={value => setJogoCateg(value)} marginBottom={2} placeholder="Materia" {...sharedStyles.formInput}>
              {materias
                ? materias.map((item) => (
                  <Select.Item key={item.name} label={item.name} value={item.name} />
                ))
                : null}
            </Select>
            <FormControl {...sharedStyles.formControl}>
              <Input onChangeText={value => setJogoLink(value)}  {...sharedStyles.formInput} type="text" placeholder="Link do jogo (Site da PHET)" />
            </FormControl>
            <Button  onPress={(e) => handleCreateJogo(e)} {...sharedStyles.formButton}>Criar</Button>
          </VStack>
        </VStack>
      </Center >
    </ScrollView>
  );
}