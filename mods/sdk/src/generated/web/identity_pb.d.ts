import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class CreateWorkspaceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateWorkspaceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkspaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkspaceRequest): CreateWorkspaceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWorkspaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkspaceRequest;
  static deserializeBinaryFromReader(message: CreateWorkspaceRequest, reader: jspb.BinaryReader): CreateWorkspaceRequest;
}

export namespace CreateWorkspaceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateWorkspaceResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): CreateWorkspaceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkspaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkspaceResponse): CreateWorkspaceResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWorkspaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkspaceResponse;
  static deserializeBinaryFromReader(message: CreateWorkspaceResponse, reader: jspb.BinaryReader): CreateWorkspaceResponse;
}

export namespace CreateWorkspaceResponse {
  export type AsObject = {
    ref: string,
  }
}

export class DeleteWorkspaceRequest extends jspb.Message {
  getRef(): string;
  setRef(value: string): DeleteWorkspaceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkspaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkspaceRequest): DeleteWorkspaceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkspaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkspaceRequest;
  static deserializeBinaryFromReader(message: DeleteWorkspaceRequest, reader: jspb.BinaryReader): DeleteWorkspaceRequest;
}

export namespace DeleteWorkspaceRequest {
  export type AsObject = {
    ref: string,
  }
}

export class DeleteWorkspaceResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): DeleteWorkspaceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkspaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkspaceResponse): DeleteWorkspaceResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkspaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkspaceResponse;
  static deserializeBinaryFromReader(message: DeleteWorkspaceResponse, reader: jspb.BinaryReader): DeleteWorkspaceResponse;
}

export namespace DeleteWorkspaceResponse {
  export type AsObject = {
    ref: string,
  }
}

export class GetWorkspaceRequest extends jspb.Message {
  getRef(): string;
  setRef(value: string): GetWorkspaceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceRequest): GetWorkspaceRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceRequest;
  static deserializeBinaryFromReader(message: GetWorkspaceRequest, reader: jspb.BinaryReader): GetWorkspaceRequest;
}

export namespace GetWorkspaceRequest {
  export type AsObject = {
    ref: string,
  }
}

export class ListWorkspacesRequest extends jspb.Message {
  getPageToken(): string;
  setPageToken(value: string): ListWorkspacesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListWorkspacesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkspacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkspacesRequest): ListWorkspacesRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkspacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkspacesRequest;
  static deserializeBinaryFromReader(message: ListWorkspacesRequest, reader: jspb.BinaryReader): ListWorkspacesRequest;
}

export namespace ListWorkspacesRequest {
  export type AsObject = {
    pageToken: string,
    pageSize: number,
  }
}

export class ListWorkspacesResponse extends jspb.Message {
  getWorkspacesList(): Array<Workspace>;
  setWorkspacesList(value: Array<Workspace>): ListWorkspacesResponse;
  clearWorkspacesList(): ListWorkspacesResponse;
  addWorkspaces(value?: Workspace, index?: number): Workspace;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListWorkspacesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkspacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkspacesResponse): ListWorkspacesResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkspacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkspacesResponse;
  static deserializeBinaryFromReader(message: ListWorkspacesResponse, reader: jspb.BinaryReader): ListWorkspacesResponse;
}

export namespace ListWorkspacesResponse {
  export type AsObject = {
    workspacesList: Array<Workspace.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateWorkspaceRequest extends jspb.Message {
  getRef(): string;
  setRef(value: string): UpdateWorkspaceRequest;

  getName(): string;
  setName(value: string): UpdateWorkspaceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkspaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkspaceRequest): UpdateWorkspaceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkspaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkspaceRequest;
  static deserializeBinaryFromReader(message: UpdateWorkspaceRequest, reader: jspb.BinaryReader): UpdateWorkspaceRequest;
}

export namespace UpdateWorkspaceRequest {
  export type AsObject = {
    ref: string,
    name: string,
  }
}

export class UpdateWorkspaceResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): UpdateWorkspaceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkspaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkspaceResponse): UpdateWorkspaceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkspaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkspaceResponse;
  static deserializeBinaryFromReader(message: UpdateWorkspaceResponse, reader: jspb.BinaryReader): UpdateWorkspaceResponse;
}

export namespace UpdateWorkspaceResponse {
  export type AsObject = {
    ref: string,
  }
}

export class InviteUserToWorkspaceRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): InviteUserToWorkspaceRequest;

  getRole(): string;
  setRole(value: string): InviteUserToWorkspaceRequest;

  getName(): string;
  setName(value: string): InviteUserToWorkspaceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteUserToWorkspaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteUserToWorkspaceRequest): InviteUserToWorkspaceRequest.AsObject;
  static serializeBinaryToWriter(message: InviteUserToWorkspaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteUserToWorkspaceRequest;
  static deserializeBinaryFromReader(message: InviteUserToWorkspaceRequest, reader: jspb.BinaryReader): InviteUserToWorkspaceRequest;
}

export namespace InviteUserToWorkspaceRequest {
  export type AsObject = {
    email: string,
    role: string,
    name: string,
  }
}

export class InviteUserToWorkspaceResponse extends jspb.Message {
  getUserRef(): string;
  setUserRef(value: string): InviteUserToWorkspaceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteUserToWorkspaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteUserToWorkspaceResponse): InviteUserToWorkspaceResponse.AsObject;
  static serializeBinaryToWriter(message: InviteUserToWorkspaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteUserToWorkspaceResponse;
  static deserializeBinaryFromReader(message: InviteUserToWorkspaceResponse, reader: jspb.BinaryReader): InviteUserToWorkspaceResponse;
}

export namespace InviteUserToWorkspaceResponse {
  export type AsObject = {
    userRef: string,
  }
}

export class RemoveUserFromWorkspaceRequest extends jspb.Message {
  getUserRef(): string;
  setUserRef(value: string): RemoveUserFromWorkspaceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserFromWorkspaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserFromWorkspaceRequest): RemoveUserFromWorkspaceRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveUserFromWorkspaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserFromWorkspaceRequest;
  static deserializeBinaryFromReader(message: RemoveUserFromWorkspaceRequest, reader: jspb.BinaryReader): RemoveUserFromWorkspaceRequest;
}

export namespace RemoveUserFromWorkspaceRequest {
  export type AsObject = {
    userRef: string,
  }
}

export class RemoveUserFromWorkspaceResponse extends jspb.Message {
  getUserRef(): string;
  setUserRef(value: string): RemoveUserFromWorkspaceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserFromWorkspaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserFromWorkspaceResponse): RemoveUserFromWorkspaceResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveUserFromWorkspaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserFromWorkspaceResponse;
  static deserializeBinaryFromReader(message: RemoveUserFromWorkspaceResponse, reader: jspb.BinaryReader): RemoveUserFromWorkspaceResponse;
}

export namespace RemoveUserFromWorkspaceResponse {
  export type AsObject = {
    userRef: string,
  }
}

export class ResendWorkspaceMembershipInvitationRequest extends jspb.Message {
  getUserRef(): string;
  setUserRef(value: string): ResendWorkspaceMembershipInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendWorkspaceMembershipInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendWorkspaceMembershipInvitationRequest): ResendWorkspaceMembershipInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: ResendWorkspaceMembershipInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendWorkspaceMembershipInvitationRequest;
  static deserializeBinaryFromReader(message: ResendWorkspaceMembershipInvitationRequest, reader: jspb.BinaryReader): ResendWorkspaceMembershipInvitationRequest;
}

export namespace ResendWorkspaceMembershipInvitationRequest {
  export type AsObject = {
    userRef: string,
  }
}

export class ResendWorkspaceMembershipInvitationResponse extends jspb.Message {
  getUserRef(): string;
  setUserRef(value: string): ResendWorkspaceMembershipInvitationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendWorkspaceMembershipInvitationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResendWorkspaceMembershipInvitationResponse): ResendWorkspaceMembershipInvitationResponse.AsObject;
  static serializeBinaryToWriter(message: ResendWorkspaceMembershipInvitationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendWorkspaceMembershipInvitationResponse;
  static deserializeBinaryFromReader(message: ResendWorkspaceMembershipInvitationResponse, reader: jspb.BinaryReader): ResendWorkspaceMembershipInvitationResponse;
}

export namespace ResendWorkspaceMembershipInvitationResponse {
  export type AsObject = {
    userRef: string,
  }
}

export class CreateUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreateUserRequest;

  getPassword(): string;
  setPassword(value: string): CreateUserRequest;

  getName(): string;
  setName(value: string): CreateUserRequest;

  getAvatar(): string;
  setAvatar(value: string): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    email: string,
    password: string,
    name: string,
    avatar: string,
  }
}

export class CreateUserResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): CreateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    ref: string,
  }
}

export class GetUserRequest extends jspb.Message {
  getRef(): string;
  setRef(value: string): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    ref: string,
  }
}

export class GetUserResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): GetUserResponse;

  getEmail(): string;
  setEmail(value: string): GetUserResponse;

  getName(): string;
  setName(value: string): GetUserResponse;

  getAvatar(): string;
  setAvatar(value: string): GetUserResponse;

  getCreatedAt(): number;
  setCreatedAt(value: number): GetUserResponse;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    ref: string,
    email: string,
    name: string,
    avatar: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getRef(): string;
  setRef(value: string): UpdateUserRequest;

  getPassword(): string;
  setPassword(value: string): UpdateUserRequest;

  getName(): string;
  setName(value: string): UpdateUserRequest;

  getAvatar(): string;
  setAvatar(value: string): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    ref: string,
    password: string,
    name: string,
    avatar: string,
  }
}

export class UpdateUserResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): UpdateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
    ref: string,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getRef(): string;
  setRef(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    ref: string,
  }
}

export class DeleteUserResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): DeleteUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    ref: string,
  }
}

export class Workspace extends jspb.Message {
  getRef(): string;
  setRef(value: string): Workspace;

  getName(): string;
  setName(value: string): Workspace;

  getOwnerRef(): string;
  setOwnerRef(value: string): Workspace;

  getCreatedAt(): number;
  setCreatedAt(value: number): Workspace;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Workspace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Workspace.AsObject;
  static toObject(includeInstance: boolean, msg: Workspace): Workspace.AsObject;
  static serializeBinaryToWriter(message: Workspace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workspace;
  static deserializeBinaryFromReader(message: Workspace, reader: jspb.BinaryReader): Workspace;
}

export namespace Workspace {
  export type AsObject = {
    ref: string,
    name: string,
    ownerRef: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateApiKeyRequest extends jspb.Message {
  getRole(): string;
  setRole(value: string): CreateApiKeyRequest;

  getExpiresAt(): number;
  setExpiresAt(value: number): CreateApiKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApiKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApiKeyRequest): CreateApiKeyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateApiKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApiKeyRequest;
  static deserializeBinaryFromReader(message: CreateApiKeyRequest, reader: jspb.BinaryReader): CreateApiKeyRequest;
}

export namespace CreateApiKeyRequest {
  export type AsObject = {
    role: string,
    expiresAt: number,
  }
}

export class CreateApiKeyResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): CreateApiKeyResponse;

  getAccessKeyId(): string;
  setAccessKeyId(value: string): CreateApiKeyResponse;

  getAccessKeySecret(): string;
  setAccessKeySecret(value: string): CreateApiKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApiKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApiKeyResponse): CreateApiKeyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateApiKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApiKeyResponse;
  static deserializeBinaryFromReader(message: CreateApiKeyResponse, reader: jspb.BinaryReader): CreateApiKeyResponse;
}

export namespace CreateApiKeyResponse {
  export type AsObject = {
    ref: string,
    accessKeyId: string,
    accessKeySecret: string,
  }
}

export class DeleteApiKeyRequest extends jspb.Message {
  getRef(): string;
  setRef(value: string): DeleteApiKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApiKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApiKeyRequest): DeleteApiKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApiKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApiKeyRequest;
  static deserializeBinaryFromReader(message: DeleteApiKeyRequest, reader: jspb.BinaryReader): DeleteApiKeyRequest;
}

export namespace DeleteApiKeyRequest {
  export type AsObject = {
    ref: string,
  }
}

export class DeleteApiKeyResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): DeleteApiKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApiKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApiKeyResponse): DeleteApiKeyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteApiKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApiKeyResponse;
  static deserializeBinaryFromReader(message: DeleteApiKeyResponse, reader: jspb.BinaryReader): DeleteApiKeyResponse;
}

export namespace DeleteApiKeyResponse {
  export type AsObject = {
    ref: string,
  }
}

export class ListApiKeysRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListApiKeysRequest;

  getPageToken(): string;
  setPageToken(value: string): ListApiKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiKeysRequest): ListApiKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListApiKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiKeysRequest;
  static deserializeBinaryFromReader(message: ListApiKeysRequest, reader: jspb.BinaryReader): ListApiKeysRequest;
}

export namespace ListApiKeysRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListApiKeysResponse extends jspb.Message {
  getItemsList(): Array<ApiKey>;
  setItemsList(value: Array<ApiKey>): ListApiKeysResponse;
  clearItemsList(): ListApiKeysResponse;
  addItems(value?: ApiKey, index?: number): ApiKey;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListApiKeysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiKeysResponse): ListApiKeysResponse.AsObject;
  static serializeBinaryToWriter(message: ListApiKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiKeysResponse;
  static deserializeBinaryFromReader(message: ListApiKeysResponse, reader: jspb.BinaryReader): ListApiKeysResponse;
}

export namespace ListApiKeysResponse {
  export type AsObject = {
    itemsList: Array<ApiKey.AsObject>,
    nextPageToken: string,
  }
}

export class RegenerateApiKeyRequest extends jspb.Message {
  getRef(): string;
  setRef(value: string): RegenerateApiKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateApiKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateApiKeyRequest): RegenerateApiKeyRequest.AsObject;
  static serializeBinaryToWriter(message: RegenerateApiKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateApiKeyRequest;
  static deserializeBinaryFromReader(message: RegenerateApiKeyRequest, reader: jspb.BinaryReader): RegenerateApiKeyRequest;
}

export namespace RegenerateApiKeyRequest {
  export type AsObject = {
    ref: string,
  }
}

export class RegenerateApiKeyResponse extends jspb.Message {
  getRef(): string;
  setRef(value: string): RegenerateApiKeyResponse;

  getAccessKeyId(): string;
  setAccessKeyId(value: string): RegenerateApiKeyResponse;

  getAccessKeySecret(): string;
  setAccessKeySecret(value: string): RegenerateApiKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegenerateApiKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegenerateApiKeyResponse): RegenerateApiKeyResponse.AsObject;
  static serializeBinaryToWriter(message: RegenerateApiKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegenerateApiKeyResponse;
  static deserializeBinaryFromReader(message: RegenerateApiKeyResponse, reader: jspb.BinaryReader): RegenerateApiKeyResponse;
}

export namespace RegenerateApiKeyResponse {
  export type AsObject = {
    ref: string,
    accessKeyId: string,
    accessKeySecret: string,
  }
}

export class ApiKey extends jspb.Message {
  getRef(): string;
  setRef(value: string): ApiKey;

  getAccessKeyId(): string;
  setAccessKeyId(value: string): ApiKey;

  getRole(): string;
  setRole(value: string): ApiKey;

  getExpiresAt(): number;
  setExpiresAt(value: number): ApiKey;

  getCreatedAt(): number;
  setCreatedAt(value: number): ApiKey;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ApiKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiKey.AsObject;
  static toObject(includeInstance: boolean, msg: ApiKey): ApiKey.AsObject;
  static serializeBinaryToWriter(message: ApiKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiKey;
  static deserializeBinaryFromReader(message: ApiKey, reader: jspb.BinaryReader): ApiKey;
}

export namespace ApiKey {
  export type AsObject = {
    ref: string,
    accessKeyId: string,
    role: string,
    expiresAt: number,
    createdAt: number,
    updatedAt: number,
  }
}

export class ExchangeCredentialsRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): ExchangeCredentialsRequest;

  getPassword(): string;
  setPassword(value: string): ExchangeCredentialsRequest;

  getEphemeralCode(): string;
  setEphemeralCode(value: string): ExchangeCredentialsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeCredentialsRequest): ExchangeCredentialsRequest.AsObject;
  static serializeBinaryToWriter(message: ExchangeCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeCredentialsRequest;
  static deserializeBinaryFromReader(message: ExchangeCredentialsRequest, reader: jspb.BinaryReader): ExchangeCredentialsRequest;
}

export namespace ExchangeCredentialsRequest {
  export type AsObject = {
    username: string,
    password: string,
    ephemeralCode: string,
  }
}

export class ExchangeCredentialsResponse extends jspb.Message {
  getIdToken(): string;
  setIdToken(value: string): ExchangeCredentialsResponse;

  getAccessToken(): string;
  setAccessToken(value: string): ExchangeCredentialsResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): ExchangeCredentialsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeCredentialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeCredentialsResponse): ExchangeCredentialsResponse.AsObject;
  static serializeBinaryToWriter(message: ExchangeCredentialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeCredentialsResponse;
  static deserializeBinaryFromReader(message: ExchangeCredentialsResponse, reader: jspb.BinaryReader): ExchangeCredentialsResponse;
}

export namespace ExchangeCredentialsResponse {
  export type AsObject = {
    idToken: string,
    accessToken: string,
    refreshToken: string,
  }
}

export class ExchangeApiKeyRequest extends jspb.Message {
  getAccessKeyId(): string;
  setAccessKeyId(value: string): ExchangeApiKeyRequest;

  getAccessKeySecret(): string;
  setAccessKeySecret(value: string): ExchangeApiKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeApiKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeApiKeyRequest): ExchangeApiKeyRequest.AsObject;
  static serializeBinaryToWriter(message: ExchangeApiKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeApiKeyRequest;
  static deserializeBinaryFromReader(message: ExchangeApiKeyRequest, reader: jspb.BinaryReader): ExchangeApiKeyRequest;
}

export namespace ExchangeApiKeyRequest {
  export type AsObject = {
    accessKeyId: string,
    accessKeySecret: string,
  }
}

export class ExchangeApiKeyResponse extends jspb.Message {
  getIdToken(): string;
  setIdToken(value: string): ExchangeApiKeyResponse;

  getAccessToken(): string;
  setAccessToken(value: string): ExchangeApiKeyResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): ExchangeApiKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeApiKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeApiKeyResponse): ExchangeApiKeyResponse.AsObject;
  static serializeBinaryToWriter(message: ExchangeApiKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeApiKeyResponse;
  static deserializeBinaryFromReader(message: ExchangeApiKeyResponse, reader: jspb.BinaryReader): ExchangeApiKeyResponse;
}

export namespace ExchangeApiKeyResponse {
  export type AsObject = {
    idToken: string,
    accessToken: string,
    refreshToken: string,
  }
}

export class ExchangeOAuth2CodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): ExchangeOAuth2CodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeOAuth2CodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeOAuth2CodeRequest): ExchangeOAuth2CodeRequest.AsObject;
  static serializeBinaryToWriter(message: ExchangeOAuth2CodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeOAuth2CodeRequest;
  static deserializeBinaryFromReader(message: ExchangeOAuth2CodeRequest, reader: jspb.BinaryReader): ExchangeOAuth2CodeRequest;
}

export namespace ExchangeOAuth2CodeRequest {
  export type AsObject = {
    code: string,
  }
}

export class ExchangeOAuth2CodeResponse extends jspb.Message {
  getIdToken(): string;
  setIdToken(value: string): ExchangeOAuth2CodeResponse;

  getAccessToken(): string;
  setAccessToken(value: string): ExchangeOAuth2CodeResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): ExchangeOAuth2CodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeOAuth2CodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeOAuth2CodeResponse): ExchangeOAuth2CodeResponse.AsObject;
  static serializeBinaryToWriter(message: ExchangeOAuth2CodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeOAuth2CodeResponse;
  static deserializeBinaryFromReader(message: ExchangeOAuth2CodeResponse, reader: jspb.BinaryReader): ExchangeOAuth2CodeResponse;
}

export namespace ExchangeOAuth2CodeResponse {
  export type AsObject = {
    idToken: string,
    accessToken: string,
    refreshToken: string,
  }
}

export class ExchangeRefreshTokenRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): ExchangeRefreshTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeRefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeRefreshTokenRequest): ExchangeRefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: ExchangeRefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeRefreshTokenRequest;
  static deserializeBinaryFromReader(message: ExchangeRefreshTokenRequest, reader: jspb.BinaryReader): ExchangeRefreshTokenRequest;
}

export namespace ExchangeRefreshTokenRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

export class ExchangeRefreshTokenResponse extends jspb.Message {
  getIdToken(): string;
  setIdToken(value: string): ExchangeRefreshTokenResponse;

  getAccessToken(): string;
  setAccessToken(value: string): ExchangeRefreshTokenResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): ExchangeRefreshTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeRefreshTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeRefreshTokenResponse): ExchangeRefreshTokenResponse.AsObject;
  static serializeBinaryToWriter(message: ExchangeRefreshTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeRefreshTokenResponse;
  static deserializeBinaryFromReader(message: ExchangeRefreshTokenResponse, reader: jspb.BinaryReader): ExchangeRefreshTokenResponse;
}

export namespace ExchangeRefreshTokenResponse {
  export type AsObject = {
    idToken: string,
    accessToken: string,
    refreshToken: string,
  }
}

export class RevokeTokenRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): RevokeTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeTokenRequest): RevokeTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RevokeTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeTokenRequest;
  static deserializeBinaryFromReader(message: RevokeTokenRequest, reader: jspb.BinaryReader): RevokeTokenRequest;
}

export namespace RevokeTokenRequest {
  export type AsObject = {
    token: string,
  }
}

export class RevokeTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): RevokeTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeTokenResponse): RevokeTokenResponse.AsObject;
  static serializeBinaryToWriter(message: RevokeTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeTokenResponse;
  static deserializeBinaryFromReader(message: RevokeTokenResponse, reader: jspb.BinaryReader): RevokeTokenResponse;
}

export namespace RevokeTokenResponse {
  export type AsObject = {
    token: string,
  }
}

export class GetPublicKeyResponse extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): GetPublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicKeyResponse): GetPublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GetPublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicKeyResponse;
  static deserializeBinaryFromReader(message: GetPublicKeyResponse, reader: jspb.BinaryReader): GetPublicKeyResponse;
}

export namespace GetPublicKeyResponse {
  export type AsObject = {
    publicKey: string,
  }
}

