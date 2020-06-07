
Project Description:
Welcome to SongBank! SongBank is a database of Songs, which contains information on songs artist, name, key, and bpm. Guests can search for songs in the database by name, artist, key, or bpm and create account/login. Users can search for songs, as well as add songs to the database, report songs, and favorite songs. Only the Admin can remove songs. We hope that this Software will allow DJ's and other music enthusiasts to easily access information on songs so that they can better design their live sets! 


UI Prototype (Last Updated May 5, 2020):
https://www.figma.com/file/476kxieMSYkSeyWBzBE3J0/UI-Prototype-for-Music-Database-Project?node-id=0%3A1


Project Environment Set-Up:
- Pull current GitHub Repository to your local Project Repo
- Go to local Project Repo
- Duplicate terminal window
- If you haven't already done so, create a virtual environemt in project folder (python3 -m venv venv)
- Activate virtual environemnt (. venv/bin/activate)
- Make sure all dependencies are installed (including flask, react, pymongo, npm) https://flask.palletsprojects.com/en/1.1.x/installation/      https://pymongo.readthedocs.io/en/stable/installation.html   https://nodejs.org/en/download/   
- export flask environment and dependencies in terminal window with activated virtual environement 
    export FLASK_APP=backend.py
    export FLASK_ENV=development
- run backend with 
    flask run
  or with
    python -m flask run
- copy https:// link that is listed in the terminal window after succesful run
- run frontend in terminal window without activated virtual environemt with
    npm start
- Add new tab to web browser, copy backend link 
- Now you have both frontend and backend in the same web browser terminal, different tabs
- Duplicate one of the terminal windows one more time
- In this third terminal window, you can edit code and changes will automatically be reflected in frontend/backend
- You can play around with the frontend/backend on the web browser and see how they interact with each other in real time
- Note: Please do not push any code until you are confident that it builds correctly!





Style Guides:
https://www.python.org/dev/peps/pep-0008/
https://prettier.io/docs/en/options.html

Style Checker Install Instructions:
https://pypi.org/project/pycodestyle/
https://create-react-app.dev/docs/setting-up-your-editor
