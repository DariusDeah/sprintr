// Darius
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const NoteSchema = new Schema({
  body: { type: String, required: true },
  taskId: { type: Schema.Types.ObjectId },
  projectId: { type: Schema.Types.ObjectId, ref: 'Projects' },
  creatorId: { types: Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } }
)
