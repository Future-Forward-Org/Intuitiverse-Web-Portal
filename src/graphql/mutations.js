/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
export const createTaskStatus = /* GraphQL */ `
  mutation CreateTaskStatus(
    $input: CreateTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    createTaskStatus(input: $input, condition: $condition) {
      id
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
        __typename
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
      __typename
    }
  }
`;
export const updateTaskStatus = /* GraphQL */ `
  mutation UpdateTaskStatus(
    $input: UpdateTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    updateTaskStatus(input: $input, condition: $condition) {
      id
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
        __typename
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
      __typename
    }
  }
`;
export const deleteTaskStatus = /* GraphQL */ `
  mutation DeleteTaskStatus(
    $input: DeleteTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    deleteTaskStatus(input: $input, condition: $condition) {
      id
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
        __typename
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
      __typename
    }
  }
`;
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      displayName
      name
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
      __typename
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      displayName
      name
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
      __typename
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      displayName
      name
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
      __typename
    }
  }
`;
export const createMagicCode = /* GraphQL */ `
  mutation CreateMagicCode(
    $input: CreateMagicCodeInput!
    $condition: ModelMagicCodeConditionInput
  ) {
    createMagicCode(input: $input, condition: $condition) {
      id
      parameters {
        expiration
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
export const updateMagicCode = /* GraphQL */ `
  mutation UpdateMagicCode(
    $input: UpdateMagicCodeInput!
    $condition: ModelMagicCodeConditionInput
  ) {
    updateMagicCode(input: $input, condition: $condition) {
      id
      parameters {
        expiration
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
export const deleteMagicCode = /* GraphQL */ `
  mutation DeleteMagicCode(
    $input: DeleteMagicCodeInput!
    $condition: ModelMagicCodeConditionInput
  ) {
    deleteMagicCode(input: $input, condition: $condition) {
      id
      parameters {
        expiration
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const createApp = /* GraphQL */ `
  mutation CreateApp(
    $input: CreateAppInput!
    $condition: ModelAppConditionInput
  ) {
    createApp(input: $input, condition: $condition) {
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
export const updateApp = /* GraphQL */ `
  mutation UpdateApp(
    $input: UpdateAppInput!
    $condition: ModelAppConditionInput
  ) {
    updateApp(input: $input, condition: $condition) {
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
export const deleteApp = /* GraphQL */ `
  mutation DeleteApp(
    $input: DeleteAppInput!
    $condition: ModelAppConditionInput
  ) {
    deleteApp(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createSessionUserAttendees = /* GraphQL */ `
  mutation CreateSessionUserAttendees(
    $input: CreateSessionUserAttendeesInput!
    $condition: ModelSessionUserAttendeesConditionInput
  ) {
    createSessionUserAttendees(input: $input, condition: $condition) {
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
export const updateSessionUserAttendees = /* GraphQL */ `
  mutation UpdateSessionUserAttendees(
    $input: UpdateSessionUserAttendeesInput!
    $condition: ModelSessionUserAttendeesConditionInput
  ) {
    updateSessionUserAttendees(input: $input, condition: $condition) {
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
export const deleteSessionUserAttendees = /* GraphQL */ `
  mutation DeleteSessionUserAttendees(
    $input: DeleteSessionUserAttendeesInput!
    $condition: ModelSessionUserAttendeesConditionInput
  ) {
    deleteSessionUserAttendees(input: $input, condition: $condition) {
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
export const createUserRole = /* GraphQL */ `
  mutation CreateUserRole(
    $input: CreateUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    createUserRole(input: $input, condition: $condition) {
      id
      roleId
      userId
      role {
        id
        displayName
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
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
export const updateUserRole = /* GraphQL */ `
  mutation UpdateUserRole(
    $input: UpdateUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    updateUserRole(input: $input, condition: $condition) {
      id
      roleId
      userId
      role {
        id
        displayName
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
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
export const deleteUserRole = /* GraphQL */ `
  mutation DeleteUserRole(
    $input: DeleteUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    deleteUserRole(input: $input, condition: $condition) {
      id
      roleId
      userId
      role {
        id
        displayName
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
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
export const createAppRole = /* GraphQL */ `
  mutation CreateAppRole(
    $input: CreateAppRoleInput!
    $condition: ModelAppRoleConditionInput
  ) {
    createAppRole(input: $input, condition: $condition) {
      id
      roleId
      appId
      role {
        id
        displayName
        name
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
export const updateAppRole = /* GraphQL */ `
  mutation UpdateAppRole(
    $input: UpdateAppRoleInput!
    $condition: ModelAppRoleConditionInput
  ) {
    updateAppRole(input: $input, condition: $condition) {
      id
      roleId
      appId
      role {
        id
        displayName
        name
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
export const deleteAppRole = /* GraphQL */ `
  mutation DeleteAppRole(
    $input: DeleteAppRoleInput!
    $condition: ModelAppRoleConditionInput
  ) {
    deleteAppRole(input: $input, condition: $condition) {
      id
      roleId
      appId
      role {
        id
        displayName
        name
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
export const createAppUser = /* GraphQL */ `
  mutation CreateAppUser(
    $input: CreateAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    createAppUser(input: $input, condition: $condition) {
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
export const updateAppUser = /* GraphQL */ `
  mutation UpdateAppUser(
    $input: UpdateAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    updateAppUser(input: $input, condition: $condition) {
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
export const deleteAppUser = /* GraphQL */ `
  mutation DeleteAppUser(
    $input: DeleteAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    deleteAppUser(input: $input, condition: $condition) {
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
