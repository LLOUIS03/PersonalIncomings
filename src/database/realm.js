import Realm from 'realm';
import {DATABASE_NAME} from '../const/const';

const Spending = {
  name: 'Spending',
  properties: {
    amount: 'double',
    type: 'SpendingType',
    curr_date: {type: 'date', default: new Date()},
  },
};

const Incoming = {
  name: 'Incoming',
  properties: {
    amount: 'double',
    type: 'IncomingType',
    curr_date: {type: 'date', default: new Date()},
  },
};

export const Realm = new Realm({
  path: DATABASE_NAME,
  deleteRealmIfMigrationNeeded: true,
  schema: [Spending, Incoming],
});
