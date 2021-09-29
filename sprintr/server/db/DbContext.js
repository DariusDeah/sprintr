import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { NoteSchema } from '../models/Note'
import { ProjectSchema } from '../models/Project'
import { SprintSchema } from '../models/Sprint'
import { TaskSchema } from '../models/Task'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Projects = mongoose.model('Project', ProjectSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  BacklogItems = mongoose.model('BacklogItems', TaskSchema)
  Tasks = mongoose.model('Task', TaskSchema)
  Sprints = mongoose.model('Sprint', SprintSchema)

  Notes = mongoose.model('Note', NoteSchema)
}

export const dbContext = new DbContext()
