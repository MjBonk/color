import { askQuestion, assistantReply } from '../../Hooks/useAPI';
import { useEffect , useState } from 'react';

function ParagraphAPI() {
	const [assistantResponse, setAssistantResponse] = useState("");
	console.log(assistantResponse)
	useEffect(() => {
	  const userQuestion = 'Tell me a quote from a color.';
	  askQuestion(userQuestion)
		.then(assistantReply => {
		  console.log('Assistant:', assistantReply || 'Unable to provide an answer.');
		  //assistantReply(assistantReply);
		 setAssistantResponse(assistantReply);
		})
		.catch(error => {
		  console.error('Error:', error);
		});
	}, []);
	return (
	  // <h1>{assistantResponse || 'Loading...'}</h1>
	  // Or you can use like this
	  <p>{assistantResponse?.length ? assistantResponse : "Loading..."}</p>
	);
  }

  export default ParagraphAPI;









