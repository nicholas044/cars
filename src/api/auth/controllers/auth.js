// ./src/api/auth/controllers/Auth.js

module.exports = {
  async register(ctx) {
    const { email, username, password, phone, bio } = ctx.request.body;

    if (!email || !password || !username) {
      return ctx.badRequest('Email, username, and password are required.');
    }

    // Check if user exists
    const userExist = await strapi.db.query('admin').findOne({ where: { email } });
    if (userExist) {
      return ctx.badRequest('Email is already taken.');
    }

    // Create the admin user with additional fields (phone and bio)
    let entity;
    try {
      entity = await strapi.db.query('admin').create({
        data: {
          email,
          username,
          password,
          phone,  // Add phone field
          bio,    // Add bio field
          roles: [1], // By default, set the role to Admin (role id 1)
        },
      });
    } catch (err) {
      return ctx.badRequest('Error during registration.');
    }

    // Sanitize and return the newly created user
    return sanitizeEntity(entity, { model: strapi.models.admin });
  },
};
