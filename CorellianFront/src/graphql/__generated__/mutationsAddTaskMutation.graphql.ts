/**
 * @generated SignedSource<<ad7f69f21fd47145686d8d00f8ed3004>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mutationsAddTaskMutation$variables = {
  description: string;
  status: string;
  title: string;
};
export type mutationsAddTaskMutation$data = {
  readonly createTask: {
    readonly aliasId: number;
    readonly description: string;
    readonly status: string;
    readonly title: string;
  };
};
export type mutationsAddTaskMutation = {
  response: mutationsAddTaskMutation$data;
  variables: mutationsAddTaskMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "createTask",
    "plural": false,
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "mutationsAddTaskMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "mutationsAddTaskMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "f9704ffd934938b25b46e45fe05a0b29",
    "id": null,
    "metadata": {},
    "name": "mutationsAddTaskMutation",
    "operationKind": "mutation",
    "text": "mutation mutationsAddTaskMutation(\n  $title: String!\n  $description: String!\n  $status: String!\n) {\n  createTask(title: $title, description: $description, status: $status) {\n    aliasId: id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "74909f23e7d65510ce5fb197dc26626b";

export default node;
