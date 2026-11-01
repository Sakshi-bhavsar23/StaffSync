import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import {protect,allowRoles} from '../middleware/auth.js';
const router=express.Router();
router.get('/',protect,async(req,res)=>{try{const users=await User.find().select('-password').sort({createdAt:-1});res.json(users);}catch(e){res.status(500).json({message:e.message});}});
router.post('/',protect,allowRoles('hr'),async(req,res)=>{try{const {name,email,password='Password123!',role='employee',department='General',position='Employee',phone=''}=req.body;if(await User.findOne({email}))return res.status(409).json({message:'Email already exists'});const user=await User.create({name,email,password:await bcrypt.hash(password,10),role,department,position,phone});res.status(201).json(await User.findById(user._id).select('-password'));}catch(e){res.status(400).json({message:e.message});}});
router.delete('/:id',protect,allowRoles('hr'),async(req,res)=>{try{await User.findByIdAndDelete(req.params.id);res.json({message:'Employee deleted'});}catch(e){res.status(500).json({message:e.message});}});
export default router;
