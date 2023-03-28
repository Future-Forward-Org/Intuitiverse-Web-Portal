import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ButtonNames {
  START = "START",
  CONTINUE = "CONTINUE",
  COMPLETED = "COMPLETED"
}

export enum Progress {
  NEW = "NEW",
  INPROGRESS = "INPROGRESS",
  COMPLETE = "COMPLETE"
}



type EagerTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly progressLabel?: string | null;
  readonly buttonName?: string | null;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly progressLabel?: string | null;
  readonly buttonName?: string | null;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tasks = LazyLoading extends LazyLoadingDisabled ? EagerTasks : LazyTasks

export declare const Tasks: (new (init: ModelInit<Tasks>) => Tasks) & {
  copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks>) => MutableModel<Tasks> | void): Tasks;
}