'use strict';

/**
 * customer-inquiry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-inquiry.customer-inquiry');
