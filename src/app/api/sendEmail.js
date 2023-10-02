import nodemailer from "nodemailer";

// ...
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  // ...
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    // ...
  });
  // ...

// ...
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        alert("Email sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        alert(data.message || "Error sending email.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error submitting form.");
    }
  };
  // ...
  

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Check if all fields are filled
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: "your_smtp_server",
        port: 587, // or 465 or other port based on your SMTP server
        secure: false,
        auth: {
          user: "your_smtp_username",
          pass: "your_smtp_password",
        },
      });

      await transporter.sendMail({
        from: "your_email@example.com",
        to: "receiver_email@example.com",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email", error);
      res.status(500).json({ message: "Error sending email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
