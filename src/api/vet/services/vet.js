'use strict';

/**
 * vet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vet.vet');
