/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTaskStatus = /* GraphQL */ `
  subscription OnCreateTaskStatus(
    $filter: ModelSubscriptionTaskStatusFilterInput
  ) {
    onCreateTaskStatus(filter: $filter) {
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
        email
        cognitoId
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
export const onUpdateTaskStatus = /* GraphQL */ `
  subscription OnUpdateTaskStatus(
    $filter: ModelSubscriptionTaskStatusFilterInput
  ) {
    onUpdateTaskStatus(filter: $filter) {
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
        email
        cognitoId
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
export const onDeleteTaskStatus = /* GraphQL */ `
  subscription OnDeleteTaskStatus(
    $filter: ModelSubscriptionTaskStatusFilterInput
  ) {
    onDeleteTaskStatus(filter: $filter) {
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
        email
        cognitoId
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
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
    onCreateRole(filter: $filter) {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
    onUpdateRole(filter: $filter) {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
    onDeleteRole(filter: $filter) {
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
export const onCreateMagicCode = /* GraphQL */ `
  subscription OnCreateMagicCode(
    $filter: ModelSubscriptionMagicCodeFilterInput
  ) {
    onCreateMagicCode(filter: $filter) {
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
export const onUpdateMagicCode = /* GraphQL */ `
  subscription OnUpdateMagicCode(
    $filter: ModelSubscriptionMagicCodeFilterInput
  ) {
    onUpdateMagicCode(filter: $filter) {
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
export const onDeleteMagicCode = /* GraphQL */ `
  subscription OnDeleteMagicCode(
    $filter: ModelSubscriptionMagicCodeFilterInput
  ) {
    onDeleteMagicCode(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      email
      cognitoId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      email
      cognitoId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      email
      cognitoId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateApp = /* GraphQL */ `
  subscription OnCreateApp($filter: ModelSubscriptionAppFilterInput) {
    onCreateApp(filter: $filter) {
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
export const onUpdateApp = /* GraphQL */ `
  subscription OnUpdateApp($filter: ModelSubscriptionAppFilterInput) {
    onUpdateApp(filter: $filter) {
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
export const onDeleteApp = /* GraphQL */ `
  subscription OnDeleteApp($filter: ModelSubscriptionAppFilterInput) {
    onDeleteApp(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateUserRole = /* GraphQL */ `
  subscription OnCreateUserRole($filter: ModelSubscriptionUserRoleFilterInput) {
    onCreateUserRole(filter: $filter) {
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
        email
        cognitoId
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
export const onUpdateUserRole = /* GraphQL */ `
  subscription OnUpdateUserRole($filter: ModelSubscriptionUserRoleFilterInput) {
    onUpdateUserRole(filter: $filter) {
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
        email
        cognitoId
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
export const onDeleteUserRole = /* GraphQL */ `
  subscription OnDeleteUserRole($filter: ModelSubscriptionUserRoleFilterInput) {
    onDeleteUserRole(filter: $filter) {
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
        email
        cognitoId
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
export const onCreateAppUser = /* GraphQL */ `
  subscription OnCreateAppUser($filter: ModelSubscriptionAppUserFilterInput) {
    onCreateAppUser(filter: $filter) {
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
        email
        cognitoId
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
export const onUpdateAppUser = /* GraphQL */ `
  subscription OnUpdateAppUser($filter: ModelSubscriptionAppUserFilterInput) {
    onUpdateAppUser(filter: $filter) {
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
        email
        cognitoId
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
export const onDeleteAppUser = /* GraphQL */ `
  subscription OnDeleteAppUser($filter: ModelSubscriptionAppUserFilterInput) {
    onDeleteAppUser(filter: $filter) {
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
        email
        cognitoId
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
