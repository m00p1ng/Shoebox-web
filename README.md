# Shoebox Web

![Shoebox logo image](https://raw.githubusercontent.com/moopings/Shoebox-web/master/static/images/navigation_bar/logo_with_name.png)

## Pre Requirements
- Python 3
  - virturalenv
- Node.js
- MongoDB


## installation

1. install requirements

2. clone this project
  ```
  $ git clone https://github.com/moopings/Shoebox-web
  ```

3. create project virtual environment
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


## Server
run django server
  ```
  $ source ./shoebox-env/bin/activate
  $ python manage.py runserver
  ```
  or (use Node package manager script)
  ```
  $ npm run server
    ```


## Testing

* API test
  ```
  $ npm run api-test
  ```

* UI test
  ```
  $ npm run ui-test
  ```
