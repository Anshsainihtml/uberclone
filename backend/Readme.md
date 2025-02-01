# Backend API Docmentation

## `/users/register` Endpoint

### Description 

Registers a new user by creating a user account with

### HTTP Method

`POST`

### Endpoint

`/users/register`

### Request Body

The request body should be in JSON format and include

- `fullname` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 characters).
-  `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response 
- `user` (object):
   - `fullname` (object):
      - `firstname` (string, required): User's first name (minimum 3 characters).
      - `lastname` (string, optional): User's last name (minimum 3 characters).
   - `email` (string, required): User's email address (must be a valid email).
   - `passowrd` (string, required): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Endpoint

`/users/login`

### Request Body

The request body should be in JSON format and include the following fields:

-  `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object): 
    - `fullname` (object).
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).

## `/users/logout` Endpoint

### Description 

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie:

## `/captain/register` Endpoint