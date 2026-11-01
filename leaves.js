import express from 'express';
import Leave from '../models/Leave.js';
import {protect,allowRoles} from '../middleware/auth.js';
const router=express.Router();
router.get('/',protect,async(req,res)=>{try{const filter=req.user.role==='employee'?{employee:req.user._id}:{};const data=await Leave.find(filter).populate('employee','name email department').populate('reviewedBy','name').sort({createdAt:-1});res.json(data);}catch(e){res.status(500).json({message:e.message});}});
router.post('/',protect,async(req,res)=>{try{const {type,from,to,reason}=req.body;if(!from||!to||!reason)return res.status(400).json({message:'All leave fields are required'});const item=await Leave.create({employee:req.user._id,type,from,to,reason});res.status(201).json(await item.populate('employee','name email department'));}catch(e){res.status(400).json({message:e.message});}});
router.patch('/:id/status',protect,allowRoles('hr','manager'),async(req,res)=>{try{const {status}=req.body;if(!['Approved','Rejected'].includes(status))return res.status(400).json({message:'Invalid status'});const item=await Leave.findByIdAndUpdate(req.params.id,{status,reviewedBy:req.user._id},{new:true}).populate('employee','name email department').populate('reviewedBy','name');res.json(item);}catch(e){res.status(400).json({message:e.message});}});
export default router;
