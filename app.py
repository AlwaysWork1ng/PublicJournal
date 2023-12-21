from flask import Flask, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
CORS(app)

def get_verse_of_the_day():
    url = "https://www.verseoftheday.com/"
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    verse_of_the_day = soup.find("div", class_="scripture").text.strip()
    return verse_of_the_day

@app.route('/api/verse-of-the-day', methods=['GET'])
def verse_of_the_day():
    verse = get_verse_of_the_day()
    print(verse)
    return jsonify(verse=verse)

if __name__ == '__main__':
    app.run(debug=True)
