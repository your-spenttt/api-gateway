import 'dotenv/config';
import ApiGatewayServer from './app';

const PORT = process.env.APP_PORT || 8000;
const HOST = process.env.APP_STATUS === 'production' ? process.env.APP_HOST! : 'http://localhost';

const app = new ApiGatewayServer(HOST, PORT);

app.start();
