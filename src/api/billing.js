import { db } from "../firebase";
import { 
  collection, addDoc, getDocs, Timestamp, query, where 
} from "firebase/firestore";

export async function createBill(data){
  data.date = Timestamp.now();
  const bills = collection(db, "bills");
  return await addDoc(bills, data);
}

export async function getDashboardStats(){
  const bills = collection(db,"bills");
  const today = new Date(); today.setHours(0,0,0,0);

  const q = query(bills, where("date",">=",Timestamp.fromDate(today)));
  const result = await getDocs(q);

  let total=0, count=0;
  let services = {};

  result.forEach(doc =>{
    const d = doc.data()
    total += d.total;
    count++;
    d.items.forEach(i => {
      services[i.name] = (services[i.name] || 0) + i.total;
    })
  });

  let top = "None"
  if(Object.keys(services).length>0){
    top = Object.entries(services).sort((a,b)=>b[1]-a[1])[0][0]
  }

  return {
    sales: total,
    bills: count,
    topService: top,
    chart: await getMonthlySales()
  };
}

export async function getMonthlySales(){
  const bills = collection(db,"bills");
  const data = await getDocs(bills);
  let months = Array(12).fill(0);

  data.forEach(d =>{
    let m = d.data().date.toDate().getMonth();
    months[m] += d.data().total;
  });

  return months;
}
