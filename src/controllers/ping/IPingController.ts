import { Request, Response } from 'express';

interface IPingController {
  /**
   * show ping data
   */
  show(req: Request, res: Response): Response;
}

export default IPingController;
