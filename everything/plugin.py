import openai
from client import get_latest_emotion

class ChatGPT:
    def __init__(self, api_key, model_engine):
        openai.api_key = api_key
        self.model_engine = model_engine
        self.chatgpt = openai.Completion.create(engine=self.model_engine)
        
    def chat_with_prefix(self, prompt):
        prefix = get_latest_emotion()
        print("PREFIX: ", prefix)
        prompt_with_prefix = prefix + prompt
        response = self.chatgpt.complete(
            prompt=prompt_with_prefix,
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.7,
        )
        return response.choices[0].text.strip()
        
    def generate_response(self, prompt):
        response = self.chat_with_prefix(prompt)
        return response

# Create an instance of the ChatGPT class
api_key = "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"
model_engine = "text-davinci-002"
chatbot = ChatGPT(api_key, model_engine)

# Use the generate_response method to generate a response to the user prompt
prompt = input("Prompt > ")
response = chatbot.generate_response(prompt)
print(response)