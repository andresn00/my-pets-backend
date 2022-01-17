'use strict';

/**
 *  vet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vet.vet');
