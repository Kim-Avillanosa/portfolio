import type { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");

//
export default async function (req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey("");

  const { email, message, company } = req.body;

  const content = {
    to: "kmavillanosa@gmail.com",
    cc: [
      {
        email: email,
      },
    ],
    from: "careers.kmavillanosa@gmail.com",
    subject: `Kim Avillanosa | Opportunity from ${company}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
