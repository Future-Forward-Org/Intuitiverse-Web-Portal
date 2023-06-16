// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TaskBehavior = {
  "OPEN_IN_TAB": "OPEN_IN_TAB",
  "OPEN_IN_PLACE": "OPEN_IN_PLACE",
  "OPEN_IN_IFRAME": "OPEN_IN_IFRAME",
  "OPEN_FORM": "OPEN_FORM"
};

const RoleEnum = {
  "ADMIN": "ADMIN",
  "HOST": "HOST",
  "STUDENT": "STUDENT",
  "ARCTIC_DRY_RUN": "ARCTIC_DRY_RUN",
  "VIRTUADCAST_PILOT_STUDENT": "VIRTUADCAST_PILOT_STUDENT",
  "VIRTUADCAST_PILOT_TRAINER": "VIRTUADCAST_PILOT_TRAINER"
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

const { Session, TaskStatus, Role, MagicCode, User, App, Task, SessionUserAttendees, UserRole, AppRole, AppUser, DeviceGrantParams } = initSchema(schema);

export {
  Session,
  TaskStatus,
  Role,
  MagicCode,
  User,
  App,
  Task,
  SessionUserAttendees,
  UserRole,
  AppRole,
  AppUser,
  TaskBehavior,
  RoleEnum,
  Language,
  DeviceGrantParams
};