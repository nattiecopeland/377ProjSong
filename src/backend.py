from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
import random
import string
from mongo import SongBank


app = Flask(__name__)

#CORS stands for Cross Origin Requests.
CORS(app) #Here we'll allow requests coming from any domain. Not recommended for production environment.

@app.route('/')
def hello_world():
    return 'Welcome to Song Bank!'

@app.route('/songs', methods=['GET', 'POST'])
def get_songs():
    if request.method == 'GET':
        search_songname = request.args.get('name')
        search_artist = request.args.get('artist')
        search_key = request.args.get('key')
        search_bpm = request.args.get('bpm')
        if search_songname:
            songs = SongBank().find_by_name(search_songname)  
        elif search_artist :
            songs = SongBank().find_by_artist(search_artist)
        elif search_key :
            songs = SongBank().find_by_key(search_key)
        elif search_artist :
            songs = SongBank().find_by_bpm(search_bpm)
        else :
            songs = SongBank().find_all()
        return {"song_list": songs}
    elif request.method == 'POST':
        songToAdd = request.get_json()
        newSong = SongBank(songToAdd)
        newSong.save()
        resp = jsonify(newSong), 201
        return resp

# def generate_id():
#     lettersAndDigits = string.ascii_letters + string.digits
#     return ''.join((random.choice(lettersAndDigits) for i in range(6)))
   