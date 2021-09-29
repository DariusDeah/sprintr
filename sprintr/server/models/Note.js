// Darius
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const NoteSchema = new Schema({
  body: { type: String, required: true },
  backlogItemId: { type: Schema.Types.ObjectId, ref: 'BacklogItems', required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Projects', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } })

NoteSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
NoteSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})
NoteSchema.virtual('backlog', {
  localField: 'backlogItemId',
  foreignField: '_id',
  justOne: true,
  ref: 'BacklogItems'
})
