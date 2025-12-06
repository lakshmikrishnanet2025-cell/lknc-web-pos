import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addLedger(data){
  return await addDoc(collection(db,"ledger"),data)
}

export async function getLedger(){
  const snap = await getDocs(collection(db,"ledger"))
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}
