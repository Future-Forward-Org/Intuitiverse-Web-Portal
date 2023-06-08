// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TaskBehavior = {
  "OPENINTAB": "OPENINTAB",
  "OPENINPLACE": "OPENINPLACE",
  "OPENINIFRAME": "OPENINIFRAME",
  "OPENFORM": "OPENFORM"
};

const RoleEnum = {
  "ADMIN": "ADMIN",
  "HOST": "HOST",
  "STUDENT": "STUDENT",
  "ARCTICDRYRUN": "ARCTICDRYRUN",
  "VIRTUADCASTPILOTSTUDENT": "VIRTUADCASTPILOTSTUDENT",
  "VIRTUADCASTPILOTTRAINER": "VIRTUADCASTPILOTTRAINER"
};

const Language = {
  "CHINESE": "CHINESE",
  "DANISH": "DANISH",
  "DUTCH": "DUTCH",
  "ENGLISH": "ENGLISH",
  "FINNISH": "FINNISH",
  "FRENCH": "FRENCH",
  "GERMAN": "GERMAN",
  "SPANISH": "SPANISH",
  "JAPANESE": "JAPANESE",
  "NORWEGIAN": "NORWEGIAN",
  "PORTUGUESE": "PORTUGUESE",
  "BRAZILIANPORTUGUESE": "BRAZILIANPORTUGUESE",
  "SWEDISH": "SWEDISH",
  "ITALIAN": "ITALIAN"
};

const { Session, TaskStatus, Role, MagicCode, User, App, Task, UserRole, AppRole, AppUser, DeviceGrantParams } = initSchema(schema);

export {
  Session,
  TaskStatus,
  Role,
  MagicCode,
  User,
  App,
  Task,
  UserRole,
  AppRole,
  AppUser,
  TaskBehavior,
  RoleEnum,
  Language,
  DeviceGrantParams
};