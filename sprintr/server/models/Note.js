// Darius
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const NoteSchema = new Schema({
  body: { type: String, required: true },
  taskId: { type: Schema.Types.ObjectId },
  projectId: { type: Schema.Types.ObjectId, ref: 'Projects', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } })

NoteSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
NoteSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})
