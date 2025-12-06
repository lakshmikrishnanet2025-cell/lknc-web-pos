import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addExpense(data){
  return await addDoc(collection(db,"expenses"),data)
}

export async function getExpenses(){
  const snap = await getDocs(collection(db,"expenses"))
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}
