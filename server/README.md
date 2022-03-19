# Server-side application fo our project
## Requirements:
- npm 
- node js
- ts-node (installed with npm globally)

# environment file requirements
_.env_ file example in root directory, which contains
- PORT=3000
- SALT_LEN=10
- DB_CLIENT='mssql' 
- DB_HOST=10.0.0.0
- DB_PORT=1337
- DB_USER=myUserName
- DB_PASS=myPassword
- DB_NAME=databaseName

## Installation
> npm install

## Run and build
Starts application with nodemon and watch changes in files
> npm run start

Build application with _tsconfig.json_
> npm run build

## Endpoints
### /api/news
- /api/news 
###### METHOD: GET
###### RESPONSE: All news 
/api/news/id
###### METHOD: GET
###### RESPONSE: All news id's array

