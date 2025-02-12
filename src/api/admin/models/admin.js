// ./src/api/admin/models/admin.js
module.exports = {
    connection: 'default',
    collectionName: 'admins',
    info: {
      name: 'Admin',
      description: 'Administrator of the system'
    },
    attributes: {
      username: {
        type: 'string',
        required: true,
        unique: true,
      },
      email: {
        type: 'email',
        required: true,
        unique: true,
      },
      password: {
        type: 'password',
        required: true,
      },
      phone: {
        type: 'string',
        required: false,  
      },
      bio: {
        type: 'text',
        required: false,  
      },
      roles: {
        collection: 'role',
        via: 'users',
      },
    },
  };
  