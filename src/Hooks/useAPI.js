// const axios = require("axios");
import axios from "axios";

const apiUrl = process.env.REACT_APP_OPENAI_CHAT_API;
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

let previousMessages = [];
export async function askQuestion(question) {
	const conversation = [
		{ role: "system", content: "You are a helpful assistant." },
		{ role: "user", content: "Tell me a poem about color sience that's 242 characters long and end with a random hashtag" },
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
		const assistantReply = response.data.choices[0].message.content;
		return `${assistantReply}`;
	} catch (error) {
		return null;
	}
}
const userQuestion = "Tell me a quote from an artist.";
askQuestion(previousMessages, userQuestion).then((assistantReply) => {
	previousMessages.push({ role: "assistant", content: assistantReply });
});
