import ollama from 'ollama'



async function call(prompt) {
    try {
      const response = await ollama.chat({
        model: 'llama3', // Change to your desired model
        messages: [{ role: 'user', content: prompt }],
      });
  
      console.log("Ollama Response:", response.message.content);
      return response.message.content;
    } 
    catch (error) {
      console.error("Error communicating with Ollama:", error);
      return null;
    }
}
