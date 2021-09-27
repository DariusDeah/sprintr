import { Schema } from 'mongoose'
import { ValueSchema } from './Value'

export const BacklogItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { enums: ['Pending', 'In Progress', 'In Reveiw', 'Done'], required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  sprintId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
})

ValueSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
