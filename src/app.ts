import express from 'express';
import { Request, Response, NextFunction } from 'express'
import api from './routes/index';

const app = express();
app.set('port', 3333);

// Allow CORS
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        return res.status(200).json();
    }
    next();
});

// parse application/json 
app.use(express.json());

// register routes
// app.use('/api', api);
app.use('/api', api);

// Handle invalid routes
app.use((req, res) => {
    const headerStr = req.rawHeaders.join(',');
    const errMsg = `Error: route not Found: ${req.url} headers: ${headerStr}`;
    console.error(errMsg, { req });
    res.status(404).json(errMsg);
});

// Handle 500
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Internal server error', { req, err});
    res.status(500).json('Internal server error');
});

process.on('uncaughtException', (err: any) => {
    console.error('Uncaught error:', { err });
    process.exit(1);
});

process.on('unhandledRejection', (reason: any, promise) => {
    console.log(reason.message)
    console.error(`Unhandled rejection: ${reason.message}`, { reason, promise });
});

export default app;
