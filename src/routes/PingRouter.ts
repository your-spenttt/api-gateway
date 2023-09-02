import { Router as ExpressRouter } from 'express';
import IRouter from './IRouter';
import PingController from '../controllers/ping/PingController';

class PingRouter implements IRouter {
  public router: ExpressRouter;

  constructor(router: ExpressRouter) {
    this.router = router;
    this.routes();
  }

  private routes(): void {
    this.router.route('/').get(PingController.show);
  }
}

export default PingRouter;
