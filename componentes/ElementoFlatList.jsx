import { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert, Modal, Pressable} from "react-native";
import { ContenidoModal } from "./ContenidoModal";

export const ElementoFlatList = ({src,titulo,descripcion}) =>{
    const [modalvisible,setModalVisible] = useState(false)
return <TouchableOpacity onPress={() => setModalVisible(true)}>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalvisible);
        }}>
        <ContenidoModal
        titulo={titulo} descripcion={descripcion} modalvisible={modalvisible} setModalVisible={setModalVisible} textBoton="Contactar"
        />
      </Modal>
<View style={{paddingTop:50}}>
<Image
style={{width:150,height:150}}
   source = {{uri: src}}
/>
<Text>
    {titulo}
</Text>
<Text>
    {descripcion}
</Text>
</View>
</TouchableOpacity>
}
