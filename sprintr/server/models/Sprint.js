// Darius
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SprintSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, default: Date.now() },
  endDate: { type: Date, default: Date.now() },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
}, { timestamps: true, toJSON: { virtuals: true } }
)
SprintSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
