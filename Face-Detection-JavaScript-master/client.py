import requests
import time

def get_latest_emotion():
    response = requests.get('http://localhost:3000/get-latest-emotion')
    emotion = response.json()['emotion']
    return emotion

if __name__ == '__main__':
    while True:
        curr_emotion = get_latest_emotion()
        print(f'Current emotion: {curr_emotion}')
        time.sleep(1)