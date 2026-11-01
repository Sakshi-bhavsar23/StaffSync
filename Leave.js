import mongoose from 'mongoose';
const leaveSchema = new mongoose.Schema({
  employee:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
  type:{type:String,enum:['Casual','Sick','Earned','Other'],default:'Casual'},
  from:{type:Date,required:true},
  to:{type:Date,required:true},
  reason:{type:String,required:true},
  status:{type:String,enum:['Pending','Approved','Rejected'],default:'Pending'},
  reviewedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',default:null},
  createdAt:{type:Date,default:Date.now}
});
export default mongoose.model('Leave',leaveSchema);
