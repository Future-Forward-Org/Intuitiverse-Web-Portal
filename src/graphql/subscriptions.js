/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
    onCreateRole(filter: $filter) {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
    onUpdateRole(filter: $filter) {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
    onDeleteRole(filter: $filter) {
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
export const onCreateSessionUserAttendee = /* GraphQL */ `
  subscription OnCreateSessionUserAttendee(
    $filter: ModelSubscriptionSessionUserAttendeeFilterInput
  ) {
    onCreateSessionUserAttendee(filter: $filter) {
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
export const onUpdateSessionUserAttendee = /* GraphQL */ `
  subscription OnUpdateSessionUserAttendee(
    $filter: ModelSubscriptionSessionUserAttendeeFilterInput
  ) {
    onUpdateSessionUserAttendee(filter: $filter) {
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
export const onDeleteSessionUserAttendee = /* GraphQL */ `
  subscription OnDeleteSessionUserAttendee(
    $filter: ModelSubscriptionSessionUserAttendeeFilterInput
  ) {
    onDeleteSessionUserAttendee(filter: $filter) {
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
export const onCreateTaskStatus = /* GraphQL */ `
  subscription OnCreateTaskStatus(
    $filter: ModelSubscriptionTaskStatusFilterInput
  ) {
    onCreateTaskStatus(filter: $filter) {
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
export const onUpdateTaskStatus = /* GraphQL */ `
  subscription OnUpdateTaskStatus(
    $filter: ModelSubscriptionTaskStatusFilterInput
  ) {
    onUpdateTaskStatus(filter: $filter) {
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
export const onDeleteTaskStatus = /* GraphQL */ `
  subscription OnDeleteTaskStatus(
    $filter: ModelSubscriptionTaskStatusFilterInput
  ) {
    onDeleteTaskStatus(filter: $filter) {
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
export const onCreateMagicCode = /* GraphQL */ `
  subscription OnCreateMagicCode(
    $filter: ModelSubscriptionMagicCodeFilterInput
  ) {
    onCreateMagicCode(filter: $filter) {
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
export const onUpdateMagicCode = /* GraphQL */ `
  subscription OnUpdateMagicCode(
    $filter: ModelSubscriptionMagicCodeFilterInput
  ) {
    onUpdateMagicCode(filter: $filter) {
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
export const onDeleteMagicCode = /* GraphQL */ `
  subscription OnDeleteMagicCode(
    $filter: ModelSubscriptionMagicCodeFilterInput
  ) {
    onDeleteMagicCode(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateApp = /* GraphQL */ `
  subscription OnCreateApp($filter: ModelSubscriptionAppFilterInput) {
    onCreateApp(filter: $filter) {
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
export const onUpdateApp = /* GraphQL */ `
  subscription OnUpdateApp($filter: ModelSubscriptionAppFilterInput) {
    onUpdateApp(filter: $filter) {
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
export const onDeleteApp = /* GraphQL */ `
  subscription OnDeleteApp($filter: ModelSubscriptionAppFilterInput) {
    onDeleteApp(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateUserRole = /* GraphQL */ `
  subscription OnCreateUserRole($filter: ModelSubscriptionUserRoleFilterInput) {
    onCreateUserRole(filter: $filter) {
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
export const onUpdateUserRole = /* GraphQL */ `
  subscription OnUpdateUserRole($filter: ModelSubscriptionUserRoleFilterInput) {
    onUpdateUserRole(filter: $filter) {
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
export const onDeleteUserRole = /* GraphQL */ `
  subscription OnDeleteUserRole($filter: ModelSubscriptionUserRoleFilterInput) {
    onDeleteUserRole(filter: $filter) {
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
export const onCreateAppRole = /* GraphQL */ `
  subscription OnCreateAppRole($filter: ModelSubscriptionAppRoleFilterInput) {
    onCreateAppRole(filter: $filter) {
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
export const onUpdateAppRole = /* GraphQL */ `
  subscription OnUpdateAppRole($filter: ModelSubscriptionAppRoleFilterInput) {
    onUpdateAppRole(filter: $filter) {
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
export const onDeleteAppRole = /* GraphQL */ `
  subscription OnDeleteAppRole($filter: ModelSubscriptionAppRoleFilterInput) {
    onDeleteAppRole(filter: $filter) {
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
