import express from 'express';
import User from '../models/User.js';
import Leave from '../models/Leave.js';
import Attendance from '../models/Attendance.js';
import Announcement from '../models/Announcement.js';
import {protect} from '../middleware/auth.js';
const router=express.Router();
router.get('/',protect,async(req,res)=>{try{const [employees,leavesPending,attendanceToday,announcements]=await Promise.all([User.countDocuments(),Leave.countDocuments({status:'Pending'}),Attendance.countDocuments({date:new Date().toISOString().slice(0,10),status:'Present'}),Announcement.countDocuments()]);res.json({employees,leavesPending,attendanceToday,announcements});}catch(e){res.status(500).json({message:e.message});}});
export default router;
