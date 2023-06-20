# Formula1 API system
A demo restful API 


# Setup

### With Docker

- Open docker-compose.yml file and replace default configuration info 

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
replace 3000 with config port at step 1