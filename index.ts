import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const myNumber = process.env.MY_NUMBER;

if (!accountSid){
    console.error('SID');
} else if (!authToken) {
    console.error('token');
} else if (!myNumber) {
    console.error('mynumber');
} else if (!twilioNumber) {
    console.error('twilio number');
}

if (accountSid && authToken && myNumber && twilioNumber) {
    const client = new Twilio(accountSid, authToken);

    client.messages
        .create({
        from: twilioNumber,
        to: myNumber,
        body: "You just sent an SMS from TypeScript using Twilio!",
        })
        .then((message) => console.log(message.sid))
        .catch(e => { console.error('Got an error:', e.code, e.message); });
} else {
    console.error(
        "You are missing one of the variables you need to send a message"
    );
}