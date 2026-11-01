import mongoose from 'mongoose';
const attendanceSchema = new mongoose.Schema({
  employee:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
  date:{type:String,required:true},
  status:{type:String,enum:['Present','Absent','Half Day'],default:'Present'},
  markedAt:{type:Date,default:Date.now}
});
attendanceSchema.index({employee:1,date:1},{unique:true});
export default mongoose.model('Attendance',attendanceSchema);
