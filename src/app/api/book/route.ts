import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP not configured");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { visitReason, appointmentDate, fullName, phone, email, isNewPatient, xrayNote } = body;

    if (!fullName || !phone || !email || !appointmentDate || !visitReason) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = getTransporter();

    const reasonLabels: Record<string, string> = {
      "booking.reason.aesthetics": "Estetska transformacija",
      "booking.reason.implants": "Nadoknada zuba (implantati)",
      "booking.reason.checkup": "Rutinski pregled",
      "booking.reason.emergency": "HITAN SLUČAJ",
    };

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Novi zahtev za termin - AURA Dental | ${fullName}`,
      html: `
        <h2>Novi zahtev za termin</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ime i prezime</td><td style="padding:8px;border:1px solid #ddd;">${fullName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Razlog posete</td><td style="padding:8px;border:1px solid #ddd;">${reasonLabels[visitReason] || visitReason}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Željeni datum</td><td style="padding:8px;border:1px solid #ddd;">${appointmentDate}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Novi pacijent?</td><td style="padding:8px;border:1px solid #ddd;">${isNewPatient}</td></tr>
          ${xrayNote ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Napomena</td><td style="padding:8px;border:1px solid #ddd;">Pacijent ima priložen snimak</td></tr>` : ""}
        </table>
        <p style="margin-top:16px;color:#666;font-size:12px;">Poslato putem AURA Dental booking forme.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
