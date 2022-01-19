import type { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");

//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
//
export default async function (req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(
    "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"
  );

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
