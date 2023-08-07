/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoleInput = {
  id?: string | null,
  name: string,
  roleLevel: number,
  _version?: number | null,
  taskPossibleRolesId?: string | null,
};

export type ModelRoleConditionInput = {
  name?: ModelStringInput | null,
  roleLevel?: ModelIntInput | null,
  and?: Array< ModelRoleConditionInput | null > | null,
  or?: Array< ModelRoleConditionInput | null > | null,
  not?: ModelRoleConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  taskPossibleRolesId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Role = {
  __typename: "Role",
  id: string,
  name: string,
  roleLevel: number,
  users?: ModelUserRoleConnection | null,
  apps?: ModelAppRoleConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  taskPossibleRolesId?: string | null,
};

export type ModelUserRoleConnection = {
  __typename: "ModelUserRoleConnection",
  items:  Array<UserRole | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserRole = {
  __typename: "UserRole",
  id: string,
  roleId: string,
  userId: string,
  role: Role,
  user: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  userName?: string | null,
  apps?: ModelAppUserConnection | null,
  roles?: ModelUserRoleConnection | null,
  sessions?: ModelSessionUserAttendeeConnection | null,
  firstName?: string | null,
  lastName?: string | null,
  profileImageURL?: string | null,
  avatarUrl?: string | null,
  email: string,
  cognitoId: string,
  avatarKey?: string | null,
  language: Language,
  avatarUploaded?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelAppUserConnection = {
  __typename: "ModelAppUserConnection",
  items:  Array<AppUser | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type AppUser = {
  __typename: "AppUser",
  id: string,
  userId: string,
  appId: string,
  user: User,
  app: App,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type App = {
  __typename: "App",
  id: string,
  name: string,
  users?: ModelAppUserConnection | null,
  tasks?: ModelTaskConnection | null,
  magicCode?: MagicCode | null,
  description?: string | null,
  buttonName?: string | null,
  roles?: ModelAppRoleConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  appMagicCodeId?: string | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  type?: string | null,
  name: string,
  buttonName?: string | null,
  possibleRoles?: ModelRoleConnection | null,
  url?: string | null,
  order?: number | null,
  taskBehavior: TaskBehavior,
  appendUserID?: boolean | null,
  appendTaskID?: boolean | null,
  appID: string,
  taskStatuses?: ModelTaskStatusConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelRoleConnection = {
  __typename: "ModelRoleConnection",
  items:  Array<Role | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum TaskBehavior {
  OPEN_IN_TAB = "OPEN_IN_TAB",
  OPEN_IN_PLACE = "OPEN_IN_PLACE",
  OPEN_IN_IFRAME = "OPEN_IN_IFRAME",
  OPEN_FORM = "OPEN_FORM",
}


export type ModelTaskStatusConnection = {
  __typename: "ModelTaskStatusConnection",
  items:  Array<TaskStatus | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TaskStatus = {
  __typename: "TaskStatus",
  id: string,
  user?: User | null,
  progress?: string | null,
  taskID: string,
  status?: TaskStatusEnum | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  taskStatusUserId?: string | null,
};

export enum TaskStatusEnum {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED",
  IN_REVIEW = "IN_REVIEW",
}


export type MagicCode = {
  __typename: "MagicCode",
  id: string,
  parameters?: DeviceGrantParams | null,
  titleText: string,
  descriptionText?: string | null,
  apiAlias: string,
  apiResource: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type DeviceGrantParams = {
  __typename: "DeviceGrantParams",
  expirationSeconds?: number | null,
};

export type ModelAppRoleConnection = {
  __typename: "ModelAppRoleConnection",
  items:  Array<AppRole | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type AppRole = {
  __typename: "AppRole",
  id: string,
  roleId: string,
  appId: string,
  role: Role,
  app: App,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSessionUserAttendeeConnection = {
  __typename: "ModelSessionUserAttendeeConnection",
  items:  Array<SessionUserAttendee | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SessionUserAttendee = {
  __typename: "SessionUserAttendee",
  id: string,
  sessionId: string,
  userId: string,
  session: Session,
  user: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Session = {
  __typename: "Session",
  id: string,
  name: string,
  description?: string | null,
  startDateTime: string,
  endDateTime: string,
  sessionCode: string,
  host?: User | null,
  attendees?: ModelSessionUserAttendeeConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  sessionHostId?: string | null,
};

export enum Language {
  CHINESE = "CHINESE",
  DANISH = "DANISH",
  DUTCH = "DUTCH",
  ENGLISH = "ENGLISH",
  FINNISH = "FINNISH",
  FRENCH = "FRENCH",
  GERMAN = "GERMAN",
  SPANISH = "SPANISH",
  JAPANESE = "JAPANESE",
  NORWEGIAN = "NORWEGIAN",
  PORTUGUESE = "PORTUGUESE",
  BRAZILIAN_PORTUGUESE = "BRAZILIAN_PORTUGUESE",
  SWEDISH = "SWEDISH",
  ITALIAN = "ITALIAN",
}


export type UpdateRoleInput = {
  id: string,
  name?: string | null,
  roleLevel?: number | null,
  _version?: number | null,
  taskPossibleRolesId?: string | null,
};

export type DeleteRoleInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionUserAttendeeInput = {
  id?: string | null,
  sessionId: string,
  userId: string,
  _version?: number | null,
};

export type ModelSessionUserAttendeeConditionInput = {
  sessionId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelSessionUserAttendeeConditionInput | null > | null,
  or?: Array< ModelSessionUserAttendeeConditionInput | null > | null,
  not?: ModelSessionUserAttendeeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateSessionUserAttendeeInput = {
  id: string,
  sessionId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteSessionUserAttendeeInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  startDateTime: string,
  endDateTime: string,
  sessionCode: string,
  _version?: number | null,
  sessionHostId?: string | null,
};

export type ModelSessionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  sessionCode?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  sessionHostId?: ModelIDInput | null,
};

export type UpdateSessionInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  startDateTime?: string | null,
  endDateTime?: string | null,
  sessionCode?: string | null,
  _version?: number | null,
  sessionHostId?: string | null,
};

export type DeleteSessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateTaskStatusInput = {
  id?: string | null,
  progress?: string | null,
  taskID: string,
  status?: TaskStatusEnum | null,
  _version?: number | null,
  taskStatusUserId?: string | null,
};

export type ModelTaskStatusConditionInput = {
  progress?: ModelStringInput | null,
  taskID?: ModelIDInput | null,
  status?: ModelTaskStatusEnumInput | null,
  and?: Array< ModelTaskStatusConditionInput | null > | null,
  or?: Array< ModelTaskStatusConditionInput | null > | null,
  not?: ModelTaskStatusConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  taskStatusUserId?: ModelIDInput | null,
};

export type ModelTaskStatusEnumInput = {
  eq?: TaskStatusEnum | null,
  ne?: TaskStatusEnum | null,
};

export type UpdateTaskStatusInput = {
  id: string,
  progress?: string | null,
  taskID?: string | null,
  status?: TaskStatusEnum | null,
  _version?: number | null,
  taskStatusUserId?: string | null,
};

export type DeleteTaskStatusInput = {
  id: string,
  _version?: number | null,
};

export type CreateMagicCodeInput = {
  id?: string | null,
  parameters?: DeviceGrantParamsInput | null,
  titleText: string,
  descriptionText?: string | null,
  apiAlias: string,
  apiResource: string,
  _version?: number | null,
};

export type DeviceGrantParamsInput = {
  expirationSeconds?: number | null,
};

export type ModelMagicCodeConditionInput = {
  titleText?: ModelStringInput | null,
  descriptionText?: ModelStringInput | null,
  apiAlias?: ModelStringInput | null,
  apiResource?: ModelStringInput | null,
  and?: Array< ModelMagicCodeConditionInput | null > | null,
  or?: Array< ModelMagicCodeConditionInput | null > | null,
  not?: ModelMagicCodeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateMagicCodeInput = {
  id: string,
  parameters?: DeviceGrantParamsInput | null,
  titleText?: string | null,
  descriptionText?: string | null,
  apiAlias?: string | null,
  apiResource?: string | null,
  _version?: number | null,
};

export type DeleteMagicCodeInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  userName?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  profileImageURL?: string | null,
  avatarUrl?: string | null,
  email: string,
  cognitoId: string,
  avatarKey?: string | null,
  language: Language,
  avatarUploaded?: boolean | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  userName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profileImageURL?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cognitoId?: ModelIDInput | null,
  avatarKey?: ModelStringInput | null,
  language?: ModelLanguageInput | null,
  avatarUploaded?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelLanguageInput = {
  eq?: Language | null,
  ne?: Language | null,
};

export type UpdateUserInput = {
  id: string,
  userName?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  profileImageURL?: string | null,
  avatarUrl?: string | null,
  email?: string | null,
  cognitoId?: string | null,
  avatarKey?: string | null,
  language?: Language | null,
  avatarUploaded?: boolean | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  buttonName?: string | null,
  _version?: number | null,
  appMagicCodeId?: string | null,
};

export type ModelAppConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  buttonName?: ModelStringInput | null,
  and?: Array< ModelAppConditionInput | null > | null,
  or?: Array< ModelAppConditionInput | null > | null,
  not?: ModelAppConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  appMagicCodeId?: ModelIDInput | null,
};

export type UpdateAppInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  buttonName?: string | null,
  _version?: number | null,
  appMagicCodeId?: string | null,
};

export type DeleteAppInput = {
  id: string,
  _version?: number | null,
};

export type CreateTaskInput = {
  id?: string | null,
  type?: string | null,
  name: string,
  buttonName?: string | null,
  url?: string | null,
  order?: number | null,
  taskBehavior: TaskBehavior,
  appendUserID?: boolean | null,
  appendTaskID?: boolean | null,
  appID: string,
  _version?: number | null,
};

export type ModelTaskConditionInput = {
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  buttonName?: ModelStringInput | null,
  url?: ModelStringInput | null,
  order?: ModelIntInput | null,
  taskBehavior?: ModelTaskBehaviorInput | null,
  appendUserID?: ModelBooleanInput | null,
  appendTaskID?: ModelBooleanInput | null,
  appID?: ModelIDInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTaskBehaviorInput = {
  eq?: TaskBehavior | null,
  ne?: TaskBehavior | null,
};

export type UpdateTaskInput = {
  id: string,
  type?: string | null,
  name?: string | null,
  buttonName?: string | null,
  url?: string | null,
  order?: number | null,
  taskBehavior?: TaskBehavior | null,
  appendUserID?: boolean | null,
  appendTaskID?: boolean | null,
  appID?: string | null,
  _version?: number | null,
};

export type DeleteTaskInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserRoleInput = {
  id?: string | null,
  roleId: string,
  userId: string,
  _version?: number | null,
};

export type ModelUserRoleConditionInput = {
  roleId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserRoleConditionInput | null > | null,
  or?: Array< ModelUserRoleConditionInput | null > | null,
  not?: ModelUserRoleConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUserRoleInput = {
  id: string,
  roleId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteUserRoleInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppRoleInput = {
  id?: string | null,
  roleId: string,
  appId: string,
  _version?: number | null,
};

export type ModelAppRoleConditionInput = {
  roleId?: ModelIDInput | null,
  appId?: ModelIDInput | null,
  and?: Array< ModelAppRoleConditionInput | null > | null,
  or?: Array< ModelAppRoleConditionInput | null > | null,
  not?: ModelAppRoleConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateAppRoleInput = {
  id: string,
  roleId?: string | null,
  appId?: string | null,
  _version?: number | null,
};

export type DeleteAppRoleInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppUserInput = {
  id?: string | null,
  userId: string,
  appId: string,
  _version?: number | null,
};

export type ModelAppUserConditionInput = {
  userId?: ModelIDInput | null,
  appId?: ModelIDInput | null,
  and?: Array< ModelAppUserConditionInput | null > | null,
  or?: Array< ModelAppUserConditionInput | null > | null,
  not?: ModelAppUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateAppUserInput = {
  id: string,
  userId?: string | null,
  appId?: string | null,
  _version?: number | null,
};

export type DeleteAppUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelRoleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  roleLevel?: ModelIntInput | null,
  and?: Array< ModelRoleFilterInput | null > | null,
  or?: Array< ModelRoleFilterInput | null > | null,
  not?: ModelRoleFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  taskPossibleRolesId?: ModelIDInput | null,
};

export type ModelSessionUserAttendeeFilterInput = {
  id?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelSessionUserAttendeeFilterInput | null > | null,
  or?: Array< ModelSessionUserAttendeeFilterInput | null > | null,
  not?: ModelSessionUserAttendeeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  sessionCode?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  sessionHostId?: ModelIDInput | null,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTaskStatusFilterInput = {
  id?: ModelIDInput | null,
  progress?: ModelStringInput | null,
  taskID?: ModelIDInput | null,
  status?: ModelTaskStatusEnumInput | null,
  and?: Array< ModelTaskStatusFilterInput | null > | null,
  or?: Array< ModelTaskStatusFilterInput | null > | null,
  not?: ModelTaskStatusFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  taskStatusUserId?: ModelIDInput | null,
};

export type ModelMagicCodeFilterInput = {
  id?: ModelIDInput | null,
  titleText?: ModelStringInput | null,
  descriptionText?: ModelStringInput | null,
  apiAlias?: ModelStringInput | null,
  apiResource?: ModelStringInput | null,
  and?: Array< ModelMagicCodeFilterInput | null > | null,
  or?: Array< ModelMagicCodeFilterInput | null > | null,
  not?: ModelMagicCodeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMagicCodeConnection = {
  __typename: "ModelMagicCodeConnection",
  items:  Array<MagicCode | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profileImageURL?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cognitoId?: ModelIDInput | null,
  avatarKey?: ModelStringInput | null,
  language?: ModelLanguageInput | null,
  avatarUploaded?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAppFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  buttonName?: ModelStringInput | null,
  and?: Array< ModelAppFilterInput | null > | null,
  or?: Array< ModelAppFilterInput | null > | null,
  not?: ModelAppFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  appMagicCodeId?: ModelIDInput | null,
};

export type ModelAppConnection = {
  __typename: "ModelAppConnection",
  items:  Array<App | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  buttonName?: ModelStringInput | null,
  url?: ModelStringInput | null,
  order?: ModelIntInput | null,
  taskBehavior?: ModelTaskBehaviorInput | null,
  appendUserID?: ModelBooleanInput | null,
  appendTaskID?: ModelBooleanInput | null,
  appID?: ModelIDInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserRoleFilterInput = {
  id?: ModelIDInput | null,
  roleId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserRoleFilterInput | null > | null,
  or?: Array< ModelUserRoleFilterInput | null > | null,
  not?: ModelUserRoleFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAppRoleFilterInput = {
  id?: ModelIDInput | null,
  roleId?: ModelIDInput | null,
  appId?: ModelIDInput | null,
  and?: Array< ModelAppRoleFilterInput | null > | null,
  or?: Array< ModelAppRoleFilterInput | null > | null,
  not?: ModelAppRoleFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAppUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  appId?: ModelIDInput | null,
  and?: Array< ModelAppUserFilterInput | null > | null,
  or?: Array< ModelAppUserFilterInput | null > | null,
  not?: ModelAppUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  roleLevel?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionRoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoleFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSessionUserAttendeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sessionId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSessionUserAttendeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionUserAttendeeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  startDateTime?: ModelSubscriptionStringInput | null,
  endDateTime?: ModelSubscriptionStringInput | null,
  sessionCode?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTaskStatusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  progress?: ModelSubscriptionStringInput | null,
  taskID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaskStatusFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskStatusFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMagicCodeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  titleText?: ModelSubscriptionStringInput | null,
  descriptionText?: ModelSubscriptionStringInput | null,
  apiAlias?: ModelSubscriptionStringInput | null,
  apiResource?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMagicCodeFilterInput | null > | null,
  or?: Array< ModelSubscriptionMagicCodeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userName?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  profileImageURL?: ModelSubscriptionStringInput | null,
  avatarUrl?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  cognitoId?: ModelSubscriptionIDInput | null,
  avatarKey?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  avatarUploaded?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAppFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  buttonName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAppFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  buttonName?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionIntInput | null,
  taskBehavior?: ModelSubscriptionStringInput | null,
  appendUserID?: ModelSubscriptionBooleanInput | null,
  appendTaskID?: ModelSubscriptionBooleanInput | null,
  appID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roleId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserRoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserRoleFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAppRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roleId?: ModelSubscriptionIDInput | null,
  appId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppRoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppRoleFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAppUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  appId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateRoleMutationVariables = {
  input: CreateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type CreateRoleMutation = {
  createRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    roleLevel: number,
    users?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    apps?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskPossibleRolesId?: string | null,
  } | null,
};

export type UpdateRoleMutationVariables = {
  input: UpdateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type UpdateRoleMutation = {
  updateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    roleLevel: number,
    users?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    apps?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskPossibleRolesId?: string | null,
  } | null,
};

export type DeleteRoleMutationVariables = {
  input: DeleteRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type DeleteRoleMutation = {
  deleteRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    roleLevel: number,
    users?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    apps?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskPossibleRolesId?: string | null,
  } | null,
};

export type CreateSessionUserAttendeeMutationVariables = {
  input: CreateSessionUserAttendeeInput,
  condition?: ModelSessionUserAttendeeConditionInput | null,
};

export type CreateSessionUserAttendeeMutation = {
  createSessionUserAttendee?:  {
    __typename: "SessionUserAttendee",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSessionUserAttendeeMutationVariables = {
  input: UpdateSessionUserAttendeeInput,
  condition?: ModelSessionUserAttendeeConditionInput | null,
};

export type UpdateSessionUserAttendeeMutation = {
  updateSessionUserAttendee?:  {
    __typename: "SessionUserAttendee",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSessionUserAttendeeMutationVariables = {
  input: DeleteSessionUserAttendeeInput,
  condition?: ModelSessionUserAttendeeConditionInput | null,
};

export type DeleteSessionUserAttendeeMutation = {
  deleteSessionUserAttendee?:  {
    __typename: "SessionUserAttendee",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    description?: string | null,
    startDateTime: string,
    endDateTime: string,
    sessionCode: string,
    host?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attendees?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionHostId?: string | null,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    description?: string | null,
    startDateTime: string,
    endDateTime: string,
    sessionCode: string,
    host?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attendees?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionHostId?: string | null,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    description?: string | null,
    startDateTime: string,
    endDateTime: string,
    sessionCode: string,
    host?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attendees?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionHostId?: string | null,
  } | null,
};

export type CreateTaskStatusMutationVariables = {
  input: CreateTaskStatusInput,
  condition?: ModelTaskStatusConditionInput | null,
};

export type CreateTaskStatusMutation = {
  createTaskStatus?:  {
    __typename: "TaskStatus",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    progress?: string | null,
    taskID: string,
    status?: TaskStatusEnum | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskStatusUserId?: string | null,
  } | null,
};

export type UpdateTaskStatusMutationVariables = {
  input: UpdateTaskStatusInput,
  condition?: ModelTaskStatusConditionInput | null,
};

export type UpdateTaskStatusMutation = {
  updateTaskStatus?:  {
    __typename: "TaskStatus",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    progress?: string | null,
    taskID: string,
    status?: TaskStatusEnum | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskStatusUserId?: string | null,
  } | null,
};

export type DeleteTaskStatusMutationVariables = {
  input: DeleteTaskStatusInput,
  condition?: ModelTaskStatusConditionInput | null,
};

export type DeleteTaskStatusMutation = {
  deleteTaskStatus?:  {
    __typename: "TaskStatus",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    progress?: string | null,
    taskID: string,
    status?: TaskStatusEnum | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskStatusUserId?: string | null,
  } | null,
};

export type CreateMagicCodeMutationVariables = {
  input: CreateMagicCodeInput,
  condition?: ModelMagicCodeConditionInput | null,
};

export type CreateMagicCodeMutation = {
  createMagicCode?:  {
    __typename: "MagicCode",
    id: string,
    parameters?:  {
      __typename: "DeviceGrantParams",
      expirationSeconds?: number | null,
    } | null,
    titleText: string,
    descriptionText?: string | null,
    apiAlias: string,
    apiResource: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMagicCodeMutationVariables = {
  input: UpdateMagicCodeInput,
  condition?: ModelMagicCodeConditionInput | null,
};

export type UpdateMagicCodeMutation = {
  updateMagicCode?:  {
    __typename: "MagicCode",
    id: string,
    parameters?:  {
      __typename: "DeviceGrantParams",
      expirationSeconds?: number | null,
    } | null,
    titleText: string,
    descriptionText?: string | null,
    apiAlias: string,
    apiResource: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMagicCodeMutationVariables = {
  input: DeleteMagicCodeInput,
  condition?: ModelMagicCodeConditionInput | null,
};

export type DeleteMagicCodeMutation = {
  deleteMagicCode?:  {
    __typename: "MagicCode",
    id: string,
    parameters?:  {
      __typename: "DeviceGrantParams",
      expirationSeconds?: number | null,
    } | null,
    titleText: string,
    descriptionText?: string | null,
    apiAlias: string,
    apiResource: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    apps?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roles?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    profileImageURL?: string | null,
    avatarUrl?: string | null,
    email: string,
    cognitoId: string,
    avatarKey?: string | null,
    language: Language,
    avatarUploaded?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    apps?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roles?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    profileImageURL?: string | null,
    avatarUrl?: string | null,
    email: string,
    cognitoId: string,
    avatarKey?: string | null,
    language: Language,
    avatarUploaded?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    apps?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roles?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    profileImageURL?: string | null,
    avatarUrl?: string | null,
    email: string,
    cognitoId: string,
    avatarKey?: string | null,
    language: Language,
    avatarUploaded?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAppMutationVariables = {
  input: CreateAppInput,
  condition?: ModelAppConditionInput | null,
};

export type CreateAppMutation = {
  createApp?:  {
    __typename: "App",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    magicCode?:  {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description?: string | null,
    buttonName?: string | null,
    roles?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appMagicCodeId?: string | null,
  } | null,
};

export type UpdateAppMutationVariables = {
  input: UpdateAppInput,
  condition?: ModelAppConditionInput | null,
};

export type UpdateAppMutation = {
  updateApp?:  {
    __typename: "App",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    magicCode?:  {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description?: string | null,
    buttonName?: string | null,
    roles?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appMagicCodeId?: string | null,
  } | null,
};

export type DeleteAppMutationVariables = {
  input: DeleteAppInput,
  condition?: ModelAppConditionInput | null,
};

export type DeleteAppMutation = {
  deleteApp?:  {
    __typename: "App",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    magicCode?:  {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description?: string | null,
    buttonName?: string | null,
    roles?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appMagicCodeId?: string | null,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    type?: string | null,
    name: string,
    buttonName?: string | null,
    possibleRoles?:  {
      __typename: "ModelRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    order?: number | null,
    taskBehavior: TaskBehavior,
    appendUserID?: boolean | null,
    appendTaskID?: boolean | null,
    appID: string,
    taskStatuses?:  {
      __typename: "ModelTaskStatusConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    type?: string | null,
    name: string,
    buttonName?: string | null,
    possibleRoles?:  {
      __typename: "ModelRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    order?: number | null,
    taskBehavior: TaskBehavior,
    appendUserID?: boolean | null,
    appendTaskID?: boolean | null,
    appID: string,
    taskStatuses?:  {
      __typename: "ModelTaskStatusConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    type?: string | null,
    name: string,
    buttonName?: string | null,
    possibleRoles?:  {
      __typename: "ModelRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    order?: number | null,
    taskBehavior: TaskBehavior,
    appendUserID?: boolean | null,
    appendTaskID?: boolean | null,
    appID: string,
    taskStatuses?:  {
      __typename: "ModelTaskStatusConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserRoleMutationVariables = {
  input: CreateUserRoleInput,
  condition?: ModelUserRoleConditionInput | null,
};

export type CreateUserRoleMutation = {
  createUserRole?:  {
    __typename: "UserRole",
    id: string,
    roleId: string,
    userId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserRoleMutationVariables = {
  input: UpdateUserRoleInput,
  condition?: ModelUserRoleConditionInput | null,
};

export type UpdateUserRoleMutation = {
  updateUserRole?:  {
    __typename: "UserRole",
    id: string,
    roleId: string,
    userId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserRoleMutationVariables = {
  input: DeleteUserRoleInput,
  condition?: ModelUserRoleConditionInput | null,
};

export type DeleteUserRoleMutation = {
  deleteUserRole?:  {
    __typename: "UserRole",
    id: string,
    roleId: string,
    userId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAppRoleMutationVariables = {
  input: CreateAppRoleInput,
  condition?: ModelAppRoleConditionInput | null,
};

export type CreateAppRoleMutation = {
  createAppRole?:  {
    __typename: "AppRole",
    id: string,
    roleId: string,
    appId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAppRoleMutationVariables = {
  input: UpdateAppRoleInput,
  condition?: ModelAppRoleConditionInput | null,
};

export type UpdateAppRoleMutation = {
  updateAppRole?:  {
    __typename: "AppRole",
    id: string,
    roleId: string,
    appId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAppRoleMutationVariables = {
  input: DeleteAppRoleInput,
  condition?: ModelAppRoleConditionInput | null,
};

export type DeleteAppRoleMutation = {
  deleteAppRole?:  {
    __typename: "AppRole",
    id: string,
    roleId: string,
    appId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAppUserMutationVariables = {
  input: CreateAppUserInput,
  condition?: ModelAppUserConditionInput | null,
};

export type CreateAppUserMutation = {
  createAppUser?:  {
    __typename: "AppUser",
    id: string,
    userId: string,
    appId: string,
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAppUserMutationVariables = {
  input: UpdateAppUserInput,
  condition?: ModelAppUserConditionInput | null,
};

export type UpdateAppUserMutation = {
  updateAppUser?:  {
    __typename: "AppUser",
    id: string,
    userId: string,
    appId: string,
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAppUserMutationVariables = {
  input: DeleteAppUserInput,
  condition?: ModelAppUserConditionInput | null,
};

export type DeleteAppUserMutation = {
  deleteAppUser?:  {
    __typename: "AppUser",
    id: string,
    userId: string,
    appId: string,
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetRoleQueryVariables = {
  id: string,
};

export type GetRoleQuery = {
  getRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    roleLevel: number,
    users?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    apps?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskPossibleRolesId?: string | null,
  } | null,
};

export type ListRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRolesQuery = {
  listRoles?:  {
    __typename: "ModelRoleConnection",
    items:  Array< {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRolesQuery = {
  syncRoles?:  {
    __typename: "ModelRoleConnection",
    items:  Array< {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSessionUserAttendeeQueryVariables = {
  id: string,
};

export type GetSessionUserAttendeeQuery = {
  getSessionUserAttendee?:  {
    __typename: "SessionUserAttendee",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSessionUserAttendeesQueryVariables = {
  filter?: ModelSessionUserAttendeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionUserAttendeesQuery = {
  listSessionUserAttendees?:  {
    __typename: "ModelSessionUserAttendeeConnection",
    items:  Array< {
      __typename: "SessionUserAttendee",
      id: string,
      sessionId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSessionUserAttendeesQueryVariables = {
  filter?: ModelSessionUserAttendeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionUserAttendeesQuery = {
  syncSessionUserAttendees?:  {
    __typename: "ModelSessionUserAttendeeConnection",
    items:  Array< {
      __typename: "SessionUserAttendee",
      id: string,
      sessionId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SessionUserAttendeesBySessionIdQueryVariables = {
  sessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionUserAttendeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionUserAttendeesBySessionIdQuery = {
  sessionUserAttendeesBySessionId?:  {
    __typename: "ModelSessionUserAttendeeConnection",
    items:  Array< {
      __typename: "SessionUserAttendee",
      id: string,
      sessionId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SessionUserAttendeesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionUserAttendeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionUserAttendeesByUserIdQuery = {
  sessionUserAttendeesByUserId?:  {
    __typename: "ModelSessionUserAttendeeConnection",
    items:  Array< {
      __typename: "SessionUserAttendee",
      id: string,
      sessionId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    description?: string | null,
    startDateTime: string,
    endDateTime: string,
    sessionCode: string,
    host?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attendees?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionHostId?: string | null,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionsQuery = {
  syncSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTaskStatusQueryVariables = {
  id: string,
};

export type GetTaskStatusQuery = {
  getTaskStatus?:  {
    __typename: "TaskStatus",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    progress?: string | null,
    taskID: string,
    status?: TaskStatusEnum | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskStatusUserId?: string | null,
  } | null,
};

export type ListTaskStatusesQueryVariables = {
  filter?: ModelTaskStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaskStatusesQuery = {
  listTaskStatuses?:  {
    __typename: "ModelTaskStatusConnection",
    items:  Array< {
      __typename: "TaskStatus",
      id: string,
      progress?: string | null,
      taskID: string,
      status?: TaskStatusEnum | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskStatusUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTaskStatusesQueryVariables = {
  filter?: ModelTaskStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTaskStatusesQuery = {
  syncTaskStatuses?:  {
    __typename: "ModelTaskStatusConnection",
    items:  Array< {
      __typename: "TaskStatus",
      id: string,
      progress?: string | null,
      taskID: string,
      status?: TaskStatusEnum | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskStatusUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TaskStatusesByTaskIDQueryVariables = {
  taskID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTaskStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TaskStatusesByTaskIDQuery = {
  taskStatusesByTaskID?:  {
    __typename: "ModelTaskStatusConnection",
    items:  Array< {
      __typename: "TaskStatus",
      id: string,
      progress?: string | null,
      taskID: string,
      status?: TaskStatusEnum | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskStatusUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMagicCodeQueryVariables = {
  id: string,
};

export type GetMagicCodeQuery = {
  getMagicCode?:  {
    __typename: "MagicCode",
    id: string,
    parameters?:  {
      __typename: "DeviceGrantParams",
      expirationSeconds?: number | null,
    } | null,
    titleText: string,
    descriptionText?: string | null,
    apiAlias: string,
    apiResource: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMagicCodesQueryVariables = {
  filter?: ModelMagicCodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMagicCodesQuery = {
  listMagicCodes?:  {
    __typename: "ModelMagicCodeConnection",
    items:  Array< {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMagicCodesQueryVariables = {
  filter?: ModelMagicCodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMagicCodesQuery = {
  syncMagicCodes?:  {
    __typename: "ModelMagicCodeConnection",
    items:  Array< {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    apps?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roles?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    profileImageURL?: string | null,
    avatarUrl?: string | null,
    email: string,
    cognitoId: string,
    avatarKey?: string | null,
    language: Language,
    avatarUploaded?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UsersByCognitoIdQueryVariables = {
  cognitoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByCognitoIdQuery = {
  usersByCognitoId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAppQueryVariables = {
  id: string,
};

export type GetAppQuery = {
  getApp?:  {
    __typename: "App",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    magicCode?:  {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description?: string | null,
    buttonName?: string | null,
    roles?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appMagicCodeId?: string | null,
  } | null,
};

export type ListAppsQueryVariables = {
  filter?: ModelAppFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppsQuery = {
  listApps?:  {
    __typename: "ModelAppConnection",
    items:  Array< {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppsQueryVariables = {
  filter?: ModelAppFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppsQuery = {
  syncApps?:  {
    __typename: "ModelAppConnection",
    items:  Array< {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    type?: string | null,
    name: string,
    buttonName?: string | null,
    possibleRoles?:  {
      __typename: "ModelRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    order?: number | null,
    taskBehavior: TaskBehavior,
    appendUserID?: boolean | null,
    appendTaskID?: boolean | null,
    appID: string,
    taskStatuses?:  {
      __typename: "ModelTaskStatusConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      type?: string | null,
      name: string,
      buttonName?: string | null,
      url?: string | null,
      order?: number | null,
      taskBehavior: TaskBehavior,
      appendUserID?: boolean | null,
      appendTaskID?: boolean | null,
      appID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTasksQuery = {
  syncTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      type?: string | null,
      name: string,
      buttonName?: string | null,
      url?: string | null,
      order?: number | null,
      taskBehavior: TaskBehavior,
      appendUserID?: boolean | null,
      appendTaskID?: boolean | null,
      appID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TasksByAppIDQueryVariables = {
  appID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TasksByAppIDQuery = {
  tasksByAppID?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      type?: string | null,
      name: string,
      buttonName?: string | null,
      url?: string | null,
      order?: number | null,
      taskBehavior: TaskBehavior,
      appendUserID?: boolean | null,
      appendTaskID?: boolean | null,
      appID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserRoleQueryVariables = {
  id: string,
};

export type GetUserRoleQuery = {
  getUserRole?:  {
    __typename: "UserRole",
    id: string,
    roleId: string,
    userId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserRolesQueryVariables = {
  filter?: ModelUserRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserRolesQuery = {
  listUserRoles?:  {
    __typename: "ModelUserRoleConnection",
    items:  Array< {
      __typename: "UserRole",
      id: string,
      roleId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserRolesQueryVariables = {
  filter?: ModelUserRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserRolesQuery = {
  syncUserRoles?:  {
    __typename: "ModelUserRoleConnection",
    items:  Array< {
      __typename: "UserRole",
      id: string,
      roleId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserRolesByRoleIdQueryVariables = {
  roleId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserRolesByRoleIdQuery = {
  userRolesByRoleId?:  {
    __typename: "ModelUserRoleConnection",
    items:  Array< {
      __typename: "UserRole",
      id: string,
      roleId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserRolesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserRolesByUserIdQuery = {
  userRolesByUserId?:  {
    __typename: "ModelUserRoleConnection",
    items:  Array< {
      __typename: "UserRole",
      id: string,
      roleId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAppRoleQueryVariables = {
  id: string,
};

export type GetAppRoleQuery = {
  getAppRole?:  {
    __typename: "AppRole",
    id: string,
    roleId: string,
    appId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAppRolesQueryVariables = {
  filter?: ModelAppRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppRolesQuery = {
  listAppRoles?:  {
    __typename: "ModelAppRoleConnection",
    items:  Array< {
      __typename: "AppRole",
      id: string,
      roleId: string,
      appId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppRolesQueryVariables = {
  filter?: ModelAppRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppRolesQuery = {
  syncAppRoles?:  {
    __typename: "ModelAppRoleConnection",
    items:  Array< {
      __typename: "AppRole",
      id: string,
      roleId: string,
      appId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AppRolesByRoleIdQueryVariables = {
  roleId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppRolesByRoleIdQuery = {
  appRolesByRoleId?:  {
    __typename: "ModelAppRoleConnection",
    items:  Array< {
      __typename: "AppRole",
      id: string,
      roleId: string,
      appId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AppRolesByAppIdQueryVariables = {
  appId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppRolesByAppIdQuery = {
  appRolesByAppId?:  {
    __typename: "ModelAppRoleConnection",
    items:  Array< {
      __typename: "AppRole",
      id: string,
      roleId: string,
      appId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAppUserQueryVariables = {
  id: string,
};

export type GetAppUserQuery = {
  getAppUser?:  {
    __typename: "AppUser",
    id: string,
    userId: string,
    appId: string,
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAppUsersQueryVariables = {
  filter?: ModelAppUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppUsersQuery = {
  listAppUsers?:  {
    __typename: "ModelAppUserConnection",
    items:  Array< {
      __typename: "AppUser",
      id: string,
      userId: string,
      appId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppUsersQueryVariables = {
  filter?: ModelAppUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppUsersQuery = {
  syncAppUsers?:  {
    __typename: "ModelAppUserConnection",
    items:  Array< {
      __typename: "AppUser",
      id: string,
      userId: string,
      appId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AppUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppUsersByUserIdQuery = {
  appUsersByUserId?:  {
    __typename: "ModelAppUserConnection",
    items:  Array< {
      __typename: "AppUser",
      id: string,
      userId: string,
      appId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type AppUsersByAppIdQueryVariables = {
  appId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppUsersByAppIdQuery = {
  appUsersByAppId?:  {
    __typename: "ModelAppUserConnection",
    items:  Array< {
      __typename: "AppUser",
      id: string,
      userId: string,
      appId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
};

export type OnCreateRoleSubscription = {
  onCreateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    roleLevel: number,
    users?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    apps?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskPossibleRolesId?: string | null,
  } | null,
};

export type OnUpdateRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
};

export type OnUpdateRoleSubscription = {
  onUpdateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    roleLevel: number,
    users?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    apps?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskPossibleRolesId?: string | null,
  } | null,
};

export type OnDeleteRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
};

export type OnDeleteRoleSubscription = {
  onDeleteRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    roleLevel: number,
    users?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    apps?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskPossibleRolesId?: string | null,
  } | null,
};

export type OnCreateSessionUserAttendeeSubscriptionVariables = {
  filter?: ModelSubscriptionSessionUserAttendeeFilterInput | null,
};

export type OnCreateSessionUserAttendeeSubscription = {
  onCreateSessionUserAttendee?:  {
    __typename: "SessionUserAttendee",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSessionUserAttendeeSubscriptionVariables = {
  filter?: ModelSubscriptionSessionUserAttendeeFilterInput | null,
};

export type OnUpdateSessionUserAttendeeSubscription = {
  onUpdateSessionUserAttendee?:  {
    __typename: "SessionUserAttendee",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSessionUserAttendeeSubscriptionVariables = {
  filter?: ModelSubscriptionSessionUserAttendeeFilterInput | null,
};

export type OnDeleteSessionUserAttendeeSubscription = {
  onDeleteSessionUserAttendee?:  {
    __typename: "SessionUserAttendee",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      name: string,
      description?: string | null,
      startDateTime: string,
      endDateTime: string,
      sessionCode: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      sessionHostId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    description?: string | null,
    startDateTime: string,
    endDateTime: string,
    sessionCode: string,
    host?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attendees?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionHostId?: string | null,
  } | null,
};

export type OnUpdateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    description?: string | null,
    startDateTime: string,
    endDateTime: string,
    sessionCode: string,
    host?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attendees?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionHostId?: string | null,
  } | null,
};

export type OnDeleteSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    name: string,
    description?: string | null,
    startDateTime: string,
    endDateTime: string,
    sessionCode: string,
    host?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attendees?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    sessionHostId?: string | null,
  } | null,
};

export type OnCreateTaskStatusSubscriptionVariables = {
  filter?: ModelSubscriptionTaskStatusFilterInput | null,
};

export type OnCreateTaskStatusSubscription = {
  onCreateTaskStatus?:  {
    __typename: "TaskStatus",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    progress?: string | null,
    taskID: string,
    status?: TaskStatusEnum | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskStatusUserId?: string | null,
  } | null,
};

export type OnUpdateTaskStatusSubscriptionVariables = {
  filter?: ModelSubscriptionTaskStatusFilterInput | null,
};

export type OnUpdateTaskStatusSubscription = {
  onUpdateTaskStatus?:  {
    __typename: "TaskStatus",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    progress?: string | null,
    taskID: string,
    status?: TaskStatusEnum | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskStatusUserId?: string | null,
  } | null,
};

export type OnDeleteTaskStatusSubscriptionVariables = {
  filter?: ModelSubscriptionTaskStatusFilterInput | null,
};

export type OnDeleteTaskStatusSubscription = {
  onDeleteTaskStatus?:  {
    __typename: "TaskStatus",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    progress?: string | null,
    taskID: string,
    status?: TaskStatusEnum | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    taskStatusUserId?: string | null,
  } | null,
};

export type OnCreateMagicCodeSubscriptionVariables = {
  filter?: ModelSubscriptionMagicCodeFilterInput | null,
};

export type OnCreateMagicCodeSubscription = {
  onCreateMagicCode?:  {
    __typename: "MagicCode",
    id: string,
    parameters?:  {
      __typename: "DeviceGrantParams",
      expirationSeconds?: number | null,
    } | null,
    titleText: string,
    descriptionText?: string | null,
    apiAlias: string,
    apiResource: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMagicCodeSubscriptionVariables = {
  filter?: ModelSubscriptionMagicCodeFilterInput | null,
};

export type OnUpdateMagicCodeSubscription = {
  onUpdateMagicCode?:  {
    __typename: "MagicCode",
    id: string,
    parameters?:  {
      __typename: "DeviceGrantParams",
      expirationSeconds?: number | null,
    } | null,
    titleText: string,
    descriptionText?: string | null,
    apiAlias: string,
    apiResource: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMagicCodeSubscriptionVariables = {
  filter?: ModelSubscriptionMagicCodeFilterInput | null,
};

export type OnDeleteMagicCodeSubscription = {
  onDeleteMagicCode?:  {
    __typename: "MagicCode",
    id: string,
    parameters?:  {
      __typename: "DeviceGrantParams",
      expirationSeconds?: number | null,
    } | null,
    titleText: string,
    descriptionText?: string | null,
    apiAlias: string,
    apiResource: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    apps?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roles?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    profileImageURL?: string | null,
    avatarUrl?: string | null,
    email: string,
    cognitoId: string,
    avatarKey?: string | null,
    language: Language,
    avatarUploaded?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    apps?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roles?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    profileImageURL?: string | null,
    avatarUrl?: string | null,
    email: string,
    cognitoId: string,
    avatarKey?: string | null,
    language: Language,
    avatarUploaded?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    apps?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    roles?:  {
      __typename: "ModelUserRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserAttendeeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    profileImageURL?: string | null,
    avatarUrl?: string | null,
    email: string,
    cognitoId: string,
    avatarKey?: string | null,
    language: Language,
    avatarUploaded?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnCreateAppSubscription = {
  onCreateApp?:  {
    __typename: "App",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    magicCode?:  {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description?: string | null,
    buttonName?: string | null,
    roles?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appMagicCodeId?: string | null,
  } | null,
};

export type OnUpdateAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnUpdateAppSubscription = {
  onUpdateApp?:  {
    __typename: "App",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    magicCode?:  {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description?: string | null,
    buttonName?: string | null,
    roles?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appMagicCodeId?: string | null,
  } | null,
};

export type OnDeleteAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnDeleteAppSubscription = {
  onDeleteApp?:  {
    __typename: "App",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelAppUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    magicCode?:  {
      __typename: "MagicCode",
      id: string,
      titleText: string,
      descriptionText?: string | null,
      apiAlias: string,
      apiResource: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description?: string | null,
    buttonName?: string | null,
    roles?:  {
      __typename: "ModelAppRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    appMagicCodeId?: string | null,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    type?: string | null,
    name: string,
    buttonName?: string | null,
    possibleRoles?:  {
      __typename: "ModelRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    order?: number | null,
    taskBehavior: TaskBehavior,
    appendUserID?: boolean | null,
    appendTaskID?: boolean | null,
    appID: string,
    taskStatuses?:  {
      __typename: "ModelTaskStatusConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    type?: string | null,
    name: string,
    buttonName?: string | null,
    possibleRoles?:  {
      __typename: "ModelRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    order?: number | null,
    taskBehavior: TaskBehavior,
    appendUserID?: boolean | null,
    appendTaskID?: boolean | null,
    appID: string,
    taskStatuses?:  {
      __typename: "ModelTaskStatusConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    type?: string | null,
    name: string,
    buttonName?: string | null,
    possibleRoles?:  {
      __typename: "ModelRoleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    order?: number | null,
    taskBehavior: TaskBehavior,
    appendUserID?: boolean | null,
    appendTaskID?: boolean | null,
    appID: string,
    taskStatuses?:  {
      __typename: "ModelTaskStatusConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserRoleSubscriptionVariables = {
  filter?: ModelSubscriptionUserRoleFilterInput | null,
};

export type OnCreateUserRoleSubscription = {
  onCreateUserRole?:  {
    __typename: "UserRole",
    id: string,
    roleId: string,
    userId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserRoleSubscriptionVariables = {
  filter?: ModelSubscriptionUserRoleFilterInput | null,
};

export type OnUpdateUserRoleSubscription = {
  onUpdateUserRole?:  {
    __typename: "UserRole",
    id: string,
    roleId: string,
    userId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserRoleSubscriptionVariables = {
  filter?: ModelSubscriptionUserRoleFilterInput | null,
};

export type OnDeleteUserRoleSubscription = {
  onDeleteUserRole?:  {
    __typename: "UserRole",
    id: string,
    roleId: string,
    userId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAppRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAppRoleFilterInput | null,
};

export type OnCreateAppRoleSubscription = {
  onCreateAppRole?:  {
    __typename: "AppRole",
    id: string,
    roleId: string,
    appId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAppRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAppRoleFilterInput | null,
};

export type OnUpdateAppRoleSubscription = {
  onUpdateAppRole?:  {
    __typename: "AppRole",
    id: string,
    roleId: string,
    appId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAppRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAppRoleFilterInput | null,
};

export type OnDeleteAppRoleSubscription = {
  onDeleteAppRole?:  {
    __typename: "AppRole",
    id: string,
    roleId: string,
    appId: string,
    role:  {
      __typename: "Role",
      id: string,
      name: string,
      roleLevel: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      taskPossibleRolesId?: string | null,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAppUserSubscriptionVariables = {
  filter?: ModelSubscriptionAppUserFilterInput | null,
};

export type OnCreateAppUserSubscription = {
  onCreateAppUser?:  {
    __typename: "AppUser",
    id: string,
    userId: string,
    appId: string,
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAppUserSubscriptionVariables = {
  filter?: ModelSubscriptionAppUserFilterInput | null,
};

export type OnUpdateAppUserSubscription = {
  onUpdateAppUser?:  {
    __typename: "AppUser",
    id: string,
    userId: string,
    appId: string,
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAppUserSubscriptionVariables = {
  filter?: ModelSubscriptionAppUserFilterInput | null,
};

export type OnDeleteAppUserSubscription = {
  onDeleteAppUser?:  {
    __typename: "AppUser",
    id: string,
    userId: string,
    appId: string,
    user:  {
      __typename: "User",
      id: string,
      userName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profileImageURL?: string | null,
      avatarUrl?: string | null,
      email: string,
      cognitoId: string,
      avatarKey?: string | null,
      language: Language,
      avatarUploaded?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    app:  {
      __typename: "App",
      id: string,
      name: string,
      description?: string | null,
      buttonName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      appMagicCodeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
