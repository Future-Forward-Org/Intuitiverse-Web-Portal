// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TaskStatus, Role, MagicCode, User, App, Task, UserRole, AppUser, DeviceGrantParams } = initSchema(schema);

export {
  TaskStatus,
  Role,
  MagicCode,
  User,
  App,
  Task,
  UserRole,
  AppUser,
  DeviceGrantParams
};