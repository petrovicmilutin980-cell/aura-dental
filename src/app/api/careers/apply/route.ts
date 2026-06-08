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
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const position = formData.get("position") as string;
    const cv = formData.get("cv") as File | null;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = getTransporter();

    let attachments: { filename: string; content: Buffer; contentType: string }[] = [];
    if (cv && cv.size > 0) {
      const arrayBuffer = await cv.arrayBuffer();
      attachments.push({
        filename: cv.name,
        content: Buffer.from(arrayBuffer),
        contentType: cv.type,
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Nova prijava za posao - AURA Dental | ${name}`,
      html: `
        <h2>Nova prijava za posao</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ime i prezime</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;">${phone || "Nije naveden"}</td></tr>
          ${position ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Pozicija</td><td style="padding:8px;border:1px solid #ddd;">${position}</td></tr>` : ""}
          ${message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Poruka</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>` : ""}
          ${cv ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">CV</td><td style="padding:8px;border:1px solid #ddd;">Priložen: ${cv.name} (${(cv.size / 1024).toFixed(1)} KB)</td></tr>` : ""}
        </table>
        <p style="margin-top:16px;color:#666;font-size:12px;">Poslato putem AURA Dental karijera forme.</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
  }
}
