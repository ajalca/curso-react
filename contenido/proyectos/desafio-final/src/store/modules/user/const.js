const MODULE = 'USER';
const GET_ALL = 'GET_ALL';
const GET = 'GET';
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const UPDATE = 'UPDATE';

export const USER_GET_ALL_START = `${MODULE}/${GET_ALL}/START`;
export const USER_GET_ALL_SUCCESS = `${MODULE}/${GET_ALL}/SUCCESS`;
export const USER_GET_ALL_ERROR = `${MODULE}/${GET_ALL}/ERROR`;

export const USER_GET_START = `${MODULE}/${GET}/START`;
export const USER_GET_SUCCESS = `${MODULE}/${GET}/SUCCESS`;
export const USER_GET_ERROR = `${MODULE}/${GET}/ERROR`;

export const USER_CREATE_START = `${MODULE}/${CREATE}/START`;
export const USER_CREATE_SUCCESS = `${MODULE}/${CREATE}/SUCCESS`;
export const USER_CREATE_ERROR = `${MODULE}/${CREATE}/ERROR`;

export const USER_DELETE_START = `${MODULE}/${DELETE}/START`;
export const USER_DELETE_SUCCESS = `${MODULE}/${DELETE}/SUCCESS`;
export const USER_DELETE_ERROR = `${MODULE}/${DELETE}/ERROR`;

export const USER_UPDATE_START = `${MODULE}/${UPDATE}/START`;
export const USER_UPDATE_SUCCESS = `${MODULE}/${UPDATE}/SUCCESS`;
export const USER_UPDATE_ERROR = `${MODULE}/${UPDATE}/ERROR`;