import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const generatePdf = async (cart: any[]) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  let y = 760;

  const drawText = (text: string, size = 12) => {
    page.drawText(text, { x: 50, y, size, font, color: rgb(0, 0, 0) });
    y -= size + 6;
  };

  drawText("Order Invoice", 18);
  y -= 10;

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.quantity * parseFloat(item.price);
    total += itemTotal;

    drawText(`${index + 1}. ${item.title}`);
    drawText(`   Name: ${item.name}`);
    drawText(`   Size: ${item.size}`);
    drawText(`   Quantity: ${item.quantity}`);
    drawText(`   Location: ${item.location}`);
    drawText(`   Price: $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}`);
    y -= 10;
  });

  y -= 10;
  drawText(`Subtotal: $${total.toFixed(2)}`, 14);

  const pdfBytes = await pdfDoc.save();
  const base64 = Buffer.from(pdfBytes).toString("base64");

  return base64; // Can be attached to emails or uploaded
};
