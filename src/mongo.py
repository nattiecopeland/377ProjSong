import pymongo
from bson import ObjectId

class Model(dict):
    """
    A simple model that wraps mongodb document
    """
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self.collection.update(
                { "_id": ObjectId(self._id) }, self)
        self._id = str(self._id)

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result :
                self.update(result)
                self._id = str(self._id)
                return True
        return False

    def remove(self):
        if self._id:
            resp = self.collection.remove({"_id": ObjectId(self._id)})
            self.clear()
            return resp


class UserBank(Model):
    db_client = pymongo.MongoClient('localhost', 27017)
    collection = db_client["users"]["user_list"]

    def find_all(self):
       users = list(self.collection.find())
       for user in users:
           user["_id"] = str(user["_id"])
       return users


class SongBank(Model):
    db_client = pymongo.MongoClient('localhost', 27017)
    collection = db_client["songs"]["song_list"]

    def find_all(self):
        songs = list(self.collection.find())
        for song in songs:
            song["_id"] = str(song["_id"])
        return songs

    def find_by_name(self, name):
        songs = list(self.collection.find({"Name": name}))
        for song in songs:
            song["_id"] = str(song["_id"])
        return songs

    def find_by_artist(self, artist):
        songs = list(self.collection.find({"Artist": artist}))
        for song in songs:
            song["_id"] = str(song["_id"])
        return songs

    def find_by_key(self, key):
        songs = list(self.collection.find({"Key": key}))
        for song in songs:
            song["_id"] = str(song["_id"])
        return songs

    def find_by_bpm(self, bpm):
        songs = list(self.collection.find({"BPM": bpm}))
        for song in songs:
            song["_id"] = str(song["_id"])
        return songs
