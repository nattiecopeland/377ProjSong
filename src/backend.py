from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
import random
import string
from mongo import SongBank
from mongo import UserBank


app = Flask(__name__)

#CORS stands for Cross Origin Requests.
CORS(app) #Here we'll allow requests coming from any domain. Not recommended for production environment.

@app.route('/')
def hello_world():
    return 'Welcome to Song Bank!'

@app.route('/songs', methods=['GET', 'POST', 'PATCH'])
def get_songs():
    if request.method == 'GET':
        search_songname = request.args.get('Name')
        search_artist = request.args.get('Artist')
        search_key = request.args.get('Key')
        search_bpm = request.args.get('BPM')
        if search_songname is not None:
            songs = SongBank().find_by_name(search_songname)  
        elif search_artist is not None:
            songs = SongBank().find_by_artist(search_artist)
        elif search_key is not None:
            songs = SongBank().find_by_key(search_key)
        elif search_bpm is not None:
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
    elif request.method == 'PATCH':
         songToReport = request.args.get('_id')
         song = SongBank().report_song(songToReport)
         if song:
            SongBank(song).save()
            return {}, 204
         return {}, 404

@app.route('/users', methods=['GET', 'POST', 'PATCH'])
def get_users():
    if request.method == 'GET':
        search_username = request.args.get('username')
        user_password = request.args.get('password')
        get_favorites = request.args.get('get_favorites')
        if search_username is not None:
           users = UserBank().find_by_username(search_username)
           if get_favorites:
              return {"song_list" : SongBank().find_by_ids(users[0]["favorites"])}
           elif user_password is not None:
              if(len(users) == 1):
                 if(users[0].get('password') == user_password):
                    return {"user": users[0]}
           else:
              if(len(users) == 1):
                 return {"user":users[0]}
           return {"user" : None}
        else:
           users = UserBank().find_all()
           return {"user_list": users}
    elif request.method == 'POST':
        userToAdd = request.get_json()
        newUser = UserBank(userToAdd)
        newUser.save()
        resp = jsonify(newUser), 201
        return resp
    elif request.method == 'PATCH':
        username = request.args.get('username')
        idToAdd = request.args.get('_id')
        user = UserBank().add_favorite(username,idToAdd)
        if user:
            UserBank(user).save()
            return {}, 204
        return 404

@app.route('/songs/<id>', methods=['GET','DELETE'])
def get_song(id):
   songs = SongBank().find_all()
   if request.method == 'GET':
      if id :
         for song in songs:
            if str(song['_id']) == id:
               return song
         return songs
   elif request.method == 'DELETE':
      if id:
         song = SongBank({"_id":id})
         res= song.remove()
         #if res.nRemoved > 0:
         return {}, 204
      return 404 

# def generate_id():
#     lettersAndDigits = string.ascii_letters + string.digits
#     return ''.join((random.choice(lettersAndDigits) for i in range(6)))
   
