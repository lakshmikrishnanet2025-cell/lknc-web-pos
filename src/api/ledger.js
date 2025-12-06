<<<<<<< HEAD
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addLedger(data){
  return await addDoc(collection(db,"ledger"),data)
}

export async function getLedger(){
  const snap = await getDocs(collection(db,"ledger"))
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}
=======
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addLedger(data){
  return await addDoc(collection(db,"ledger"),data)
}

export async function getLedger(){
  const snap = await getDocs(collection(db,"ledger"))
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
