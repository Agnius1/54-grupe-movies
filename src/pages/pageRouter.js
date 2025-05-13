import express from 'express';
export const pageRouter =express.Router();

pageRouter.get('/', (req,res)=> {
    return res.send('HOME PAGE')
})