import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export async function addCustomer(data){
  const ref = collection(db,"customers");
  return await addDoc(ref,data)
}

export async function getCustomers(){
  const ref = collection(db,"customers");
  const snap = await getDocs(ref);
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}

export async function deleteCustomer(id){
  return await deleteDoc(doc(db,"customers",id))
}
