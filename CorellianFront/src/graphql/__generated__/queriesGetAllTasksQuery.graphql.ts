/**
 * @generated SignedSource<<c072d9e2bbdc964086e8ef332260ec4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type queriesGetAllTasksQuery$variables = Record<PropertyKey, never>;
export type queriesGetAllTasksQuery$data = {
  readonly getAllTasks: ReadonlyArray<{
    readonly aliasId: number;
    readonly description: string;
    readonly status: string;
    readonly title: string;
  }>;
};
export type queriesGetAllTasksQuery = {
  response: queriesGetAllTasksQuery$data;
  variables: queriesGetAllTasksQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "getAllTasks",
    "plural": true,
    "selections": [
      {
        "alias": "aliasId",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "queriesGetAllTasksQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "queriesGetAllTasksQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9f0c62faef5b069b3bb90c5b1eb15d7c",
    "id": null,
    "metadata": {},
    "name": "queriesGetAllTasksQuery",
    "operationKind": "query",
    "text": "query queriesGetAllTasksQuery {\n  getAllTasks {\n    aliasId: id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "22e014ba1cc5e311e7e6136f8a770eb6";

export default node;
