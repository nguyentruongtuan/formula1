# Formula1 API system
A demo restful API 


# Setup

### With Docker

- create docker-compose.yml file
- Adding default content
  ```
    version: '3.1'


    services:

      db:
        image: mongo:5
        ports:
          - 27017:27017
        restart: always
        environment:
          MONGO_INITDB_ROOT_USERNAME: root
          MONGO_INITDB_ROOT_PASSWORD: 123123
          MONGO_INITDB_DATABASE: formula1

      app:
        build:
          context: ./app
          dockerfile: Dockerfile.dev
        environment:
          - APP_PORT=3000
          - DATABASE_PORT=27017
          - DATABASE_USERNAME=root
          - DATABASE_PASSWORD=123123
          - DATABASE_HOST=db
          - DATABASE_DATABASE=formula1
        ports:
          - 3000:3000
          - 9229:9229
        depends_on:
          - db
        links:
          - "swagger"

      swagger:
        image: swaggerapi/swagger-ui
        environment:
          - SWAGGER_JSON=/app/swagger.yaml
          - BASE_URL=/swagger
        volumes:
          - ./swagger:/app

    ```
- Replace default environment config
- Run command
  ```
  docker compose up -d
  ```
- Access url http://localhost:3000

### Without Docker
- Copy .env.example to .env
- Open .env file and replace default config 
- Run command
  ```
  npm install
  npm run build
  npm start
  ```
- Access url http://localhost:3000 

**Note**
replace 3000 with port at config step when access url