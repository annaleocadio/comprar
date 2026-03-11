import { View, TouchableOpacity } from "react-native"
import { StatusIcon } from "../StatusIcon"
import { FilterStatus } from "@/types/FilterStatus"
import { styles } from "./styles"

type ItemData = {
  status: FilterStatus
  description: string
}

type Props = {
  data: ItemData
}

export function Item({ data }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>
    </View>
  )
}