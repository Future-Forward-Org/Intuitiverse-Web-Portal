/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTaskStatus = /* GraphQL */ `
  query GetTaskStatus($id: ID!) {
    getTaskStatus(id: $id) {
      id
      User {
        id
        userName
        Apps {
          nextToken
          startedAt
        }
        Roles {
          nextToken
          startedAt
        }
        firstName
        lastName
        gender
        avatarUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Progress
      taskID
      isEnabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskStatusUserId
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
        User {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Progress
        taskID
        isEnabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskStatusUserId
      }
      nextToken
      startedAt
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
        User {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Progress
        taskID
        isEnabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskStatusUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      name
      Users {
        items {
          id
          roleId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      appID
      taskID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        Users {
          nextToken
          startedAt
        }
        appID
        taskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        Users {
          nextToken
          startedAt
        }
        appID
        taskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMagicCode = /* GraphQL */ `
  query GetMagicCode($id: ID!) {
    getMagicCode(id: $id) {
      id
      parameters {
        expiration
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        parameters {
          expiration
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        parameters {
          expiration
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      Apps {
        items {
          id
          userId
          appId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Roles {
        items {
          id
          roleId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      firstName
      lastName
      gender
      avatarUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        Apps {
          nextToken
          startedAt
        }
        Roles {
          nextToken
          startedAt
        }
        firstName
        lastName
        gender
        avatarUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        Apps {
          nextToken
          startedAt
        }
        Roles {
          nextToken
          startedAt
        }
        firstName
        lastName
        gender
        avatarUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getApp = /* GraphQL */ `
  query GetApp($id: ID!) {
    getApp(id: $id) {
      id
      name
      Users {
        items {
          id
          userId
          appId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Tasks {
        items {
          id
          type
          name
          buttonName
          url
          order
          appID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      MagicCode {
        id
        parameters {
          expiration
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      description
      buttonName
      Roles {
        items {
          id
          name
          appID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appMagicCodeId
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
        Users {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        MagicCode {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        description
        buttonName
        Roles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        appMagicCodeId
      }
      nextToken
      startedAt
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
        Users {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        MagicCode {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        description
        buttonName
        Roles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        appMagicCodeId
      }
      nextToken
      startedAt
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
      url
      order
      appID
      TaskStatuses {
        items {
          id
          Progress
          taskID
          isEnabled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskStatusUserId
        }
        nextToken
        startedAt
      }
      Roles {
        items {
          id
          Progress
          taskID
          isEnabled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskStatusUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        appID
        TaskStatuses {
          nextToken
          startedAt
        }
        Roles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        appID
        TaskStatuses {
          nextToken
          startedAt
        }
        Roles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        Users {
          nextToken
          startedAt
        }
        appID
        taskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        userName
        Apps {
          nextToken
          startedAt
        }
        Roles {
          nextToken
          startedAt
        }
        firstName
        lastName
        gender
        avatarUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        role {
          id
          name
          appID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        role {
          id
          name
          appID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        Apps {
          nextToken
          startedAt
        }
        Roles {
          nextToken
          startedAt
        }
        firstName
        lastName
        gender
        avatarUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      app {
        id
        name
        Users {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        MagicCode {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        description
        buttonName
        Roles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        appMagicCodeId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        user {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        user {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        User {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Progress
        taskID
        isEnabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskStatusUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const rolesByAppID = /* GraphQL */ `
  query RolesByAppID(
    $appID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rolesByAppID(
      appID: $appID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        Users {
          nextToken
          startedAt
        }
        appID
        taskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const rolesByTaskID = /* GraphQL */ `
  query RolesByTaskID(
    $taskID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rolesByTaskID(
      taskID: $taskID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        Users {
          nextToken
          startedAt
        }
        appID
        taskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        appID
        TaskStatuses {
          nextToken
          startedAt
        }
        Roles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        role {
          id
          name
          appID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        role {
          id
          name
          appID
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        user {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        user {
          id
          userName
          firstName
          lastName
          gender
          avatarUrl
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;