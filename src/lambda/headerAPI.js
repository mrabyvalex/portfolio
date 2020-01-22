import mongoose from 'mongoose';
import './server';
import HeaderModel from './HeaderModel/schema';
import { TransformUtil } from '../utils';

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    let response = {};
    console.log('queryparams', event.queryStringParameters);
    switch (event.queryStringParameters.type) {
      case 'create':
        {
          const data = JSON.parse(event.body || {});
          response = await HeaderModel.create({ ...data });
        }
        break;
      default:
        response = await HeaderModel.find();
        response = TransformUtil.parseDbObjToJSON(response);
        response = response[response.length - 1];
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
