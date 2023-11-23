'use strict';

/**
 * item-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::item-list.item-list');
