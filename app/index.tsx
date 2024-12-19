import { geradorDistancia } from "@/services/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { MotiView } from 'moti';

export default function Index() {
  const [corpo, setCorpo] = useState("")
  const [resposta, setResposta] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const callDistance = async () => {
    if (corpo.length < 1) {
      alert("Desculpe, o nome do corpo celeste precisa ter mais de 1 caractere")
      return;
    }

    setIsLoading(true);
    setCorpo("")
    setResposta("")

    try {
      const result = await geradorDistancia(corpo);
      setResposta(result)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={
          require('@/assets/images/saturno.png')
        } />
      <Text style={styles.titulo}>Astronomic Calculator</Text>
      <Text style={styles.subtitulo}>Uma ferramenta para amantes da astronomia</Text>
      <TextInput
        onChangeText={setCorpo}
        value={corpo}
        style={styles.input}
        placeholder="Digite o nome do corpo celeste..."></TextInput>

      <TouchableOpacity style={styles.button} onPress={callDistance}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Calcular a distância entre os corpos!"}</Text>
      </TouchableOpacity>


      {
        resposta && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <Text style={styles.cardTitle}>A distância foi calculada:</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }

    </View>
  );
}