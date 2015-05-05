/**
* Property.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    description: { type: 'array' }, 
    title: { type: 'string' }, 
    specification: {
      property_type: { type: 'string' }, 
      bathroom_no: { type: 'integer' }, 
      bedroom_no: { type: 'integer' }, 
      garage_no: { type: 'integer' }, 
      floorplan: { type: 'string' }
    }, 
    agency: {
      agency_website: { type: 'string' }
    }, 
    agent: {
      profile: { type: 'string' }, 
      name: { type: 'string' }, 
      title: { type: 'string' }, 
      photo: { type: 'string' }, 
      phone: { type: 'string' }, 
      email: { type: 'string' }
    }, 
    photos: { type: 'array' }, 
    address: {
      suburb: { type: 'string' }, 
      state: { type: 'string' }, 
      postcode: { type: 'integer' }, 
      line1: { type: 'string' }
    }, 
    date: { type: 'date' }, 
    listing_type: { type: 'string' }, 
    price: {
      sale_price: { type: 'string' }
    }, 
    metadata: {
      url: { type: 'string' }, 
      crawl_date: { type: 'integer' }, 
      internal_id: { type: 'string' }, 
      crawler_name: { type: 'string' }
    }
  },

};

