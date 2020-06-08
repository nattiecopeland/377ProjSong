from backend import *
import pytest

class TestClass:

   def test_hello_workd(self):
            assert hello_world() == 'Welcome to Song Bank!'
