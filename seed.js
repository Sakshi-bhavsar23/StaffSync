import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import Announcement from './models/Announcement.js';
const run=async()=>{await mongoose.connect(process.env.MONGO_URI);await Promise.all([User.deleteMany({}),Announcement.deleteMany({})]);const password=await bcrypt.hash('Password123!',10);const users=await User.insertMany([
{name:'HR Admin',email:'hr@staffsync.demo',password,role:'hr',department:'Human Resources',position:'HR Administrator'},
{name:'Priya Manager',email:'manager@staffsync.demo',password,role:'manager',department:'Engineering',position:'Team Manager'},
{name:'Aarav Employee',email:'employee@staffsync.demo',password,role:'employee',department:'Engineering',position:'Software Developer'},
{name:'Neha Sharma',email:'neha@staffsync.demo',password,role:'employee',department:'Design',position:'UI Designer'}]);
await Announcement.create({title:'Welcome to StaffSync',message:'Please keep your employee profile and attendance records updated.',author:users[0]._id});console.log('Seed complete');await mongoose.disconnect();};run().catch(e=>{console.error(e);process.exit(1);});
