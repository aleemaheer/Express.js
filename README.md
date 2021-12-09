##### Express Crash Course
1. To start a express project open a folder and type the command:
```bash
    npm init -y
```
2. Now you have to install the express by typing the command:
```bash
    npm i express
```
3. After that make a file index.js and write code in it.
4. You can install nodemon, by using nodemon you don't have to restart the server on saving, you just saved and refresh the web page. You can type the following command to install the nodemon:
```bash
    npm install -D nodemon
```
and you have to do some changes in your package.json file, these are
```bash
    "scripts": {
        "start": "node index"
        "dev": "nodemon index"
    }
```
and you have to type the command to run the server:
```bash
    npm run dev
```