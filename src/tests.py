from mongo import *
import pytest

class TestClass:

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

   def test_find_all(self):
      songa = {
            "Artist": 'A',
            "Name": 'A',
            "Key": 'A',
            "BPM": '1',
            "username": 'A',
            "logged_in": False,
            "reported": False
            }
      songb = {
            "Artist": 'B',
            "Name": 'B',
            "Key": 'B',
            "BPM": '2',
            "username": 'B',
            "logged_in": False,
            "reported": False
            }
      songc = {
            "Artist": 'C',
            "Name": 'C',
            "Key": 'C',
            "BPM": '3',
            "username": 'C',
            "logged_in": False,
            "reported": False
            }
      sb = SongBank()
      a = SongBank(songa)
      a.save()
      b = SongBank(songb)
      b.save()
      c = SongBank(songc)
      c.save()

      assert(len(SongBank.find_all(sb)) == 3)

   def test_find_by_name(self):
      sb = SongBank()
      res = SongBank.find_by_name(sb, "B")
      assert(len(res)) == 1
      assert res[0]["Artist"] == 'B'
      assert res[0]["Name"] == 'B'
      assert res[0]["Key"] == 'B'
      assert res[0]["BPM"] == '2'
      assert res[0]["username"] == 'B'
      assert res[0]["logged_in"] == False
      assert res[0]["reported"] == False

      res = SongBank.find_by_name(sb, "D")
      assert(len(res)) == 0

   def test_find_by_artist(self):
      sb = SongBank()
      res = SongBank.find_by_artist(sb, "B")
      assert(len(res)) == 1
      assert res[0]["Artist"] == 'B'
      assert res[0]["Name"] == 'B'
      assert res[0]["Key"] == 'B'
      assert res[0]["BPM"] == '2'
      assert res[0]["username"] == 'B'
      assert res[0]["logged_in"] == False
      assert res[0]["reported"] == False

      res = SongBank.find_by_artist(sb, "D")
      assert(len(res)) == 0

   def test_find_by_key(self):
      sb = SongBank()
      res = SongBank.find_by_key(sb, "B")
      assert(len(res)) == 1
      assert res[0]["Artist"] == 'B'
      assert res[0]["Name"] == 'B'
      assert res[0]["Key"] == 'B'
      assert res[0]["BPM"] == '2'
      assert res[0]["username"] == 'B'
      assert res[0]["logged_in"] == False
      assert res[0]["reported"] == False

      res = SongBank.find_by_key(sb, "D")
      assert(len(res)) == 0

   def test_find_by_bpm(self):
      sb = SongBank()
      res = SongBank.find_by_bpm(sb, "2")
      assert(len(res)) == 1
      assert res[0]["Artist"] == 'B'
      assert res[0]["Name"] == 'B'
      assert res[0]["Key"] == 'B'
      assert res[0]["BPM"] == '2'
      assert res[0]["username"] == 'B'
      assert res[0]["logged_in"] == False
      assert res[0]["reported"] == False

      res = SongBank.find_by_bpm(sb, "4")
      assert(len(res)) == 0

   def test_report(self):
      songd = {
            "Artist": 'D',
            "Name": 'D',
            "Key": 'D',
            "BPM": '4',
            "username": 'D',
            "logged_in": False,
            "reported": False
            }

      sb = SongBank()
      d = SongBank(songd)
      d.save()
      res = SongBank.report_song(sb, d["_id"])
      assert res["reported"] == True
      (SongBank(res)).save()
      res = SongBank.find_by_reported(sb)
      assert(len(res)) == 1
      assert res[0]["Artist"] == 'D'
      assert res[0]["Name"] == 'D'
      assert res[0]["Key"] == 'D'
      assert res[0]["BPM"] == '4'
      assert res[0]["username"] == 'D'
      assert res[0]["logged_in"] == False
      assert res[0]["reported"] == True

   def test_find_by_ids(self):
      sb = SongBank()
      songs = SongBank.find_all(sb)
      idlist = list()
      (SongBank(songs[len(songs) - 1])).remove()
      for song in songs:
         idlist.append((SongBank(song))["_id"])
      res = SongBank.find_by_ids(sb, idlist)
      assert(len(res)) == 3
