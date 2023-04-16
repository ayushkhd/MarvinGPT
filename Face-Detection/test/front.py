# import subprocess

# result = subprocess.run(["node", "back.js"], capture_output=True)
# emotion = result.stdout.decode();
# print(result.stdout.decode())

import requests

response = requests.get('http://localhost:3000/')
if response.status_code == 200:
  print(response.text)
else:
  print(f'Request failed with status code {response.status_code}')