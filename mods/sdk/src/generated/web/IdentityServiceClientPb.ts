/**
 * @fileoverview gRPC-Web generated client stub for fonoster.identity.v1beta2
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: identity.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as identity_pb from './identity_pb'; // proto import: "identity.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class IdentityClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateWorkspace = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/CreateWorkspace',
    grpcWeb.MethodType.UNARY,
    identity_pb.CreateWorkspaceRequest,
    identity_pb.CreateWorkspaceResponse,
    (request: identity_pb.CreateWorkspaceRequest) => {
      return request.serializeBinary();
    },
    identity_pb.CreateWorkspaceResponse.deserializeBinary
  );

  createWorkspace(
    request: identity_pb.CreateWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.CreateWorkspaceResponse>;

  createWorkspace(
    request: identity_pb.CreateWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.CreateWorkspaceResponse) => void): grpcWeb.ClientReadableStream<identity_pb.CreateWorkspaceResponse>;

  createWorkspace(
    request: identity_pb.CreateWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.CreateWorkspaceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/CreateWorkspace',
        request,
        metadata || {},
        this.methodDescriptorCreateWorkspace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/CreateWorkspace',
    request,
    metadata || {},
    this.methodDescriptorCreateWorkspace);
  }

  methodDescriptorDeleteWorkspace = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/DeleteWorkspace',
    grpcWeb.MethodType.UNARY,
    identity_pb.DeleteWorkspaceRequest,
    identity_pb.DeleteWorkspaceResponse,
    (request: identity_pb.DeleteWorkspaceRequest) => {
      return request.serializeBinary();
    },
    identity_pb.DeleteWorkspaceResponse.deserializeBinary
  );

  deleteWorkspace(
    request: identity_pb.DeleteWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.DeleteWorkspaceResponse>;

  deleteWorkspace(
    request: identity_pb.DeleteWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.DeleteWorkspaceResponse) => void): grpcWeb.ClientReadableStream<identity_pb.DeleteWorkspaceResponse>;

  deleteWorkspace(
    request: identity_pb.DeleteWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.DeleteWorkspaceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/DeleteWorkspace',
        request,
        metadata || {},
        this.methodDescriptorDeleteWorkspace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/DeleteWorkspace',
    request,
    metadata || {},
    this.methodDescriptorDeleteWorkspace);
  }

  methodDescriptorGetWorkspace = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/GetWorkspace',
    grpcWeb.MethodType.UNARY,
    identity_pb.GetWorkspaceRequest,
    identity_pb.Workspace,
    (request: identity_pb.GetWorkspaceRequest) => {
      return request.serializeBinary();
    },
    identity_pb.Workspace.deserializeBinary
  );

  getWorkspace(
    request: identity_pb.GetWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.Workspace>;

  getWorkspace(
    request: identity_pb.GetWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.Workspace) => void): grpcWeb.ClientReadableStream<identity_pb.Workspace>;

  getWorkspace(
    request: identity_pb.GetWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.Workspace) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/GetWorkspace',
        request,
        metadata || {},
        this.methodDescriptorGetWorkspace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/GetWorkspace',
    request,
    metadata || {},
    this.methodDescriptorGetWorkspace);
  }

  methodDescriptorListWorkspaces = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/ListWorkspaces',
    grpcWeb.MethodType.UNARY,
    identity_pb.ListWorkspacesRequest,
    identity_pb.ListWorkspacesResponse,
    (request: identity_pb.ListWorkspacesRequest) => {
      return request.serializeBinary();
    },
    identity_pb.ListWorkspacesResponse.deserializeBinary
  );

  listWorkspaces(
    request: identity_pb.ListWorkspacesRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.ListWorkspacesResponse>;

  listWorkspaces(
    request: identity_pb.ListWorkspacesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.ListWorkspacesResponse) => void): grpcWeb.ClientReadableStream<identity_pb.ListWorkspacesResponse>;

  listWorkspaces(
    request: identity_pb.ListWorkspacesRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.ListWorkspacesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/ListWorkspaces',
        request,
        metadata || {},
        this.methodDescriptorListWorkspaces,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/ListWorkspaces',
    request,
    metadata || {},
    this.methodDescriptorListWorkspaces);
  }

  methodDescriptorUpdateWorkspace = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/UpdateWorkspace',
    grpcWeb.MethodType.UNARY,
    identity_pb.UpdateWorkspaceRequest,
    identity_pb.UpdateWorkspaceResponse,
    (request: identity_pb.UpdateWorkspaceRequest) => {
      return request.serializeBinary();
    },
    identity_pb.UpdateWorkspaceResponse.deserializeBinary
  );

  updateWorkspace(
    request: identity_pb.UpdateWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.UpdateWorkspaceResponse>;

  updateWorkspace(
    request: identity_pb.UpdateWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.UpdateWorkspaceResponse) => void): grpcWeb.ClientReadableStream<identity_pb.UpdateWorkspaceResponse>;

  updateWorkspace(
    request: identity_pb.UpdateWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.UpdateWorkspaceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/UpdateWorkspace',
        request,
        metadata || {},
        this.methodDescriptorUpdateWorkspace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/UpdateWorkspace',
    request,
    metadata || {},
    this.methodDescriptorUpdateWorkspace);
  }

  methodDescriptorInviteUserToWorkspace = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/InviteUserToWorkspace',
    grpcWeb.MethodType.UNARY,
    identity_pb.InviteUserToWorkspaceRequest,
    identity_pb.InviteUserToWorkspaceResponse,
    (request: identity_pb.InviteUserToWorkspaceRequest) => {
      return request.serializeBinary();
    },
    identity_pb.InviteUserToWorkspaceResponse.deserializeBinary
  );

  inviteUserToWorkspace(
    request: identity_pb.InviteUserToWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.InviteUserToWorkspaceResponse>;

  inviteUserToWorkspace(
    request: identity_pb.InviteUserToWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.InviteUserToWorkspaceResponse) => void): grpcWeb.ClientReadableStream<identity_pb.InviteUserToWorkspaceResponse>;

  inviteUserToWorkspace(
    request: identity_pb.InviteUserToWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.InviteUserToWorkspaceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/InviteUserToWorkspace',
        request,
        metadata || {},
        this.methodDescriptorInviteUserToWorkspace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/InviteUserToWorkspace',
    request,
    metadata || {},
    this.methodDescriptorInviteUserToWorkspace);
  }

  methodDescriptorRemoveUserFromWorkspace = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/RemoveUserFromWorkspace',
    grpcWeb.MethodType.UNARY,
    identity_pb.RemoveUserFromWorkspaceRequest,
    identity_pb.RemoveUserFromWorkspaceResponse,
    (request: identity_pb.RemoveUserFromWorkspaceRequest) => {
      return request.serializeBinary();
    },
    identity_pb.RemoveUserFromWorkspaceResponse.deserializeBinary
  );

  removeUserFromWorkspace(
    request: identity_pb.RemoveUserFromWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.RemoveUserFromWorkspaceResponse>;

  removeUserFromWorkspace(
    request: identity_pb.RemoveUserFromWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.RemoveUserFromWorkspaceResponse) => void): grpcWeb.ClientReadableStream<identity_pb.RemoveUserFromWorkspaceResponse>;

  removeUserFromWorkspace(
    request: identity_pb.RemoveUserFromWorkspaceRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.RemoveUserFromWorkspaceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/RemoveUserFromWorkspace',
        request,
        metadata || {},
        this.methodDescriptorRemoveUserFromWorkspace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/RemoveUserFromWorkspace',
    request,
    metadata || {},
    this.methodDescriptorRemoveUserFromWorkspace);
  }

  methodDescriptorResendWorkspaceMembershipInvitation = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/ResendWorkspaceMembershipInvitation',
    grpcWeb.MethodType.UNARY,
    identity_pb.ResendWorkspaceMembershipInvitationRequest,
    identity_pb.ResendWorkspaceMembershipInvitationResponse,
    (request: identity_pb.ResendWorkspaceMembershipInvitationRequest) => {
      return request.serializeBinary();
    },
    identity_pb.ResendWorkspaceMembershipInvitationResponse.deserializeBinary
  );

  resendWorkspaceMembershipInvitation(
    request: identity_pb.ResendWorkspaceMembershipInvitationRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.ResendWorkspaceMembershipInvitationResponse>;

  resendWorkspaceMembershipInvitation(
    request: identity_pb.ResendWorkspaceMembershipInvitationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.ResendWorkspaceMembershipInvitationResponse) => void): grpcWeb.ClientReadableStream<identity_pb.ResendWorkspaceMembershipInvitationResponse>;

  resendWorkspaceMembershipInvitation(
    request: identity_pb.ResendWorkspaceMembershipInvitationRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.ResendWorkspaceMembershipInvitationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/ResendWorkspaceMembershipInvitation',
        request,
        metadata || {},
        this.methodDescriptorResendWorkspaceMembershipInvitation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/ResendWorkspaceMembershipInvitation',
    request,
    metadata || {},
    this.methodDescriptorResendWorkspaceMembershipInvitation);
  }

  methodDescriptorCreateUser = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/CreateUser',
    grpcWeb.MethodType.UNARY,
    identity_pb.CreateUserRequest,
    identity_pb.CreateUserResponse,
    (request: identity_pb.CreateUserRequest) => {
      return request.serializeBinary();
    },
    identity_pb.CreateUserResponse.deserializeBinary
  );

  createUser(
    request: identity_pb.CreateUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.CreateUserResponse>;

  createUser(
    request: identity_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.CreateUserResponse) => void): grpcWeb.ClientReadableStream<identity_pb.CreateUserResponse>;

  createUser(
    request: identity_pb.CreateUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.CreateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/CreateUser',
        request,
        metadata || {},
        this.methodDescriptorCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/CreateUser',
    request,
    metadata || {},
    this.methodDescriptorCreateUser);
  }

  methodDescriptorGetUser = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/GetUser',
    grpcWeb.MethodType.UNARY,
    identity_pb.GetUserRequest,
    identity_pb.GetUserResponse,
    (request: identity_pb.GetUserRequest) => {
      return request.serializeBinary();
    },
    identity_pb.GetUserResponse.deserializeBinary
  );

  getUser(
    request: identity_pb.GetUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.GetUserResponse>;

  getUser(
    request: identity_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.GetUserResponse) => void): grpcWeb.ClientReadableStream<identity_pb.GetUserResponse>;

  getUser(
    request: identity_pb.GetUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.GetUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/GetUser',
        request,
        metadata || {},
        this.methodDescriptorGetUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/GetUser',
    request,
    metadata || {},
    this.methodDescriptorGetUser);
  }

  methodDescriptorUpdateUser = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/UpdateUser',
    grpcWeb.MethodType.UNARY,
    identity_pb.UpdateUserRequest,
    identity_pb.UpdateUserResponse,
    (request: identity_pb.UpdateUserRequest) => {
      return request.serializeBinary();
    },
    identity_pb.UpdateUserResponse.deserializeBinary
  );

  updateUser(
    request: identity_pb.UpdateUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.UpdateUserResponse>;

  updateUser(
    request: identity_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.UpdateUserResponse) => void): grpcWeb.ClientReadableStream<identity_pb.UpdateUserResponse>;

  updateUser(
    request: identity_pb.UpdateUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.UpdateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/UpdateUser',
        request,
        metadata || {},
        this.methodDescriptorUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/UpdateUser',
    request,
    metadata || {},
    this.methodDescriptorUpdateUser);
  }

  methodDescriptorDeleteUser = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/DeleteUser',
    grpcWeb.MethodType.UNARY,
    identity_pb.DeleteUserRequest,
    identity_pb.DeleteUserResponse,
    (request: identity_pb.DeleteUserRequest) => {
      return request.serializeBinary();
    },
    identity_pb.DeleteUserResponse.deserializeBinary
  );

  deleteUser(
    request: identity_pb.DeleteUserRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.DeleteUserResponse>;

  deleteUser(
    request: identity_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.DeleteUserResponse) => void): grpcWeb.ClientReadableStream<identity_pb.DeleteUserResponse>;

  deleteUser(
    request: identity_pb.DeleteUserRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.DeleteUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/DeleteUser',
        request,
        metadata || {},
        this.methodDescriptorDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/DeleteUser',
    request,
    metadata || {},
    this.methodDescriptorDeleteUser);
  }

  methodDescriptorCreateApiKey = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/CreateApiKey',
    grpcWeb.MethodType.UNARY,
    identity_pb.CreateApiKeyRequest,
    identity_pb.CreateApiKeyResponse,
    (request: identity_pb.CreateApiKeyRequest) => {
      return request.serializeBinary();
    },
    identity_pb.CreateApiKeyResponse.deserializeBinary
  );

  createApiKey(
    request: identity_pb.CreateApiKeyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.CreateApiKeyResponse>;

  createApiKey(
    request: identity_pb.CreateApiKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.CreateApiKeyResponse) => void): grpcWeb.ClientReadableStream<identity_pb.CreateApiKeyResponse>;

  createApiKey(
    request: identity_pb.CreateApiKeyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.CreateApiKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/CreateApiKey',
        request,
        metadata || {},
        this.methodDescriptorCreateApiKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/CreateApiKey',
    request,
    metadata || {},
    this.methodDescriptorCreateApiKey);
  }

  methodDescriptorDeleteApiKey = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/DeleteApiKey',
    grpcWeb.MethodType.UNARY,
    identity_pb.DeleteApiKeyRequest,
    identity_pb.DeleteApiKeyResponse,
    (request: identity_pb.DeleteApiKeyRequest) => {
      return request.serializeBinary();
    },
    identity_pb.DeleteApiKeyResponse.deserializeBinary
  );

  deleteApiKey(
    request: identity_pb.DeleteApiKeyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.DeleteApiKeyResponse>;

  deleteApiKey(
    request: identity_pb.DeleteApiKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.DeleteApiKeyResponse) => void): grpcWeb.ClientReadableStream<identity_pb.DeleteApiKeyResponse>;

  deleteApiKey(
    request: identity_pb.DeleteApiKeyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.DeleteApiKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/DeleteApiKey',
        request,
        metadata || {},
        this.methodDescriptorDeleteApiKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/DeleteApiKey',
    request,
    metadata || {},
    this.methodDescriptorDeleteApiKey);
  }

  methodDescriptorListApiKeys = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/ListApiKeys',
    grpcWeb.MethodType.UNARY,
    identity_pb.ListApiKeysRequest,
    identity_pb.ListApiKeysResponse,
    (request: identity_pb.ListApiKeysRequest) => {
      return request.serializeBinary();
    },
    identity_pb.ListApiKeysResponse.deserializeBinary
  );

  listApiKeys(
    request: identity_pb.ListApiKeysRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.ListApiKeysResponse>;

  listApiKeys(
    request: identity_pb.ListApiKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.ListApiKeysResponse) => void): grpcWeb.ClientReadableStream<identity_pb.ListApiKeysResponse>;

  listApiKeys(
    request: identity_pb.ListApiKeysRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.ListApiKeysResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/ListApiKeys',
        request,
        metadata || {},
        this.methodDescriptorListApiKeys,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/ListApiKeys',
    request,
    metadata || {},
    this.methodDescriptorListApiKeys);
  }

  methodDescriptorRegenerateApiKey = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/RegenerateApiKey',
    grpcWeb.MethodType.UNARY,
    identity_pb.RegenerateApiKeyRequest,
    identity_pb.RegenerateApiKeyResponse,
    (request: identity_pb.RegenerateApiKeyRequest) => {
      return request.serializeBinary();
    },
    identity_pb.RegenerateApiKeyResponse.deserializeBinary
  );

  regenerateApiKey(
    request: identity_pb.RegenerateApiKeyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.RegenerateApiKeyResponse>;

  regenerateApiKey(
    request: identity_pb.RegenerateApiKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.RegenerateApiKeyResponse) => void): grpcWeb.ClientReadableStream<identity_pb.RegenerateApiKeyResponse>;

  regenerateApiKey(
    request: identity_pb.RegenerateApiKeyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.RegenerateApiKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/RegenerateApiKey',
        request,
        metadata || {},
        this.methodDescriptorRegenerateApiKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/RegenerateApiKey',
    request,
    metadata || {},
    this.methodDescriptorRegenerateApiKey);
  }

  methodDescriptorExchangeCredentials = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/ExchangeCredentials',
    grpcWeb.MethodType.UNARY,
    identity_pb.ExchangeCredentialsRequest,
    identity_pb.ExchangeCredentialsResponse,
    (request: identity_pb.ExchangeCredentialsRequest) => {
      return request.serializeBinary();
    },
    identity_pb.ExchangeCredentialsResponse.deserializeBinary
  );

  exchangeCredentials(
    request: identity_pb.ExchangeCredentialsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.ExchangeCredentialsResponse>;

  exchangeCredentials(
    request: identity_pb.ExchangeCredentialsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.ExchangeCredentialsResponse) => void): grpcWeb.ClientReadableStream<identity_pb.ExchangeCredentialsResponse>;

  exchangeCredentials(
    request: identity_pb.ExchangeCredentialsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.ExchangeCredentialsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/ExchangeCredentials',
        request,
        metadata || {},
        this.methodDescriptorExchangeCredentials,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/ExchangeCredentials',
    request,
    metadata || {},
    this.methodDescriptorExchangeCredentials);
  }

  methodDescriptorExchangeApiKey = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/ExchangeApiKey',
    grpcWeb.MethodType.UNARY,
    identity_pb.ExchangeApiKeyRequest,
    identity_pb.ExchangeApiKeyResponse,
    (request: identity_pb.ExchangeApiKeyRequest) => {
      return request.serializeBinary();
    },
    identity_pb.ExchangeApiKeyResponse.deserializeBinary
  );

  exchangeApiKey(
    request: identity_pb.ExchangeApiKeyRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.ExchangeApiKeyResponse>;

  exchangeApiKey(
    request: identity_pb.ExchangeApiKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.ExchangeApiKeyResponse) => void): grpcWeb.ClientReadableStream<identity_pb.ExchangeApiKeyResponse>;

  exchangeApiKey(
    request: identity_pb.ExchangeApiKeyRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.ExchangeApiKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/ExchangeApiKey',
        request,
        metadata || {},
        this.methodDescriptorExchangeApiKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/ExchangeApiKey',
    request,
    metadata || {},
    this.methodDescriptorExchangeApiKey);
  }

  methodDescriptorExchangeOAuth2Code = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/ExchangeOAuth2Code',
    grpcWeb.MethodType.UNARY,
    identity_pb.ExchangeOAuth2CodeRequest,
    identity_pb.ExchangeOAuth2CodeResponse,
    (request: identity_pb.ExchangeOAuth2CodeRequest) => {
      return request.serializeBinary();
    },
    identity_pb.ExchangeOAuth2CodeResponse.deserializeBinary
  );

  exchangeOAuth2Code(
    request: identity_pb.ExchangeOAuth2CodeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.ExchangeOAuth2CodeResponse>;

  exchangeOAuth2Code(
    request: identity_pb.ExchangeOAuth2CodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.ExchangeOAuth2CodeResponse) => void): grpcWeb.ClientReadableStream<identity_pb.ExchangeOAuth2CodeResponse>;

  exchangeOAuth2Code(
    request: identity_pb.ExchangeOAuth2CodeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.ExchangeOAuth2CodeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/ExchangeOAuth2Code',
        request,
        metadata || {},
        this.methodDescriptorExchangeOAuth2Code,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/ExchangeOAuth2Code',
    request,
    metadata || {},
    this.methodDescriptorExchangeOAuth2Code);
  }

  methodDescriptorExchangeRefreshToken = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/ExchangeRefreshToken',
    grpcWeb.MethodType.UNARY,
    identity_pb.ExchangeRefreshTokenRequest,
    identity_pb.ExchangeRefreshTokenResponse,
    (request: identity_pb.ExchangeRefreshTokenRequest) => {
      return request.serializeBinary();
    },
    identity_pb.ExchangeRefreshTokenResponse.deserializeBinary
  );

  exchangeRefreshToken(
    request: identity_pb.ExchangeRefreshTokenRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.ExchangeRefreshTokenResponse>;

  exchangeRefreshToken(
    request: identity_pb.ExchangeRefreshTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.ExchangeRefreshTokenResponse) => void): grpcWeb.ClientReadableStream<identity_pb.ExchangeRefreshTokenResponse>;

  exchangeRefreshToken(
    request: identity_pb.ExchangeRefreshTokenRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.ExchangeRefreshTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/ExchangeRefreshToken',
        request,
        metadata || {},
        this.methodDescriptorExchangeRefreshToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/ExchangeRefreshToken',
    request,
    metadata || {},
    this.methodDescriptorExchangeRefreshToken);
  }

  methodDescriptorRevokeToken = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/RevokeToken',
    grpcWeb.MethodType.UNARY,
    identity_pb.RevokeTokenRequest,
    identity_pb.RevokeTokenResponse,
    (request: identity_pb.RevokeTokenRequest) => {
      return request.serializeBinary();
    },
    identity_pb.RevokeTokenResponse.deserializeBinary
  );

  revokeToken(
    request: identity_pb.RevokeTokenRequest,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.RevokeTokenResponse>;

  revokeToken(
    request: identity_pb.RevokeTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.RevokeTokenResponse) => void): grpcWeb.ClientReadableStream<identity_pb.RevokeTokenResponse>;

  revokeToken(
    request: identity_pb.RevokeTokenRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.RevokeTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/RevokeToken',
        request,
        metadata || {},
        this.methodDescriptorRevokeToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/RevokeToken',
    request,
    metadata || {},
    this.methodDescriptorRevokeToken);
  }

  methodDescriptorGetPublicKey = new grpcWeb.MethodDescriptor(
    '/fonoster.identity.v1beta2.Identity/GetPublicKey',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    identity_pb.GetPublicKeyResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    identity_pb.GetPublicKeyResponse.deserializeBinary
  );

  getPublicKey(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<identity_pb.GetPublicKeyResponse>;

  getPublicKey(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: identity_pb.GetPublicKeyResponse) => void): grpcWeb.ClientReadableStream<identity_pb.GetPublicKeyResponse>;

  getPublicKey(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: identity_pb.GetPublicKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.identity.v1beta2.Identity/GetPublicKey',
        request,
        metadata || {},
        this.methodDescriptorGetPublicKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.identity.v1beta2.Identity/GetPublicKey',
    request,
    metadata || {},
    this.methodDescriptorGetPublicKey);
  }

}

