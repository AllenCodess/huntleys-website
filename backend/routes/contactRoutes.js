import express from "express";
import { Resend } from "resend";

const router = express.Router();

router.post("/", async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, phoneNumber, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Huntley's Contact Form <noreply@huntleysauce.com>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: subject ? `Contact form: ${subject}` : `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber || "Not provided"}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("RESEND ERROR:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
});

export default router;
