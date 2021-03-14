## Installation

1.  Node.js installed

```
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
```

2. Configure your database 

```js
module.exports = {
  mongodb: {
    host: 'localhost',
    port: 3306,
    database: 'shortener_dev',
    username: 'root',
    password: '',
  }
};
```
  
3. Navigate into the folder  

```
$ cd node-es6-url-shortener
```
  
4. Install NPM dependencies

```
$ npm install
```

5. Run the project

```
$ node index.js
```
  
6. Or use `nodemon` for live-reload
  
```
$ npm start
```
