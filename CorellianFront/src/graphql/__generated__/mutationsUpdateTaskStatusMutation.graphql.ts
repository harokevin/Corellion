/**
 * @generated SignedSource<<b96f223729378edc498b330ff3218f13>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mutationsUpdateTaskStatusMutation$variables = {
  id: number;
  status: string;
};
export type mutationsUpdateTaskStatusMutation$data = {
  readonly updateTaskStatus: {
    readonly aliasId: number;
    readonly description: string;
    readonly status: string;
    readonly title: string;
  };
};
export type mutationsUpdateTaskStatusMutation = {
  response: mutationsUpdateTaskStatusMutation$data;
  variables: mutationsUpdateTaskStatusMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "updateTaskStatus",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mutationsUpdateTaskStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutationsUpdateTaskStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b8fecfad6529e7b32c442088143911cd",
    "id": null,
    "metadata": {},
    "name": "mutationsUpdateTaskStatusMutation",
    "operationKind": "mutation",
    "text": "mutation mutationsUpdateTaskStatusMutation(\n  $id: Int!\n  $status: String!\n) {\n  updateTaskStatus(id: $id, status: $status) {\n    aliasId: id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "d5d48f412c817f4bfd455a71f07cc1ee";

export default node;
