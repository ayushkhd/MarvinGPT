import os
import openai
from dotenv import load_dotenv; load_dotenv()


def chat_gpt_request(emotion, prompt, max_tokens=100, n=1, stop=None, temperature=1.0):
    openai.api_key = os.getenv("OPENAI_API_KEY")
    
    full_prompt = f"{emotion}: {prompt}"

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=full_prompt,
        max_tokens=max_tokens,
        n=n,
        stop=stop,
        temperature=temperature,
    )

    return response.choices[0].text.strip()
