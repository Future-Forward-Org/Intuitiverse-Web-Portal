/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
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
        avatarImageURL
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
      }
      attendees {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sessionHostId
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
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
        avatarImageURL
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
      }
      attendees {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sessionHostId
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
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
        avatarImageURL
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
      }
      attendees {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      sessionHostId
    }
  }
`;
export const onCreateTaskStatus = /* GraphQL */ `
  subscription OnCreateTaskStatus(
    $filter: ModelSubscriptionTaskStatusFilterInput
  ) {
    onCreateTaskStatus(filter: $filter) {
      id
      User {
        id
        userName
        firstName
        lastName
        avatarImageURL
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
        firstName
        lastName
        avatarImageURL
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
        firstName
        lastName
        avatarImageURL
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
      displayName
      name
      Users {
        nextToken
        startedAt
      }
      appID
      apps {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
    onUpdateRole(filter: $filter) {
      id
      displayName
      name
      Users {
        nextToken
        startedAt
      }
      appID
      apps {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
    onDeleteRole(filter: $filter) {
      id
      displayName
      name
      Users {
        nextToken
        startedAt
      }
      appID
      apps {
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
export const onCreateMagicCode = /* GraphQL */ `
  subscription OnCreateMagicCode(
    $filter: ModelSubscriptionMagicCodeFilterInput
  ) {
    onCreateMagicCode(filter: $filter) {
      id
      parameters {
        expiration
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
      titleText
      descriptionText
      apiAlias
      apiResource
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
      titleText
      descriptionText
      apiAlias
      apiResource
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
        nextToken
        startedAt
      }
      Roles {
        nextToken
        startedAt
      }
      Session {
        nextToken
        startedAt
      }
      firstName
      lastName
      avatarImageURL
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
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      Session {
        nextToken
        startedAt
      }
      firstName
      lastName
      avatarImageURL
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
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      Session {
        nextToken
        startedAt
      }
      firstName
      lastName
      avatarImageURL
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
    }
  }
`;
export const onCreateApp = /* GraphQL */ `
  subscription OnCreateApp($filter: ModelSubscriptionAppFilterInput) {
    onCreateApp(filter: $filter) {
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
        titleText
        descriptionText
        apiAlias
        apiResource
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
  }
`;
export const onUpdateApp = /* GraphQL */ `
  subscription OnUpdateApp($filter: ModelSubscriptionAppFilterInput) {
    onUpdateApp(filter: $filter) {
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
        titleText
        descriptionText
        apiAlias
        apiResource
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
  }
`;
export const onDeleteApp = /* GraphQL */ `
  subscription OnDeleteApp($filter: ModelSubscriptionAppFilterInput) {
    onDeleteApp(filter: $filter) {
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
        titleText
        descriptionText
        apiAlias
        apiResource
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
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      id
      type
      name
      buttonName
      requiredRole
      url
      order
      taskBehavior
      appendUserID
      appendTaskID
      appID
      TaskStatuses {
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
      requiredRole
      url
      order
      taskBehavior
      appendUserID
      appendTaskID
      appID
      TaskStatuses {
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
      requiredRole
      url
      order
      taskBehavior
      appendUserID
      appendTaskID
      appID
      TaskStatuses {
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
export const onCreateSessionUserAttendees = /* GraphQL */ `
  subscription OnCreateSessionUserAttendees(
    $filter: ModelSubscriptionSessionUserAttendeesFilterInput
  ) {
    onCreateSessionUserAttendees(filter: $filter) {
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
      }
      user {
        id
        userName
        firstName
        lastName
        avatarImageURL
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSessionUserAttendees = /* GraphQL */ `
  subscription OnUpdateSessionUserAttendees(
    $filter: ModelSubscriptionSessionUserAttendeesFilterInput
  ) {
    onUpdateSessionUserAttendees(filter: $filter) {
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
      }
      user {
        id
        userName
        firstName
        lastName
        avatarImageURL
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSessionUserAttendees = /* GraphQL */ `
  subscription OnDeleteSessionUserAttendees(
    $filter: ModelSubscriptionSessionUserAttendeesFilterInput
  ) {
    onDeleteSessionUserAttendees(filter: $filter) {
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
      }
      user {
        id
        userName
        firstName
        lastName
        avatarImageURL
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
        displayName
        name
        appID
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
        avatarImageURL
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
        displayName
        name
        appID
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
        avatarImageURL
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
        displayName
        name
        appID
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
        avatarImageURL
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAppRole = /* GraphQL */ `
  subscription OnCreateAppRole($filter: ModelSubscriptionAppRoleFilterInput) {
    onCreateAppRole(filter: $filter) {
      id
      roleId
      appId
      role {
        id
        displayName
        name
        appID
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
  }
`;
export const onUpdateAppRole = /* GraphQL */ `
  subscription OnUpdateAppRole($filter: ModelSubscriptionAppRoleFilterInput) {
    onUpdateAppRole(filter: $filter) {
      id
      roleId
      appId
      role {
        id
        displayName
        name
        appID
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
  }
`;
export const onDeleteAppRole = /* GraphQL */ `
  subscription OnDeleteAppRole($filter: ModelSubscriptionAppRoleFilterInput) {
    onDeleteAppRole(filter: $filter) {
      id
      roleId
      appId
      role {
        id
        displayName
        name
        appID
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
        firstName
        lastName
        avatarImageURL
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
        firstName
        lastName
        avatarImageURL
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
        firstName
        lastName
        avatarImageURL
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
  }
`;
