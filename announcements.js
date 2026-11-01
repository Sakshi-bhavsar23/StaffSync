import express from 'express';
import Announcement from '../models/Announcement.js';
import {protect,allowRoles} from '../middleware/auth.js';
const router=express.Router();
router.get('/',protect,async(req,res)=>{try{res.json(await Announcement.find().populate('author','name role').sort({createdAt:-1}));}catch(e){res.status(500).json({message:e.message});}});
router.post('/',protect,allowRoles('hr'),async(req,res)=>{try{const {title,message}=req.body;if(!title||!message)return res.status(400).json({message:'Title and message are required'});const item=await Announcement.create({title,message,author:req.user._id});res.status(201).json(await item.populate('author','name role'));}catch(e){res.status(400).json({message:e.message});}});
router.delete('/:id',protect,allowRoles('hr'),async(req,res)=>{await Announcement.findByIdAndDelete(req.params.id);res.json({message:'Announcement deleted'});});
export default router;
