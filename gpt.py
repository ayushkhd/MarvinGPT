import os
import openai
from dotenv import load_dotenv; load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_response(prompt):
  response = openai.Completion.create(
    engine="davinci",
    prompt=prompt,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.5,
  )
  return response.choices[0].text.strip()
