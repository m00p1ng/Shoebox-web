# EZ eCommerce

## Requirement
- Python 3
- Node.js
- MongoDB

## How to install

1. install all requirements

2. create virturalenv
    ```
    $ virtualenv EZ-eCommerce
    ```

3. clone repository in your virtualenv
    ```
    $ git clone https://github.com/moopings/EZ-eCommerce ecom
    ```

4. activate your virtualenv
    ```
    $ source ./bin/activate
    ```

5. install python project package dependencies
    ```
    $ pip install -r requirements.txt
    ```

6. install javascript project package dependencies
    ```
    $ npm install
    ```

7. generate bundle javascript file
    ```
    $ npm run build
    ```

## How to run server
1. run server
    ```
    $ npm start
    ```

2. *(for FrontEnd)* run webpack for generate new bundle of javascript
    ```
    $ npm run watch
    ```
