<<<<<<< HEAD
import { db, storage } from "../firebase";
import { ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadShopLogo(file){
  const path = sRef(storage,"logo.png");
  await uploadBytes(path,file)
}

export async function getShopLogo(){
  try{
    return await getDownloadURL(sRef(storage,"logo.png"))
  } catch {
    return ""
  }
}
=======
import { db, storage } from "../firebase";
import { ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadShopLogo(file){
  const path = sRef(storage,"logo.png");
  await uploadBytes(path,file)
}

export async function getShopLogo(){
  try{
    return await getDownloadURL(sRef(storage,"logo.png"))
  } catch {
    return ""
  }
}
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
