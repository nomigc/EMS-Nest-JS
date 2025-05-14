import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

/**
 * This is wrapper on Nest Js Exception but with custom response.
 * @param {String} message Message send to client.
 * @param {Object} data Default data will be null.
 */
export const conflictException = (message: string, data: any = null) => {
  return new ConflictException({
    success: false,
    message,
    data,
  });
};

/**
 * This is wrapper on Nest Js Exception but with custom response.
 * @param {String} message Message send to client.
 * @param {Object} data Default data will be null.
 */
export const badRequestException = (message: string, data: any = null) => {
  return new BadRequestException({
    success: false,
    message,
    data,
  });
};

/**
 * This is wrapper on Nest Js Exception but with custom response.
 * @param {String} message Message send to client.
 * @param {Object} data Default data will be null.
 */
export const notFoundException = (message: string, data: any = null) => {
  return new NotFoundException({
    success: false,
    message,
    data,
  });
};

/**
 * This is wrapper on Nest Js Exception but with custom response.
 * @param {String} message Message send to client.
 * @param {Object} data Default data will be null.
 */
export const forbiddenException = (message: string, data: any = null) => {
  return new ForbiddenException({
    success: false,
    message,
    data,
  });
};

/**
 * This is wrapper on Nest Js Exception but with custom response.
 * @param {String} message Message send to client.
 * @param {Object} data Default data will be null.
 */
export const unauthorizedException = (message: string, data: any = null) => {
  return new UnauthorizedException({
    success: false,
    message,
    data,
  });
};
