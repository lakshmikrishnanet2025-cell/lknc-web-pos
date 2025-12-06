<<<<<<< HEAD
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addExpense(data){
  return await addDoc(collection(db,"expenses"),data)
}

export async function getExpenses(){
  const snap = await getDocs(collection(db,"expenses"))
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}
=======
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addExpense(data){
  return await addDoc(collection(db,"expenses"),data)
}

export async function getExpenses(){
  const snap = await getDocs(collection(db,"expenses"))
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
