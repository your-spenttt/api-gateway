import express, { Application as ExpressApplication, NextFunction, Request, Response } from 'express';
import PingRouter from '../routes/PingRouter';

class ApiGatewayServer {
  public port: number | string;
  public host: string;
  public app: ExpressApplication;

  constructor(host: string, port: string | number) {
    this.host = host;
    this.port = port;
    this.app = express();
    this.plugins();
    this.routes();
  }

  /**
   * plugins method is used to define the top-level middlewares of the application
   */
  private plugins(): void {
    this.app.use(express.json({ limit: '10mb' }));
  }

  /**
   * routes method is used to register the routes with the operations to application
   */
  private routes(): void {
    this.app.use('/ping', new PingRouter(express.Router()).router);

    // executed only when the urls or routes is not registered yet
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      return res.json({
        code: 404,
        status: 'error',
        message: 'resource not found',
      });
    });
  }

  /**
   * start method is used to perform execution the application
   */
  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`[api-gateway]: currently running at ${this.host}:${this.port}`);
    });
  }
}

export default ApiGatewayServer;
