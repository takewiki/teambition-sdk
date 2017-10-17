import { RDBType, SchemaDef } from 'reactivedb/interface'
import { MemberSchema } from './Member'
import { schemas } from '../SDK'
import {
  TeamId,
  UserId,
  OrganizationId,
  ExecutorOrCreator,
  TeamMemberStatus
} from 'teambition-types'

export interface TeamSchema {
  _creatorId: UserId
  _id: TeamId
  _leaderId: UserId | null
  _organizationId: OrganizationId
  _parentId?: TeamId | null
  created: string
  hasMembers: MemberSchema[]
  leader: ExecutorOrCreator & { status: TeamMemberStatus } | null
  membersCount: number
  name: string
  parent?: TeamSchema | null
  pinyin: string
  pos: number
  projectsCount: number
  py: string
  style: string
  type: 'default' | '' | string
  updated: string
}

const schema: SchemaDef<TeamSchema> = {
  _creatorId: {
    type: RDBType.STRING
  },
  _id: {
    type: RDBType.STRING,
    primaryKey: true
  },
  _leaderId: {
    type: RDBType.STRING
  },
  _organizationId: {
    type: RDBType.STRING
  },
  _parentId: {
    type: RDBType.STRING
  },
  created: {
    type: RDBType.STRING
  },
  hasMembers: {
    type: RDBType.OBJECT
  },
  leader: {
    type: RDBType.OBJECT
  },
  membersCount: {
    type: RDBType.NUMBER
  },
  name: {
    type: RDBType.STRING
  },
  parent: {
    type: RDBType.OBJECT
  },
  pinyin: {
    type: RDBType.STRING
  },
  pos: {
    type: RDBType.NUMBER
  },
  projectsCount: {
    type: RDBType.NUMBER
  },
  py: {
    type: RDBType.STRING
  },
  style: {
    type: RDBType.STRING
  },
  type: {
    type: RDBType.STRING
  },
  updated: {
    type: RDBType.STRING
  }
}

schemas.push({ name: 'Team', schema })
