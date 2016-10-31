# Shoebox Web

## Requirement
- Python 3
  - virturalenv
- Node.js
- MongoDB


## How to install

1. install all requirements

2. clone this project
  ```
  $ git clone https://github.com/moopings/Shoebox-web
  ```

3. create virturalenv
  ```
  $ cd Shoebox-web
  $ virtualenv -p python3 shoebox-env
  ```

4. activate your virtualenv
  ```
  $ source ./shoebox-env/bin/activate
  ```

5. install python project package dependencies
  ```
  $ pip install -r requirements.txt
  ```

6. install javascript project package dependencies
  ```
  $ npm install
  ```

7. start project
  ```
  $ npm start
  ```


## How to run server
* run django server
  ```
  $ source ./shoebox-env/bin/activate
  $ python manage.py runserver
  ```
  or
  ```
  $ npm run server
    ```

* *(for FrontEnd)* run webpack for generate new bundle of javascript
  ```
  $ npm run watch
  ```


## How to run test

* API test
  ```
  $ npm run test-api
  ```

* UI test
  ```
  $ npm run test-ui
  ```
