// Looking to send emails in production? Check out our Email API/SMTP product!
import { MailtrapClient } from "mailtrap";

const TOKEN = "ae5feebcad1d9a480ec719382d9f52be";

const client = new MailtrapClient({
    token: TOKEN,
});

const sender = {
    email: "hello@demomailtrap.com",
    name: "Mailtrap Test",
};
const recipients = [
    {
        email: "manojdsai@gmail.com",
    }
];

client
    .send({
        from: sender,
        to: recipients,
        subject: "You are awesome!",
        html: "Congrats for sending test email with Mailtrap!",
        category: "Integration Test",
    })
    .then(console.log, console.error);