import { View, FlatList } from "react-native"
import { ElementoFlatList } from "../ElementoFlatList"
import { StatusBar } from "expo-status-bar"
import { styles } from '../../Styles/Contenedores';


const DATA =[
   {
    id:1,
     src: "https://blog.localadventures.mx/wp-content/uploads/2023/06/1-3.png",
        titulo: "canada",
        descripcion:"Area poco poblada"
    },
    {
      id:2,
      src: "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg",
      titulo: "las vegas",
      descripcion:"La ciudad que no duerme"
    },
    {
      id:3,
      src: "https://imagenes.elpais.com/resizer/cYZ-vxoyFXh7uth-_BxUoI2rvjw=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LF7JH74YA2H2YDY74RF2QWYVBM.jpg",
      titulo: "puero rico",
      descripcion:"Un lugar caluroso"
    },
    {
      id:4,
      src: "https://s1.elespanol.com/2020/11/07/invertia/mis-finanzas/fondos-de-inversion/fondos_de_inversion-bolsa-fondos_de_inversion_534206994_164518016_1706x960.jpg",
      titulo: "japon",
      descripcion:"Una ciudad muy colorida"
    },
    {
      id:5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1B_2y968TBKoU5PEnnQvr-V_o1naYLtD4pjroqVGdyEGi2MAYzLX6haiBULzkUwPx8XM&usqp=CAU",
      titulo: "noruega",
      descripcion:"Una lugar muy frio"
 }
    ] 

  export  const Ubicaciones =()=>{
      return  <View style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={({item})=> <ElementoFlatList src={item.src} titulo={item.titulo} descripcion={item.descripcion}/>}
      keyExtractor={item=>item.id}
  />
      <StatusBar style="auto" />
    </View>
 
    }

     {/* <Logo/>

        <ElementoFlatList src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/react.png"
    titulo="Hola mundo"
   />
     <ElementoFlatList src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
    titulo="Hola mundo"
    descripcion="Prueba flatlist"
/>

    <Ecabezado></Ecabezado>
      <Text>hola mundo</Text>
      <TextInput onChangeText={(e)=>{setNombre(e)}} value= {nombre} placeholder='nombre del usuario'></TextInput>
      <TextInput onChangeText={(e)=>{setEdad(e)}} value={edad} placeholder='Edad del usuario' keyboardType='numeric'></TextInput>
      <Text>tu nombre es {nombre} de {edad} años de edad, muchogusto </Text>
      <Piepagina></Piepagina>
      <Button title='saludar' color="#841584" onPress={() =>{console.log(nombre,edad)}}>

      </Button> */}