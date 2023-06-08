export const schema = {
    "models": {
        "Session": {
            "name": "Session",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startDateTime": {
                    "name": "startDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "endDateTime": {
                    "name": "endDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "sessionCode": {
                    "name": "sessionCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "host": {
                    "name": "host",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "attendees": {
                    "name": "attendees",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Sessions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TaskStatus": {
            "name": "TaskStatus",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "User": {
                    "name": "User",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "taskStatusUserId"
                        ]
                    }
                },
                "Progress": {
                    "name": "Progress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "taskID": {
                    "name": "taskID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "isEnabled": {
                    "name": "isEnabled",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "taskStatusUserId": {
                    "name": "taskStatusUserId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "TaskStatuses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTask",
                        "fields": [
                            "taskID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Role": {
            "name": "Role",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "displayName": {
                    "name": "displayName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": {
                        "enum": "RoleEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Users": {
                    "name": "Users",
                    "isArray": true,
                    "type": {
                        "model": "UserRole"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "role"
                        ]
                    }
                },
                "appID": {
                    "name": "appID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "apps": {
                    "name": "apps",
                    "isArray": true,
                    "type": {
                        "model": "AppRole"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "role"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Roles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byApp",
                        "fields": [
                            "appID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MagicCode": {
            "name": "MagicCode",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "parameters": {
                    "name": "parameters",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeviceGrantParams"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "titleText": {
                    "name": "titleText",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "descriptionText": {
                    "name": "descriptionText",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "apiAlias": {
                    "name": "apiAlias",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "apiResource": {
                    "name": "apiResource",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MagicCodes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userName": {
                    "name": "userName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Apps": {
                    "name": "Apps",
                    "isArray": true,
                    "type": {
                        "model": "AppUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "user"
                        ]
                    }
                },
                "Roles": {
                    "name": "Roles",
                    "isArray": true,
                    "type": {
                        "model": "UserRole"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "user"
                        ]
                    }
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "avatarImageURL": {
                    "name": "avatarImageURL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "avatarUrl": {
                    "name": "avatarUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "cognitoId": {
                    "name": "cognitoId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "avatarKey": {
                    "name": "avatarKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "language": {
                    "name": "language",
                    "isArray": false,
                    "type": {
                        "enum": "Language"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "avatarUploaded": {
                    "name": "avatarUploaded",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "App": {
            "name": "App",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Users": {
                    "name": "Users",
                    "isArray": true,
                    "type": {
                        "model": "AppUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "app"
                        ]
                    }
                },
                "Tasks": {
                    "name": "Tasks",
                    "isArray": true,
                    "type": {
                        "model": "Task"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "appID"
                        ]
                    }
                },
                "MagicCode": {
                    "name": "MagicCode",
                    "isArray": false,
                    "type": {
                        "model": "MagicCode"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "appMagicCodeId"
                        ]
                    }
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "buttonName": {
                    "name": "buttonName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Roles": {
                    "name": "Roles",
                    "isArray": true,
                    "type": {
                        "model": "AppRole"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "app"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "appMagicCodeId": {
                    "name": "appMagicCodeId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Apps",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Task": {
            "name": "Task",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "buttonName": {
                    "name": "buttonName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "requiredRole": {
                    "name": "requiredRole",
                    "isArray": true,
                    "type": {
                        "enum": "RoleEnum"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "taskBehavior": {
                    "name": "taskBehavior",
                    "isArray": false,
                    "type": {
                        "enum": "TaskBehavior"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "appendUserID": {
                    "name": "appendUserID",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "appendTaskID": {
                    "name": "appendTaskID",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "appID": {
                    "name": "appID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "TaskStatuses": {
                    "name": "TaskStatuses",
                    "isArray": true,
                    "type": {
                        "model": "TaskStatus"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "taskID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Tasks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byApp",
                        "fields": [
                            "appID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "UserRole": {
            "name": "UserRole",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "roleId": {
                    "name": "roleId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "role": {
                    "name": "role",
                    "isArray": false,
                    "type": {
                        "model": "Role"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "roleId"
                        ]
                    }
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "userId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UserRoles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRole",
                        "fields": [
                            "roleId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUser",
                        "fields": [
                            "userId"
                        ]
                    }
                }
            ]
        },
        "AppRole": {
            "name": "AppRole",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "roleId": {
                    "name": "roleId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "appId": {
                    "name": "appId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "role": {
                    "name": "role",
                    "isArray": false,
                    "type": {
                        "model": "Role"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "roleId"
                        ]
                    }
                },
                "app": {
                    "name": "app",
                    "isArray": false,
                    "type": {
                        "model": "App"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "appId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "AppRoles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRole",
                        "fields": [
                            "roleId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byApp",
                        "fields": [
                            "appId"
                        ]
                    }
                }
            ]
        },
        "AppUser": {
            "name": "AppUser",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "appId": {
                    "name": "appId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "userId"
                        ]
                    }
                },
                "app": {
                    "name": "app",
                    "isArray": false,
                    "type": {
                        "model": "App"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "appId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "AppUsers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUser",
                        "fields": [
                            "userId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byApp",
                        "fields": [
                            "appId"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "TaskBehavior": {
            "name": "TaskBehavior",
            "values": [
                "OPENINTAB",
                "OPENINPLACE",
                "OPENINIFRAME",
                "OPENFORM"
            ]
        },
        "RoleEnum": {
            "name": "RoleEnum",
            "values": [
                "ADMIN",
                "HOST",
                "STUDENT",
                "ARCTICDRYRUN",
                "VIRTUADCASTPILOTSTUDENT",
                "VIRTUADCASTPILOTTRAINER"
            ]
        },
        "Language": {
            "name": "Language",
            "values": [
                "CHINESE",
                "DANISH",
                "DUTCH",
                "ENGLISH",
                "FINNISH",
                "FRENCH",
                "GERMAN",
                "SPANISH",
                "JAPANESE",
                "NORWEGIAN",
                "PORTUGUESE",
                "BRAZILIANPORTUGUESE",
                "SWEDISH",
                "ITALIAN"
            ]
        }
    },
    "nonModels": {
        "DeviceGrantParams": {
            "name": "DeviceGrantParams",
            "fields": {
                "expiration": {
                    "name": "expiration",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.3",
    "version": "f97173718b5e28f9b13e3fab6d2d8616"
};