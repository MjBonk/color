// const axios = require("axios");
import axios from "axios";

const apiUrl = process.env.REACT_APP_OPENAI_CHAT_API;
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

let previousMessages = [];
export async function askQuestion(question) {
	const conversation = [
		{ role: "system", content: "You are a helpful assistant." },
		{ role: "user", content: "Tell me a haiku about color." },
	];
	try {
		const response = await axios.post(
			apiUrl,
			{
				messages: conversation,
				temperature: 0.7,
				max_tokens: 150,
				model: "gpt-3.5-turbo-0613",
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${apiKey}`,
				},
			}
		);
		console.log("API Response:", response.data);
		const assistantReply = response.data.choices[0].message.content;
		return `${assistantReply}`;
	} catch (error) {
		console.error("Error making API request:", error.response ? error.response.data : error.message);
		return null;
	}
}
const userQuestion = "Tell me a quote from an artist.";
askQuestion(previousMessages, userQuestion).then((assistantReply) => {
	console.log("Assistant:", assistantReply || "Unable to provide an answer.");
	// Save the assistant's reply to use in the next interaction
	previousMessages.push({ role: "assistant", content: assistantReply });
});
