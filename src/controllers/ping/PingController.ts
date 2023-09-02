import { Request, Response } from 'express';
import IPingController from './IPingController';

class PingController implements IPingController {
  public show(req: Request, res: Response): Response {
    return res.json({
      message: 'Api Gateway is running . . .',
      data: 'pong',
    });
  }
}

export default new PingController();
