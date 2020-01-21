import mongoose from 'mongoose';
import './server';
import HeaderModel from './HeaderModel/schema';

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    let response = { status: 'success' };
    console.log('queryparams', event.queryStringParameters);
    switch (event.queryStringParameters.type) {
      case 'create':
        {
          const data = JSON.parse(event.body || {});
          response = await HeaderModel.create({ ...data, _id: mongoose.Types.ObjectId() });
        }
        break;
      default:
        response = await HeaderModel.find();
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
