import {
  EntryId,
  EntryCategoryId,
  ProjectId,
  UserId,
  VisibleOption,
  TagId
} from 'teambition-types'

export interface EntryData {
  _id: EntryId
  _projectId: ProjectId
  _creatorId: UserId
  _entryCategoryId: EntryCategoryId
  type: number
  content: string
  note: string
  amount: number
  status: string
  involveMembers: UserId[]
  visible: VisibleOption
  tagIds: TagId[]
  created: string
  updated: string
  isArchived: boolean
}
