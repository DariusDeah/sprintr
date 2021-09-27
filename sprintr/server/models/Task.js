import { Schema } from 'mongoose'

export const BacklogItemSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  backlogItemId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
})
