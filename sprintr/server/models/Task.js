import { Schema } from 'mongoose'

export const TaskSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  // backlogItemId: { type: Schema.Types.ObjectId, ref: 'BacklogItems', required: true },
  // projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true }
})

TaskSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
