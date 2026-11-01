import express from 'express';
import Attendance from '../models/Attendance.js';
import {protect,allowRoles} from '../middleware/auth.js';
const router=express.Router();
router.get('/',protect,async(req,res)=>{try{const filter=req.user.role==='employee'?{employee:req.user._id}:{};res.json(await Attendance.find(filter).populate('employee','name department').sort({date:-1}).limit(100));}catch(e){res.status(500).json({message:e.message});}});
router.post('/mark',protect,async(req,res)=>{try{const employee=req.user.role==='employee'?req.user._id:req.body.employee;const date=req.body.date||new Date().toISOString().slice(0,10);const status=req.body.status||'Present';const item=await Attendance.findOneAndUpdate({employee,date},{employee,date,status},{upsert:true,new:true,setDefaultsOnInsert:true}).populate('employee','name department');res.json(item);}catch(e){res.status(400).json({message:e.message});}});
router.delete('/:id',protect,allowRoles('hr','manager'),async(req,res)=>{await Attendance.findByIdAndDelete(req.params.id);res.json({message:'Attendance deleted'});});
export default router;
