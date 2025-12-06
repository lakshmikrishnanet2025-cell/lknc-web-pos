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
