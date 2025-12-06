<<<<<<< HEAD
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export async function addService(data){
  return await addDoc(collection(db,"services"),data)
}

export async function getServices(){
  const snap = await getDocs(collection(db,"services"))
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}

export async function deleteService(id){
  return await deleteDoc(doc(db,"services",id))
}
=======
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export async function addService(data){
  return await addDoc(collection(db,"services"),data)
}

export async function getServices(){
  const snap = await getDocs(collection(db,"services"))
  return snap.docs.map(d=>({id:d.id,...d.data()}))
}

export async function deleteService(id){
  return await deleteDoc(doc(db,"services",id))
}
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
