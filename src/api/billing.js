<<<<<<< HEAD
import { db } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

// Save bill
export async function saveBill(data) {
  try {
    await addDoc(collection(db, "bills"), data);
    return true;
  } catch (e) {
    console.error("Error saving bill", e);
    return false;
  }
}

// Get all bills (Latest first)
export async function getBills() {
  try {
    const q = query(collection(db, "bills"), orderBy("date", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error getting bills", e);
    return [];
  }
}
// Dashboard Stats
export async function getDashboardStats() {
  try {
    const bills = await getBills();
    const totalToday = bills
      .filter(b => b.date === new Date().toISOString().split("T")[0])
      .reduce((sum, b) => sum + (b.total || 0), 0);

    return {
      todaySales: totalToday,
      totalBills: bills.length,
      topService: "Loading..."
    };
  } catch (e) {
    console.error("Error fetching dashboard stats", e);
    return {
      todaySales: 0,
      totalBills: 0,
      topService: "N/A"
    };
  }
}
=======
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
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
