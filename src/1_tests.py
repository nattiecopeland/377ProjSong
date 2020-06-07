from mongo import *
import pytest

class TestClass:

   songc = {
            "Artist": 'C',
            "Name": 'C',
            "Key": 'C',
            "BPM": '2',
            "username": 'C',
            "logged_in": False,
            "reported": False
            }

   songb = {
            "Artist": 'B',
            "Name": 'B',
            "Key": 'B',
            "BPM": '3',
            "username": 'B',
            "logged_in": False,
            "reported": False
            }

   def test_empty(self):
      sb = SongBank()
      songs = SongBank.find_all(sb)
      for song in songs:
         s = SongBank(song)
         s.remove()
      assert len(SongBank.find_all(sb)) == 0

   def test_find_by_id(self):
      songa = {
            "Artist": 'A',
            "Name": 'A',
            "Key": 'A',
            "BPM": '1',
            "username": 'A',
            "logged_in": False,
            "reported": False
            }

      sb = SongBank()
      a = SongBank(songa)
      a.save()
      res = SongBank.find_by_id(sb, a["_id"])
      assert len(res) == 1
      assert res[0]["Artist"] == 'A'
      assert res[0]["Name"] == 'A'
      assert res[0]["Key"] == 'A'
      assert res[0]["BPM"] == '1'
      assert res[0]["username"] == 'A'
      assert res[0]["logged_in"] == False
      assert res[0]["reported"] == False

      aid = a["_id"] 
      a.remove()
      res = SongBank.find_by_id(sb, aid)
      assert(len(res)) == 0
