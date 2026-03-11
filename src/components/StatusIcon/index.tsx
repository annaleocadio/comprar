import { FilterStatus } from "@/types/FilterStatus";
import {Circle, CircleCheck} from "lucide-react-native";


export function StatusIcon({status}: {status: FilterStatus}){
    return  status === FilterStatus.DONE ? (
        <CircleCheck size={18} color={"#2c46b1"} />
    ) : (
        <Circle size={18} color={"#000000"} />
    )
}