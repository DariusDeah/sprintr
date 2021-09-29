import { Schema } from 'mongoose'

export const TaskSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  backlogItemId: { type: Schema.Types.ObjectId, ref: 'BacklogItems', required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  isComplete: { type: Boolean, default: false }
},
{ timestamps: true, toJSON: { virtuals: true } })

TaskSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
TaskSchema.virtual('backlog', {
  localField: 'backlogItemId',
  foreignField: '_id',
  justOne: true,
  ref: 'BacklogItems'
})
TaskSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
})
