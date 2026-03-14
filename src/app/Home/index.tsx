import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { Item } from "@/components/Item";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { styles } from "./styles";



const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS = [
  {
    id:"1",
    status:FilterStatus.DONE,
    description: "1 pacote de café"
  },
  {
    id:"2",
    status:FilterStatus.PENDING,
    description: "1 pacote de biscoito"
  },
  {
  id:"3",
  status:FilterStatus.PENDING,
  description: "4 pacotes de sal"
}
]

export function Home() {
  console.log("ITEMS", ITEMS)
  return (
    <View style={styles.container}>

      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      {/* função filtro */}
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive={true} />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

     {/*já fica tudo dentro dela, melhor que a scrollview*/}
      <FlatList
        data= {ITEMS}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
        <Item
              data={item}
              onStatus={() => console.log("Mudar Status")}
              onRemove={() => console.log("Remove")}
            />}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()  => <View style={styles.separator}/>}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
      />
      </View>
    </View>
  )
}