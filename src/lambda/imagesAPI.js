import mongoose from 'mongoose';
import './server';
import ImagesModel from './ImagesModel/schema';

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    let response = { status: 'success' };
    console.log('queryparams', event.queryStringParameters);
    switch (event.queryStringParameters.type) {
      case 'create':
        {
          const data = JSON.parse(event.body || {});
          response = await ImagesModel.create({ ...data });
        }
        break;
      default:
        response = await ImagesModel.find();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
};
