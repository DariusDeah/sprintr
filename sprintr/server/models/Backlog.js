import { Schema } from 'mongoose'

export const BacklogItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enums: ['Pending', 'In Progress', 'In Reveiw', 'Done'], required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  sprintId: { type: Schema.Types.ObjectId, ref: 'Sprint', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

BacklogItemSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
BacklogItemSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  ref: 'Project',
  justOne: true
})
BacklogItemSchema.virtual('sprint', {
  localField: 'sprintId',
  foreignField: '_id',
  ref: 'Sprint',
  justOne: true
})
