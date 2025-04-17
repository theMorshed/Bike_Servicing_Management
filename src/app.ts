import express, { Application, json, NextFunction, Request, Response, urlencoded } from 'express';
import cors from 'cors';
import router from './app/routes';
import { StatusCodes } from 'http-status-codes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());

// parser
app.use(json());
app.use(urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello from Bike Servicing Application'
    })
});

app.use('/api', router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'API NOT FOUND!!',
        error: {
            path: req.originalUrl,
            message: 'Your requested path is not found!'
        }
    })
})

export default app;