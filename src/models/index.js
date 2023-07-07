// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TaskBehavior = {
  "OPEN_IN_TAB": "OPEN_IN_TAB",
  "OPEN_IN_PLACE": "OPEN_IN_PLACE",
  "OPEN_IN_IFRAME": "OPEN_IN_IFRAME",
  "OPEN_FORM": "OPEN_FORM"
};

const TaskStatusEnum = {
  "ENABLED": "ENABLED",
  "DISABLED": "DISABLED",
  "IN_REVIEW": "IN_REVIEW"
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
  "BRAZILIAN_PORTUGUESE": "BRAZILIAN_PORTUGUESE",
  "SWEDISH": "SWEDISH",
  "ITALIAN": "ITALIAN"
};

const { Role, SessionUserAttendee, Session, TaskStatus, MagicCode, User, App, Task, UserRole, AppRole, AppUser, DeviceGrantParams } = initSchema(schema);

export {
  Role,
  SessionUserAttendee,
  Session,
  TaskStatus,
  MagicCode,
  User,
  App,
  Task,
  UserRole,
  AppRole,
  AppUser,
  TaskBehavior,
  TaskStatusEnum,
  Language,
  DeviceGrantParams
};