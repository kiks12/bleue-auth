import { Router, Response, Request, NextFunction } from "express";
import { prisma } from "../../prisma/client";

import { IRegistrationInputBody, RegistrationInputSchema, validate } from "../types";

export const registrationRouter = Router();

// Middleware to catch errors in input
registrationRouter.use('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    const body: IRegistrationInputBody = req.body;
    const status = validate(body, RegistrationInputSchema);
    if (!status) {
      res.status(400);
      return res.json({
        error: 'Incomplete or Invalid Inputs. Please fix your inputs or try again later.'
      });
    }
    next();
  } catch (e) {
    res.status(500);
    return res.json({
      error: 'Server Error: Please try again Later.'
    });
  }
})

// Registration Route
registrationRouter.post('/', async (req: Request, res: Response) => {
  try {
    const body: IRegistrationInputBody = req.body;
    
    if (body?.password) {
      // encrypt password
      console.log('Encrypting password...');
    }

    const createdUser = await prisma.user.create({ data: body });

    if (!createdUser) {
      res.status(500);
      return res.json({
        registered: false,
        error: 'Server Error: Please try again later.'
      });
    }

    res.status(200)
    return res.json({
      registered: true,
      user: createdUser,
    });

  } catch (e) {
    res.status(500);
      return res.json({
        error: 'Server Error: Please try again later.'
      });
  }
})