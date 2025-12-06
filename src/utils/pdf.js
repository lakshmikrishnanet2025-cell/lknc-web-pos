import jsPDF from "jspdf";
import "jspdf-autotable";

export function generatePDF(items,total){
  const pdf = new jsPDF();
  pdf.text("Invoice", 10,10);
  const rows = items.map(i => [i.name,i.qty,i.price,i.total]);
  pdf.autoTable({head:[["Service","Qty","Price","Total"]], body:rows});
  pdf.text(`Total: ₹${total}`, 10, pdf.lastAutoTable.finalY+10);
  pdf.save("Invoice.pdf");
}
