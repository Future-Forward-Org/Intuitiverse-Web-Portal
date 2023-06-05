// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RoleEmun = {
  "ADMIN": "ADMIN",
  "HOST": "HOST"
};

const Langauge = {
  "CHINESE": "CHINESE",
  "DANISH": "DANISH",
  "DUTCH": "DUTCH",
  "ENGLISH": "ENGLISH",
  "FINNISH": "FINNISH",
  "FRENCH": "FRENCH",
  "GERMAN": "GERMAN",
  "ITALIAN": "ITALIAN",
  "JAPANESE": "JAPANESE",
  "NORWEGIAN": "NORWEGIAN",
  "PORTUGUESE": "PORTUGUESE",
  "SPANISH": "SPANISH",
  "SWEDISH": "SWEDISH"
};

const { Session, TaskStatus, Role, MagicCode, User, App, Task, SessionUser, UserRole, AppUser, DeviceGrantParams } = initSchema(schema);

export {
  Session,
  TaskStatus,
  Role,
  MagicCode,
  User,
  App,
  Task,
  SessionUser,
  UserRole,
  AppUser,
  RoleEmun,
  Langauge,
  DeviceGrantParams
};