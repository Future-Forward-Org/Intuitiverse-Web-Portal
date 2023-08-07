/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      name
      roleLevel
      users {
        nextToken
        startedAt
        __typename
      }
      apps {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskPossibleRolesId
      __typename
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        roleLevel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskPossibleRolesId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRoles = /* GraphQL */ `
  query SyncRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        roleLevel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskPossibleRolesId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSessionUserAttendee = /* GraphQL */ `
  query GetSessionUserAttendee($id: ID!) {
    getSessionUserAttendee(id: $id) {
      id
      sessionId
      userId
      session {
        id
        name
        description
        startDateTime
        endDateTime
        sessionCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionHostId
        __typename
      }
      user {
        id
        userName
        firstName
        lastName
        profileImageURL
        avatarUrl
        email
        cognitoId
        avatarKey
        language
        avatarUploaded
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSessionUserAttendees = /* GraphQL */ `
  query ListSessionUserAttendees(
    $filter: ModelSessionUserAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionUserAttendees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSessionUserAttendees = /* GraphQL */ `
  query SyncSessionUserAttendees(
    $filter: ModelSessionUserAttendeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessionUserAttendees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sessionId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const sessionUserAttendeesBySessionId = /* GraphQL */ `
  query SessionUserAttendeesBySessionId(
    $sessionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionUserAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionUserAttendeesBySessionId(
      sessionId: $sessionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const sessionUserAttendeesByUserId = /* GraphQL */ `
  query SessionUserAttendeesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionUserAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionUserAttendeesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      name
      description
      startDateTime
      endDateTime
      sessionCode
      host {
        id
        userName
        firstName
        lastName
        profileImageURL
        avatarUrl
        email
        cognitoId
        avatarKey
        language
        avatarUploaded
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      attendees {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sessionHostId
      __typename
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        startDateTime
        endDateTime
        sessionCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionHostId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSessions = /* GraphQL */ `
  query SyncSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        startDateTime
        endDateTime
        sessionCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sessionHostId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTaskStatus = /* GraphQL */ `
  query GetTaskStatus($id: ID!) {
    getTaskStatus(id: $id) {
      id
      user {
        id
        userName
        firstName
        lastName
        profileImageURL
        avatarUrl
        email
        cognitoId
        avatarKey
        language
        avatarUploaded
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      progress
      taskID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskStatusUserId
      __typename
    }
  }
`;
export const listTaskStatuses = /* GraphQL */ `
  query ListTaskStatuses(
    $filter: ModelTaskStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        progress
        taskID
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskStatusUserId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTaskStatuses = /* GraphQL */ `
  query SyncTaskStatuses(
    $filter: ModelTaskStatusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaskStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        progress
        taskID
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskStatusUserId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const taskStatusesByTaskID = /* GraphQL */ `
  query TaskStatusesByTaskID(
    $taskID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskStatusesByTaskID(
      taskID: $taskID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        progress
        taskID
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskStatusUserId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMagicCode = /* GraphQL */ `
  query GetMagicCode($id: ID!) {
    getMagicCode(id: $id) {
      id
      parameters {
        expirationSeconds
        __typename
      }
      titleText
      descriptionText
      apiAlias
      apiResource
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMagicCodes = /* GraphQL */ `
  query ListMagicCodes(
    $filter: ModelMagicCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMagicCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titleText
        descriptionText
        apiAlias
        apiResource
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMagicCodes = /* GraphQL */ `
  query SyncMagicCodes(
    $filter: ModelMagicCodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMagicCodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        titleText
        descriptionText
        apiAlias
        apiResource
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      apps {
        nextToken
        startedAt
        __typename
      }
      roles {
        nextToken
        startedAt
        __typename
      }
      sessions {
        nextToken
        startedAt
        __typename
      }
      firstName
      lastName
      profileImageURL
      avatarUrl
      email
      cognitoId
      avatarKey
      language
      avatarUploaded
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        firstName
        lastName
        profileImageURL
        avatarUrl
        email
        cognitoId
        avatarKey
        language
        avatarUploaded
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userName
        firstName
        lastName
        profileImageURL
        avatarUrl
        email
        cognitoId
        avatarKey
        language
        avatarUploaded
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const usersByCognitoId = /* GraphQL */ `
  query UsersByCognitoId(
    $cognitoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByCognitoId(
      cognitoId: $cognitoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userName
        firstName
        lastName
        profileImageURL
        avatarUrl
        email
        cognitoId
        avatarKey
        language
        avatarUploaded
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getApp = /* GraphQL */ `
  query GetApp($id: ID!) {
    getApp(id: $id) {
      id
      name
      users {
        nextToken
        startedAt
        __typename
      }
      tasks {
        nextToken
        startedAt
        __typename
      }
      magicCode {
        id
        titleText
        descriptionText
        apiAlias
        apiResource
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      description
      buttonName
      roles {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appMagicCodeId
      __typename
    }
  }
`;
export const listApps = /* GraphQL */ `
  query ListApps(
    $filter: ModelAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        buttonName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        appMagicCodeId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncApps = /* GraphQL */ `
  query SyncApps(
    $filter: ModelAppFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncApps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        buttonName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        appMagicCodeId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      type
      name
      buttonName
      possibleRoles {
        nextToken
        startedAt
        __typename
      }
      url
      order
      taskBehavior
      appendUserID
      appendTaskID
      appID
      taskStatuses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        buttonName
        url
        order
        taskBehavior
        appendUserID
        appendTaskID
        appID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        name
        buttonName
        url
        order
        taskBehavior
        appendUserID
        appendTaskID
        appID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const tasksByAppID = /* GraphQL */ `
  query TasksByAppID(
    $appID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByAppID(
      appID: $appID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        name
        buttonName
        url
        order
        taskBehavior
        appendUserID
        appendTaskID
        appID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserRole = /* GraphQL */ `
  query GetUserRole($id: ID!) {
    getUserRole(id: $id) {
      id
      roleId
      userId
      role {
        id
        name
        roleLevel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskPossibleRolesId
        __typename
      }
      user {
        id
        userName
        firstName
        lastName
        profileImageURL
        avatarUrl
        email
        cognitoId
        avatarKey
        language
        avatarUploaded
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUserRoles = /* GraphQL */ `
  query ListUserRoles(
    $filter: ModelUserRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roleId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserRoles = /* GraphQL */ `
  query SyncUserRoles(
    $filter: ModelUserRoleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        roleId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userRolesByRoleId = /* GraphQL */ `
  query UserRolesByRoleId(
    $roleId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userRolesByRoleId(
      roleId: $roleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roleId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userRolesByUserId = /* GraphQL */ `
  query UserRolesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userRolesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roleId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAppRole = /* GraphQL */ `
  query GetAppRole($id: ID!) {
    getAppRole(id: $id) {
      id
      roleId
      appId
      role {
        id
        name
        roleLevel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskPossibleRolesId
        __typename
      }
      app {
        id
        name
        description
        buttonName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        appMagicCodeId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAppRoles = /* GraphQL */ `
  query ListAppRoles(
    $filter: ModelAppRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roleId
        appId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAppRoles = /* GraphQL */ `
  query SyncAppRoles(
    $filter: ModelAppRoleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        roleId
        appId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const appRolesByRoleId = /* GraphQL */ `
  query AppRolesByRoleId(
    $roleId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appRolesByRoleId(
      roleId: $roleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roleId
        appId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const appRolesByAppId = /* GraphQL */ `
  query AppRolesByAppId(
    $appId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appRolesByAppId(
      appId: $appId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roleId
        appId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAppUser = /* GraphQL */ `
  query GetAppUser($id: ID!) {
    getAppUser(id: $id) {
      id
      userId
      appId
      user {
        id
        userName
        firstName
        lastName
        profileImageURL
        avatarUrl
        email
        cognitoId
        avatarKey
        language
        avatarUploaded
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      app {
        id
        name
        description
        buttonName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        appMagicCodeId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAppUsers = /* GraphQL */ `
  query ListAppUsers(
    $filter: ModelAppUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        appId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAppUsers = /* GraphQL */ `
  query SyncAppUsers(
    $filter: ModelAppUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        appId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const appUsersByUserId = /* GraphQL */ `
  query AppUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        appId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const appUsersByAppId = /* GraphQL */ `
  query AppUsersByAppId(
    $appId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appUsersByAppId(
      appId: $appId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        appId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
