import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export const protect = async (req,res,next)=>{
  try{
    const token=(req.headers.authorization||'').replace('Bearer ','');
    if(!token) return res.status(401).json({message:'Authentication required'});
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded.id).select('-password');
    if(!req.user) return res.status(401).json({message:'User not found'});
    next();
  }catch(e){res.status(401).json({message:'Invalid or expired token'});}
};
export const allowRoles=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:'Access denied'});
