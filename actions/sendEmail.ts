"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const sender = formData.get("senderEmail");

  if (!validateString(sender, 100)) {
    return {
      error: "Invalid Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "darseen.dev@gmail.com",
      subject: "Message from contact form",
      reply_to: sender as string,
      text: message as string,
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};

export default sendEmail;
