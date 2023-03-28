// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ButtonNames = {
  "START": "START",
  "CONTINUE": "CONTINUE",
  "COMPLETED": "COMPLETED"
};

const Progress = {
  "NEW": "NEW",
  "INPROGRESS": "INPROGRESS",
  "COMPLETE": "COMPLETE"
};

const { Tasks } = initSchema(schema);

export {
  Tasks,
  ButtonNames,
  Progress
};