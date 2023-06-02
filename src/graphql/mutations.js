/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTaskStatus = /* GraphQL */ `
  mutation CreateTaskStatus(
    $input: CreateTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    createTaskStatus(input: $input, condition: $condition) {
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
        avatarKey
        language
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
export const updateTaskStatus = /* GraphQL */ `
  mutation UpdateTaskStatus(
    $input: UpdateTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    updateTaskStatus(input: $input, condition: $condition) {
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
        avatarKey
        language
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
export const deleteTaskStatus = /* GraphQL */ `
  mutation DeleteTaskStatus(
    $input: DeleteTaskStatusInput!
    $condition: ModelTaskStatusConditionInput
  ) {
    deleteTaskStatus(input: $input, condition: $condition) {
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
        avatarKey
        language
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
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
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
      displayName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      displayName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      displayName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      }
      titleText
      descriptionText
      authUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      }
      titleText
      descriptionText
      authUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      }
      titleText
      descriptionText
      authUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      avatarKey
      language
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      avatarKey
      language
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      avatarKey
      language
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        titleText
        descriptionText
        authUrl
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
          displayName
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
export const updateApp = /* GraphQL */ `
  mutation UpdateApp(
    $input: UpdateAppInput!
    $condition: ModelAppConditionInput
  ) {
    updateApp(input: $input, condition: $condition) {
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
        titleText
        descriptionText
        authUrl
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
          displayName
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
export const deleteApp = /* GraphQL */ `
  mutation DeleteApp(
    $input: DeleteAppInput!
    $condition: ModelAppConditionInput
  ) {
    deleteApp(input: $input, condition: $condition) {
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
        titleText
        descriptionText
        authUrl
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
          displayName
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
        name
        Users {
          nextToken
          startedAt
        }
        appID
        taskID
        displayName
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
        avatarKey
        language
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
        name
        Users {
          nextToken
          startedAt
        }
        appID
        taskID
        displayName
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
        avatarKey
        language
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
        name
        Users {
          nextToken
          startedAt
        }
        appID
        taskID
        displayName
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
        avatarKey
        language
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
        avatarKey
        language
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
          titleText
          descriptionText
          authUrl
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
        avatarKey
        language
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
          titleText
          descriptionText
          authUrl
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
        avatarKey
        language
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
          titleText
          descriptionText
          authUrl
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
