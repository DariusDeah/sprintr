import { Schema } from 'mongoose'

export const BacklogItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enums: ['Pending', 'In Progress', 'In Reveiw', 'Done'], required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  sprintId: { type: Schema.Types.ObjectId, ref: 'Sprint', required: true }
})

BacklogItemSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
BacklogItemSchema.virtual('notes', {
  localField: 'projectId',
  foreignField: 'projectId',
  justOne: false,
  ref: 'Note'
})
BacklogItemSchema.virtual('tasks', {
  localField: 'projectId',
  foreignField: 'projectId',
  justOne: false,
  ref: 'Task'
})
