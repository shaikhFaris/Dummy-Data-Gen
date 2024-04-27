# Dummy Data Generator

## Description
This is a proper working website which displays dummy data fetched from database. You can host this website This website can provide u with dummy data which u can use to learn CRUD operations in mongodb. This project was made using these technologies:
* HTML
* CSS
* Vanilla javascript
* node
* express
* mongoose

> [!NOTE]  
> The website works properly. But inorder for this website to display data when used by other clients other than your local client browser, _*you need to get ssl certificate to get this website to function properly as chrome browser does not allow database/server operations without proper security percautions.*_

## How to use
1. Install node and mongodb. Then setup mongodb and know how to use it
2. Open your powershell in this folder's directory and paste the following command:
```
npm init -y
```
3. Then open `package.json` which looks like this:
```json
{
  "name": "javascript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
Paste the below code below `"main": "index.js",` in package.json file.
```json
"main": "index.js",
```
4. Then download these following dependencies one by one:
```
npm install express
npm install mongoose
npm install path
```
5. Make all the neccessary adjustment in the code
6. Then run the `server.js` file with this command:
```
node server.js
```
7.Here you are! Now u have a proper working website
