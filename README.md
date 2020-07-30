# Node + Fastify + DynamoDB

## Setup

1. Install Node.js (prefer nvm since project has `.nvmrc` file)
2. Make sure AWS SDK installed - `which aws`
3. Get [DynamoDB local server](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html) (Need JRE >6 since is Java)
4. Start local DynamoDB server
   > `java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb`
   > Can list tables `aws dynamodb list-tables --endpoint-url http://localhost:8000`
5. Clone repo then run `npm install`
6. run `node .`