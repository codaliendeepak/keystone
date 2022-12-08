"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);

// core/src/schema/schema.ts
function config(config2) {
  return config2;
}
function list(config2) {
  return { ...config2 };
}

// core/src/types/schema/graphql-ts-schema.ts
var graphql_ts_schema_exports = {};
__export(graphql_ts_schema_exports, {
  BigInt: () => BigInt,
  Boolean: () => import_api_without_context.Boolean,
  CalendarDay: () => CalendarDay,
  DateTime: () => DateTime,
  Decimal: () => Decimal,
  Float: () => import_api_without_context.Float,
  ID: () => import_api_without_context.ID,
  Int: () => import_api_without_context.Int,
  JSON: () => JSON2,
  String: () => import_api_without_context.String,
  Upload: () => Upload,
  arg: () => import_api_without_context.arg,
  bindGraphQLSchemaAPIToContext: () => import_schema.bindGraphQLSchemaAPIToContext,
  enum: () => import_api_without_context.enum,
  enumValues: () => import_api_without_context.enumValues,
  extend: () => import_extend.extend,
  field: () => field,
  fields: () => schema_api_with_context_exports.fields,
  inputObject: () => import_api_without_context.inputObject,
  interface: () => schema_api_with_context_exports.interface,
  interfaceField: () => schema_api_with_context_exports.interfaceField,
  list: () => import_api_without_context.list,
  nonNull: () => import_api_without_context.nonNull,
  object: () => schema_api_with_context_exports.object,
  scalar: () => import_api_without_context.scalar,
  union: () => schema_api_with_context_exports.union,
  wrap: () => import_extend.wrap
});
var graphqlTsSchema = __toESM(require("@graphql-ts/schema"));
var import_GraphQLUpload = __toESM(require("graphql-upload/GraphQLUpload.js"));
var import_graphql = require("graphql");
var import_decimal = require("decimal.js");
var import_api_without_context = require("@graphql-ts/schema/api-without-context");
var import_schema = require("@graphql-ts/schema");
var import_extend = require("@graphql-ts/extend");

// core/src/types/schema/schema-api-with-context.js
var schema_api_with_context_exports = {};
__reExport(schema_api_with_context_exports, require("@graphql-ts/schema/api-with-context"));

// core/src/types/schema/graphql-ts-schema.ts
var field = schema_api_with_context_exports.field;
var JSON2 = graphqlTsSchema.graphql.scalar(
  new import_graphql.GraphQLScalarType({
    name: "JSON",
    description: "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
    specifiedByURL: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"
  })
);
var Upload = graphqlTsSchema.graphql.scalar(import_GraphQLUpload.default);
var Decimal = graphqlTsSchema.graphql.scalar(
  new import_graphql.GraphQLScalarType({
    name: "Decimal",
    serialize(value) {
      if (!import_decimal.Decimal.isDecimal(value)) {
        throw new import_graphql.GraphQLError(`unexpected value provided to Decimal scalar: ${value}`);
      }
      const cast = value;
      if (cast.scaleToPrint !== void 0) {
        return value.toFixed(cast.scaleToPrint);
      }
      return value.toString();
    },
    parseLiteral(value) {
      if (value.kind !== "StringValue") {
        throw new import_graphql.GraphQLError("Decimal only accepts values as strings");
      }
      let decimal2 = new import_decimal.Decimal(value.value);
      if (!decimal2.isFinite()) {
        throw new import_graphql.GraphQLError("Decimal values must be finite");
      }
      return decimal2;
    },
    parseValue(value) {
      if (import_decimal.Decimal.isDecimal(value)) {
        if (!value.isFinite()) {
          throw new import_graphql.GraphQLError("Decimal values must be finite");
        }
        return value;
      }
      if (typeof value !== "string") {
        throw new import_graphql.GraphQLError("Decimal only accepts values as strings");
      }
      let decimal2 = new import_decimal.Decimal(value);
      if (!decimal2.isFinite()) {
        throw new import_graphql.GraphQLError("Decimal values must be finite");
      }
      return decimal2;
    }
  })
);
var BigInt = graphqlTsSchema.graphql.scalar(
  new import_graphql.GraphQLScalarType({
    name: "BigInt",
    serialize(value) {
      if (typeof value !== "bigint") {
        throw new import_graphql.GraphQLError(`unexpected value provided to BigInt scalar: ${value}`);
      }
      return value.toString();
    },
    parseLiteral(value) {
      if (value.kind !== "StringValue") {
        throw new import_graphql.GraphQLError("BigInt only accepts values as strings");
      }
      return globalThis.BigInt(value.value);
    },
    parseValue(value) {
      if (typeof value === "bigint") {
        return value;
      }
      if (typeof value !== "string") {
        throw new import_graphql.GraphQLError("BigInt only accepts values as strings");
      }
      return globalThis.BigInt(value);
    }
  })
);
var RFC_3339_REGEX = /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;
function parseDate(input) {
  if (!RFC_3339_REGEX.test(input)) {
    throw new import_graphql.GraphQLError(
      "DateTime scalars must be in the form of a full ISO 8601 date-time string"
    );
  }
  const parsed = new Date(input);
  if (isNaN(parsed.valueOf())) {
    throw new import_graphql.GraphQLError(
      "DateTime scalars must be in the form of a full ISO 8601 date-time string"
    );
  }
  return parsed;
}
var DateTime = graphqlTsSchema.graphql.scalar(
  new import_graphql.GraphQLScalarType({
    name: "DateTime",
    specifiedByURL: "https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",
    serialize(value) {
      if (!(value instanceof Date) || isNaN(value.valueOf())) {
        throw new import_graphql.GraphQLError(`unexpected value provided to DateTime scalar: ${value}`);
      }
      return value.toISOString();
    },
    parseLiteral(value) {
      if (value.kind !== "StringValue") {
        throw new import_graphql.GraphQLError("DateTime only accepts values as strings");
      }
      return parseDate(value.value);
    },
    parseValue(value) {
      if (value instanceof Date) {
        return value;
      }
      if (typeof value !== "string") {
        throw new import_graphql.GraphQLError("DateTime only accepts values as strings");
      }
      return parseDate(value);
    }
  })
);
var RFC_3339_FULL_DATE_REGEX = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
function validateCalendarDay(input) {
  if (!RFC_3339_FULL_DATE_REGEX.test(input)) {
    throw new import_graphql.GraphQLError(
      "CalendarDay scalars must be in the form of a full-date ISO 8601 string"
    );
  }
}
var CalendarDay = graphqlTsSchema.graphql.scalar(
  new import_graphql.GraphQLScalarType({
    name: "CalendarDay",
    specifiedByURL: "https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",
    serialize(value) {
      if (typeof value !== "string") {
        throw new import_graphql.GraphQLError(`unexpected value provided to CalendarDay scalar: ${value}`);
      }
      return value;
    },
    parseLiteral(value) {
      if (value.kind !== "StringValue") {
        throw new import_graphql.GraphQLError("CalendarDay only accepts values as strings");
      }
      validateCalendarDay(value.value);
      return value.value;
    },
    parseValue(value) {
      if (typeof value !== "string") {
        throw new import_graphql.GraphQLError("CalendarDay only accepts values as strings");
      }
      validateCalendarDay(value);
      return value;
    }
  })
);

// core/src/lib/core/graphql-errors.ts
var import_apollo_server_errors = require("apollo-server-errors");
var userInputError = (msg) => new import_apollo_server_errors.ApolloError(`Input error: ${msg}`, "KS_USER_INPUT_ERROR");

// core/src/types/next-fields.ts
var import_decimal2 = __toESM(require("decimal.js"));
var orderDirectionEnum = graphql_ts_schema_exports.enum({
  name: "OrderDirection",
  values: graphql_ts_schema_exports.enumValues(["asc", "desc"])
});
var QueryMode = graphql_ts_schema_exports.enum({
  name: "QueryMode",
  values: graphql_ts_schema_exports.enumValues(["default", "insensitive"])
});
function fieldType(dbField) {
  return function(graphQLInfo) {
    return { ...graphQLInfo, dbField };
  };
}

// core/src/fields/non-null-graphql.ts
function hasReadAccessControl(access) {
  if (access === void 0) {
    return false;
  }
  return typeof access === "function" || typeof access.read === "function";
}
function hasCreateAccessControl(access) {
  if (access === void 0) {
    return false;
  }
  return typeof access === "function" || typeof access.create === "function";
}
function getResolvedIsNullable(validation, db) {
  if (db?.isNullable === false) {
    return false;
  }
  if (db?.isNullable === void 0 && validation?.isRequired) {
    return false;
  }
  return true;
}
function assertReadIsNonNullAllowed(meta, config2, resolvedIsNullable) {
  if (config2.graphql?.read?.isNonNull) {
    if (resolvedIsNullable) {
      throw new Error(
        `The field at ${meta.listKey}.${meta.fieldKey} sets graphql.read.isNonNull: true but not validation.isRequired: true or db.isNullable: false.
Set validation.isRequired: true or db.isNullable: false or disable graphql.read.isNonNull`
      );
    }
    if (hasReadAccessControl(config2.access)) {
      throw new Error(
        `The field at ${meta.listKey}.${meta.fieldKey} sets graphql.read.isNonNull: true and has read access control, this is not allowed.
Either disable graphql.read.isNonNull or read access control.`
      );
    }
  }
}
function assertCreateIsNonNullAllowed(meta, config2) {
  if (config2.graphql?.create?.isNonNull && hasCreateAccessControl(config2.access)) {
    throw new Error(
      `The field at ${meta.listKey}.${meta.fieldKey} sets graphql.create.isNonNull: true and has create access control, this is not allowed.
Either disable graphql.create.isNonNull or create access control.`
    );
  }
}

// core/src/fields/filters/internal.ts
var internal_exports = {};
__export(internal_exports, {
  mysql: () => mysql_exports,
  postgresql: () => postgresql_exports,
  resolveCommon: () => resolveCommon,
  resolveString: () => resolveString,
  sqlite: () => sqlite_exports
});

// core/src/fields/filters/providers/postgresql.ts
var postgresql_exports = {};
__export(postgresql_exports, {
  BigInt: () => BigInt2,
  Boolean: () => Boolean2,
  DateTime: () => DateTime2,
  Decimal: () => Decimal3,
  Float: () => Float2,
  Int: () => Int2,
  String: () => String3,
  enum: () => enumFilters
});

// core/src/fields/filters/enum-filter.ts
function enumFilters(enumType) {
  const optional = graphql_ts_schema_exports.inputObject({
    name: `${enumType.graphQLType.name}NullableFilter`,
    fields: () => ({
      equals: graphql_ts_schema_exports.arg({ type: enumType }),
      in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(enumType)) }),
      notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(enumType)) }),
      not: graphql_ts_schema_exports.arg({ type: optional })
    })
  });
  const required = graphql_ts_schema_exports.inputObject({
    name: `${enumType.graphQLType.name}Filter`,
    fields: () => ({
      equals: graphql_ts_schema_exports.arg({ type: enumType }),
      in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(enumType)) }),
      notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(enumType)) }),
      not: graphql_ts_schema_exports.arg({ type: optional })
    })
  });
  const many = graphql_ts_schema_exports.inputObject({
    name: `${enumType.graphQLType.name}NullableListFilter`,
    fields: () => ({
      equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(enumType)) }),
      has: graphql_ts_schema_exports.arg({ type: enumType }),
      hasEvery: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(enumType)) }),
      hasSome: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(enumType)) }),
      isEmpty: graphql_ts_schema_exports.arg({ type: enumType })
    })
  });
  return {
    optional,
    required,
    many
  };
}

// core/src/fields/filters/providers/postgresql.ts
var StringNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "StringNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    mode: graphql_ts_schema_exports.arg({ type: QueryMode }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringNullableFilter })
  })
});
var NestedStringNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "NestedStringNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringNullableFilter })
  })
});
var StringFilter = graphql_ts_schema_exports.inputObject({
  name: "StringFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    mode: graphql_ts_schema_exports.arg({ type: QueryMode }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringFilter })
  })
});
var NestedStringFilter = graphql_ts_schema_exports.inputObject({
  name: "NestedStringFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringFilter })
  })
});
var StringNullableListFilter = graphql_ts_schema_exports.inputObject({
  name: "StringNullableListFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    has: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    hasEvery: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    hasSome: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    isEmpty: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean })
  })
});
var BoolNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "BooleanNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean }),
    not: graphql_ts_schema_exports.arg({ type: BoolNullableFilter })
  })
});
var BoolFilter = graphql_ts_schema_exports.inputObject({
  name: "BooleanFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean }),
    not: graphql_ts_schema_exports.arg({ type: BoolFilter })
  })
});
var BoolNullableListFilter = graphql_ts_schema_exports.inputObject({
  name: "BooleanNullableListFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Boolean)) }),
    has: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean }),
    hasEvery: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Boolean)) }),
    hasSome: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Boolean)) }),
    isEmpty: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean })
  })
});
var IntNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "IntNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    not: graphql_ts_schema_exports.arg({ type: IntNullableFilter })
  })
});
var IntFilter = graphql_ts_schema_exports.inputObject({
  name: "IntFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    not: graphql_ts_schema_exports.arg({ type: IntFilter })
  })
});
var IntNullableListFilter = graphql_ts_schema_exports.inputObject({
  name: "IntNullableListFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    has: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    hasEvery: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    hasSome: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    isEmpty: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean })
  })
});
var FloatNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "FloatNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    not: graphql_ts_schema_exports.arg({ type: FloatNullableFilter })
  })
});
var FloatFilter = graphql_ts_schema_exports.inputObject({
  name: "FloatFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    not: graphql_ts_schema_exports.arg({ type: FloatFilter })
  })
});
var FloatNullableListFilter = graphql_ts_schema_exports.inputObject({
  name: "FloatNullableListFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    has: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    hasEvery: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    hasSome: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    isEmpty: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean })
  })
});
var DateTimeNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "DateTimeNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    not: graphql_ts_schema_exports.arg({ type: DateTimeNullableFilter })
  })
});
var DateTimeFilter = graphql_ts_schema_exports.inputObject({
  name: "DateTimeFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    not: graphql_ts_schema_exports.arg({ type: DateTimeFilter })
  })
});
var DateTimeNullableListFilter = graphql_ts_schema_exports.inputObject({
  name: "DateTimeNullableListFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    has: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    hasEvery: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    hasSome: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    isEmpty: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean })
  })
});
var DecimalNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "DecimalNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    not: graphql_ts_schema_exports.arg({ type: DecimalNullableFilter })
  })
});
var DecimalFilter = graphql_ts_schema_exports.inputObject({
  name: "DecimalFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    not: graphql_ts_schema_exports.arg({ type: DecimalFilter })
  })
});
var DecimalNullableListFilter = graphql_ts_schema_exports.inputObject({
  name: "DecimalNullableListFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    has: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    hasEvery: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    hasSome: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    isEmpty: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean })
  })
});
var BigIntNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "BigIntNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    not: graphql_ts_schema_exports.arg({ type: BigIntNullableFilter })
  })
});
var BigIntFilter = graphql_ts_schema_exports.inputObject({
  name: "BigIntFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    not: graphql_ts_schema_exports.arg({ type: BigIntFilter })
  })
});
var BigIntNullableListFilter = graphql_ts_schema_exports.inputObject({
  name: "BigIntNullableListFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    has: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    hasEvery: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    hasSome: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    isEmpty: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean })
  })
});
var String3 = {
  optional: StringNullableFilter,
  required: StringFilter,
  many: StringNullableListFilter
};
var Boolean2 = {
  optional: BoolNullableFilter,
  required: BoolFilter,
  many: BoolNullableListFilter
};
var Int2 = {
  optional: IntNullableFilter,
  required: IntFilter,
  many: IntNullableListFilter
};
var Float2 = {
  optional: FloatNullableFilter,
  required: FloatFilter,
  many: FloatNullableListFilter
};
var DateTime2 = {
  optional: DateTimeNullableFilter,
  required: DateTimeFilter,
  many: DateTimeNullableListFilter
};
var Decimal3 = {
  optional: DecimalNullableFilter,
  required: DecimalFilter,
  many: DecimalNullableListFilter
};
var BigInt2 = {
  optional: BigIntNullableFilter,
  required: BigIntFilter,
  many: BigIntNullableListFilter
};

// core/src/fields/filters/providers/sqlite.ts
var sqlite_exports = {};
__export(sqlite_exports, {
  BigInt: () => BigInt3,
  Boolean: () => Boolean3,
  DateTime: () => DateTime3,
  Decimal: () => Decimal4,
  Float: () => Float3,
  Int: () => Int3,
  String: () => String4,
  enum: () => enumFilters
});
var StringNullableFilter2 = graphql_ts_schema_exports.inputObject({
  name: "StringNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringNullableFilter2 })
  })
});
var NestedStringNullableFilter2 = graphql_ts_schema_exports.inputObject({
  name: "NestedStringNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringNullableFilter2 })
  })
});
var StringFilter2 = graphql_ts_schema_exports.inputObject({
  name: "StringFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringFilter2 })
  })
});
var NestedStringFilter2 = graphql_ts_schema_exports.inputObject({
  name: "NestedStringFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringFilter2 })
  })
});
var BoolNullableFilter2 = graphql_ts_schema_exports.inputObject({
  name: "BooleanNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean }),
    not: graphql_ts_schema_exports.arg({ type: BoolNullableFilter2 })
  })
});
var BoolFilter2 = graphql_ts_schema_exports.inputObject({
  name: "BooleanFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean }),
    not: graphql_ts_schema_exports.arg({ type: BoolFilter2 })
  })
});
var IntNullableFilter2 = graphql_ts_schema_exports.inputObject({
  name: "IntNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    not: graphql_ts_schema_exports.arg({ type: IntNullableFilter2 })
  })
});
var IntFilter2 = graphql_ts_schema_exports.inputObject({
  name: "IntFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    not: graphql_ts_schema_exports.arg({ type: IntFilter2 })
  })
});
var FloatNullableFilter2 = graphql_ts_schema_exports.inputObject({
  name: "FloatNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    not: graphql_ts_schema_exports.arg({ type: FloatNullableFilter2 })
  })
});
var FloatFilter2 = graphql_ts_schema_exports.inputObject({
  name: "FloatFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    not: graphql_ts_schema_exports.arg({ type: FloatFilter2 })
  })
});
var DateTimeNullableFilter2 = graphql_ts_schema_exports.inputObject({
  name: "DateTimeNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    not: graphql_ts_schema_exports.arg({ type: DateTimeNullableFilter2 })
  })
});
var DateTimeFilter2 = graphql_ts_schema_exports.inputObject({
  name: "DateTimeFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    not: graphql_ts_schema_exports.arg({ type: DateTimeFilter2 })
  })
});
var DecimalNullableFilter2 = graphql_ts_schema_exports.inputObject({
  name: "DecimalNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    not: graphql_ts_schema_exports.arg({ type: DecimalNullableFilter2 })
  })
});
var DecimalFilter2 = graphql_ts_schema_exports.inputObject({
  name: "DecimalFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    not: graphql_ts_schema_exports.arg({ type: DecimalFilter2 })
  })
});
var BigIntNullableFilter2 = graphql_ts_schema_exports.inputObject({
  name: "BigIntNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    not: graphql_ts_schema_exports.arg({ type: BigIntNullableFilter2 })
  })
});
var BigIntFilter2 = graphql_ts_schema_exports.inputObject({
  name: "BigIntFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    not: graphql_ts_schema_exports.arg({ type: BigIntFilter2 })
  })
});
var String4 = {
  optional: StringNullableFilter2,
  required: StringFilter2
};
var Boolean3 = {
  optional: BoolNullableFilter2,
  required: BoolFilter2
};
var Int3 = {
  optional: IntNullableFilter2,
  required: IntFilter2
};
var Float3 = {
  optional: FloatNullableFilter2,
  required: FloatFilter2
};
var DateTime3 = {
  optional: DateTimeNullableFilter2,
  required: DateTimeFilter2
};
var Decimal4 = {
  optional: DecimalNullableFilter2,
  required: DecimalFilter2
};
var BigInt3 = {
  optional: BigIntNullableFilter2,
  required: BigIntFilter2
};

// core/src/fields/filters/providers/mysql.ts
var mysql_exports = {};
__export(mysql_exports, {
  BigInt: () => BigInt4,
  Boolean: () => Boolean4,
  DateTime: () => DateTime4,
  Decimal: () => Decimal5,
  Float: () => Float4,
  Int: () => Int4,
  String: () => String5,
  enum: () => enumFilters
});
var StringNullableFilter3 = graphql_ts_schema_exports.inputObject({
  name: "StringNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringNullableFilter3 })
  })
});
var NestedStringNullableFilter3 = graphql_ts_schema_exports.inputObject({
  name: "NestedStringNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringNullableFilter3 })
  })
});
var StringFilter3 = graphql_ts_schema_exports.inputObject({
  name: "StringFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringFilter3 })
  })
});
var NestedStringFilter3 = graphql_ts_schema_exports.inputObject({
  name: "NestedStringFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    contains: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    startsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    endsWith: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
    not: graphql_ts_schema_exports.arg({ type: NestedStringFilter3 })
  })
});
var BoolNullableFilter3 = graphql_ts_schema_exports.inputObject({
  name: "BooleanNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean }),
    not: graphql_ts_schema_exports.arg({ type: BoolNullableFilter3 })
  })
});
var BoolFilter3 = graphql_ts_schema_exports.inputObject({
  name: "BooleanFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean }),
    not: graphql_ts_schema_exports.arg({ type: BoolFilter3 })
  })
});
var IntNullableFilter3 = graphql_ts_schema_exports.inputObject({
  name: "IntNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    not: graphql_ts_schema_exports.arg({ type: IntNullableFilter3 })
  })
});
var IntFilter3 = graphql_ts_schema_exports.inputObject({
  name: "IntFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }),
    not: graphql_ts_schema_exports.arg({ type: IntFilter3 })
  })
});
var FloatNullableFilter3 = graphql_ts_schema_exports.inputObject({
  name: "FloatNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    not: graphql_ts_schema_exports.arg({ type: FloatNullableFilter3 })
  })
});
var FloatFilter3 = graphql_ts_schema_exports.inputObject({
  name: "FloatFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Float)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Float }),
    not: graphql_ts_schema_exports.arg({ type: FloatFilter3 })
  })
});
var DateTimeNullableFilter3 = graphql_ts_schema_exports.inputObject({
  name: "DateTimeNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    not: graphql_ts_schema_exports.arg({ type: DateTimeNullableFilter3 })
  })
});
var DateTimeFilter3 = graphql_ts_schema_exports.inputObject({
  name: "DateTimeFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }),
    not: graphql_ts_schema_exports.arg({ type: DateTimeFilter3 })
  })
});
var DecimalNullableFilter3 = graphql_ts_schema_exports.inputObject({
  name: "DecimalNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    not: graphql_ts_schema_exports.arg({ type: DecimalNullableFilter3 })
  })
});
var DecimalFilter3 = graphql_ts_schema_exports.inputObject({
  name: "DecimalFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }),
    not: graphql_ts_schema_exports.arg({ type: DecimalFilter3 })
  })
});
var BigIntNullableFilter3 = graphql_ts_schema_exports.inputObject({
  name: "BigIntNullableFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    not: graphql_ts_schema_exports.arg({ type: BigIntNullableFilter3 })
  })
});
var BigIntFilter3 = graphql_ts_schema_exports.inputObject({
  name: "BigIntFilter",
  fields: () => ({
    equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.BigInt)) }),
    lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.BigInt }),
    not: graphql_ts_schema_exports.arg({ type: BigIntFilter3 })
  })
});
var String5 = {
  optional: StringNullableFilter3,
  required: StringFilter3
};
var Boolean4 = {
  optional: BoolNullableFilter3,
  required: BoolFilter3
};
var Int4 = {
  optional: IntNullableFilter3,
  required: IntFilter3
};
var Float4 = {
  optional: FloatNullableFilter3,
  required: FloatFilter3
};
var DateTime4 = {
  optional: DateTimeNullableFilter3,
  required: DateTimeFilter3
};
var Decimal5 = {
  optional: DecimalNullableFilter3,
  required: DecimalFilter3
};
var BigInt4 = {
  optional: BigIntNullableFilter3,
  required: BigIntFilter3
};

// core/src/fields/filters/internal.ts
var objectEntriesButAssumeNoExtraProperties = Object.entries;
function internalResolveFilter(entries, mode) {
  const entry = entries.shift();
  if (entry === void 0)
    return {};
  const [key, val] = entry;
  if (val == null) {
    return {
      AND: [{ [key]: val }, internalResolveFilter(entries, mode)]
    };
  }
  switch (key) {
    case "equals":
    case "lt":
    case "lte":
    case "gt":
    case "gte":
    case "in":
    case "contains":
    case "startsWith":
    case "endsWith": {
      return {
        AND: [{ [key]: val, mode }, { not: null }, internalResolveFilter(entries, mode)]
      };
    }
    case "notIn": {
      return {
        AND: [
          {
            NOT: [
              internalResolveFilter(objectEntriesButAssumeNoExtraProperties({ in: val }), mode)
            ]
          },
          internalResolveFilter(entries, mode)
        ]
      };
    }
    case "not": {
      return {
        AND: [
          {
            NOT: [internalResolveFilter(objectEntriesButAssumeNoExtraProperties(val), mode)]
          },
          internalResolveFilter(entries, mode)
        ]
      };
    }
  }
}
function resolveCommon(val) {
  if (val === null)
    return null;
  return internalResolveFilter(objectEntriesButAssumeNoExtraProperties(val), void 0);
}
function resolveString(val) {
  if (val === null)
    return null;
  let { mode, ...rest } = val;
  return internalResolveFilter(objectEntriesButAssumeNoExtraProperties(rest), mode);
}

// core/src/fields/types/checkbox/index.ts
var checkbox = ({
  defaultValue = false,
  ...config2
} = {}) => (meta) => {
  if (config2.isIndexed === "unique") {
    throw Error("isIndexed: 'unique' is not a supported option for field type checkbox");
  }
  assertReadIsNonNullAllowed(meta, config2, false);
  assertCreateIsNonNullAllowed(meta, config2);
  return fieldType({
    kind: "scalar",
    mode: "required",
    scalar: "Boolean",
    default: { kind: "literal", value: defaultValue },
    map: config2.db?.map
  })({
    ...config2,
    input: {
      where: { arg: graphql_ts_schema_exports.arg({ type: internal_exports[meta.provider].Boolean.required }) },
      create: {
        arg: graphql_ts_schema_exports.arg({
          type: config2.graphql?.create?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Boolean) : graphql_ts_schema_exports.Boolean,
          defaultValue: config2.graphql?.create?.isNonNull ? defaultValue : void 0
        }),
        resolve(val) {
          if (val === null) {
            throw userInputError("Checkbox fields cannot be set to null");
          }
          return val ?? defaultValue;
        }
      },
      update: {
        arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Boolean }),
        resolve(val) {
          if (val === null) {
            throw userInputError("Checkbox fields cannot be set to null");
          }
          return val;
        }
      },
      orderBy: { arg: graphql_ts_schema_exports.arg({ type: orderDirectionEnum }) }
    },
    output: graphql_ts_schema_exports.field({
      type: config2.graphql?.read?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Boolean) : graphql_ts_schema_exports.Boolean
    }),
    __ksTelemetryFieldTypeName: "@keystone-6/checkbox",
    views: "@keystone-6/core/fields/types/checkbox/views",
    getAdminMeta: () => ({ defaultValue })
  });
};

// core/src/lib/utils.ts
var upcase = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
var humanize = (str) => {
  return str.replace(/([a-z])([A-Z]+)/g, "$1 $2").split(/\s|_|\-/).filter((i) => i).map(upcase).join(" ");
};

// core/src/fields/types/decimal/index.ts
function parseDecimalValueOption(meta, value, name) {
  let decimal2;
  try {
    decimal2 = new import_decimal2.default(value);
  } catch (err) {
    throw new Error(
      `The decimal field at ${meta.listKey}.${meta.fieldKey} specifies ${name}: ${value}, this is not valid decimal value.`
    );
  }
  if (!decimal2.isFinite()) {
    throw new Error(
      `The decimal field at ${meta.listKey}.${meta.fieldKey} specifies ${name}: ${value} which is not finite but ${name} must be finite.`
    );
  }
  return decimal2;
}
var decimal = ({
  isIndexed,
  precision = 18,
  scale = 4,
  validation,
  defaultValue,
  ...config2
} = {}) => (meta) => {
  if (meta.provider === "sqlite") {
    throw new Error("The decimal field does not support sqlite");
  }
  if (!Number.isInteger(scale)) {
    throw new Error(
      `The scale for decimal fields must be an integer but the scale for the decimal field at ${meta.listKey}.${meta.fieldKey} is not an integer`
    );
  }
  if (!Number.isInteger(precision)) {
    throw new Error(
      `The precision for decimal fields must be an integer but the precision for the decimal field at ${meta.listKey}.${meta.fieldKey} is not an integer`
    );
  }
  if (scale > precision) {
    throw new Error(
      `The scale configured for decimal field at ${meta.listKey}.${meta.fieldKey} (${scale}) must not be larger than the field's precision (${precision})`
    );
  }
  const fieldLabel = config2.label ?? humanize(meta.fieldKey);
  const max = validation?.max === void 0 ? void 0 : parseDecimalValueOption(meta, validation.max, "validation.max");
  const min = validation?.min === void 0 ? void 0 : parseDecimalValueOption(meta, validation.min, "validation.min");
  if (min !== void 0 && max !== void 0 && max.lessThan(min)) {
    throw new Error(
      `The decimal field at ${meta.listKey}.${meta.fieldKey} specifies a validation.max that is less than the validation.min, and therefore has no valid options`
    );
  }
  const parsedDefaultValue = defaultValue === void 0 ? void 0 : parseDecimalValueOption(meta, defaultValue, "defaultValue");
  const isNullable = getResolvedIsNullable(validation, config2.db);
  assertReadIsNonNullAllowed(meta, config2, isNullable);
  assertCreateIsNonNullAllowed(meta, config2);
  const mode = isNullable === false ? "required" : "optional";
  const index = isIndexed === true ? "index" : isIndexed || void 0;
  const dbField = {
    kind: "scalar",
    mode,
    scalar: "Decimal",
    nativeType: `Decimal(${precision}, ${scale})`,
    index,
    default: defaultValue === void 0 ? void 0 : { kind: "literal", value: defaultValue },
    map: config2.db?.map
  };
  return fieldType(dbField)({
    ...config2,
    hooks: {
      ...config2.hooks,
      async validateInput(args) {
        const val = args.resolvedData[meta.fieldKey];
        if (val === null && (validation?.isRequired || isNullable === false)) {
          args.addValidationError(`${fieldLabel} is required`);
        }
        if (val != null) {
          if (min !== void 0 && val.lessThan(min)) {
            args.addValidationError(`${fieldLabel} must be greater than or equal to ${min}`);
          }
          if (max !== void 0 && val.greaterThan(max)) {
            args.addValidationError(`${fieldLabel} must be less than or equal to ${max}`);
          }
        }
        await config2.hooks?.validateInput?.(args);
      }
    },
    input: {
      uniqueWhere: isIndexed === "unique" ? { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal }) } : void 0,
      where: {
        arg: graphql_ts_schema_exports.arg({ type: internal_exports[meta.provider].Decimal[mode] }),
        resolve: mode === "optional" ? internal_exports.resolveCommon : void 0
      },
      create: {
        arg: graphql_ts_schema_exports.arg({
          type: config2.graphql?.create?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal) : graphql_ts_schema_exports.Decimal,
          defaultValue: config2.graphql?.create?.isNonNull ? parsedDefaultValue : void 0
        }),
        resolve(val) {
          if (val === void 0) {
            return parsedDefaultValue ?? null;
          }
          return val;
        }
      },
      update: {
        arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Decimal })
      },
      orderBy: { arg: graphql_ts_schema_exports.arg({ type: orderDirectionEnum }) }
    },
    output: graphql_ts_schema_exports.field({
      type: config2.graphql?.read?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Decimal) : graphql_ts_schema_exports.Decimal,
      resolve({ value }) {
        if (value === null) {
          return null;
        }
        const val = new import_decimal2.default(value);
        val.scaleToPrint = scale;
        return val;
      }
    }),
    __ksTelemetryFieldTypeName: "@keystone-6/decimal",
    views: "@keystone-6/core/fields/types/decimal/views",
    getAdminMeta: () => ({
      defaultValue: defaultValue ?? null,
      precision,
      scale,
      validation: {
        isRequired: validation?.isRequired ?? false,
        max: validation?.max ?? null,
        min: validation?.min ?? null
      }
    })
  });
};

// core/src/fields/types/file/index.ts
var FileFieldInput = graphql_ts_schema_exports.inputObject({
  name: "FileFieldInput",
  fields: {
    upload: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Upload) })
  }
});
var inputArg = graphql_ts_schema_exports.arg({ type: FileFieldInput });
var FileFieldOutput = graphql_ts_schema_exports.object()({
  name: "FileFieldOutput",
  fields: {
    filename: graphql_ts_schema_exports.field({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String) }),
    filesize: graphql_ts_schema_exports.field({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int) }),
    url: graphql_ts_schema_exports.field({
      type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String),
      resolve(data, args, context) {
        return context.files(data.storage).getUrl(data.filename);
      }
    })
  }
});
async function inputResolver(storage, data, context) {
  if (data === null || data === void 0) {
    return { filename: data, filesize: data };
  }
  const upload = await data.upload;
  return context.files(storage).getDataFromStream(upload.createReadStream(), upload.filename);
}
var file = (config2) => (meta) => {
  const storage = meta.getStorage(config2.storage);
  if (!storage) {
    throw new Error(
      `${meta.listKey}.${meta.fieldKey} has storage set to ${config2.storage}, but no storage configuration was found for that key`
    );
  }
  if ("isIndexed" in config2) {
    throw Error("isIndexed: 'unique' is not a supported option for field type file");
  }
  return fieldType({
    kind: "multi",
    fields: {
      filesize: { kind: "scalar", scalar: "Int", mode: "optional" },
      filename: { kind: "scalar", scalar: "String", mode: "optional" }
    }
  })({
    ...config2,
    hooks: storage.preserve ? config2.hooks : {
      ...config2.hooks,
      async beforeOperation(args) {
        await config2.hooks?.beforeOperation?.(args);
        if (args.operation === "update" || args.operation === "delete") {
          const filenameKey = `${meta.fieldKey}_filename`;
          const filename = args.item[filenameKey];
          if ((args.operation === "delete" || typeof args.resolvedData[meta.fieldKey].filename === "string" || args.resolvedData[meta.fieldKey].filename === null) && typeof filename === "string") {
            await args.context.files(config2.storage).deleteAtSource(filename);
          }
        }
      }
    },
    input: {
      create: {
        arg: inputArg,
        resolve: (data, context) => inputResolver(config2.storage, data, context)
      },
      update: {
        arg: inputArg,
        resolve: (data, context) => inputResolver(config2.storage, data, context)
      }
    },
    output: graphql_ts_schema_exports.field({
      type: FileFieldOutput,
      resolve({ value: { filesize, filename } }) {
        if (filesize === null || filename === null) {
          return null;
        }
        return { filename, filesize, storage: config2.storage };
      }
    }),
    __ksTelemetryFieldTypeName: "@keystone-6/file",
    views: "@keystone-6/core/fields/types/file/views"
  });
};

// core/src/fields/types/integer/index.ts
var MAX_INT = 2147483647;
var MIN_INT = -2147483648;
var integer = ({
  isIndexed,
  defaultValue: _defaultValue,
  validation,
  ...config2
} = {}) => (meta) => {
  const defaultValue = _defaultValue ?? null;
  const hasAutoIncDefault = typeof defaultValue == "object" && defaultValue !== null && defaultValue.kind === "autoincrement";
  const isNullable = getResolvedIsNullable(validation, config2.db);
  if (hasAutoIncDefault) {
    if (meta.provider === "sqlite" || meta.provider === "mysql") {
      throw new Error(
        `The integer field at ${meta.listKey}.${meta.fieldKey} specifies defaultValue: { kind: 'autoincrement' }, this is not supported on ${meta.provider}`
      );
    }
    if (isNullable !== false) {
      throw new Error(
        `The integer field at ${meta.listKey}.${meta.fieldKey} specifies defaultValue: { kind: 'autoincrement' } but doesn't specify db.isNullable: false.
Having nullable autoincrements on Prisma currently incorrectly creates a non-nullable column so it is not allowed.
https://github.com/prisma/prisma/issues/8663`
      );
    }
  }
  if (validation?.min !== void 0 && !Number.isInteger(validation.min)) {
    throw new Error(
      `The integer field at ${meta.listKey}.${meta.fieldKey} specifies validation.min: ${validation.min} but it must be an integer`
    );
  }
  if (validation?.max !== void 0 && !Number.isInteger(validation.max)) {
    throw new Error(
      `The integer field at ${meta.listKey}.${meta.fieldKey} specifies validation.max: ${validation.max} but it must be an integer`
    );
  }
  if (validation?.min !== void 0 && (validation?.min > MAX_INT || validation?.min < MIN_INT)) {
    throw new Error(
      `The integer field at ${meta.listKey}.${meta.fieldKey} specifies validation.min: ${validation.min} which is outside of the range of a 32bit signed integer(${MIN_INT} - ${MAX_INT}) which is not allowed`
    );
  }
  if (validation?.max !== void 0 && (validation?.max > MAX_INT || validation?.max < MIN_INT)) {
    throw new Error(
      `The integer field at ${meta.listKey}.${meta.fieldKey} specifies validation.max: ${validation.max} which is outside of the range of a 32bit signed integer(${MIN_INT} - ${MAX_INT}) which is not allowed`
    );
  }
  if (validation?.min !== void 0 && validation?.max !== void 0 && validation.min > validation.max) {
    throw new Error(
      `The integer field at ${meta.listKey}.${meta.fieldKey} specifies a validation.max that is less than the validation.min, and therefore has no valid options`
    );
  }
  assertReadIsNonNullAllowed(meta, config2, isNullable);
  assertCreateIsNonNullAllowed(meta, config2);
  const mode = isNullable === false ? "required" : "optional";
  const fieldLabel = config2.label ?? humanize(meta.fieldKey);
  return fieldType({
    kind: "scalar",
    mode,
    scalar: "Int",
    index: isIndexed === true ? "index" : isIndexed || void 0,
    default: typeof defaultValue === "number" ? { kind: "literal", value: defaultValue } : defaultValue?.kind === "autoincrement" ? { kind: "autoincrement" } : void 0,
    map: config2.db?.map
  })({
    ...config2,
    hooks: {
      ...config2.hooks,
      async validateInput(args) {
        const value = args.resolvedData[meta.fieldKey];
        if ((validation?.isRequired || isNullable === false) && (value === null || args.operation === "create" && value === void 0 && !hasAutoIncDefault)) {
          args.addValidationError(`${fieldLabel} is required`);
        }
        if (typeof value === "number") {
          if (validation?.min !== void 0 && value < validation.min) {
            args.addValidationError(
              `${fieldLabel} must be greater than or equal to ${validation.min}`
            );
          }
          if (validation?.max !== void 0 && value > validation.max) {
            args.addValidationError(
              `${fieldLabel} must be less than or equal to ${validation.max}`
            );
          }
        }
        await config2.hooks?.validateInput?.(args);
      }
    },
    input: {
      uniqueWhere: isIndexed === "unique" ? { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }) } : void 0,
      where: {
        arg: graphql_ts_schema_exports.arg({ type: internal_exports[meta.provider].Int[mode] }),
        resolve: mode === "optional" ? internal_exports.resolveCommon : void 0
      },
      create: {
        arg: graphql_ts_schema_exports.arg({
          type: config2.graphql?.create?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int) : graphql_ts_schema_exports.Int,
          defaultValue: config2.graphql?.create?.isNonNull && typeof defaultValue === "number" ? defaultValue : void 0
        }),
        resolve(value) {
          if (value === void 0 && typeof defaultValue === "number") {
            return defaultValue;
          }
          return value;
        }
      },
      update: { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }) },
      orderBy: { arg: graphql_ts_schema_exports.arg({ type: orderDirectionEnum }) }
    },
    output: graphql_ts_schema_exports.field({
      type: config2.graphql?.read?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int) : graphql_ts_schema_exports.Int
    }),
    __ksTelemetryFieldTypeName: "@keystone-6/integer",
    views: "@keystone-6/core/fields/types/integer/views",
    getAdminMeta() {
      return {
        validation: {
          min: validation?.min ?? MIN_INT,
          max: validation?.max ?? MAX_INT,
          isRequired: validation?.isRequired ?? false
        },
        defaultValue: defaultValue === null || typeof defaultValue === "number" ? defaultValue : "autoincrement"
      };
    }
  });
};

// core/src/fields/types/bigInt/index.ts
var MIN_INT2 = -9223372036854775808n;

// core/src/fields/types/image/utils.ts
var SUPPORTED_IMAGE_EXTENSIONS = ["jpg", "png", "webp", "gif"];

// core/src/fields/types/image/index.ts
var ImageExtensionEnum = graphql_ts_schema_exports.enum({
  name: "ImageExtension",
  values: graphql_ts_schema_exports.enumValues(SUPPORTED_IMAGE_EXTENSIONS)
});
var ImageFieldInput = graphql_ts_schema_exports.inputObject({
  name: "ImageFieldInput",
  fields: {
    upload: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Upload) })
  }
});
var inputArg2 = graphql_ts_schema_exports.arg({ type: ImageFieldInput });
var ImageFieldOutput = graphql_ts_schema_exports.object()({
  name: "ImageFieldOutput",
  fields: {
    id: graphql_ts_schema_exports.field({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.ID) }),
    filesize: graphql_ts_schema_exports.field({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int) }),
    width: graphql_ts_schema_exports.field({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int) }),
    height: graphql_ts_schema_exports.field({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Int) }),
    extension: graphql_ts_schema_exports.field({ type: graphql_ts_schema_exports.nonNull(ImageExtensionEnum) }),
    url: graphql_ts_schema_exports.field({
      type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String),
      resolve(data, args, context) {
        return context.images(data.storage).getUrl(data.id, data.extension);
      }
    })
  }
});
async function inputResolver2(storage, data, context) {
  if (data === null || data === void 0) {
    return { extension: data, filesize: data, height: data, id: data, width: data };
  }
  const upload = await data.upload;
  return context.images(storage).getDataFromStream(upload.createReadStream(), upload.filename);
}
var extensionsSet = new Set(SUPPORTED_IMAGE_EXTENSIONS);
function isValidImageExtension(extension) {
  return extensionsSet.has(extension);
}
var image = (config2) => (meta) => {
  const storage = meta.getStorage(config2.storage);
  if (!storage) {
    throw new Error(
      `${meta.listKey}.${meta.fieldKey} has storage set to ${config2.storage}, but no storage configuration was found for that key`
    );
  }
  if ("isIndexed" in config2) {
    throw Error("isIndexed: 'unique' is not a supported option for field type image");
  }
  return fieldType({
    kind: "multi",
    fields: {
      filesize: { kind: "scalar", scalar: "Int", mode: "optional" },
      extension: { kind: "scalar", scalar: "String", mode: "optional" },
      width: { kind: "scalar", scalar: "Int", mode: "optional" },
      height: { kind: "scalar", scalar: "Int", mode: "optional" },
      id: { kind: "scalar", scalar: "String", mode: "optional" }
    }
  })({
    ...config2,
    hooks: storage.preserve ? config2.hooks : {
      ...config2.hooks,
      async beforeOperation(args) {
        await config2.hooks?.beforeOperation?.(args);
        if (args.operation === "update" || args.operation === "delete") {
          const idKey = `${meta.fieldKey}_id`;
          const id = args.item[idKey];
          const extensionKey = `${meta.fieldKey}_extension`;
          const extension = args.item[extensionKey];
          if ((args.operation === "delete" || typeof args.resolvedData[meta.fieldKey].id === "string" || args.resolvedData[meta.fieldKey].id === null) && typeof id === "string" && typeof extension === "string" && isValidImageExtension(extension)) {
            await args.context.images(config2.storage).deleteAtSource(id, extension);
          }
        }
      }
    },
    input: {
      create: {
        arg: inputArg2,
        resolve: (data, context) => inputResolver2(config2.storage, data, context)
      },
      update: {
        arg: inputArg2,
        resolve: (data, context) => inputResolver2(config2.storage, data, context)
      }
    },
    output: graphql_ts_schema_exports.field({
      type: ImageFieldOutput,
      resolve({ value: { extension, filesize, height, id, width } }) {
        if (extension === null || !isValidImageExtension(extension) || filesize === null || height === null || width === null || id === null) {
          return null;
        }
        return {
          extension,
          filesize,
          height,
          width,
          id,
          storage: config2.storage
        };
      }
    }),
    __ksTelemetryFieldTypeName: "@keystone-6/image",
    views: "@keystone-6/core/fields/types/image/views"
  });
};

// core/src/fields/types/password/index.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_dumb_passwords = __toESM(require("dumb-passwords"));
var PasswordState = graphql_ts_schema_exports.object()({
  name: "PasswordState",
  fields: {
    isSet: graphql_ts_schema_exports.field({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Boolean) })
  }
});
var PasswordFilter = graphql_ts_schema_exports.inputObject({
  name: "PasswordFilter",
  fields: {
    isSet: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.Boolean) })
  }
});
var bcryptHashRegex = /^\$2[aby]?\$\d{1,2}\$[.\/A-Za-z0-9]{53}$/;
var password = ({
  bcrypt = import_bcryptjs.default,
  workFactor = 10,
  validation: _validation,
  ...config2
} = {}) => (meta) => {
  if (config2.isIndexed === "unique") {
    throw Error("isIndexed: 'unique' is not a supported option for field type password");
  }
  const fieldLabel = config2.label ?? humanize(meta.fieldKey);
  const validation = {
    isRequired: _validation?.isRequired ?? false,
    rejectCommon: _validation?.rejectCommon ?? false,
    match: _validation?.match ? {
      regex: _validation.match.regex,
      explanation: _validation.match.explanation ?? `${fieldLabel} must match ${_validation.match.regex}`
    } : null,
    length: {
      min: _validation?.length?.min ?? 8,
      max: _validation?.length?.max ?? null
    }
  };
  const isNullable = getResolvedIsNullable(validation, config2.db);
  for (const type2 of ["min", "max"]) {
    const val = validation.length[type2];
    if (val !== null && (!Number.isInteger(val) || val < 1)) {
      throw new Error(
        `The password field at ${meta.listKey}.${meta.fieldKey} specifies validation.length.${type2}: ${val} but it must be a positive integer >= 1`
      );
    }
  }
  if (validation.length.max !== null && validation.length.min > validation.length.max) {
    throw new Error(
      `The password field at ${meta.listKey}.${meta.fieldKey} specifies a validation.length.max that is less than the validation.length.min, and therefore has no valid options`
    );
  }
  if (workFactor < 6 || workFactor > 31 || !Number.isInteger(workFactor)) {
    throw new Error(
      `The password field at ${meta.listKey}.${meta.fieldKey} specifies workFactor: ${workFactor} but it must be an integer between 6 and 31`
    );
  }
  function inputResolver3(val) {
    if (val == null) {
      return val;
    }
    return bcrypt.hash(val, workFactor);
  }
  return fieldType({
    kind: "scalar",
    scalar: "String",
    mode: isNullable === false ? "required" : "optional",
    map: config2.db?.map
  })({
    ...config2,
    hooks: {
      ...config2.hooks,
      async validateInput(args) {
        const val = args.inputData[meta.fieldKey];
        if (args.resolvedData[meta.fieldKey] === null && (validation?.isRequired || isNullable === false)) {
          args.addValidationError(`${fieldLabel} is required`);
        }
        if (val != null) {
          if (val.length < validation.length.min) {
            if (validation.length.min === 1) {
              args.addValidationError(`${fieldLabel} must not be empty`);
            } else {
              args.addValidationError(
                `${fieldLabel} must be at least ${validation.length.min} characters long`
              );
            }
          }
          if (validation.length.max !== null && val.length > validation.length.max) {
            args.addValidationError(
              `${fieldLabel} must be no longer than ${validation.length.max} characters`
            );
          }
          if (validation.match && !validation.match.regex.test(val)) {
            args.addValidationError(validation.match.explanation);
          }
          if (validation.rejectCommon && import_dumb_passwords.default.check(val)) {
            args.addValidationError(`${fieldLabel} is too common and is not allowed`);
          }
        }
        await config2.hooks?.validateInput?.(args);
      }
    },
    input: {
      where: isNullable === false ? void 0 : {
        arg: graphql_ts_schema_exports.arg({ type: PasswordFilter }),
        resolve(val) {
          if (val === null) {
            throw userInputError("Password filters cannot be set to null");
          }
          if (val.isSet) {
            return {
              not: null
            };
          }
          return null;
        }
      },
      create: {
        arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
        resolve(val) {
          if (val === void 0) {
            return null;
          }
          return inputResolver3(val);
        }
      },
      update: {
        arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }),
        resolve: inputResolver3
      }
    },
    __ksTelemetryFieldTypeName: "@keystone-6/password",
    views: "@keystone-6/core/fields/types/password/views",
    getAdminMeta: () => ({
      isNullable,
      validation: {
        ...validation,
        match: validation.match ? {
          regex: {
            source: validation.match.regex.source,
            flags: validation.match.regex.flags
          },
          explanation: validation.match.explanation
        } : null
      }
    }),
    output: graphql_ts_schema_exports.field({
      type: PasswordState,
      resolve(val) {
        return { isSet: val.value !== null && bcryptHashRegex.test(val.value) };
      },
      extensions: {
        keystoneSecretField: {
          generateHash: async (secret) => {
            return bcrypt.hash(secret, workFactor);
          },
          compare: (secret, hash) => {
            return bcrypt.compare(secret, hash);
          }
        }
      }
    })
  });
};

// core/src/admin-ui/system/createAdminMeta.ts
var import_path = __toESM(require("path"));

// core/src/fields/types/select/index.ts
var import_inflection = __toESM(require("inflection"));
var MAX_INT2 = 2147483647;
var MIN_INT3 = -2147483648;
var select = ({
  isIndexed,
  ui: { displayMode = "select", ...ui } = {},
  defaultValue,
  validation,
  ...config2
}) => (meta) => {
  const fieldLabel = config2.label ?? humanize(meta.fieldKey);
  const resolvedIsNullable = getResolvedIsNullable(validation, config2.db);
  assertReadIsNonNullAllowed(meta, config2, resolvedIsNullable);
  assertCreateIsNonNullAllowed(meta, config2);
  const commonConfig = (options2) => {
    const values = new Set(options2.map((x) => x.value));
    if (values.size !== options2.length) {
      throw new Error(
        `The select field at ${meta.listKey}.${meta.fieldKey} has duplicate options, this is not allowed`
      );
    }
    return {
      ...config2,
      ui,
      hooks: {
        ...config2.hooks,
        async validateInput(args) {
          const value = args.resolvedData[meta.fieldKey];
          if (value != null && !values.has(value)) {
            args.addValidationError(`${value} is not a possible value for ${fieldLabel}`);
          }
          if ((validation?.isRequired || resolvedIsNullable === false) && (value === null || value === void 0 && args.operation === "create")) {
            args.addValidationError(`${fieldLabel} is required`);
          }
          await config2.hooks?.validateInput?.(args);
        }
      },
      __ksTelemetryFieldTypeName: "@keystone-6/select",
      views: "@keystone-6/core/fields/types/select/views",
      getAdminMeta: () => ({
        options: options2,
        type: config2.type ?? "string",
        displayMode,
        defaultValue: defaultValue ?? null,
        isRequired: validation?.isRequired ?? false
      })
    };
  };
  const mode = resolvedIsNullable === false ? "required" : "optional";
  const commonDbFieldConfig = {
    mode,
    index: isIndexed === true ? "index" : isIndexed || void 0,
    default: defaultValue === void 0 ? void 0 : { kind: "literal", value: defaultValue },
    map: config2.db?.map
  };
  const resolveCreate = (val) => {
    if (val === void 0) {
      return defaultValue ?? null;
    }
    return val;
  };
  const output = (type2) => config2.graphql?.read?.isNonNull ? graphql_ts_schema_exports.nonNull(type2) : type2;
  const create = (type2) => {
    const isNonNull = config2.graphql?.read?.isNonNull === true;
    return graphql_ts_schema_exports.arg({
      type: isNonNull ? graphql_ts_schema_exports.nonNull(type2) : type2,
      defaultValue: isNonNull ? defaultValue : void 0
    });
  };
  if (config2.type === "integer") {
    if (config2.options.some(
      ({ value }) => !Number.isInteger(value) || value > MAX_INT2 || value < MIN_INT3
    )) {
      throw new Error(
        `The select field at ${meta.listKey}.${meta.fieldKey} specifies integer values that are outside the range of a 32 bit signed integer`
      );
    }
    return fieldType({
      kind: "scalar",
      scalar: "Int",
      ...commonDbFieldConfig
    })({
      ...commonConfig(config2.options),
      input: {
        uniqueWhere: isIndexed === "unique" ? { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }) } : void 0,
        where: {
          arg: graphql_ts_schema_exports.arg({ type: internal_exports[meta.provider].Int[mode] }),
          resolve: mode === "required" ? void 0 : internal_exports.resolveCommon
        },
        create: { arg: create(graphql_ts_schema_exports.Int), resolve: resolveCreate },
        update: { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.Int }) },
        orderBy: { arg: graphql_ts_schema_exports.arg({ type: orderDirectionEnum }) }
      },
      output: graphql_ts_schema_exports.field({ type: output(graphql_ts_schema_exports.Int) })
    });
  }
  const options = config2.options.map((option) => {
    if (typeof option === "string") {
      return {
        label: humanize(option),
        value: option
      };
    }
    return option;
  });
  if (config2.type === "enum") {
    const enumName = `${meta.listKey}${import_inflection.default.classify(meta.fieldKey)}Type`;
    const graphQLType = graphql_ts_schema_exports.enum({
      name: enumName,
      values: graphql_ts_schema_exports.enumValues(options.map((x) => x.value))
    });
    return fieldType(
      meta.provider === "sqlite" ? { kind: "scalar", scalar: "String", ...commonDbFieldConfig } : {
        kind: "enum",
        values: options.map((x) => x.value),
        name: enumName,
        ...commonDbFieldConfig
      }
    )({
      ...commonConfig(options),
      input: {
        uniqueWhere: isIndexed === "unique" ? { arg: graphql_ts_schema_exports.arg({ type: graphQLType }) } : void 0,
        where: {
          arg: graphql_ts_schema_exports.arg({ type: internal_exports[meta.provider].enum(graphQLType).optional }),
          resolve: mode === "required" ? void 0 : internal_exports.resolveCommon
        },
        create: { arg: create(graphQLType), resolve: resolveCreate },
        update: { arg: graphql_ts_schema_exports.arg({ type: graphQLType }) },
        orderBy: { arg: graphql_ts_schema_exports.arg({ type: orderDirectionEnum }) }
      },
      output: graphql_ts_schema_exports.field({ type: output(graphQLType) })
    });
  }
  return fieldType({ kind: "scalar", scalar: "String", ...commonDbFieldConfig })({
    ...commonConfig(options),
    input: {
      uniqueWhere: isIndexed === "unique" ? { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }) } : void 0,
      where: {
        arg: graphql_ts_schema_exports.arg({ type: internal_exports[meta.provider].String[mode] }),
        resolve: mode === "required" ? void 0 : internal_exports.resolveString
      },
      create: { arg: create(graphql_ts_schema_exports.String), resolve: resolveCreate },
      update: { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }) },
      orderBy: { arg: graphql_ts_schema_exports.arg({ type: orderDirectionEnum }) }
    },
    output: graphql_ts_schema_exports.field({ type: output(graphql_ts_schema_exports.String) })
  });
};

// core/src/fields/types/text/index.ts
var text = ({
  isIndexed,
  defaultValue: _defaultValue,
  validation: _validation,
  ...config2
} = {}) => (meta) => {
  for (const type2 of ["min", "max"]) {
    const val = _validation?.length?.[type2];
    if (val !== void 0 && (!Number.isInteger(val) || val < 0)) {
      throw new Error(
        `The text field at ${meta.listKey}.${meta.fieldKey} specifies validation.length.${type2}: ${val} but it must be a positive integer`
      );
    }
    if (_validation?.isRequired && val !== void 0 && val === 0) {
      throw new Error(
        `The text field at ${meta.listKey}.${meta.fieldKey} specifies validation.isRequired: true and validation.length.${type2}: 0, this is not allowed because validation.isRequired implies at least a min length of 1`
      );
    }
  }
  if (_validation?.length?.min !== void 0 && _validation?.length?.max !== void 0 && _validation?.length?.min > _validation?.length?.max) {
    throw new Error(
      `The text field at ${meta.listKey}.${meta.fieldKey} specifies a validation.length.max that is less than the validation.length.min, and therefore has no valid options`
    );
  }
  const validation = {
    ..._validation,
    length: {
      min: _validation?.isRequired ? _validation?.length?.min ?? 1 : _validation?.length?.min,
      max: _validation?.length?.max
    }
  };
  const isNullable = config2.db?.isNullable ?? false;
  const fieldLabel = config2.label ?? humanize(meta.fieldKey);
  assertReadIsNonNullAllowed(meta, config2, isNullable);
  assertCreateIsNonNullAllowed(meta, config2);
  const mode = isNullable ? "optional" : "required";
  const defaultValue = isNullable === false || _defaultValue !== void 0 ? _defaultValue || "" : void 0;
  return fieldType({
    kind: "scalar",
    mode,
    scalar: "String",
    default: defaultValue === void 0 ? void 0 : { kind: "literal", value: defaultValue },
    index: isIndexed === true ? "index" : isIndexed || void 0,
    map: config2.db?.map,
    nativeType: config2.db?.nativeType
  })({
    ...config2,
    hooks: {
      ...config2.hooks,
      async validateInput(args) {
        const val = args.resolvedData[meta.fieldKey];
        if (val === null && (validation?.isRequired || isNullable === false)) {
          args.addValidationError(`${fieldLabel} is required`);
        }
        if (val != null) {
          if (validation?.length?.min !== void 0 && val.length < validation.length.min) {
            if (validation.length.min === 1) {
              args.addValidationError(`${fieldLabel} must not be empty`);
            } else {
              args.addValidationError(
                `${fieldLabel} must be at least ${validation.length.min} characters long`
              );
            }
          }
          if (validation?.length?.max !== void 0 && val.length > validation.length.max) {
            args.addValidationError(
              `${fieldLabel} must be no longer than ${validation.length.max} characters`
            );
          }
          if (validation?.match && !validation.match.regex.test(val)) {
            args.addValidationError(
              validation.match.explanation || `${fieldLabel} must match ${validation.match.regex}`
            );
          }
        }
        await config2.hooks?.validateInput?.(args);
      }
    },
    input: {
      uniqueWhere: isIndexed === "unique" ? { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }) } : void 0,
      where: {
        arg: graphql_ts_schema_exports.arg({
          type: internal_exports[meta.provider].String[mode]
        }),
        resolve: mode === "required" ? void 0 : internal_exports.resolveString
      },
      create: {
        arg: graphql_ts_schema_exports.arg({
          type: config2.graphql?.create?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String) : graphql_ts_schema_exports.String,
          defaultValue: config2.graphql?.create?.isNonNull ? defaultValue : void 0
        }),
        resolve(val) {
          if (val === void 0) {
            return defaultValue ?? null;
          }
          return val;
        }
      },
      update: { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.String }) },
      orderBy: { arg: graphql_ts_schema_exports.arg({ type: orderDirectionEnum }) }
    },
    output: graphql_ts_schema_exports.field({
      type: config2.graphql?.read?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.String) : graphql_ts_schema_exports.String
    }),
    __ksTelemetryFieldTypeName: "@keystone-6/text",
    views: "@keystone-6/core/fields/types/text/views",
    getAdminMeta() {
      return {
        displayMode: config2.ui?.displayMode ?? "input",
        shouldUseModeInsensitive: meta.provider === "postgresql",
        validation: {
          isRequired: validation?.isRequired ?? false,
          match: validation?.match ? {
            regex: {
              source: validation.match.regex.source,
              flags: validation.match.regex.flags
            },
            explanation: validation.match.explanation ?? null
          } : null,
          length: { max: validation?.length?.max ?? null, min: validation?.length?.min ?? null }
        },
        defaultValue: defaultValue ?? (isNullable ? null : ""),
        isNullable
      };
    }
  });
};

// core/src/fields/types/timestamp/index.ts
var timestamp = ({
  isIndexed,
  validation,
  defaultValue,
  ...config2
} = {}) => (meta) => {
  if (typeof defaultValue === "string") {
    try {
      graphql_ts_schema_exports.DateTime.graphQLType.parseValue(defaultValue);
    } catch (err) {
      throw new Error(
        `The timestamp field at ${meta.listKey}.${meta.fieldKey} specifies defaultValue: ${defaultValue} but values must be provided as a full ISO8601 date-time string such as ${new Date().toISOString()}`
      );
    }
  }
  const parsedDefaultValue = typeof defaultValue === "string" ? graphql_ts_schema_exports.DateTime.graphQLType.parseValue(defaultValue) : defaultValue;
  const resolvedIsNullable = getResolvedIsNullable(validation, config2.db);
  assertReadIsNonNullAllowed(meta, config2, resolvedIsNullable);
  assertCreateIsNonNullAllowed(meta, config2);
  const mode = resolvedIsNullable === false ? "required" : "optional";
  const fieldLabel = config2.label ?? humanize(meta.fieldKey);
  return fieldType({
    kind: "scalar",
    mode,
    scalar: "DateTime",
    index: isIndexed === true ? "index" : isIndexed || void 0,
    default: typeof defaultValue === "string" ? {
      kind: "literal",
      value: defaultValue
    } : defaultValue === void 0 ? void 0 : { kind: "now" },
    updatedAt: config2.db?.updatedAt,
    map: config2.db?.map
  })({
    ...config2,
    hooks: {
      ...config2.hooks,
      async validateInput(args) {
        const value = args.resolvedData[meta.fieldKey];
        if ((validation?.isRequired || resolvedIsNullable === false) && value === null) {
          args.addValidationError(`${fieldLabel} is required`);
        }
        await config2.hooks?.validateInput?.(args);
      }
    },
    input: {
      uniqueWhere: isIndexed === "unique" ? { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }) } : void 0,
      where: {
        arg: graphql_ts_schema_exports.arg({ type: internal_exports[meta.provider].DateTime[mode] }),
        resolve: mode === "optional" ? internal_exports.resolveCommon : void 0
      },
      create: {
        arg: graphql_ts_schema_exports.arg({
          type: config2.graphql?.create?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime) : graphql_ts_schema_exports.DateTime,
          defaultValue: config2.graphql?.create?.isNonNull && parsedDefaultValue instanceof Date ? parsedDefaultValue : void 0
        }),
        resolve(val) {
          if (val === void 0) {
            if (parsedDefaultValue === void 0 && config2.db?.updatedAt) {
              return void 0;
            }
            if (parsedDefaultValue instanceof Date || parsedDefaultValue === void 0) {
              val = parsedDefaultValue ?? null;
            } else {
              val = new Date();
            }
          }
          return val;
        }
      },
      update: { arg: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.DateTime }) },
      orderBy: { arg: graphql_ts_schema_exports.arg({ type: orderDirectionEnum }) }
    },
    output: graphql_ts_schema_exports.field({
      type: config2.graphql?.read?.isNonNull ? graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.DateTime) : graphql_ts_schema_exports.DateTime
    }),
    __ksTelemetryFieldTypeName: "@keystone-6/timestamp",
    views: "@keystone-6/core/fields/types/timestamp/views",
    getAdminMeta() {
      return {
        defaultValue: defaultValue ?? null,
        isRequired: validation?.isRequired ?? false,
        updatedAt: config2.db?.updatedAt ?? false
      };
    }
  });
};

// core/src/fields/types/virtual/index.ts
var import_graphql2 = require("graphql");

// core/src/fields/types/calendarDay/index.ts
var filterFields = (nestedType) => ({
  equals: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.CalendarDay }),
  in: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.CalendarDay)) }),
  notIn: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.list(graphql_ts_schema_exports.nonNull(graphql_ts_schema_exports.CalendarDay)) }),
  lt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.CalendarDay }),
  lte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.CalendarDay }),
  gt: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.CalendarDay }),
  gte: graphql_ts_schema_exports.arg({ type: graphql_ts_schema_exports.CalendarDay }),
  not: graphql_ts_schema_exports.arg({ type: nestedType })
});
var CalendarDayNullableFilter = graphql_ts_schema_exports.inputObject({
  name: "CalendarDayNullableFilter",
  fields: () => filterFields(CalendarDayNullableFilter)
});
var CalendarDayFilter = graphql_ts_schema_exports.inputObject({
  name: "CalendarDayFilter",
  fields: () => filterFields(CalendarDayFilter)
});

// core/src/fields/types/multiselect/index.ts
var import_inflection2 = __toESM(require("inflection"));

// core/src/access/index.ts
function allowAll() {
  return true;
}

// Schemas/Client.ts
var Client = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: "textarea"
      }
    }),
    photo: image({
      storage: "localstorage"
    }),
    status: select({
      options: [
        { label: "Current", value: "CURRENT" },
        { label: "Past", value: "PAST" }
      ],
      defaultValue: "CURRENT",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" }
      }
    }),
    email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    phone: integer({ validation: { isRequired: true } })
  }
});

// fields-document/src/index.ts
var import_apollo_server_errors2 = require("apollo-server-errors");
var import_types18 = require("@keystone-6/core/types");
var import_core29 = require("@keystone-6/core");

// fields-document/src/validation.ts
var import_slate27 = require("slate");

// fields-document/src/DocumentEditor/index.tsx
var import_core25 = require("@keystone-ui/core");
var import_react24 = require("react");
var import_is_hotkey = __toESM(require("is-hotkey"));
var import_react25 = require("react");
var import_slate25 = require("slate");
var import_slate_react11 = require("slate-react");
var import_slate_history = require("slate-history");

// fields-document/src/DocumentEditor/paragraphs.ts
var import_slate = require("slate");
var paragraphElement = () => ({
  type: "paragraph",
  children: [{ text: "" }]
});
function withParagraphs(editor) {
  const { normalizeNode } = editor;
  editor.normalizeNode = (entry) => {
    const [node, path2] = entry;
    if (import_slate.Editor.isEditor(node)) {
      let lastNode = node.children[node.children.length - 1];
      if (lastNode?.type !== "paragraph") {
        import_slate.Transforms.insertNodes(editor, paragraphElement(), {
          at: [...path2, node.children.length]
        });
        return;
      }
    }
    normalizeNode(entry);
  };
  return editor;
}

// fields-document/src/DocumentEditor/link.tsx
var import_slate_react8 = require("slate-react");
var import_slate11 = require("slate");
var import_react16 = require("react");
var import_core16 = require("@keystone-ui/core");
var import_popover3 = require("@keystone-ui/popover");
var import_tooltip4 = require("@keystone-ui/tooltip");
var import_LinkIcon = require("@keystone-ui/icons/icons/LinkIcon");
var import_Trash2Icon5 = require("@keystone-ui/icons/icons/Trash2Icon");
var import_ExternalLinkIcon = require("@keystone-ui/icons/icons/ExternalLinkIcon");

// fields-document/src/DocumentEditor/primitives/inline-dialog.tsx
var import_core = require("@keystone-ui/core");
var import_react = require("react");
var InlineDialog = (0, import_react.forwardRef)(({ isRelative, ...props }, ref) => {
  const { radii, spacing } = (0, import_core.useTheme)();
  const relativeStyles = isRelative ? {
    left: "50%",
    margin: spacing.small,
    transform: "translateX(-50%)"
  } : {};
  let dialog = /* @__PURE__ */ (0, import_core.jsx)(
    "div",
    {
      ref,
      contentEditable: false,
      css: {
        background: "white",
        borderRadius: radii.small,
        boxShadow: `rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.25) 0px 4px 8px -2px`,
        padding: spacing.small,
        position: "absolute",
        userSelect: "none",
        ...relativeStyles
      },
      ...props
    }
  );
  if (isRelative) {
    return dialog;
  }
  return /* @__PURE__ */ (0, import_core.jsx)(import_core.Portal, null, dialog);
});

// fields-document/src/DocumentEditor/primitives/toolbar.tsx
var import_react2 = require("react");
var import_core2 = require("@keystone-ui/core");
var directionToAlignment = {
  row: "center",
  column: "start"
};
var ToolbarGroupContext = (0, import_react2.createContext)({ direction: "row" });
var useToolbarGroupContext = () => (0, import_react2.useContext)(ToolbarGroupContext);
var ToolbarGroup = (0, import_core2.forwardRefWithAs)(
  ({ children: children2, direction = "row", ...props }, ref) => {
    const { spacing } = (0, import_core2.useTheme)();
    return /* @__PURE__ */ (0, import_core2.jsx)(ToolbarGroupContext.Provider, { value: { direction } }, /* @__PURE__ */ (0, import_core2.jsx)(
      import_core2.Box,
      {
        ref,
        css: {
          display: "flex",
          gap: spacing.xxsmall,
          flexDirection: direction,
          justifyContent: "start",
          alignItems: directionToAlignment[direction],
          height: "100%"
        },
        ...props
      },
      children2
    ));
  }
);
var ToolbarButton = (0, import_core2.forwardRefWithAs)(function ToolbarButton2({ as: Tag = "button", isDisabled, isPressed, isSelected, variant = "default", ...props }, ref) {
  const extraProps = {};
  const { direction: groupDirection } = useToolbarGroupContext();
  const { colors, palette, radii, sizing, spacing, typography } = (0, import_core2.useTheme)();
  if (Tag === "button") {
    extraProps.type = "button";
  }
  const variants = {
    default: {
      bgHover: palette.neutral200,
      bgActive: palette.neutral300,
      fg: palette.neutral800
    },
    action: { bgHover: palette.blue50, bgActive: palette.blue100, fg: palette.blue600 },
    destructive: { bgHover: palette.red50, bgActive: palette.red100, fg: palette.red600 }
  };
  const style = variants[variant];
  return /* @__PURE__ */ (0, import_core2.jsx)(
    Tag,
    {
      ...extraProps,
      ref,
      disabled: isDisabled,
      "data-pressed": isPressed,
      "data-selected": isSelected,
      "data-display-mode": groupDirection,
      css: {
        alignItems: "center",
        background: 0,
        border: 0,
        borderRadius: radii.xsmall,
        color: style.fg,
        cursor: "pointer",
        display: "flex",
        fontSize: typography.fontSize.small,
        fontWeight: typography.fontWeight.medium,
        height: sizing.medium,
        whiteSpace: "nowrap",
        ":hover": {
          background: style.bgHover
        },
        ":active": {
          background: style.bgActive
        },
        "&:disabled": {
          color: colors.foregroundDisabled,
          pointerEvents: "none"
        },
        "&[data-pressed=true]": {
          background: style.bgActive
        },
        "&[data-selected=true]": {
          background: colors.foregroundMuted,
          color: colors.background
        },
        "&[data-display-mode=row]": {
          paddingLeft: spacing.small,
          paddingRight: spacing.small
        },
        "&[data-display-mode=column]": {
          paddingLeft: spacing.medium,
          paddingRight: spacing.medium,
          width: "100%"
        }
      },
      ...props
    }
  );
});

// fields-document/src/DocumentEditor/primitives/orderable.tsx
var import_core3 = require("@keystone-ui/core");
var import_react3 = require("react");
var import_core4 = require("@dnd-kit/core");
var import_sortable = require("@dnd-kit/sortable");
var import_react4 = require("react");
var import_modifiers = require("@dnd-kit/modifiers");
var import_button = require("@keystone-ui/button");
var import_Trash2Icon = require("@keystone-ui/icons/icons/Trash2Icon");
var RemoveContext = (0, import_react4.createContext)(null);
function OrderableList(props) {
  const sensors = (0, import_core4.useSensors)(
    (0, import_core4.useSensor)(import_core4.MouseSensor, { activationConstraint: { distance: 3 } }),
    (0, import_core4.useSensor)(import_core4.TouchSensor),
    (0, import_core4.useSensor)(import_core4.KeyboardSensor, {
      coordinateGetter: import_sortable.sortableKeyboardCoordinates
    })
  );
  const elementsRef = (0, import_react3.useRef)(props.elements);
  (0, import_react3.useEffect)(() => {
    elementsRef.current = props.elements;
  });
  const { onChange } = props;
  const onRemove = (0, import_react3.useCallback)(
    (index) => {
      onChange(elementsRef.current.filter((_, i) => i !== index).map((x) => ({ key: x.key })));
    },
    [onChange]
  );
  return /* @__PURE__ */ (0, import_core3.jsx)(RemoveContext.Provider, { value: onRemove }, /* @__PURE__ */ (0, import_core3.jsx)(
    import_core4.DndContext,
    {
      sensors,
      collisionDetection: import_core4.closestCenter,
      modifiers: [import_modifiers.restrictToVerticalAxis],
      onDragEnd: ({ over, active }) => {
        if (over && over.id !== active.id) {
          const activeIndex = props.elements.findIndex((x) => x.key === active.id);
          const overIndex = props.elements.findIndex((x) => x.key === over.id);
          const newValue = (0, import_sortable.arrayMove)(
            props.elements.map((x) => ({ key: x.key })),
            activeIndex,
            overIndex
          );
          props.onChange(newValue);
        }
      }
    },
    /* @__PURE__ */ (0, import_core3.jsx)(
      import_sortable.SortableContext,
      {
        items: (0, import_react3.useMemo)(() => props.elements.map((x) => x.key), [props.elements]),
        strategy: import_sortable.verticalListSortingStrategy
      },
      /* @__PURE__ */ (0, import_core3.jsx)(
        "ul",
        {
          css: {
            isolation: "isolate",
            display: "flex",
            gap: 8,
            flexDirection: "column",
            padding: 0,
            margin: 0
          }
        },
        props.children
      )
    )
  ));
}
var DragHandleListenersContext = (0, import_react4.createContext)(null);
function OrderableItem(props) {
  const { attributes, isDragging, listeners, setNodeRef, transform, transition, index } = (0, import_sortable.useSortable)({
    id: props.elementKey
  });
  const style = {
    transition,
    zIndex: isDragging ? 2 : 1,
    "--translate-x": `${Math.round(transform?.x ?? 0)}px`,
    "--translate-y": `${Math.round(transform?.y ?? 0)}px`,
    cursor: isDragging ? "grabbing" : void 0
  };
  return /* @__PURE__ */ (0, import_core3.jsx)(
    DragHandleListenersContext.Provider,
    {
      value: (0, import_react3.useMemo)(() => {
        return {
          attributes,
          listeners,
          isDragging,
          index
        };
      }, [attributes, listeners, isDragging, index])
    },
    /* @__PURE__ */ (0, import_core3.jsx)(
      "li",
      {
        ref: setNodeRef,
        css: {
          transform: `translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0))`,
          listStyle: "none"
        },
        style
      },
      /* @__PURE__ */ (0, import_core3.jsx)(
        "div",
        {
          style: {
            pointerEvents: isDragging ? "none" : void 0,
            transform: `scale(${isDragging ? "1.02" : "1"})`,
            border: "1px solid #DFDFE7"
          },
          css: {
            backgroundColor: "white",
            borderRadius: 8,
            padding: "8px",
            transition: "transform 100ms ease, box-shadow 150ms ease"
          }
        },
        props.children
      )
    )
  );
}
function RemoveButton() {
  const sortable = (0, import_react4.useContext)(DragHandleListenersContext);
  const onRemove = (0, import_react4.useContext)(RemoveContext);
  if (sortable === null || onRemove === null) {
    throw new Error("Must use OrderableItem above RemoveButton");
  }
  return /* @__PURE__ */ (0, import_core3.jsx)(
    import_button.Button,
    {
      weight: "none",
      css: { padding: 7 },
      onClick: () => onRemove(sortable.index),
      "aria-label": "Remove"
    },
    /* @__PURE__ */ (0, import_core3.jsx)(import_Trash2Icon.Trash2Icon, { size: "small" })
  );
}
function DragHandle() {
  const sortable = (0, import_react4.useContext)(DragHandleListenersContext);
  if (sortable === null) {
    throw new Error("Must use OrderableItem above DragHandle");
  }
  return /* @__PURE__ */ (0, import_core3.jsx)(
    import_button.Button,
    {
      ...sortable.attributes,
      ...sortable.listeners,
      css: { cursor: sortable.isDragging ? "grabbing" : void 0, padding: 7 },
      weight: "none",
      size: "small",
      "aria-label": "Drag handle"
    },
    dragIcon
  );
}
var dragIcon = /* @__PURE__ */ (0, import_core3.jsx)("span", { css: { display: "flex", justifyContent: "center", alignItems: "center" } }, /* @__PURE__ */ (0, import_core3.jsx)("svg", { width: "20", height: "21", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ (0, import_core3.jsx)(
  "path",
  {
    d: "M6 4h3v3H6V4Zm5 0h3v3h-3V4ZM9 9H6v3h3V9Zm2 0h3v3h-3V9Zm-2 5H6v3h3v-3Zm2 0h3v3h-3v-3Z",
    fill: "currentColor"
  }
)));

// fields-document/src/DocumentEditor/utils.ts
var import_react5 = __toESM(require("react"));
var import_slate2 = require("slate");
var import_slate_react = require("slate-react");
var import_slate_react2 = require("slate-react");
var isElementActive = (editor, format) => {
  const [match] = import_slate2.Editor.nodes(editor, {
    match: (n) => n.type === format
  });
  return !!match;
};
function moveChildren(editor, parent, to, shouldMoveNode = () => true) {
  const parentPath = import_slate2.Path.isPath(parent) ? parent : parent[1];
  const parentNode = import_slate2.Path.isPath(parent) ? import_slate2.Node.get(editor, parentPath) : parent[0];
  if (!import_slate2.Editor.isBlock(editor, parentNode))
    return;
  for (let i = parentNode.children.length - 1; i >= 0; i--) {
    if (shouldMoveNode(parentNode.children[i])) {
      const childPath = [...parentPath, i];
      import_slate2.Transforms.moveNodes(editor, { at: childPath, to });
    }
  }
}
var IS_MAC = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
var ForceValidationContext = import_react5.default.createContext(false);
var ForceValidationProvider = ForceValidationContext.Provider;
function insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, nodes) {
  let pathRefForEmptyNodeAtCursor;
  const entry = import_slate2.Editor.above(editor, {
    match: (node) => node.type === "heading" || node.type === "paragraph"
  });
  if (entry && import_slate2.Node.string(entry[0]) === "") {
    pathRefForEmptyNodeAtCursor = import_slate2.Editor.pathRef(editor, entry[1]);
  }
  import_slate2.Transforms.insertNodes(editor, nodes);
  let path2 = pathRefForEmptyNodeAtCursor?.unref();
  if (path2) {
    import_slate2.Transforms.removeNodes(editor, { at: path2 });
    import_slate_react.ReactEditor.focus(editor);
  }
}
function EditorAfterButIgnoringingPointsWithNoContent(editor, at, {
  distance = 1
} = {}) {
  const anchor = import_slate2.Editor.point(editor, at, { edge: "end" });
  const focus = import_slate2.Editor.end(editor, []);
  const range = { anchor, focus };
  let d = 0;
  let target;
  for (const p of import_slate2.Editor.positions(editor, {
    at: range
  })) {
    if (d > distance) {
      break;
    }
    const node = import_slate2.Node.get(editor, p.path);
    if (node.text.length === p.offset) {
      continue;
    }
    if (d !== 0) {
      target = p;
    }
    d++;
  }
  return target;
}
function nodeTypeMatcher(...args) {
  if (args.length === 1) {
    const type2 = args[0];
    return (node) => node.type === type2;
  }
  const set = new Set(args);
  return (node) => typeof node.type === "string" && set.has(node.type);
}
function assert(condition) {
  if (!condition) {
    throw new Error("failed assert");
  }
}

// fields-document/src/DocumentEditor/toolbar-state.tsx
var import_react15 = __toESM(require("react"));
var import_slate10 = require("slate");
var import_slate_react7 = require("slate-react");

// fields-document/src/DocumentEditor/component-blocks/index.tsx
var import_react11 = require("react");
var import_slate_react4 = require("slate-react");
var import_slate6 = require("slate");
var import_core12 = require("@keystone-ui/core");

// fields-document/src/DocumentEditor/component-blocks/preview-props.tsx
var arrayValuesToElementKeys = /* @__PURE__ */ new WeakMap();
var counter = 0;
function getKeysForArrayValue(value) {
  if (!arrayValuesToElementKeys.has(value)) {
    arrayValuesToElementKeys.set(
      value,
      Array.from({ length: value.length }, getNewArrayElementKey)
    );
  }
  return arrayValuesToElementKeys.get(value);
}
function setKeysForArrayValue(value, elementIds) {
  arrayValuesToElementKeys.set(value, elementIds);
}
function getNewArrayElementKey() {
  return (counter++).toString();
}
function castToMemoizedInfoForSchema(val) {
  return val;
}
function getOrInsert(map, key, val) {
  if (!map.has(key)) {
    map.set(key, val(key));
  }
  return map.get(key);
}
function createGetPreviewProps(rootSchema, rootOnChange, getChildFieldElement) {
  const memoizedInfoForSchema = castToMemoizedInfoForSchema({
    form(schema, onChange) {
      return (newVal) => onChange(() => newVal);
    },
    array(schema, onChange) {
      return {
        rawOnChange: onChange,
        inner: /* @__PURE__ */ new Map(),
        onChange(updater) {
          onChange((value) => updateValue(schema, value, updater));
        }
      };
    },
    child() {
    },
    conditional(schema, onChange) {
      return {
        onChange: (discriminant, value) => onChange((val) => updateValue(schema, val, { discriminant, value })),
        onChangeForValue: (cb) => onChange((val) => ({ discriminant: val.discriminant, value: cb(val.value) }))
      };
    },
    object(schema, onChange) {
      return {
        onChange: (updater) => {
          onChange((value) => updateValue(schema, value, updater));
        },
        innerOnChanges: Object.fromEntries(
          Object.keys(schema.fields).map((key) => {
            return [
              key,
              (newVal) => {
                onChange((val) => ({ ...val, [key]: newVal(val[key]) }));
              }
            ];
          })
        )
      };
    },
    relationship(schema, onChange) {
      return (newVal) => onChange(() => newVal);
    }
  });
  const previewPropsFactories = {
    form(schema, value, onChange) {
      return {
        value,
        onChange,
        options: schema.options,
        schema
      };
    },
    child(schema, value, onChange, path2) {
      return { element: getChildFieldElement(path2), schema };
    },
    object(schema, value, memoized, path2, getInnerProp) {
      const fields2 = {};
      for (const key of Object.keys(schema.fields)) {
        fields2[key] = getInnerProp(
          schema.fields[key],
          value[key],
          memoized.innerOnChanges[key],
          key
        );
      }
      const previewProps = {
        fields: fields2,
        onChange: memoized.onChange,
        schema
      };
      return previewProps;
    },
    array(schema, value, memoized, path2, getInnerProp) {
      const arrayValue = value;
      const keys = getKeysForArrayValue(arrayValue);
      const unusedKeys = new Set(getKeysForArrayValue(value));
      const props = {
        elements: arrayValue.map((val, i) => {
          const key = keys[i];
          unusedKeys.delete(key);
          const element = getOrInsert(memoized.inner, key, () => {
            const onChange = (val2) => {
              memoized.rawOnChange((prev) => {
                const keys2 = getKeysForArrayValue(prev);
                const index = keys2.indexOf(key);
                const newValue = [...prev];
                newValue[index] = val2(newValue[index]);
                setKeysForArrayValue(newValue, keys2);
                return newValue;
              });
            };
            const element2 = getInnerProp(schema.element, val, onChange, key);
            return {
              element: element2,
              elementWithKey: {
                ...element2,
                key
              },
              onChange
            };
          });
          const currentInnerProp = getInnerProp(schema.element, val, element.onChange, key);
          if (element.element !== currentInnerProp) {
            element.element = currentInnerProp;
            element.elementWithKey = {
              ...currentInnerProp,
              key
            };
          }
          return element.elementWithKey;
        }),
        schema,
        onChange: memoized.onChange
      };
      for (const key of unusedKeys) {
        memoized.inner.delete(key);
      }
      return props;
    },
    relationship(schema, value, onChange) {
      const props = {
        value,
        onChange,
        schema
      };
      return props;
    },
    conditional(schema, value, memoized, path2, getInnerProp) {
      const props = {
        discriminant: value.discriminant,
        onChange: memoized.onChange,
        options: schema.discriminant.options,
        value: getInnerProp(
          schema.values[value.discriminant.toString()],
          value.value,
          memoized.onChangeForValue,
          "value"
        ),
        schema
      };
      return props;
    }
  };
  function getPreviewPropsForProp(schema, value, memoedThing, path2, getInnerProp) {
    return previewPropsFactories[schema.kind](
      schema,
      value,
      memoedThing,
      path2,
      getInnerProp
    );
  }
  function getInitialMemoState(schema, value, onChange, path2) {
    const innerState = /* @__PURE__ */ new Map();
    const memoizedInfo = memoizedInfoForSchema[schema.kind](schema, onChange);
    const state = {
      value,
      inner: innerState,
      props: getPreviewPropsForProp(
        schema,
        value,
        memoizedInfo,
        path2,
        (schema2, value2, onChange2, key) => {
          const state2 = getInitialMemoState(schema2, value2, onChange2, path2.concat(key));
          innerState.set(key, state2);
          return state2.props;
        }
      ),
      schema,
      cached: memoizedInfo
    };
    return state;
  }
  function getUpToDateProps(schema, value, onChange, memoState2, path2) {
    if (memoState2.schema !== schema) {
      Object.assign(memoState2, getInitialMemoState(schema, value, onChange, path2));
      return memoState2.props;
    }
    if (memoState2.value === value) {
      return memoState2.props;
    }
    memoState2.value = value;
    const unusedKeys = new Set(memoState2.inner.keys());
    memoState2.props = getPreviewPropsForProp(
      schema,
      value,
      memoState2.cached,
      path2,
      (schema2, value2, onChange2, innerMemoStateKey) => {
        unusedKeys.delete(innerMemoStateKey);
        if (!memoState2.inner.has(innerMemoStateKey)) {
          const innerState = getInitialMemoState(
            schema2,
            value2,
            onChange2,
            path2.concat(innerMemoStateKey)
          );
          memoState2.inner.set(innerMemoStateKey, innerState);
          return innerState.props;
        }
        return getUpToDateProps(
          schema2,
          value2,
          onChange2,
          memoState2.inner.get(innerMemoStateKey),
          path2.concat(innerMemoStateKey)
        );
      }
    );
    for (const key of unusedKeys) {
      memoState2.inner.delete(key);
    }
    return memoState2.props;
  }
  let memoState;
  return (value) => {
    if (memoState === void 0) {
      memoState = getInitialMemoState(rootSchema, value, rootOnChange, []);
      return memoState.props;
    }
    return getUpToDateProps(rootSchema, value, rootOnChange, memoState, []);
  };
}

// fields-document/src/DocumentEditor/component-blocks/utils.ts
function findChildPropPathsForProp(value, schema, path2) {
  switch (schema.kind) {
    case "form":
    case "relationship":
      return [];
    case "child":
      return [{ path: path2, options: schema.options }];
    case "conditional":
      return findChildPropPathsForProp(
        value.value,
        schema.values[value.discriminant],
        path2.concat("value")
      );
    case "object": {
      const paths = [];
      Object.keys(schema.fields).forEach((key) => {
        paths.push(...findChildPropPathsForProp(value[key], schema.fields[key], path2.concat(key)));
      });
      return paths;
    }
    case "array": {
      const paths = [];
      value.forEach((val, i) => {
        paths.push(...findChildPropPathsForProp(val, schema.element, path2.concat(i)));
      });
      return paths;
    }
  }
}
function findChildPropPaths(value, props) {
  const propPaths = findChildPropPathsForProp(value, { kind: "object", fields: props }, []);
  if (!propPaths.length) {
    return [
      {
        path: void 0,
        options: { kind: "inline", placeholder: "" }
      }
    ];
  }
  return propPaths;
}
function assertNever(arg2) {
  throw new Error("expected to never be called but received: " + JSON.stringify(arg2));
}
function getDocumentFeaturesForChildField(editorDocumentFeatures, options) {
  const inlineMarksFromOptions = options.formatting?.inlineMarks;
  const inlineMarks = inlineMarksFromOptions === "inherit" ? "inherit" : Object.fromEntries(
    Object.keys(editorDocumentFeatures.formatting.inlineMarks).map((mark) => {
      return [mark, !!(inlineMarksFromOptions || {})[mark]];
    })
  );
  if (options.kind === "inline") {
    return {
      kind: "inline",
      inlineMarks,
      documentFeatures: {
        links: options.links === "inherit",
        relationships: options.relationships === "inherit"
      },
      softBreaks: options.formatting?.softBreaks === "inherit"
    };
  }
  return {
    kind: "block",
    inlineMarks,
    softBreaks: options.formatting?.softBreaks === "inherit",
    documentFeatures: {
      layouts: [],
      dividers: options.dividers === "inherit" ? editorDocumentFeatures.dividers : false,
      formatting: {
        alignment: options.formatting?.alignment === "inherit" ? editorDocumentFeatures.formatting.alignment : {
          center: false,
          end: false
        },
        blockTypes: options.formatting?.blockTypes === "inherit" ? editorDocumentFeatures.formatting.blockTypes : {
          blockquote: false,
          code: false
        },
        headingLevels: options.formatting?.headingLevels === "inherit" ? editorDocumentFeatures.formatting.headingLevels : options.formatting?.headingLevels || [],
        listTypes: options.formatting?.listTypes === "inherit" ? editorDocumentFeatures.formatting.listTypes : {
          ordered: false,
          unordered: false
        }
      },
      links: options.links === "inherit",
      relationships: options.relationships === "inherit"
    }
  };
}
function getSchemaAtPropPathInner(path2, value, schema) {
  if (path2.length === 0) {
    return schema;
  }
  if (schema.kind === "child" || schema.kind === "form" || schema.kind === "relationship") {
    return;
  }
  if (schema.kind === "conditional") {
    const key = path2.shift();
    if (key === "discriminant") {
      return getSchemaAtPropPathInner(path2, value.discriminant, schema.discriminant);
    }
    if (key === "value") {
      const propVal = schema.values[value.discriminant];
      return getSchemaAtPropPathInner(path2, value.value, propVal);
    }
    return;
  }
  if (schema.kind === "object") {
    const key = path2.shift();
    return getSchemaAtPropPathInner(path2, value[key], schema.fields[key]);
  }
  if (schema.kind === "array") {
    const index = path2.shift();
    return getSchemaAtPropPathInner(path2, value[index], schema.element);
  }
  assertNever(schema);
}
function getSchemaAtPropPath(path2, value, props) {
  return getSchemaAtPropPathInner([...path2], value, {
    kind: "object",
    fields: props
  });
}
function clientSideValidateProp(schema, value) {
  switch (schema.kind) {
    case "child":
    case "relationship": {
      return true;
    }
    case "form": {
      return schema.validate(value);
    }
    case "conditional": {
      if (!schema.discriminant.validate(value.discriminant)) {
        return false;
      }
      return clientSideValidateProp(schema.values[value.discriminant], value.value);
    }
    case "object": {
      for (const [key, childProp] of Object.entries(schema.fields)) {
        if (!clientSideValidateProp(childProp, value[key])) {
          return false;
        }
      }
      return true;
    }
    case "array": {
      for (const innerVal of value) {
        if (!clientSideValidateProp(schema.element, innerVal)) {
          return false;
        }
      }
      return true;
    }
  }
}
function getAncestorSchemas(rootSchema, path2, value) {
  const ancestors = [];
  const currentPath = [...path2];
  let currentProp = rootSchema;
  let currentValue = value;
  while (currentPath.length) {
    ancestors.push(currentProp);
    const key = currentPath.shift();
    if (currentProp.kind === "array") {
      currentProp = currentProp.element;
      currentValue = currentValue[key];
    } else if (currentProp.kind === "conditional") {
      currentProp = currentProp.values[value.discriminant];
      currentValue = currentValue.value;
    } else if (currentProp.kind === "object") {
      currentValue = currentValue[key];
      currentProp = currentProp.fields[key];
    } else if (currentProp.kind === "child" || currentProp.kind === "form" || currentProp.kind === "relationship") {
      throw new Error(`unexpected prop "${key}"`);
    } else {
      assertNever(currentProp);
    }
  }
  return ancestors;
}
function getValueAtPropPath(value, inputPath) {
  const path2 = [...inputPath];
  while (path2.length) {
    const key = path2.shift();
    value = value[key];
  }
  return value;
}
function traverseProps(schema, value, visitor, path2 = []) {
  if (schema.kind === "form" || schema.kind === "relationship" || schema.kind === "child") {
    visitor(schema, value, path2);
    return;
  }
  if (schema.kind === "object") {
    for (const [key, childProp] of Object.entries(schema.fields)) {
      traverseProps(childProp, value[key], visitor, [...path2, key]);
    }
    visitor(schema, value, path2);
    return;
  }
  if (schema.kind === "array") {
    for (const [idx, val] of value.entries()) {
      traverseProps(schema.element, val, visitor, path2.concat(idx));
    }
    return visitor(schema, value, path2);
  }
  if (schema.kind === "conditional") {
    const discriminant = value.discriminant;
    visitor(schema, discriminant, path2.concat("discriminant"));
    traverseProps(
      schema.values[discriminant.toString()],
      value.value,
      visitor,
      path2.concat("value")
    );
    visitor(schema, value, path2);
    return;
  }
  assertNever(schema);
}
function replaceValueAtPropPath(schema, value, newValue, path2) {
  if (path2.length === 0) {
    return newValue;
  }
  const [key, ...newPath] = path2;
  if (schema.kind === "object") {
    return {
      ...value,
      [key]: replaceValueAtPropPath(schema.fields[key], value[key], newValue, newPath)
    };
  }
  if (schema.kind === "conditional") {
    const conditionalValue = value;
    assert(key === "value");
    return {
      discriminant: conditionalValue.discriminant,
      value: replaceValueAtPropPath(schema.values[key], conditionalValue.value, newValue, newPath)
    };
  }
  if (schema.kind === "array") {
    const prevVal = value;
    const newVal = [...prevVal];
    setKeysForArrayValue(newVal, getKeysForArrayValue(prevVal));
    newVal[key] = replaceValueAtPropPath(
      schema.element,
      newVal[key],
      newValue,
      newPath
    );
    return newVal;
  }
  assert(schema.kind !== "form" && schema.kind !== "relationship" && schema.kind !== "child");
  assertNever(schema);
}

// fields-document/src/DocumentEditor/component-blocks/initial-values.ts
function getInitialPropsValue(schema) {
  switch (schema.kind) {
    case "form":
      return schema.defaultValue;
    case "child":
      return null;
    case "relationship":
      return schema.many ? [] : null;
    case "conditional": {
      const defaultValue = schema.discriminant.defaultValue;
      return {
        discriminant: defaultValue,
        value: getInitialPropsValue(schema.values[defaultValue.toString()])
      };
    }
    case "object": {
      const obj = {};
      for (const key of Object.keys(schema.fields)) {
        obj[key] = getInitialPropsValue(schema.fields[key]);
      }
      return obj;
    }
    case "array": {
      return [];
    }
  }
  assertNever(schema);
}
function getInitialPropsValueFromInitializer(schema, initializer) {
  switch (schema.kind) {
    case "form":
      return initializer === void 0 ? schema.defaultValue : initializer;
    case "child":
      return null;
    case "relationship":
      return initializer === void 0 ? schema.many ? [] : null : initializer;
    case "conditional": {
      const defaultValue = initializer === void 0 ? schema.discriminant.defaultValue : initializer.discriminant;
      return {
        discriminant: defaultValue,
        value: getInitialPropsValueFromInitializer(
          schema.values[defaultValue.toString()],
          initializer === void 0 ? void 0 : initializer.value
        )
      };
    }
    case "object": {
      const obj = {};
      for (const key of Object.keys(schema.fields)) {
        obj[key] = getInitialPropsValueFromInitializer(
          schema.fields[key],
          initializer === void 0 ? void 0 : initializer[key]
        );
      }
      return obj;
    }
    case "array": {
      return (initializer ?? []).map(
        (x) => getInitialPropsValueFromInitializer(schema.element, x.value)
      );
    }
  }
  assertNever(schema);
}
function updateValue(schema, currentValue, updater) {
  if (updater === void 0)
    return currentValue;
  switch (schema.kind) {
    case "relationship":
      return updater;
    case "form":
      return updater;
    case "child":
      return null;
    case "conditional": {
      return {
        discriminant: updater.discriminant,
        value: updater.discriminant === currentValue.discriminant ? updateValue(
          schema.values[updater.discriminant.toString()],
          currentValue.value,
          updater.value
        ) : getInitialPropsValueFromInitializer(
          schema.values[updater.discriminant.toString()],
          updater.value
        )
      };
    }
    case "object": {
      const obj = {};
      for (const key of Object.keys(schema.fields)) {
        obj[key] = updateValue(schema.fields[key], currentValue[key], updater[key]);
      }
      return obj;
    }
    case "array": {
      const currentArrVal = currentValue;
      const newVal = updater;
      const uniqueKeys = /* @__PURE__ */ new Set();
      for (const x of newVal) {
        if (x.key !== void 0) {
          if (uniqueKeys.has(x.key)) {
            throw new Error("Array elements must have unique keys");
          }
          uniqueKeys.add(x.key);
        }
      }
      const keys = newVal.map((x) => {
        if (x.key !== void 0)
          return x.key;
        let elementKey = getNewArrayElementKey();
        while (uniqueKeys.has(elementKey)) {
          elementKey = getNewArrayElementKey();
        }
        uniqueKeys.add(elementKey);
        return elementKey;
      });
      const prevKeys = getKeysForArrayValue(currentArrVal);
      const prevValuesByKey = new Map(
        currentArrVal.map((value, i) => {
          return [prevKeys[i], value];
        })
      );
      const val = newVal.map((x, i) => {
        const id = keys[i];
        if (prevValuesByKey.has(id)) {
          return updateValue(schema.element, prevValuesByKey.get(id), x.value);
        }
        return getInitialPropsValueFromInitializer(schema.element, x.value);
      });
      setKeysForArrayValue(val, keys);
      return val;
    }
  }
  assertNever(schema);
}

// fields-document/src/DocumentEditor/component-blocks/update-element.ts
var import_slate4 = require("slate");

// fields-document/src/DocumentEditor/document-features-normalization.ts
var import_slate3 = require("slate");
function areArraysEqual(a, b) {
  return a.length === b.length && a.every((x, i) => x === b[i]);
}
function normalizeTextBasedOnInlineMarksAndSoftBreaks([node, path2], editor, inlineMarks, softBreaks) {
  const marksToRemove = Object.keys(node).filter(
    (x) => x !== "text" && x !== "insertMenu" && inlineMarks[x] !== true
  );
  if (marksToRemove.length) {
    import_slate3.Transforms.unsetNodes(editor, marksToRemove, { at: path2 });
    return true;
  }
  if (!softBreaks) {
    const hasSoftBreaks = node.text.includes("\n");
    if (hasSoftBreaks) {
      const [parentNode] = import_slate3.Editor.parent(editor, path2);
      if (parentNode.type !== "code") {
        for (const position of import_slate3.Editor.positions(editor, { at: path2 })) {
          const character = import_slate3.Node.get(editor, position.path).text[position.offset];
          if (character === "\n") {
            import_slate3.Transforms.delete(editor, { at: position });
            return true;
          }
        }
      }
    }
  }
  return false;
}
function normalizeInlineBasedOnLinksAndRelationships([node, path2], editor, links, relationshipsEnabled, relationships) {
  if (node.type === "link" && !links) {
    import_slate3.Transforms.insertText(editor, ` (${node.href})`, { at: import_slate3.Editor.end(editor, path2) });
    import_slate3.Transforms.unwrapNodes(editor, { at: path2 });
    return true;
  }
  if (node.type === "relationship" && (!relationshipsEnabled || relationships[node.relationship] === void 0)) {
    const data = node.data;
    if (data) {
      const relationship9 = relationships[node.relationship];
      import_slate3.Transforms.insertText(
        editor,
        `${data.label || data.id || ""} (${relationship9?.label || node.relationship}:${data.id || ""})`,
        { at: import_slate3.Editor.before(editor, path2) }
      );
    }
    import_slate3.Transforms.removeNodes(editor, { at: path2 });
    return true;
  }
  return false;
}
function normalizeElementBasedOnDocumentFeatures([node, path2], editor, {
  formatting,
  dividers,
  layouts,
  links,
  relationships: relationshipsEnabled
}, relationships) {
  if (node.type === "heading" && (!formatting.headingLevels.length || !formatting.headingLevels.includes(node.level)) || node.type === "ordered-list" && !formatting.listTypes.ordered || node.type === "unordered-list" && !formatting.listTypes.unordered || node.type === "code" && !formatting.blockTypes.code || node.type === "blockquote" && !formatting.blockTypes.blockquote || node.type === "layout" && (layouts.length === 0 || !layouts.some((layout) => areArraysEqual(layout, node.layout)))) {
    import_slate3.Transforms.unwrapNodes(editor, { at: path2 });
    return true;
  }
  if ((node.type === "paragraph" || node.type === "heading") && (!formatting.alignment.center && node.textAlign === "center" || !formatting.alignment.end && node.textAlign === "end" || "textAlign" in node && node.textAlign !== "center" && node.textAlign !== "end")) {
    import_slate3.Transforms.unsetNodes(editor, "textAlign", { at: path2 });
    return true;
  }
  if (node.type === "divider" && !dividers) {
    import_slate3.Transforms.removeNodes(editor, { at: path2 });
    return true;
  }
  return normalizeInlineBasedOnLinksAndRelationships(
    [node, path2],
    editor,
    links,
    relationshipsEnabled,
    relationships
  );
}
function withDocumentFeaturesNormalization(documentFeatures, relationships, editor) {
  const { normalizeNode } = editor;
  const documentFeaturesForNormalization = { ...documentFeatures, relationships: true };
  editor.normalizeNode = ([node, path2]) => {
    if (import_slate3.Text.isText(node)) {
      normalizeTextBasedOnInlineMarksAndSoftBreaks(
        [node, path2],
        editor,
        documentFeatures.formatting.inlineMarks,
        documentFeatures.formatting.softBreaks
      );
    } else if (import_slate3.Element.isElement(node)) {
      normalizeElementBasedOnDocumentFeatures(
        [node, path2],
        editor,
        documentFeaturesForNormalization,
        relationships
      );
    }
    normalizeNode([node, path2]);
  };
  return editor;
}

// fields-document/src/DocumentEditor/component-blocks/component-block-render.tsx
var import_core5 = require("@keystone-ui/core");
var import_react6 = __toESM(require("react"));
var import_react7 = require("react");
var ChildrenByPathContext = import_react6.default.createContext({});

// fields-document/src/DocumentEditor/component-blocks/chromeful-element.tsx
var import_core9 = require("@keystone-ui/core");
var import_Trash2Icon2 = require("@keystone-ui/icons/icons/Trash2Icon");
var import_tooltip = require("@keystone-ui/tooltip");
var import_react10 = require("react");
var import_slate_react3 = require("slate-react");
var import_core10 = require("@keystone-ui/core");
var import_button3 = require("@keystone-ui/button");

// fields-document/src/DocumentEditor/component-blocks/api.tsx
var import_core6 = require("@keystone-6/core");
var import_core7 = require("@keystone-ui/core");
var import_fields2 = require("@keystone-ui/fields");
var import_react8 = require("react");

// fields-document/src/DocumentEditor/isValidURL.ts
var import_sanitize_url = require("@braintree/sanitize-url");
function isValidURL(url) {
  return url === (0, import_sanitize_url.sanitizeUrl)(url);
}

// fields-document/src/DocumentEditor/component-blocks/form-from-preview.tsx
var import_context = require("@keystone-6/core/admin-ui/context");
var import_RelationshipSelect = require("@keystone-6/core/fields/types/relationship/views/RelationshipSelect");
var import_button2 = require("@keystone-ui/button");
var import_core8 = require("@keystone-ui/core");
var import_fields3 = require("@keystone-ui/fields");
var import_PlusCircleIcon = require("@keystone-ui/icons/icons/PlusCircleIcon");
var import_modals = require("@keystone-ui/modals");
var import_react9 = require("react");

// fields-document/src/DocumentEditor/component-blocks/get-value.ts
var previewPropsToValueConverter = {
  child() {
    return null;
  },
  form(props) {
    return props.value;
  },
  array(props) {
    const values = props.elements.map((x) => previewPropsToValue(x));
    setKeysForArrayValue(
      values,
      props.elements.map((x) => x.key)
    );
    return values;
  },
  conditional(props) {
    return {
      discriminant: props.discriminant,
      value: previewPropsToValue(props.value)
    };
  },
  object(props) {
    return Object.fromEntries(
      Object.entries(props.fields).map(([key, val]) => [key, previewPropsToValue(val)])
    );
  },
  relationship(props) {
    return props.value;
  }
};
function previewPropsToValue(props) {
  return previewPropsToValueConverter[props.schema.kind](props);
}
var valueToUpdaters = {
  child() {
    return void 0;
  },
  form(value) {
    return value;
  },
  array(value, schema) {
    const keys = getKeysForArrayValue(value);
    return value.map((x, i) => ({
      key: keys[i],
      value: valueToUpdater(x, schema.element)
    }));
  },
  conditional(value, schema) {
    return {
      discriminant: value.discriminant,
      value: valueToUpdater(value.value, schema.values[value.discriminant.toString()])
    };
  },
  object(value, schema) {
    return Object.fromEntries(
      Object.entries(schema.fields).map(([key, schema2]) => [
        key,
        valueToUpdater(value[key], schema2)
      ])
    );
  },
  relationship(value) {
    return value;
  }
};
function valueToUpdater(value, schema) {
  return valueToUpdaters[schema.kind](value, schema);
}
function setValueToPreviewProps(value, props) {
  if (isKind(props, "child")) {
    return;
  }
  if (isKind(props, "form") || isKind(props, "relationship") || isKind(props, "object") || isKind(props, "array")) {
    props.onChange(valueToUpdater(value, props.schema));
    return;
  }
  if (isKind(props, "conditional")) {
    const updater = valueToUpdater(value, props.schema);
    props.onChange(updater.discriminant, updater.value);
    return;
  }
  assertNever(props);
}
function isKind(props, kind) {
  return props.schema.kind === kind;
}

// fields-document/src/DocumentEditor/component-blocks/form-from-preview.tsx
function ArrayFieldPreview(props) {
  return /* @__PURE__ */ (0, import_core8.jsx)(import_core8.Stack, { gap: "medium" }, /* @__PURE__ */ (0, import_core8.jsx)(OrderableList, { ...props }, props.elements.map((val) => {
    return /* @__PURE__ */ (0, import_core8.jsx)(
      OrderableItemInForm,
      {
        elementKey: val.key,
        label: props.schema.label?.(val) ?? "Item",
        ...val
      }
    );
  })), /* @__PURE__ */ (0, import_core8.jsx)(
    import_button2.Button,
    {
      autoFocus: props.autoFocus,
      onClick: () => {
        props.onChange([...props.elements.map((x) => ({ key: x.key })), { key: void 0 }]);
      },
      tone: "active"
    },
    /* @__PURE__ */ (0, import_core8.jsx)(import_core8.Stack, { gap: "small", across: true }, /* @__PURE__ */ (0, import_core8.jsx)(import_PlusCircleIcon.PlusCircleIcon, { size: "smallish" }), " ", /* @__PURE__ */ (0, import_core8.jsx)("span", null, "Add"))
  ));
}
function RelationshipFieldPreview({
  schema,
  autoFocus,
  onChange,
  value
}) {
  const keystone = (0, import_context.useKeystone)();
  const list3 = keystone.adminMeta.lists[schema.listKey];
  const searchFields = Object.keys(list3.fields).filter((key) => list3.fields[key].search);
  return /* @__PURE__ */ (0, import_core8.jsx)(import_fields3.FieldContainer, null, /* @__PURE__ */ (0, import_core8.jsx)(import_fields3.FieldLabel, null, schema.label), /* @__PURE__ */ (0, import_core8.jsx)(
    import_RelationshipSelect.RelationshipSelect,
    {
      autoFocus,
      controlShouldRenderValue: true,
      isDisabled: false,
      list: list3,
      labelField: list3.labelField,
      searchFields,
      extraSelection: schema.selection || "",
      portalMenu: true,
      state: schema.many ? {
        kind: "many",
        value: value.map((x) => ({
          id: x.id,
          label: x.label || x.id,
          data: x.data
        })),
        onChange
      } : {
        kind: "one",
        value: value ? {
          ...value,
          label: value.label || value.id
        } : null,
        onChange
      }
    }
  ));
}
function FormFieldPreview({
  schema,
  autoFocus,
  forceValidation,
  onChange,
  value
}) {
  return /* @__PURE__ */ (0, import_core8.jsx)(
    schema.Input,
    {
      autoFocus: !!autoFocus,
      value,
      onChange,
      forceValidation: !!forceValidation
    }
  );
}
function ObjectFieldPreview({ schema, autoFocus, fields: fields2 }) {
  const firstFocusable = autoFocus ? findFocusableObjectFieldKey(schema) : void 0;
  return /* @__PURE__ */ (0, import_core8.jsx)(import_core8.Stack, { gap: "xlarge" }, Object.entries(fields2).map(
    ([key, propVal]) => isNonChildFieldPreviewProps(propVal) && /* @__PURE__ */ (0, import_core8.jsx)(
      FormValueContentFromPreviewProps,
      {
        autoFocus: key === firstFocusable,
        key,
        ...propVal
      }
    )
  ));
}
function ConditionalFieldPreview({
  schema,
  autoFocus,
  discriminant,
  onChange,
  value
}) {
  const schemaDiscriminant = schema.discriminant;
  return /* @__PURE__ */ (0, import_core8.jsx)(import_core8.Stack, { gap: "xlarge" }, (0, import_react9.useMemo)(
    () => /* @__PURE__ */ (0, import_core8.jsx)(
      schemaDiscriminant.Input,
      {
        autoFocus: !!autoFocus,
        value: discriminant,
        onChange,
        forceValidation: false
      }
    ),
    [autoFocus, schemaDiscriminant, discriminant, onChange]
  ), isNonChildFieldPreviewProps(value) && /* @__PURE__ */ (0, import_core8.jsx)(FormValueContentFromPreviewProps, { ...value }));
}
function isNonChildFieldPreviewProps(props) {
  return props.schema.kind !== "child";
}
var fieldRenderers = {
  array: ArrayFieldPreview,
  relationship: RelationshipFieldPreview,
  child: () => null,
  form: FormFieldPreview,
  object: ObjectFieldPreview,
  conditional: ConditionalFieldPreview
};
var FormValueContentFromPreviewProps = (0, import_react9.memo)(function FormValueContentFromPreview(props) {
  const Comp = fieldRenderers[props.schema.kind];
  return /* @__PURE__ */ (0, import_core8.jsx)(Comp, { ...props });
});
var OrderableItemInForm = (0, import_react9.memo)(function OrderableItemInForm2(props) {
  const [modalState, setModalState] = (0, import_react9.useState)({ state: "closed" });
  const onModalChange = (0, import_react9.useCallback)(
    (cb) => {
      setModalState((state) => {
        if (state.state === "open") {
          return { state: "open", forceValidation: state.forceValidation, value: cb(state.value) };
        }
        return state;
      });
    },
    [setModalState]
  );
  return /* @__PURE__ */ (0, import_core8.jsx)(OrderableItem, { elementKey: props.elementKey }, /* @__PURE__ */ (0, import_core8.jsx)(import_core8.Stack, { gap: "medium" }, /* @__PURE__ */ (0, import_core8.jsx)("div", { css: { display: "flex", gap: 4 } }, /* @__PURE__ */ (0, import_core8.jsx)(import_core8.Stack, { across: true, gap: "xsmall", align: "center", css: { cursor: "pointer" } }, /* @__PURE__ */ (0, import_core8.jsx)(DragHandle, null)), /* @__PURE__ */ (0, import_core8.jsx)(
    import_button2.Button,
    {
      weight: "none",
      onClick: () => {
        setModalState({
          state: "open",
          value: previewPropsToValue(props),
          forceValidation: false
        });
      },
      css: { flexGrow: 1, justifyContent: "start" }
    },
    /* @__PURE__ */ (0, import_core8.jsx)("span", { css: { fontSize: 16, fontWeight: "bold", textAlign: "start" } }, props.label)
  ), /* @__PURE__ */ (0, import_core8.jsx)(RemoveButton, null)), isNonChildFieldPreviewProps(props) && /* @__PURE__ */ (0, import_core8.jsx)(
    import_modals.AlertDialog,
    {
      title: `Edit Item`,
      actions: {
        confirm: {
          action: () => {
            if (modalState.state !== "open")
              return;
            if (!clientSideValidateProp(props.schema, modalState.value)) {
              setModalState((state) => ({ ...state, forceValidation: true }));
              return;
            }
            setValueToPreviewProps(modalState.value, props);
            setModalState({ state: "closed" });
          },
          label: "Done"
        },
        cancel: {
          action: () => {
            setModalState({ state: "closed" });
          },
          label: "Cancel"
        }
      },
      isOpen: modalState.state === "open"
    },
    modalState.state === "open" && /* @__PURE__ */ (0, import_core8.jsx)(
      ArrayFieldItemModalContent,
      {
        onChange: onModalChange,
        schema: props.schema,
        value: modalState.value
      }
    )
  )));
});
function ArrayFieldItemModalContent(props) {
  const previewProps = (0, import_react9.useMemo)(
    () => createGetPreviewProps(props.schema, props.onChange, () => void 0),
    [props.schema, props.onChange]
  )(props.value);
  return /* @__PURE__ */ (0, import_core8.jsx)(FormValueContentFromPreviewProps, { ...previewProps });
}
function findFocusableObjectFieldKey(schema) {
  for (const [key, innerProp] of Object.entries(schema.fields)) {
    const childFocusable = canFieldBeFocused(innerProp);
    if (childFocusable) {
      return key;
    }
  }
  return void 0;
}
function canFieldBeFocused(schema) {
  if (schema.kind === "array" || schema.kind === "conditional" || schema.kind === "form" || schema.kind === "relationship") {
    return true;
  }
  if (schema.kind === "child") {
    return false;
  }
  if (schema.kind === "object") {
    for (const innerProp of Object.values(schema.fields)) {
      if (canFieldBeFocused(innerProp)) {
        return true;
      }
    }
    return false;
  }
  assertNever(schema);
}

// fields-document/src/DocumentEditor/component-blocks/chromeless-element.tsx
var import_core11 = require("@keystone-ui/core");
var import_Trash2Icon3 = require("@keystone-ui/icons/icons/Trash2Icon");
var import_popover = require("@keystone-ui/popover");
var import_tooltip2 = require("@keystone-ui/tooltip");

// fields-document/src/DocumentEditor/component-blocks/with-component-blocks.tsx
var import_slate5 = require("slate");
var import_weak_memoize = __toESM(require("@emotion/weak-memoize"));
function getAncestorComponentBlock(editor) {
  if (editor.selection) {
    const ancestorEntry = import_slate5.Editor.above(editor, {
      match: (node) => import_slate5.Editor.isBlock(editor, node) && node.type !== "paragraph"
    });
    if (ancestorEntry && (ancestorEntry[0].type === "component-block-prop" || ancestorEntry[0].type === "component-inline-prop")) {
      return {
        isInside: true,
        componentBlock: import_slate5.Editor.parent(editor, ancestorEntry[1]),
        prop: ancestorEntry
      };
    }
  }
  return { isInside: false };
}
var alreadyNormalizedThings = /* @__PURE__ */ new WeakMap();
function normalizeNodeWithinComponentProp([node, path2], editor, fieldOptions, relationships) {
  let alreadyNormalizedNodes = alreadyNormalizedThings.get(fieldOptions);
  if (!alreadyNormalizedNodes) {
    alreadyNormalizedNodes = /* @__PURE__ */ new WeakSet();
    alreadyNormalizedThings.set(fieldOptions, alreadyNormalizedNodes);
  }
  if (alreadyNormalizedNodes.has(node)) {
    return false;
  }
  let didNormalization = false;
  if (fieldOptions.inlineMarks !== "inherit" && import_slate5.Text.isText(node)) {
    didNormalization = normalizeTextBasedOnInlineMarksAndSoftBreaks(
      [node, path2],
      editor,
      fieldOptions.inlineMarks,
      fieldOptions.softBreaks
    );
  }
  if (import_slate5.Element.isElement(node)) {
    let childrenHasChanged = node.children.map(
      (node2, i) => normalizeNodeWithinComponentProp([node2, [...path2, i]], editor, fieldOptions, relationships)
    ).some((x) => x);
    if (fieldOptions.kind === "block") {
      didNormalization = normalizeElementBasedOnDocumentFeatures(
        [node, path2],
        editor,
        fieldOptions.documentFeatures,
        relationships
      ) || childrenHasChanged;
    } else {
      didNormalization = normalizeInlineBasedOnLinksAndRelationships(
        [node, path2],
        editor,
        fieldOptions.documentFeatures.links,
        fieldOptions.documentFeatures.relationships,
        relationships
      );
    }
  }
  if (didNormalization === false) {
    alreadyNormalizedNodes.add(node);
  }
  return didNormalization;
}
function canSchemaContainChildField(rootSchema) {
  const queue = /* @__PURE__ */ new Set([rootSchema]);
  for (const schema of queue) {
    if (schema.kind === "form" || schema.kind === "relationship") {
    } else if (schema.kind === "child") {
      return true;
    } else if (schema.kind === "array") {
      queue.add(schema.element);
    } else if (schema.kind === "object") {
      for (const innerProp of Object.values(schema.fields)) {
        queue.add(innerProp);
      }
    } else if (schema.kind === "conditional") {
      for (const innerProp of Object.values(schema.values)) {
        queue.add(innerProp);
      }
    } else {
      assertNever(schema);
    }
  }
  return false;
}
function doesSchemaOnlyEverContainASingleChildField(rootSchema) {
  const queue = /* @__PURE__ */ new Set([rootSchema]);
  let hasFoundChildField = false;
  for (const schema of queue) {
    if (schema.kind === "form" || schema.kind === "relationship") {
    } else if (schema.kind === "child") {
      if (hasFoundChildField) {
        return false;
      }
      hasFoundChildField = true;
    } else if (schema.kind === "array") {
      if (canSchemaContainChildField(schema.element)) {
        return false;
      }
    } else if (schema.kind === "object") {
      for (const innerProp of Object.values(schema.fields)) {
        queue.add(innerProp);
      }
    } else if (schema.kind === "conditional") {
      for (const innerProp of Object.values(schema.values)) {
        queue.add(innerProp);
      }
    } else {
      assertNever(schema);
    }
  }
  return hasFoundChildField;
}
function findArrayFieldsWithSingleChildField(schema, value) {
  const propPaths = [];
  traverseProps(schema, value, (schema2, value2, path2) => {
    if (schema2.kind === "array" && doesSchemaOnlyEverContainASingleChildField(schema2.element)) {
      propPaths.push([path2, schema2]);
    }
  });
  return propPaths;
}
function isEmptyChildFieldNode(element) {
  const firstChild = element.children[0];
  return element.children.length === 1 && (element.type === "component-inline-prop" && firstChild.type === void 0 && firstChild.text === "" || element.type === "component-block-prop" && firstChild.type === "paragraph" && firstChild.children.length === 1 && firstChild.children[0].type === void 0 && firstChild.children[0].text === "");
}
function withComponentBlocks(blockComponents, editorDocumentFeatures, relationships, editor) {
  const memoizedGetDocumentFeaturesForChildField = (0, import_weak_memoize.default)(
    (options) => {
      return getDocumentFeaturesForChildField(editorDocumentFeatures, options);
    }
  );
  const { normalizeNode, deleteBackward, insertBreak } = editor;
  editor.deleteBackward = (unit) => {
    if (editor.selection) {
      const ancestorComponentBlock = getAncestorComponentBlock(editor);
      if (ancestorComponentBlock.isInside && import_slate5.Range.isCollapsed(editor.selection) && import_slate5.Editor.isStart(editor, editor.selection.anchor, ancestorComponentBlock.prop[1]) && ancestorComponentBlock.prop[1][ancestorComponentBlock.prop[1].length - 1] === 0) {
        import_slate5.Transforms.unwrapNodes(editor, { at: ancestorComponentBlock.componentBlock[1] });
        return;
      }
    }
    deleteBackward(unit);
  };
  editor.insertBreak = () => {
    const ancestorComponentBlock = getAncestorComponentBlock(editor);
    if (editor.selection && ancestorComponentBlock.isInside) {
      const {
        prop: [componentPropNode, componentPropPath],
        componentBlock: [componentBlockNode, componentBlockPath]
      } = ancestorComponentBlock;
      const isLastProp = componentPropPath[componentPropPath.length - 1] === componentBlockNode.children.length - 1;
      if (componentPropNode.type === "component-block-prop") {
        const [[paragraphNode, paragraphPath]] = import_slate5.Editor.nodes(editor, {
          match: (node) => node.type === "paragraph"
        });
        const isLastParagraph = paragraphPath[paragraphPath.length - 1] === componentPropNode.children.length - 1;
        if (import_slate5.Node.string(paragraphNode) === "" && isLastParagraph) {
          if (isLastProp) {
            import_slate5.Transforms.moveNodes(editor, {
              at: paragraphPath,
              to: import_slate5.Path.next(ancestorComponentBlock.componentBlock[1])
            });
          } else {
            import_slate5.Transforms.move(editor, { distance: 1, unit: "line" });
            import_slate5.Transforms.removeNodes(editor, { at: paragraphPath });
          }
          return;
        }
      }
      if (componentPropNode.type === "component-inline-prop") {
        import_slate5.Editor.withoutNormalizing(editor, () => {
          const componentBlock2 = blockComponents[componentBlockNode.component];
          if (componentPropNode.propPath !== void 0 && componentBlock2 !== void 0) {
            const rootSchema = { kind: "object", fields: componentBlock2.schema };
            const ancestorFields = getAncestorSchemas(
              rootSchema,
              componentPropNode.propPath,
              componentBlockNode.props
            );
            const idx = [...ancestorFields].reverse().findIndex((item) => item.kind === "array");
            if (idx !== -1) {
              const arrayFieldIdx = ancestorFields.length - 1 - idx;
              const arrayField = ancestorFields[arrayFieldIdx];
              assert(arrayField.kind === "array");
              const val = getValueAtPropPath(
                componentBlockNode.props,
                componentPropNode.propPath.slice(0, arrayFieldIdx)
              );
              if (doesSchemaOnlyEverContainASingleChildField(arrayField.element)) {
                if (import_slate5.Node.string(componentPropNode) === "" && val.length - 1 === componentPropNode.propPath[arrayFieldIdx]) {
                  import_slate5.Transforms.removeNodes(editor, { at: componentPropPath });
                  if (isLastProp) {
                    import_slate5.Transforms.insertNodes(
                      editor,
                      { type: "paragraph", children: [{ text: "" }] },
                      { at: import_slate5.Path.next(componentBlockPath) }
                    );
                    import_slate5.Transforms.select(editor, import_slate5.Path.next(componentBlockPath));
                  } else {
                    import_slate5.Transforms.move(editor, { distance: 1, unit: "line" });
                  }
                } else {
                  insertBreak();
                }
                return;
              }
            }
          }
          import_slate5.Transforms.splitNodes(editor, { always: true });
          const splitNodePath = import_slate5.Path.next(componentPropPath);
          if (isLastProp) {
            import_slate5.Transforms.moveNodes(editor, {
              at: splitNodePath,
              to: import_slate5.Path.next(componentBlockPath)
            });
          } else {
            moveChildren(editor, splitNodePath, [...import_slate5.Path.next(splitNodePath), 0]);
            import_slate5.Transforms.removeNodes(editor, { at: splitNodePath });
          }
        });
        return;
      }
    }
    insertBreak();
  };
  editor.normalizeNode = (entry) => {
    const [node, path2] = entry;
    if (node.type === "component-inline-prop" && !node.propPath && (node.children.length !== 1 || !import_slate5.Text.isText(node.children[0]) || node.children[0].text !== "")) {
      import_slate5.Transforms.removeNodes(editor, {
        at: path2
      });
      return;
    }
    if (node.type === "component-block") {
      const componentBlock2 = blockComponents[node.component];
      if (componentBlock2) {
        const rootSchema = { kind: "object", fields: componentBlock2.schema };
        const updatedProps = addMissingFields(node.props, rootSchema);
        if (updatedProps !== node.props) {
          import_slate5.Transforms.setNodes(editor, { props: updatedProps }, { at: path2 });
          return;
        }
        for (const [propPath, arrayField] of findArrayFieldsWithSingleChildField(
          rootSchema,
          node.props
        )) {
          if (node.children.length === 1 && node.children[0].type === "component-inline-prop" && node.children[0].propPath === void 0) {
            break;
          }
          const nodesWithin = [];
          for (const [idx, childNode] of node.children.entries()) {
            if ((childNode.type === "component-block-prop" || childNode.type === "component-inline-prop") && childNode.propPath !== void 0) {
              const subPath = childNode.propPath.concat();
              while (subPath.length) {
                if (typeof subPath.pop() === "number")
                  break;
              }
              if (areArraysEqual(propPath, subPath)) {
                nodesWithin.push([idx, childNode]);
              }
            }
          }
          const arrVal = getValueAtPropPath(node.props, propPath);
          const prevKeys = getKeysForArrayValue(arrVal);
          const prevKeysSet = new Set(prevKeys);
          const alreadyUsedIndicies = /* @__PURE__ */ new Set();
          const newVal = [];
          const newKeys = [];
          const getNewKey = () => {
            let key = getNewArrayElementKey();
            while (prevKeysSet.has(key)) {
              key = getNewArrayElementKey();
            }
            return key;
          };
          for (const [, node2] of nodesWithin) {
            const idxFromValue = node2.propPath[propPath.length];
            assert(typeof idxFromValue === "number");
            if (arrVal.length <= idxFromValue || alreadyUsedIndicies.has(idxFromValue) && isEmptyChildFieldNode(node2)) {
              newVal.push(getInitialPropsValue(arrayField.element));
              newKeys.push(getNewKey());
            } else {
              alreadyUsedIndicies.add(idxFromValue);
              newVal.push(arrVal[idxFromValue]);
              newKeys.push(
                alreadyUsedIndicies.has(idxFromValue) ? getNewKey() : prevKeys[idxFromValue]
              );
            }
          }
          setKeysForArrayValue(newVal, newKeys);
          if (!areArraysEqual(arrVal, newVal)) {
            const transformedProps = replaceValueAtPropPath(
              rootSchema,
              node.props,
              newVal,
              propPath
            );
            import_slate5.Transforms.setNodes(
              editor,
              { props: transformedProps },
              { at: path2 }
            );
            for (const [idx, [idxInChildrenOfBlock, nodeWithin]] of nodesWithin.entries()) {
              const newPropPath = [...nodeWithin.propPath];
              newPropPath[propPath.length] = idx;
              import_slate5.Transforms.setNodes(
                editor,
                { propPath: newPropPath },
                { at: [...path2, idxInChildrenOfBlock] }
              );
            }
            return;
          }
        }
        const missingKeys = new Map(
          findChildPropPaths(node.props, componentBlock2.schema).map((x) => [
            JSON.stringify(x.path),
            x.options.kind
          ])
        );
        node.children.forEach((node2) => {
          assert(node2.type === "component-block-prop" || node2.type === "component-inline-prop");
          missingKeys.delete(JSON.stringify(node2.propPath));
        });
        if (missingKeys.size) {
          import_slate5.Transforms.insertNodes(
            editor,
            [...missingKeys].map(([prop, kind]) => ({
              type: `component-${kind}-prop`,
              propPath: prop ? JSON.parse(prop) : prop,
              children: [{ text: "" }]
            })),
            { at: [...path2, node.children.length] }
          );
          return;
        }
        const foundProps = /* @__PURE__ */ new Set();
        const stringifiedInlinePropPaths = {};
        findChildPropPaths(node.props, blockComponents[node.component].schema).forEach(
          (x, index) => {
            stringifiedInlinePropPaths[JSON.stringify(x.path)] = { options: x.options, index };
          }
        );
        for (const [index, childNode] of node.children.entries()) {
          if (childNode.type !== "component-inline-prop" && childNode.type !== "component-block-prop") {
            continue;
          }
          const childPath = [...path2, index];
          const stringifiedPropPath = JSON.stringify(childNode.propPath);
          if (stringifiedInlinePropPaths[stringifiedPropPath] === void 0) {
            import_slate5.Transforms.removeNodes(editor, { at: childPath });
            return;
          }
          if (foundProps.has(stringifiedPropPath)) {
            import_slate5.Transforms.removeNodes(editor, { at: childPath });
            return;
          }
          foundProps.add(stringifiedPropPath);
          const propInfo = stringifiedInlinePropPaths[stringifiedPropPath];
          const expectedIndex = propInfo.index;
          if (index !== expectedIndex) {
            import_slate5.Transforms.moveNodes(editor, { at: childPath, to: [...path2, expectedIndex] });
            return;
          }
          const expectedChildNodeType = `component-${propInfo.options.kind}-prop`;
          if (childNode.type !== expectedChildNodeType) {
            import_slate5.Transforms.setNodes(editor, { type: expectedChildNodeType }, { at: childPath });
            return;
          }
          const documentFeatures = memoizedGetDocumentFeaturesForChildField(propInfo.options);
          if (normalizeNodeWithinComponentProp(
            [childNode, childPath],
            editor,
            documentFeatures,
            relationships
          )) {
            return;
          }
        }
      }
    }
    normalizeNode(entry);
  };
  return editor;
}
function addMissingFields(value, schema) {
  if (schema.kind === "child" || schema.kind === "form" || schema.kind === "relationship") {
    return value;
  }
  if (schema.kind === "conditional") {
    const conditionalValue = value;
    const updatedInnerValue = addMissingFields(
      conditionalValue.value,
      schema.values[conditionalValue.discriminant.toString()]
    );
    if (updatedInnerValue === conditionalValue.value) {
      return value;
    }
    return { discriminant: conditionalValue.discriminant, value: updatedInnerValue };
  }
  if (schema.kind === "array") {
    const arrValue = value;
    const newArrValue = arrValue.map((x) => addMissingFields(x, schema.element));
    if (areArraysEqual(arrValue, newArrValue)) {
      return value;
    }
    return newArrValue;
  }
  if (schema.kind === "object") {
    const objectValue = value;
    let hasChanged = false;
    const newObjectValue = {};
    for (const [key, innerSchema] of Object.entries(schema.fields)) {
      const innerValue = objectValue[key];
      if (innerValue === void 0) {
        hasChanged = true;
        newObjectValue[key] = getInitialPropsValue(innerSchema);
        continue;
      }
      const newInnerValue = addMissingFields(innerValue, innerSchema);
      if (newInnerValue !== innerValue) {
        hasChanged = true;
      }
      newObjectValue[key] = newInnerValue;
    }
    if (hasChanged) {
      return newObjectValue;
    }
    return value;
  }
  assertNever(schema);
}

// fields-document/src/DocumentEditor/component-blocks/index.tsx
var ComponentBlockContext = (0, import_react11.createContext)({});

// fields-document/src/DocumentEditor/layouts.tsx
var import_react12 = require("react");
var import_slate7 = require("slate");
var import_slate_react5 = require("slate-react");
var import_core13 = require("@keystone-ui/core");
var import_tooltip3 = require("@keystone-ui/tooltip");
var import_Trash2Icon4 = require("@keystone-ui/icons/icons/Trash2Icon");
var import_ColumnsIcon = require("@keystone-ui/icons/icons/ColumnsIcon");
var import_popover2 = require("@keystone-ui/popover");
var LayoutOptionsContext = (0, import_react12.createContext)([]);
var LayoutOptionsProvider = LayoutOptionsContext.Provider;
function withLayouts(editor) {
  const { normalizeNode, deleteBackward } = editor;
  editor.deleteBackward = (unit) => {
    if (editor.selection && import_slate7.Range.isCollapsed(editor.selection) && editor.selection.anchor.offset === 0) {
      const [aboveNode, abovePath] = import_slate7.Editor.above(editor, {
        match: (node) => node.type === "layout-area"
      }) || [editor, []];
      if (aboveNode.type === "layout-area" && import_slate7.Point.equals(import_slate7.Editor.start(editor, abovePath), editor.selection.anchor)) {
        return;
      }
    }
    deleteBackward(unit);
  };
  editor.normalizeNode = (entry) => {
    const [node, path2] = entry;
    if (import_slate7.Element.isElement(node) && node.type === "layout") {
      if (node.layout === void 0) {
        import_slate7.Transforms.unwrapNodes(editor, { at: path2 });
        return;
      }
      if (node.children.length < node.layout.length) {
        import_slate7.Transforms.insertNodes(
          editor,
          Array.from({
            length: node.layout.length - node.children.length
          }).map(() => ({
            type: "layout-area",
            children: [paragraphElement()]
          })),
          {
            at: [...path2, node.children.length]
          }
        );
        return;
      }
      if (node.children.length > node.layout.length) {
        Array.from({
          length: node.children.length - node.layout.length
        }).map((_, i) => i).reverse().forEach((i) => {
          const layoutAreaToRemovePath = [...path2, i + node.layout.length];
          const child = node.children[i + node.layout.length];
          moveChildren(
            editor,
            layoutAreaToRemovePath,
            [
              ...path2,
              node.layout.length - 1,
              node.children[node.layout.length - 1].children.length
            ],
            (node2) => node2.type !== "paragraph" || import_slate7.Node.string(child) !== ""
          );
          import_slate7.Transforms.removeNodes(editor, {
            at: layoutAreaToRemovePath
          });
        });
        return;
      }
    }
    normalizeNode(entry);
  };
  return editor;
}

// fields-document/src/DocumentEditor/lists.tsx
var import_react13 = require("react");
var import_slate8 = require("slate");
var import_core14 = require("@keystone-ui/core");
var isListType = (type2) => type2 === "ordered-list" || type2 === "unordered-list";
var isListNode = (node) => isListType(node.type);
var toggleList = (editor, format) => {
  const listAbove = getListTypeAbove(editor);
  const isActive = isElementActive(editor, format) && (listAbove === "none" || listAbove === format);
  import_slate8.Editor.withoutNormalizing(editor, () => {
    import_slate8.Transforms.unwrapNodes(editor, {
      match: isListNode,
      split: true,
      mode: isActive ? "all" : "lowest"
    });
    if (!isActive) {
      import_slate8.Transforms.wrapNodes(
        editor,
        { type: format, children: [] },
        { match: (x) => x.type !== "list-item-content" && import_slate8.Editor.isBlock(editor, x) }
      );
    }
  });
};
function getAncestorList(editor) {
  if (editor.selection) {
    const listItem = import_slate8.Editor.above(editor, {
      match: nodeTypeMatcher("list-item")
    });
    const list3 = import_slate8.Editor.above(editor, {
      match: isListNode
    });
    if (listItem && list3) {
      return {
        isInside: true,
        listItem,
        list: list3
      };
    }
  }
  return { isInside: false };
}
function withList(editor) {
  const { insertBreak, normalizeNode, deleteBackward } = editor;
  editor.deleteBackward = (unit) => {
    if (editor.selection) {
      const ancestorList = getAncestorList(editor);
      if (ancestorList.isInside && import_slate8.Range.isCollapsed(editor.selection) && import_slate8.Editor.isStart(editor, editor.selection.anchor, ancestorList.list[1])) {
        import_slate8.Transforms.unwrapNodes(editor, {
          match: isListNode,
          split: true
        });
        return;
      }
    }
    deleteBackward(unit);
  };
  editor.insertBreak = () => {
    const [listItem] = import_slate8.Editor.nodes(editor, {
      match: (node) => node.type === "list-item",
      mode: "lowest"
    });
    if (listItem && import_slate8.Node.string(listItem[0]) === "") {
      import_slate8.Transforms.unwrapNodes(editor, {
        match: isListNode,
        split: true
      });
      return;
    }
    insertBreak();
  };
  editor.normalizeNode = (entry) => {
    const [node, path2] = entry;
    if (import_slate8.Element.isElement(node) || import_slate8.Editor.isEditor(node)) {
      const isElementBeingNormalizedAList = isListNode(node);
      for (const [childNode, childPath] of import_slate8.Node.children(editor, path2)) {
        const index = childPath[childPath.length - 1];
        if (isListNode(childNode)) {
          if (node.children[childPath[childPath.length - 1] + 1]?.type === childNode.type) {
            const siblingNodePath = import_slate8.Path.next(childPath);
            moveChildren(editor, siblingNodePath, [...childPath, childNode.children.length]);
            import_slate8.Transforms.removeNodes(editor, { at: siblingNodePath });
            return;
          }
          if (isElementBeingNormalizedAList) {
            const previousChild = node.children[index - 1];
            if (import_slate8.Element.isElement(previousChild)) {
              import_slate8.Transforms.moveNodes(editor, {
                at: childPath,
                to: [...import_slate8.Path.previous(childPath), previousChild.children.length - 1]
              });
            } else {
              import_slate8.Transforms.unwrapNodes(editor, { at: childPath });
            }
            return;
          }
        }
        if (node.type === "list-item" && childNode.type !== "list-item-content" && index === 0 && import_slate8.Editor.isBlock(editor, childNode)) {
          if (path2[path2.length - 1] !== 0) {
            const previousChild = import_slate8.Node.get(editor, import_slate8.Path.previous(path2));
            if (import_slate8.Element.isElement(previousChild)) {
              import_slate8.Transforms.moveNodes(editor, {
                at: path2,
                to: [...import_slate8.Path.previous(path2), previousChild.children.length]
              });
              return;
            }
          }
          import_slate8.Transforms.unwrapNodes(editor, { at: childPath });
          return;
        }
        if (node.type === "list-item" && childNode.type === "list-item-content" && index !== 0) {
          import_slate8.Transforms.splitNodes(editor, { at: childPath });
          return;
        }
      }
    }
    normalizeNode(entry);
  };
  return editor;
}
var ListButton = (0, import_react13.forwardRef)(function ListButton2(props, ref) {
  const {
    editor,
    lists: {
      [props.type === "ordered-list" ? "ordered" : "unordered"]: { isDisabled, isSelected }
    }
  } = useToolbarState();
  return (0, import_react13.useMemo)(() => {
    const { type: type2, ...restProps } = props;
    return /* @__PURE__ */ (0, import_core14.jsx)(
      ToolbarButton,
      {
        ref,
        isDisabled,
        isSelected,
        onMouseDown: (event) => {
          event.preventDefault();
          toggleList(editor, type2);
        },
        ...restProps
      }
    );
  }, [props, ref, isDisabled, isSelected, editor]);
});

// fields-document/src/DocumentEditor/relationship.tsx
var import_react14 = require("react");
var import_slate_react6 = require("slate-react");
var import_slate9 = require("slate");
var import_core15 = require("@keystone-ui/core");
var import_context2 = require("@keystone-6/core/admin-ui/context");
var import_RelationshipSelect2 = require("@keystone-6/core/fields/types/relationship/views/RelationshipSelect");
var DocumentFieldRelationshipsContext = (0, import_react14.createContext)({});
var DocumentFieldRelationshipsProvider = DocumentFieldRelationshipsContext.Provider;
function withRelationship(editor) {
  const { isVoid, isInline } = editor;
  editor.isVoid = (element) => {
    return element.type === "relationship" || isVoid(element);
  };
  editor.isInline = (element) => {
    return element.type === "relationship" || isInline(element);
  };
  return editor;
}

// fields-document/src/DocumentEditor/toolbar-state.tsx
var ToolbarStateContext = import_react15.default.createContext(null);
function useToolbarState() {
  const toolbarState = (0, import_react15.useContext)(ToolbarStateContext);
  if (!toolbarState) {
    throw new Error("ToolbarStateProvider must be used to use useToolbarState");
  }
  return toolbarState;
}
function getAncestorComponentChildFieldDocumentFeatures(editor, editorDocumentFeatures, componentBlocks) {
  const ancestorComponentProp = import_slate10.Editor.above(editor, {
    match: nodeTypeMatcher("component-block-prop", "component-inline-prop")
  });
  if (ancestorComponentProp) {
    const propPath = ancestorComponentProp[0].propPath;
    const ancestorComponent = import_slate10.Editor.parent(editor, ancestorComponentProp[1]);
    if (ancestorComponent[0].type === "component-block") {
      const component = ancestorComponent[0].component;
      const componentBlock2 = componentBlocks[component];
      if (componentBlock2 && propPath) {
        const childField = getSchemaAtPropPath(
          propPath,
          ancestorComponent[0].props,
          componentBlock2.schema
        );
        if (childField?.kind === "child") {
          return getDocumentFeaturesForChildField(editorDocumentFeatures, childField.options);
        }
      }
    }
  }
}
function getListTypeAbove(editor) {
  const listAbove = import_slate10.Editor.above(editor, { match: isListNode });
  if (!listAbove) {
    return "none";
  }
  return listAbove[0].type;
}

// fields-document/src/DocumentEditor/link.tsx
var isLinkActive = (editor) => {
  return isElementActive(editor, "link");
};
var wrapLink = (editor, url) => {
  if (isLinkActive(editor)) {
    import_slate11.Transforms.unwrapNodes(editor, { match: (n) => n.type === "link" });
    return;
  }
  const { selection } = editor;
  const isCollapsed = selection && import_slate11.Range.isCollapsed(selection);
  if (isCollapsed) {
    import_slate11.Transforms.insertNodes(editor, {
      type: "link",
      href: url,
      children: [{ text: url }]
    });
  } else {
    import_slate11.Transforms.wrapNodes(
      editor,
      {
        type: "link",
        href: url,
        children: [{ text: "" }]
      },
      { split: true }
    );
  }
};
var UnlinkButton = (0, import_react16.memo)(function UnlinkButton2({ onUnlink }) {
  return /* @__PURE__ */ (0, import_core16.jsx)(import_tooltip4.Tooltip, { content: "Unlink", weight: "subtle" }, (attrs) => /* @__PURE__ */ (0, import_core16.jsx)(
    ToolbarButton,
    {
      variant: "destructive",
      onMouseDown: (event) => {
        event.preventDefault();
        onUnlink();
      },
      ...attrs
    },
    /* @__PURE__ */ (0, import_core16.jsx)(import_Trash2Icon5.Trash2Icon, { size: "small" })
  ));
});
var linkIcon = /* @__PURE__ */ (0, import_core16.jsx)(import_LinkIcon.LinkIcon, { size: "small" });
var LinkButton = (0, import_react16.forwardRef)(function LinkButton2(props, ref) {
  const {
    editor,
    links: { isDisabled, isSelected }
  } = useToolbarState();
  return (0, import_react16.useMemo)(
    () => /* @__PURE__ */ (0, import_core16.jsx)(
      ToolbarButton,
      {
        ref,
        isDisabled,
        isSelected,
        onMouseDown: (event) => {
          event.preventDefault();
          wrapLink(editor, "");
        },
        ...props
      },
      linkIcon
    ),
    [isSelected, isDisabled, editor, props, ref]
  );
});
var markdownLinkPattern = /(^|\s)\[(.+?)\]\((\S+)\)$/;
function withLink(editorDocumentFeatures, componentBlocks, editor) {
  const { insertText, isInline, normalizeNode } = editor;
  editor.isInline = (element) => {
    return element.type === "link" ? true : isInline(element);
  };
  if (editorDocumentFeatures.links) {
    editor.insertText = (text3) => {
      insertText(text3);
      if (text3 !== ")" || !editor.selection)
        return;
      const startOfBlock = import_slate11.Editor.start(
        editor,
        import_slate11.Editor.above(editor, { match: (node) => import_slate11.Editor.isBlock(editor, node) })[1]
      );
      const startOfBlockToEndOfShortcutString = import_slate11.Editor.string(editor, {
        anchor: editor.selection.anchor,
        focus: startOfBlock
      });
      const match = markdownLinkPattern.exec(startOfBlockToEndOfShortcutString);
      if (!match)
        return;
      const ancestorComponentChildFieldDocumentFeatures = getAncestorComponentChildFieldDocumentFeatures(
        editor,
        editorDocumentFeatures,
        componentBlocks
      );
      if (ancestorComponentChildFieldDocumentFeatures?.documentFeatures.links === false) {
        return;
      }
      const [, maybeWhitespace, linkText, href] = match;
      editor.history.undos.push([]);
      const startOfShortcut = match.index === 0 ? startOfBlock : EditorAfterButIgnoringingPointsWithNoContent(editor, startOfBlock, {
        distance: match.index
      });
      const startOfLinkText = EditorAfterButIgnoringingPointsWithNoContent(
        editor,
        startOfShortcut,
        {
          distance: maybeWhitespace === "" ? 1 : 2
        }
      );
      const endOfLinkText = EditorAfterButIgnoringingPointsWithNoContent(editor, startOfLinkText, {
        distance: linkText.length
      });
      import_slate11.Transforms.delete(editor, {
        at: { anchor: endOfLinkText, focus: editor.selection.anchor }
      });
      import_slate11.Transforms.delete(editor, {
        at: { anchor: startOfShortcut, focus: startOfLinkText }
      });
      import_slate11.Transforms.wrapNodes(
        editor,
        { type: "link", href, children: [] },
        { at: { anchor: editor.selection.anchor, focus: startOfShortcut }, split: true }
      );
      const nextNode = import_slate11.Editor.next(editor);
      if (nextNode) {
        import_slate11.Transforms.select(editor, nextNode[1]);
      }
    };
  }
  editor.normalizeNode = ([node, path2]) => {
    if (node.type === "link") {
      if (import_slate11.Node.string(node) === "") {
        import_slate11.Transforms.unwrapNodes(editor, { at: path2 });
        return;
      }
      for (const [idx, child] of node.children.entries()) {
        if (child.type === "link") {
          import_slate11.Transforms.unwrapNodes(editor, { at: [...path2, idx] });
          return;
        }
      }
    }
    if (isInlineContainer(node)) {
      let lastMergableLink = null;
      for (const [idx, child] of node.children.entries()) {
        if (child.type === "link" && child.href === lastMergableLink?.node.href) {
          const firstLinkPath = [...path2, lastMergableLink.index];
          const secondLinkPath = [...path2, idx];
          const to = [...firstLinkPath, lastMergableLink.node.children.length];
          for (let i = child.children.length - 1; i >= 0; i--) {
            const childPath = [...secondLinkPath, i];
            import_slate11.Transforms.moveNodes(editor, { at: childPath, to });
          }
          import_slate11.Transforms.removeNodes(editor, { at: secondLinkPath });
          return;
        }
        if (!import_slate11.Text.isText(child) || child.text !== "") {
          lastMergableLink = null;
        }
        if (child.type === "link") {
          lastMergableLink = { index: idx, node: child };
        }
      }
    }
    normalizeNode([node, path2]);
  };
  return editor;
}

// fields-document/src/DocumentEditor/Toolbar.tsx
var import_react21 = require("react");
var import_slate16 = require("slate");
var import_apply_ref2 = require("apply-ref");
var import_core20 = require("@keystone-ui/core");
var import_popover5 = require("@keystone-ui/popover");
var import_tooltip9 = require("@keystone-ui/tooltip");
var import_BoldIcon = require("@keystone-ui/icons/icons/BoldIcon");
var import_ItalicIcon = require("@keystone-ui/icons/icons/ItalicIcon");
var import_PlusIcon = require("@keystone-ui/icons/icons/PlusIcon");
var import_ChevronDownIcon2 = require("@keystone-ui/icons/icons/ChevronDownIcon");
var import_Maximize2Icon = require("@keystone-ui/icons/icons/Maximize2Icon");
var import_Minimize2Icon = require("@keystone-ui/icons/icons/Minimize2Icon");
var import_MoreHorizontalIcon = require("@keystone-ui/icons/icons/MoreHorizontalIcon");

// fields-document/src/DocumentEditor/blockquote.tsx
var import_react17 = require("react");
var import_slate12 = require("slate");
var import_core17 = require("@keystone-ui/core");
var import_tooltip5 = require("@keystone-ui/tooltip");
function getDirectBlockquoteParentFromSelection(editor) {
  if (!editor.selection)
    return { isInside: false };
  const [, parentPath] = import_slate12.Editor.parent(editor, editor.selection);
  if (!parentPath.length) {
    return { isInside: false };
  }
  const [maybeBlockquoteParent, maybeBlockquoteParentPath] = import_slate12.Editor.parent(editor, parentPath);
  const isBlockquote = maybeBlockquoteParent.type === "blockquote";
  return isBlockquote ? { isInside: true, path: maybeBlockquoteParentPath } : { isInside: false };
}
function withBlockquote(editor) {
  const { insertBreak, deleteBackward } = editor;
  editor.deleteBackward = (unit) => {
    if (editor.selection) {
      const parentBlockquote = getDirectBlockquoteParentFromSelection(editor);
      if (parentBlockquote.isInside && import_slate12.Range.isCollapsed(editor.selection) && editor.selection.anchor.offset === 0 && editor.selection.anchor.path[editor.selection.anchor.path.length - 2] === 0) {
        import_slate12.Transforms.unwrapNodes(editor, {
          match: (node) => node.type === "blockquote",
          split: true
        });
        return;
      }
    }
    deleteBackward(unit);
  };
  editor.insertBreak = () => {
    const panel = getDirectBlockquoteParentFromSelection(editor);
    if (editor.selection && panel.isInside) {
      const [node, nodePath] = import_slate12.Editor.node(editor, editor.selection);
      if (import_slate12.Path.isDescendant(nodePath, panel.path) && import_slate12.Node.string(node) === "") {
        import_slate12.Transforms.unwrapNodes(editor, {
          match: (node2) => node2.type === "blockquote",
          split: true
        });
        return;
      }
    }
    insertBreak();
  };
  return editor;
}

// fields-document/src/DocumentEditor/code-block.tsx
var import_core18 = require("@keystone-ui/core");
var import_tooltip6 = require("@keystone-ui/tooltip");
var import_react18 = require("react");
var import_slate13 = require("slate");
var import_CodeIcon = require("@keystone-ui/icons/icons/CodeIcon");
function withCodeBlock(editor) {
  const { insertBreak, normalizeNode } = editor;
  editor.insertBreak = () => {
    const [node, path2] = import_slate13.Editor.above(editor, {
      match: (n) => import_slate13.Editor.isBlock(editor, n)
    }) || [editor, []];
    if (node.type === "code" && import_slate13.Text.isText(node.children[0])) {
      const text3 = node.children[0].text;
      if (text3[text3.length - 1] === "\n" && editor.selection && import_slate13.Range.isCollapsed(editor.selection) && import_slate13.Point.equals(import_slate13.Editor.end(editor, path2), editor.selection.anchor)) {
        insertBreak();
        import_slate13.Transforms.setNodes(editor, { type: "paragraph", children: [] });
        import_slate13.Transforms.delete(editor, {
          distance: 1,
          at: { path: [...path2, 0], offset: text3.length - 1 }
        });
        return;
      }
      editor.insertText("\n");
      return;
    }
    insertBreak();
  };
  editor.normalizeNode = ([node, path2]) => {
    if (node.type === "code" && import_slate13.Element.isElement(node)) {
      for (const [index, childNode] of node.children.entries()) {
        if (!import_slate13.Text.isText(childNode)) {
          if (editor.isVoid(childNode)) {
            import_slate13.Transforms.removeNodes(editor, { at: [...path2, index] });
          } else {
            import_slate13.Transforms.unwrapNodes(editor, { at: [...path2, index] });
          }
          return;
        }
        const marks = Object.keys(childNode).filter((x) => x !== "text");
        if (marks.length) {
          import_slate13.Transforms.unsetNodes(editor, marks, { at: [...path2, index] });
          return;
        }
      }
    }
    normalizeNode([node, path2]);
  };
  return editor;
}

// fields-document/src/DocumentEditor/alignment.tsx
var import_core19 = require("@keystone-ui/core");
var import_AlignLeftIcon = require("@keystone-ui/icons/icons/AlignLeftIcon");
var import_AlignRightIcon = require("@keystone-ui/icons/icons/AlignRightIcon");
var import_AlignCenterIcon = require("@keystone-ui/icons/icons/AlignCenterIcon");
var import_ChevronDownIcon = require("@keystone-ui/icons/icons/ChevronDownIcon");
var import_popover4 = require("@keystone-ui/popover");
var import_tooltip7 = require("@keystone-ui/tooltip");
var import_apply_ref = require("apply-ref");
var import_react19 = require("react");
var import_slate14 = require("slate");

// fields-document/src/DocumentEditor/divider.tsx
var import_react20 = __toESM(require("react"));
var import_slate15 = require("slate");
var import_MinusIcon = require("@keystone-ui/icons/icons/MinusIcon");
var import_tooltip8 = require("@keystone-ui/tooltip");
function insertDivider(editor) {
  insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, {
    type: "divider",
    children: [{ text: "" }]
  });
  import_slate15.Editor.insertNode(editor, { type: "paragraph", children: [{ text: "" }] });
}
function withDivider(editor) {
  const { isVoid } = editor;
  editor.isVoid = (node) => {
    return node.type === "divider" || isVoid(node);
  };
  return editor;
}

// fields-document/src/DocumentEditor/Toolbar.tsx
var MarkButton = (0, import_react21.forwardRef)(function MarkButton2(props, ref) {
  const {
    editor,
    marks: {
      [props.type]: { isDisabled, isSelected }
    }
  } = useToolbarState();
  return (0, import_react21.useMemo)(() => {
    const { type: type2, ...restProps } = props;
    return /* @__PURE__ */ (0, import_core20.jsx)(
      ToolbarButton,
      {
        ref,
        isDisabled,
        isSelected,
        onMouseDown: (event) => {
          event.preventDefault();
          if (isSelected) {
            import_slate16.Editor.removeMark(editor, props.type);
          } else {
            import_slate16.Editor.addMark(editor, props.type, true);
          }
        },
        ...restProps
      }
    );
  }, [editor, isDisabled, isSelected, props, ref]);
});

// fields-document/src/DocumentEditor/render-element.tsx
var import_core22 = require("@keystone-ui/core");
var import_slate_react9 = require("slate-react");

// fields-document/src/DocumentEditor/heading.tsx
var import_core21 = require("@keystone-ui/core");
var import_slate17 = require("slate");
function withHeading(editor) {
  const { insertBreak } = editor;
  editor.insertBreak = () => {
    insertBreak();
    const entry = import_slate17.Editor.above(editor, {
      match: (n) => n.type === "heading"
    });
    if (!entry || !editor.selection || !import_slate17.Range.isCollapsed(editor.selection))
      return;
    const path2 = entry[1];
    if (import_slate17.Point.equals(import_slate17.Editor.end(editor, path2), editor.selection.anchor)) {
      import_slate17.Transforms.unwrapNodes(editor, {
        at: path2
      });
      return;
    }
    if (!import_slate17.Path.hasPrevious(path2))
      return;
    const previousPath = import_slate17.Path.previous(path2);
    const previousNode = import_slate17.Node.get(editor, previousPath);
    if (previousNode.type === "heading" && previousNode.children.length === 1 && import_slate17.Text.isText(previousNode.children[0]) && previousNode.children[0].text === "") {
      import_slate17.Transforms.unwrapNodes(editor, {
        at: previousPath
      });
    }
  };
  return editor;
}

// fields-document/src/DocumentEditor/marks.tsx
var import_slate18 = require("slate");
var allMarkdownShortcuts = {
  bold: ["**", "__"],
  italic: ["*", "_"],
  strikethrough: ["~~"],
  code: ["`"]
};
function applyMark(editor, mark, shortcutText, startOfStartPoint) {
  editor.history.undos.push([]);
  const startPointRef = import_slate18.Editor.pointRef(editor, startOfStartPoint);
  import_slate18.Transforms.delete(editor, {
    at: editor.selection.anchor,
    distance: shortcutText.length,
    reverse: true
  });
  import_slate18.Transforms.delete(editor, { at: startOfStartPoint, distance: shortcutText.length });
  import_slate18.Transforms.setNodes(
    editor,
    { [mark]: true },
    {
      match: import_slate18.Text.isText,
      split: true,
      at: { anchor: startPointRef.unref(), focus: editor.selection.anchor }
    }
  );
  editor.removeMark(mark);
}
function withMarks(editorDocumentFeatures, componentBlocks, editor) {
  const { insertText, insertBreak } = editor;
  editor.insertBreak = () => {
    insertBreak();
    const marksAfterInsertBreak = import_slate18.Editor.marks(editor);
    if (!marksAfterInsertBreak || !editor.selection)
      return;
    const parentBlock = import_slate18.Editor.above(editor, { match: (node) => import_slate18.Editor.isBlock(editor, node) });
    if (!parentBlock)
      return;
    const point = EditorAfterButIgnoringingPointsWithNoContent(editor, editor.selection.anchor);
    const marksAfterInsertBreakArr = Object.keys(
      marksAfterInsertBreak
    );
    if (!point || !import_slate18.Path.isDescendant(point.path, parentBlock[1])) {
      for (const mark of marksAfterInsertBreakArr) {
        editor.removeMark(mark);
      }
      return;
    }
    const textNode = import_slate18.Node.get(editor, point.path);
    for (const mark of marksAfterInsertBreakArr) {
      if (!textNode[mark]) {
        editor.removeMark(mark);
      }
    }
  };
  const selectedMarkdownShortcuts = {};
  const enabledMarks = editorDocumentFeatures.formatting.inlineMarks;
  Object.keys(allMarkdownShortcuts).forEach((mark) => {
    if (enabledMarks[mark]) {
      selectedMarkdownShortcuts[mark] = allMarkdownShortcuts[mark];
    }
  });
  if (Object.keys(selectedMarkdownShortcuts).length === 0)
    return editor;
  editor.insertText = (text3) => {
    insertText(text3);
    if (editor.selection && import_slate18.Range.isCollapsed(editor.selection)) {
      for (const [mark, shortcuts2] of Object.entries(selectedMarkdownShortcuts)) {
        for (const shortcutText of shortcuts2) {
          if (text3 === shortcutText[shortcutText.length - 1]) {
            const startOfBlock = getStartOfBlock(editor);
            let startOfBlockToEndOfShortcutString = import_slate18.Editor.string(editor, {
              anchor: editor.selection.anchor,
              focus: startOfBlock
            });
            const hasWhitespaceBeforeEndOfShortcut = /\s/.test(
              startOfBlockToEndOfShortcutString.slice(
                -shortcutText.length - 1,
                -shortcutText.length
              )
            );
            const endOfShortcutContainsExpectedContent = shortcutText === startOfBlockToEndOfShortcutString.slice(-shortcutText.length);
            if (hasWhitespaceBeforeEndOfShortcut || !endOfShortcutContainsExpectedContent) {
              continue;
            }
            const strToMatchOn = startOfBlockToEndOfShortcutString.slice(
              0,
              -shortcutText.length - 1
            );
            for (const [offsetFromStartOfBlock] of [...strToMatchOn].reverse().entries()) {
              const expectedShortcutText = strToMatchOn.slice(
                offsetFromStartOfBlock,
                offsetFromStartOfBlock + shortcutText.length
              );
              if (expectedShortcutText !== shortcutText) {
                continue;
              }
              const startOfStartOfShortcut = offsetFromStartOfBlock === 0 ? startOfBlock : EditorAfterButIgnoringingPointsWithNoContent(editor, startOfBlock, {
                distance: offsetFromStartOfBlock
              });
              const endOfStartOfShortcut = import_slate18.Editor.after(editor, startOfStartOfShortcut, {
                distance: shortcutText.length
              });
              if (offsetFromStartOfBlock !== 0 && !/\s/.test(
                import_slate18.Editor.string(editor, {
                  anchor: import_slate18.Editor.before(editor, startOfStartOfShortcut, { unit: "character" }),
                  focus: startOfStartOfShortcut
                })
              )) {
                continue;
              }
              const contentBetweenShortcuts = import_slate18.Editor.string(editor, {
                anchor: endOfStartOfShortcut,
                focus: editor.selection.anchor
              }).slice(0, -shortcutText.length);
              if (contentBetweenShortcuts === "" || /\s/.test(contentBetweenShortcuts[0])) {
                continue;
              }
              if (mark === "italic" && (contentBetweenShortcuts[0] === "_" || contentBetweenShortcuts[0] === "*")) {
                continue;
              }
              const ancestorComponentChildFieldDocumentFeatures = getAncestorComponentChildFieldDocumentFeatures(
                editor,
                editorDocumentFeatures,
                componentBlocks
              );
              if (ancestorComponentChildFieldDocumentFeatures && ancestorComponentChildFieldDocumentFeatures.inlineMarks !== "inherit" && ancestorComponentChildFieldDocumentFeatures.inlineMarks[mark] === false) {
                continue;
              }
              applyMark(editor, mark, shortcutText, startOfStartOfShortcut);
              return;
            }
          }
        }
      }
    }
  };
  return editor;
}
function getStartOfBlock(editor) {
  return import_slate18.Editor.start(
    editor,
    import_slate18.Editor.above(editor, { match: (node) => import_slate18.Editor.isBlock(editor, node) })[1]
  );
}

// fields-document/src/DocumentEditor/leaf.tsx
var import_core24 = require("@keystone-ui/core");
var import_react23 = require("react");

// fields-document/src/DocumentEditor/insert-menu.tsx
var import_core23 = require("@keystone-ui/core");
var import_popover6 = require("@keystone-ui/popover");
var import_react22 = require("react");
var import_slate19 = require("slate");
var import_slate_react10 = require("slate-react");
var import_match_sorter = require("match-sorter");
var import_scroll_into_view_if_needed = __toESM(require("scroll-into-view-if-needed"));
var nodeListsWithoutInsertMenu = /* @__PURE__ */ new WeakSet();
var nodesWithoutInsertMenu = /* @__PURE__ */ new WeakSet();
function findPathWithInsertMenu(node, path2) {
  if (import_slate19.Text.isText(node)) {
    return node.insertMenu ? path2 : void 0;
  }
  if (nodeListsWithoutInsertMenu.has(node.children)) {
    return;
  }
  for (const [index, child] of node.children.entries()) {
    if (nodesWithoutInsertMenu.has(child))
      continue;
    let maybePath = findPathWithInsertMenu(child, [...path2, index]);
    if (maybePath) {
      return maybePath;
    }
    nodesWithoutInsertMenu.add(child);
  }
  nodeListsWithoutInsertMenu.add(node.children);
}
function removeInsertMenuMarkWhenOutsideOfSelection(editor) {
  const path2 = findPathWithInsertMenu(editor, []);
  if (path2 && !import_slate19.Editor.marks(editor)?.insertMenu && (!editor.selection || !import_slate19.Path.equals(editor.selection.anchor.path, path2) || !import_slate19.Path.equals(editor.selection.focus.path, path2))) {
    import_slate19.Transforms.unsetNodes(editor, "insertMenu", { at: path2 });
    return true;
  }
  return false;
}
function withInsertMenu(editor) {
  const { normalizeNode, apply, insertText } = editor;
  editor.normalizeNode = ([node, path2]) => {
    if (import_slate19.Text.isText(node) && node.insertMenu) {
      if (node.text[0] !== "/") {
        import_slate19.Transforms.unsetNodes(editor, "insertMenu", { at: path2 });
        return;
      }
      const whitespaceMatch = /\s/.exec(node.text);
      if (whitespaceMatch) {
        import_slate19.Transforms.unsetNodes(editor, "insertMenu", {
          at: {
            anchor: { path: path2, offset: whitespaceMatch.index },
            focus: import_slate19.Editor.end(editor, path2)
          },
          match: import_slate19.Text.isText,
          split: true
        });
        return;
      }
    }
    if (import_slate19.Editor.isEditor(editor) && removeInsertMenuMarkWhenOutsideOfSelection(editor)) {
      return;
    }
    normalizeNode([node, path2]);
  };
  editor.apply = (op) => {
    apply(op);
    if (op.type === "set_selection") {
      removeInsertMenuMarkWhenOutsideOfSelection(editor);
    }
  };
  editor.insertText = (text3) => {
    insertText(text3);
    if (editor.selection && text3 === "/") {
      const startOfBlock = import_slate19.Editor.start(
        editor,
        import_slate19.Editor.above(editor, { match: (node) => import_slate19.Editor.isBlock(editor, node) })[1]
      );
      const before = import_slate19.Editor.before(editor, editor.selection.anchor, { unit: "character" });
      if (before && (import_slate19.Point.equals(startOfBlock, before) || before.offset !== 0 && /\s/.test(import_slate19.Node.get(editor, before.path).text[before.offset - 1]))) {
        import_slate19.Transforms.setNodes(
          editor,
          { insertMenu: true },
          {
            at: { anchor: before, focus: editor.selection.anchor },
            match: import_slate19.Text.isText,
            split: true
          }
        );
      }
    }
  };
  return editor;
}

// fields-document/src/DocumentEditor/soft-breaks.tsx
var import_slate20 = require("slate");
function withSoftBreaks(editor) {
  editor.insertSoftBreak = () => {
    import_slate20.Transforms.insertText(editor, "\n");
  };
  return editor;
}

// fields-document/src/DocumentEditor/shortcuts.ts
var import_slate21 = require("slate");
var shortcuts = {
  "...": "\u2026",
  "-->": "\u2192",
  "->": "\u2192",
  "<-": "\u2190",
  "<--": "\u2190",
  "--": "\u2013"
};
function withShortcuts(editor) {
  const { insertText } = editor;
  editor.insertText = (text3) => {
    insertText(text3);
    if (text3 === " " && editor.selection && import_slate21.Range.isCollapsed(editor.selection)) {
      const selectionPoint = editor.selection.anchor;
      const ancestorBlock = import_slate21.Editor.above(editor, { match: (node) => import_slate21.Editor.isBlock(editor, node) });
      if (ancestorBlock) {
        Object.keys(shortcuts).forEach((shortcut) => {
          const pointBefore = import_slate21.Editor.before(editor, selectionPoint, {
            unit: "character",
            distance: shortcut.length + 1
          });
          if (pointBefore && import_slate21.Path.isDescendant(pointBefore.path, ancestorBlock[1])) {
            const range = { anchor: selectionPoint, focus: pointBefore };
            const str = import_slate21.Editor.string(editor, range);
            if (str.slice(0, shortcut.length) === shortcut) {
              editor.history.undos.push([]);
              import_slate21.Transforms.select(editor, range);
              editor.insertText(shortcuts[shortcut] + " ");
            }
          }
        });
      }
    }
  };
  return editor;
}

// fields-document/src/DocumentEditor/block-markdown-shortcuts.ts
var import_slate22 = require("slate");
function withBlockMarkdownShortcuts(documentFeatures, componentBlocks, editor) {
  const { insertText } = editor;
  const shortcuts2 = /* @__PURE__ */ Object.create(null);
  const editorDocumentFeaturesForNormalizationToCheck = {
    ...documentFeatures,
    relationships: true
  };
  let addShortcut = (text3, insert, shouldBeEnabledInComponentBlock, type2 = "paragraph") => {
    if (!shouldBeEnabledInComponentBlock(editorDocumentFeaturesForNormalizationToCheck))
      return;
    const trigger = text3[text3.length - 1];
    if (!shortcuts2[trigger]) {
      shortcuts2[trigger] = /* @__PURE__ */ Object.create(null);
    }
    shortcuts2[trigger][text3] = {
      insert,
      type: type2,
      shouldBeEnabledInComponentBlock
    };
  };
  addShortcut(
    "1. ",
    () => {
      import_slate22.Transforms.wrapNodes(
        editor,
        { type: "ordered-list", children: [] },
        { match: (n) => import_slate22.Editor.isBlock(editor, n) }
      );
    },
    (features) => features.formatting.listTypes.ordered
  );
  addShortcut(
    "- ",
    () => {
      import_slate22.Transforms.wrapNodes(
        editor,
        { type: "unordered-list", children: [] },
        { match: (n) => import_slate22.Editor.isBlock(editor, n) }
      );
    },
    (features) => features.formatting.listTypes.unordered
  );
  addShortcut(
    "* ",
    () => {
      import_slate22.Transforms.wrapNodes(
        editor,
        { type: "unordered-list", children: [] },
        { match: (n) => import_slate22.Editor.isBlock(editor, n) }
      );
    },
    (features) => features.formatting.listTypes.unordered
  );
  documentFeatures.formatting.headingLevels.forEach((level) => {
    addShortcut(
      "#".repeat(level) + " ",
      () => {
        import_slate22.Transforms.setNodes(
          editor,
          { type: "heading", level },
          { match: (node) => node.type === "paragraph" || node.type === "heading" }
        );
      },
      (features) => features.formatting.headingLevels.includes(level),
      "heading-or-paragraph"
    );
  });
  addShortcut(
    "> ",
    () => {
      import_slate22.Transforms.wrapNodes(
        editor,
        { type: "blockquote", children: [] },
        { match: (node) => node.type === "paragraph" }
      );
    },
    (features) => features.formatting.blockTypes.blockquote
  );
  addShortcut(
    "```",
    () => {
      import_slate22.Transforms.wrapNodes(
        editor,
        { type: "code", children: [] },
        { match: (node) => node.type === "paragraph" }
      );
    },
    (features) => features.formatting.blockTypes.code
  );
  addShortcut(
    "---",
    () => {
      insertDivider(editor);
    },
    (features) => features.dividers
  );
  editor.insertText = (text3) => {
    insertText(text3);
    const shortcutsForTrigger = shortcuts2[text3];
    if (shortcutsForTrigger && editor.selection && import_slate22.Range.isCollapsed(editor.selection)) {
      const { anchor } = editor.selection;
      const block2 = import_slate22.Editor.above(editor, {
        match: (node) => import_slate22.Editor.isBlock(editor, node)
      });
      if (!block2 || block2[0].type !== "paragraph" && block2[0].type !== "heading")
        return;
      const start = import_slate22.Editor.start(editor, block2[1]);
      const range = { anchor, focus: start };
      const shortcutText = import_slate22.Editor.string(editor, range);
      const shortcut = shortcutsForTrigger[shortcutText];
      if (!shortcut || shortcut.type === "paragraph" && block2[0].type !== "paragraph") {
        return;
      }
      const locationDocumentFeatures = getAncestorComponentChildFieldDocumentFeatures(
        editor,
        documentFeatures,
        componentBlocks
      );
      if (locationDocumentFeatures && (locationDocumentFeatures.kind === "inline" || !shortcut.shouldBeEnabledInComponentBlock(locationDocumentFeatures.documentFeatures))) {
        return;
      }
      editor.history.undos.push([]);
      import_slate22.Transforms.select(editor, range);
      import_slate22.Transforms.delete(editor);
      shortcut.insert();
    }
  };
  return editor;
}

// fields-document/src/DocumentEditor/pasting/index.ts
var import_slate24 = require("slate");

// fields-document/src/DocumentEditor/pasting/html.ts
var import_slate23 = require("slate");

// fields-document/src/DocumentEditor/pasting/utils.ts
var currentlyActiveMarks = /* @__PURE__ */ new Set();
var currentlyDisabledMarks = /* @__PURE__ */ new Set();
var currentLink = null;
function addMarkToChildren(mark, cb) {
  const wasPreviouslyActive = currentlyActiveMarks.has(mark);
  currentlyActiveMarks.add(mark);
  try {
    return cb();
  } finally {
    if (!wasPreviouslyActive) {
      currentlyActiveMarks.delete(mark);
    }
  }
}
function setLinkForChildren(href, cb) {
  if (currentLink !== null) {
    return cb();
  }
  currentLink = href;
  try {
    return cb();
  } finally {
    currentLink = null;
  }
}
function addMarksToChildren(marks, cb) {
  const marksToRemove = /* @__PURE__ */ new Set();
  for (const mark of marks) {
    if (!currentlyActiveMarks.has(mark)) {
      marksToRemove.add(mark);
    }
    currentlyActiveMarks.add(mark);
  }
  try {
    return cb();
  } finally {
    for (const mark of marksToRemove) {
      currentlyActiveMarks.delete(mark);
    }
  }
}
function forceDisableMarkForChildren(mark, cb) {
  const wasPreviouslyDisabled = currentlyDisabledMarks.has(mark);
  currentlyDisabledMarks.add(mark);
  try {
    return cb();
  } finally {
    if (!wasPreviouslyDisabled) {
      currentlyDisabledMarks.delete(mark);
    }
  }
}
function getInlineNodes(text3) {
  const node = { text: text3 };
  for (const mark of currentlyActiveMarks) {
    if (!currentlyDisabledMarks.has(mark)) {
      node[mark] = true;
    }
  }
  if (currentLink !== null) {
    return [
      { text: "" },
      { type: "link", href: currentLink, children: [node] },
      { text: "" }
    ];
  }
  return [node];
}

// fields-document/src/DocumentEditor/pasting/html.ts
function getAlignmentFromElement(element) {
  const parent = element.parentElement;
  const attribute = parent?.getAttribute("data-align");
  if (attribute === "center" || attribute === "end") {
    return attribute;
  }
  if (element instanceof HTMLElement) {
    const textAlign2 = element.style.textAlign;
    if (textAlign2 === "center") {
      return "center";
    }
    if (textAlign2 === "right" || textAlign2 === "end") {
      return "end";
    }
  }
}
var headings = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6
};
var TEXT_TAGS = {
  CODE: "code",
  DEL: "strikethrough",
  S: "strikethrough",
  STRIKE: "strikethrough",
  EM: "italic",
  I: "italic",
  STRONG: "bold",
  U: "underline",
  SUP: "superscript",
  SUB: "subscript",
  KBD: "keyboard"
};
function marksFromElementAttributes(element) {
  const marks = /* @__PURE__ */ new Set();
  const style = element.style;
  const { nodeName } = element;
  const markFromNodeName = TEXT_TAGS[nodeName];
  if (markFromNodeName) {
    marks.add(markFromNodeName);
  }
  const { fontWeight, textDecoration, verticalAlign } = style;
  if (textDecoration === "underline") {
    marks.add("underline");
  } else if (textDecoration === "line-through") {
    marks.add("strikethrough");
  }
  if (nodeName === "SPAN" && element.classList.contains("code")) {
    marks.add("code");
  }
  if (nodeName === "B" && fontWeight !== "normal") {
    marks.add("bold");
  } else if (typeof fontWeight === "string" && (fontWeight === "bold" || fontWeight === "bolder" || fontWeight === "1000" || /^[5-9]\d{2}$/.test(fontWeight))) {
    marks.add("bold");
  }
  if (style.fontStyle === "italic") {
    marks.add("italic");
  }
  if (verticalAlign === "super") {
    marks.add("superscript");
  } else if (verticalAlign === "sub") {
    marks.add("subscript");
  }
  return marks;
}
function deserializeHTML(html) {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  return fixNodesForBlockChildren(deserializeNodes(parsed.body.childNodes));
}
function deserializeHTMLNode(el) {
  if (!(el instanceof globalThis.HTMLElement)) {
    const text3 = el.textContent;
    if (!text3) {
      return [];
    }
    return getInlineNodes(text3);
  }
  if (el.nodeName === "BR") {
    return getInlineNodes("\n");
  }
  if (el.nodeName === "IMG") {
    const alt = el.getAttribute("alt");
    return getInlineNodes(alt ?? "");
  }
  if (el.nodeName === "HR") {
    return [{ type: "divider", children: [{ text: "" }] }];
  }
  const marks = marksFromElementAttributes(el);
  if (el.classList.contains("listtype-quote")) {
    marks.delete("italic");
    return addMarksToChildren(marks, () => [
      { type: "blockquote", children: fixNodesForBlockChildren(deserializeNodes(el.childNodes)) }
    ]);
  }
  return addMarksToChildren(marks, () => {
    const { nodeName } = el;
    if (nodeName === "A") {
      const href = el.getAttribute("href");
      if (href) {
        return setLinkForChildren(
          href,
          () => forceDisableMarkForChildren("underline", () => deserializeNodes(el.childNodes))
        );
      }
    }
    if (nodeName === "PRE" && el.textContent) {
      return [{ type: "code", children: [{ text: el.textContent || "" }] }];
    }
    const deserialized = deserializeNodes(el.childNodes);
    const children2 = fixNodesForBlockChildren(deserialized);
    if (nodeName === "LI") {
      let nestedList;
      const listItemContent = {
        type: "list-item-content",
        children: children2.filter((node) => {
          if (nestedList === void 0 && (node.type === "ordered-list" || node.type === "unordered-list")) {
            nestedList = node;
            return false;
          }
          return true;
        })
      };
      const listItemChildren = nestedList ? [listItemContent, nestedList] : [listItemContent];
      return [{ type: "list-item", children: listItemChildren }];
    }
    if (nodeName === "P") {
      return [{ type: "paragraph", textAlign: getAlignmentFromElement(el), children: children2 }];
    }
    const headingLevel = headings[nodeName];
    if (typeof headingLevel === "number") {
      return [
        { type: "heading", level: headingLevel, textAlign: getAlignmentFromElement(el), children: children2 }
      ];
    }
    if (nodeName === "BLOCKQUOTE") {
      return [{ type: "blockquote", children: children2 }];
    }
    if (nodeName === "OL") {
      return [{ type: "ordered-list", children: children2 }];
    }
    if (nodeName === "UL") {
      return [{ type: "unordered-list", children: children2 }];
    }
    if (nodeName === "DIV" && !isBlock(children2[0])) {
      return [{ type: "paragraph", children: children2 }];
    }
    return deserialized;
  });
}
function deserializeNodes(nodes) {
  const outputNodes = [];
  for (const node of nodes) {
    outputNodes.push(...deserializeHTMLNode(node));
  }
  return outputNodes;
}
function fixNodesForBlockChildren(deserializedNodes) {
  if (!deserializedNodes.length) {
    return [{ text: "" }];
  }
  if (deserializedNodes.some(isBlock)) {
    const result = [];
    let queuedInlines = [];
    const flushInlines = () => {
      if (queuedInlines.length) {
        result.push({ type: "paragraph", children: queuedInlines });
        queuedInlines = [];
      }
    };
    for (const node of deserializedNodes) {
      if (isBlock(node)) {
        flushInlines();
        result.push(node);
        continue;
      }
      if (import_slate23.Node.string(node).trim() !== "") {
        queuedInlines.push(node);
      }
    }
    flushInlines();
    return result;
  }
  return deserializedNodes;
}

// fields-document/src/DocumentEditor/pasting/markdown.ts
var import_mdast_util_from_markdown = __toESM(require("mdast-util-from-markdown"));
var import_from_markdown = __toESM(require("mdast-util-gfm-autolink-literal/from-markdown"));
var import_micromark_extension_gfm_autolink_literal = __toESM(require("micromark-extension-gfm-autolink-literal"));
var import_from_markdown2 = __toESM(require("mdast-util-gfm-strikethrough/from-markdown"));
var import_micromark_extension_gfm_strikethrough = __toESM(require("micromark-extension-gfm-strikethrough"));
var markdownConfig = {
  mdastExtensions: [import_from_markdown.default, import_from_markdown2.default],
  extensions: [import_micromark_extension_gfm_autolink_literal.default, (0, import_micromark_extension_gfm_strikethrough.default)()]
};
function deserializeMarkdown(markdown) {
  const root = (0, import_mdast_util_from_markdown.default)(markdown, markdownConfig);
  let nodes = root.children;
  if (nodes.length === 1 && nodes[0].type === "paragraph") {
    nodes = nodes[0].children;
  }
  return deserializeChildren(nodes, markdown);
}
function deserializeChildren(nodes, input) {
  const outputNodes = [];
  for (const node of nodes) {
    const result = deserializeMarkdownNode(node, input);
    if (result.length) {
      outputNodes.push(...result);
    }
  }
  if (!outputNodes.length) {
    outputNodes.push({ text: "" });
  }
  return outputNodes;
}
function deserializeMarkdownNode(node, input) {
  switch (node.type) {
    case "blockquote": {
      return [{ type: "blockquote", children: deserializeChildren(node.children, input) }];
    }
    case "link": {
      return setLinkForChildren(node.url, () => deserializeChildren(node.children, input));
    }
    case "code": {
      return [{ type: "code", children: [{ text: node.value }] }];
    }
    case "paragraph": {
      return [{ type: "paragraph", children: deserializeChildren(node.children, input) }];
    }
    case "heading": {
      return [
        {
          type: "heading",
          level: node.depth,
          children: deserializeChildren(node.children, input)
        }
      ];
    }
    case "list": {
      return [
        {
          type: node.ordered ? "ordered-list" : "unordered-list",
          children: deserializeChildren(node.children, input)
        }
      ];
    }
    case "listItem": {
      return [{ type: "list-item", children: deserializeChildren(node.children, input) }];
    }
    case "thematicBreak": {
      return [{ type: "divider", children: [{ text: "" }] }];
    }
    case "break": {
      return getInlineNodes("\n");
    }
    case "delete": {
      return addMarkToChildren("strikethrough", () => deserializeChildren(node.children, input));
    }
    case "strong": {
      return addMarkToChildren("bold", () => deserializeChildren(node.children, input));
    }
    case "emphasis": {
      return addMarkToChildren("italic", () => deserializeChildren(node.children, input));
    }
    case "inlineCode": {
      return addMarkToChildren("code", () => getInlineNodes(node.value));
    }
    case "text": {
      return getInlineNodes(node.value);
    }
  }
  return getInlineNodes(input.slice(node.position.start.offset, node.position.end.offset));
}

// fields-document/src/DocumentEditor/pasting/index.ts
var urlPattern = /https?:\/\//;
function insertFragmentButDifferent(editor, nodes) {
  if (import_slate24.Editor.isBlock(editor, nodes[0])) {
    insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, nodes);
  } else {
    import_slate24.Transforms.insertFragment(editor, nodes);
  }
}
function withPasting(editor) {
  const { insertData, setFragmentData } = editor;
  editor.setFragmentData = (data) => {
    if (editor.selection) {
      data.setData("application/x-keystone-document-editor", "true");
    }
    setFragmentData(data);
  };
  editor.insertData = (data) => {
    if (data.getData("application/x-keystone-document-editor") === "true") {
      insertData(data);
      return;
    }
    const blockAbove = import_slate24.Editor.above(editor, { match: (node) => import_slate24.Editor.isBlock(editor, node) });
    if (blockAbove?.[0].type === "code") {
      const plain2 = data.getData("text/plain");
      editor.insertText(plain2);
      return;
    }
    let vsCodeEditorData = data.getData("vscode-editor-data");
    if (vsCodeEditorData) {
      try {
        const vsCodeData = JSON.parse(vsCodeEditorData);
        if (vsCodeData?.mode === "markdown" || vsCodeData?.mode === "mdx") {
          const plain2 = data.getData("text/plain");
          if (plain2) {
            const fragment = deserializeMarkdown(plain2);
            insertFragmentButDifferent(editor, fragment);
            return;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    const plain = data.getData("text/plain");
    if (urlPattern.test(plain) && isValidURL(plain) && editor.selection && !import_slate24.Range.isCollapsed(editor.selection) && import_slate24.Editor.above(editor, {
      match: (node) => import_slate24.Editor.isBlock(editor, node) && !import_slate24.Editor.isBlock(editor, node.children[0])
    }) && import_slate24.Editor.nodes(editor, {
      match: (node) => import_slate24.Editor.isInline(editor, node)
    }).next().done) {
      import_slate24.Transforms.wrapNodes(editor, { type: "link", href: plain, children: [] }, { split: true });
      return;
    }
    const html = data.getData("text/html");
    if (html) {
      const fragment = deserializeHTML(html);
      insertFragmentButDifferent(editor, fragment);
      return;
    }
    if (plain) {
      const fragment = deserializeMarkdown(plain);
      insertFragmentButDifferent(editor, fragment);
      return;
    }
    insertData(data);
  };
  return editor;
}

// fields-document/src/DocumentEditor/index.tsx
var import_slate26 = require("slate");
function createDocumentEditor(documentFeatures, componentBlocks, relationships) {
  return withPasting(
    withSoftBreaks(
      withBlocksSchema(
        withLink(
          documentFeatures,
          componentBlocks,
          withList(
            withHeading(
              withRelationship(
                withInsertMenu(
                  withComponentBlocks(
                    componentBlocks,
                    documentFeatures,
                    relationships,
                    withParagraphs(
                      withShortcuts(
                        withDivider(
                          withLayouts(
                            withMarks(
                              documentFeatures,
                              componentBlocks,
                              withCodeBlock(
                                withBlockMarkdownShortcuts(
                                  documentFeatures,
                                  componentBlocks,
                                  withBlockquote(
                                    withDocumentFeaturesNormalization(
                                      documentFeatures,
                                      relationships,
                                      (0, import_slate_history.withHistory)((0, import_slate_react11.withReact)((0, import_slate25.createEditor)()))
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
var orderedListStyles = ["lower-roman", "decimal", "lower-alpha"];
var unorderedListStyles = ["square", "disc", "circle"];
var styles = {
  flex: 1
};
var listDepth = 10;
while (listDepth--) {
  let arr = Array.from({ length: listDepth });
  if (arr.length) {
    styles[arr.map(() => `ol`).join(" ")] = {
      listStyle: orderedListStyles[listDepth % 3]
    };
    styles[arr.map(() => `ul`).join(" ")] = {
      listStyle: unorderedListStyles[listDepth % 3]
    };
  }
}
var blockquoteChildren = [
  "paragraph",
  "code",
  "heading",
  "ordered-list",
  "unordered-list",
  "divider"
];
var paragraphLike = [...blockquoteChildren, "blockquote"];
var insideOfLayouts = [...paragraphLike, "component-block"];
function blockContainer(args) {
  return {
    kind: "blocks",
    allowedChildren: new Set(args.allowedChildren),
    blockToWrapInlinesIn: args.allowedChildren[0],
    invalidPositionHandleMode: args.invalidPositionHandleMode
  };
}
function inlineContainer(args) {
  return {
    kind: "inlines",
    invalidPositionHandleMode: args.invalidPositionHandleMode
  };
}
function satisfies() {
  return function(value) {
    return value;
  };
}
var editorSchema = satisfies()({
  editor: blockContainer({
    allowedChildren: [...insideOfLayouts, "layout"],
    invalidPositionHandleMode: "move"
  }),
  layout: blockContainer({ allowedChildren: ["layout-area"], invalidPositionHandleMode: "move" }),
  "layout-area": blockContainer({
    allowedChildren: insideOfLayouts,
    invalidPositionHandleMode: "unwrap"
  }),
  blockquote: blockContainer({
    allowedChildren: blockquoteChildren,
    invalidPositionHandleMode: "move"
  }),
  paragraph: inlineContainer({ invalidPositionHandleMode: "unwrap" }),
  code: inlineContainer({ invalidPositionHandleMode: "move" }),
  divider: inlineContainer({ invalidPositionHandleMode: "move" }),
  heading: inlineContainer({ invalidPositionHandleMode: "unwrap" }),
  "component-block": blockContainer({
    allowedChildren: ["component-block-prop", "component-inline-prop"],
    invalidPositionHandleMode: "move"
  }),
  "component-inline-prop": inlineContainer({ invalidPositionHandleMode: "unwrap" }),
  "component-block-prop": blockContainer({
    allowedChildren: paragraphLike,
    invalidPositionHandleMode: "unwrap"
  }),
  "ordered-list": blockContainer({
    allowedChildren: ["list-item"],
    invalidPositionHandleMode: "move"
  }),
  "unordered-list": blockContainer({
    allowedChildren: ["list-item"],
    invalidPositionHandleMode: "move"
  }),
  "list-item": blockContainer({
    allowedChildren: ["list-item-content", "ordered-list", "unordered-list"],
    invalidPositionHandleMode: "unwrap"
  }),
  "list-item-content": inlineContainer({ invalidPositionHandleMode: "unwrap" })
});
var inlineContainerTypes = new Set(
  Object.entries(editorSchema).filter(([, value]) => value.kind === "inlines").map(([type2]) => type2)
);
function isInlineContainer(node) {
  return node.type !== void 0 && inlineContainerTypes.has(node.type);
}
var blockTypes = new Set(
  Object.keys(editorSchema).filter((x) => x !== "editor")
);
function isBlock(node) {
  return blockTypes.has(node.type);
}
function withBlocksSchema(editor) {
  const { normalizeNode } = editor;
  editor.normalizeNode = ([node, path2]) => {
    if (!import_slate25.Text.isText(node) && node.type !== "link" && node.type !== "relationship") {
      const nodeType = import_slate25.Editor.isEditor(node) ? "editor" : node.type;
      if (typeof nodeType !== "string" || editorSchema[nodeType] === void 0) {
        import_slate25.Transforms.unwrapNodes(editor, { at: path2 });
        return;
      }
      const info = editorSchema[nodeType];
      if (info.kind === "blocks" && node.children.length !== 0 && node.children.every((child) => !import_slate25.Editor.isBlock(editor, child))) {
        import_slate25.Transforms.wrapNodes(
          editor,
          { type: info.blockToWrapInlinesIn, children: [] },
          { at: path2, match: (node2) => !import_slate25.Editor.isBlock(editor, node2) }
        );
        return;
      }
      for (const [index, childNode] of node.children.entries()) {
        const childPath = [...path2, index];
        if (info.kind === "inlines") {
          if (!import_slate25.Text.isText(childNode) && !import_slate25.Editor.isInline(editor, childNode)) {
            handleNodeInInvalidPosition(editor, [childNode, childPath], path2);
            return;
          }
        } else {
          if (!import_slate25.Editor.isBlock(editor, childNode) || childNode.type === "link" || childNode.type === "relationship") {
            import_slate25.Transforms.wrapNodes(
              editor,
              { type: info.blockToWrapInlinesIn, children: [] },
              { at: childPath }
            );
            return;
          }
          if (!info.allowedChildren.has(childNode.type)) {
            handleNodeInInvalidPosition(editor, [childNode, childPath], path2);
            return;
          }
        }
      }
    }
    normalizeNode([node, path2]);
  };
  return editor;
}
function handleNodeInInvalidPosition(editor, [node, path2], parentPath) {
  const nodeType = node.type;
  const childNodeInfo = editorSchema[nodeType];
  const parentNode = import_slate25.Node.get(editor, parentPath);
  const parentNodeType = import_slate25.Editor.isEditor(parentNode) ? "editor" : parentNode.type;
  const parentNodeInfo = editorSchema[parentNodeType];
  if (!childNodeInfo || childNodeInfo.invalidPositionHandleMode === "unwrap") {
    if (parentNodeInfo.kind === "blocks" && parentNodeInfo.blockToWrapInlinesIn) {
      import_slate25.Transforms.setNodes(
        editor,
        {
          type: parentNodeInfo.blockToWrapInlinesIn,
          ...Object.fromEntries(
            Object.keys(node).filter((key) => key !== "type" && key !== "children").map((key) => [key, null])
          )
        },
        { at: path2 }
      );
      return;
    }
    import_slate25.Transforms.unwrapNodes(editor, { at: path2 });
    return;
  }
  const info = editorSchema[parentNode.type || "editor"];
  if (info?.kind === "blocks" && info.allowedChildren.has(nodeType)) {
    if (parentPath.length === 0) {
      import_slate25.Transforms.moveNodes(editor, { at: path2, to: [path2[0] + 1] });
    } else {
      import_slate25.Transforms.moveNodes(editor, { at: path2, to: import_slate25.Path.next(parentPath) });
    }
    return;
  }
  if (import_slate25.Editor.isEditor(parentNode)) {
    import_slate25.Transforms.moveNodes(editor, { at: path2, to: [path2[0] + 1] });
    import_slate25.Transforms.unwrapNodes(editor, { at: [path2[0] + 1] });
    return;
  }
  handleNodeInInvalidPosition(editor, [node, path2], parentPath.slice(0, -1));
}

// fields-document/src/structure-validation.ts
var t = __toESM(require("io-ts"));
var import_io_ts_excess = __toESM(require("io-ts-excess"));
var markValue = t.union([t.undefined, t.literal(true)]);
var text2 = (0, import_io_ts_excess.default)(
  t.type({
    text: t.string,
    bold: markValue,
    italic: markValue,
    underline: markValue,
    strikethrough: markValue,
    code: markValue,
    superscript: markValue,
    subscript: markValue,
    keyboard: markValue,
    insertMenu: markValue
  })
);
var URLType = class extends t.Type {
  _tag = "URLType";
  constructor() {
    super(
      "string",
      (u) => typeof u === "string" && isValidURL(u),
      (u, c) => this.is(u) ? t.success(u) : t.failure(u, c),
      t.identity
    );
  }
};
var urlType = new URLType();
var link = t.recursion(
  "Link",
  () => (0, import_io_ts_excess.default)(
    t.type({
      type: t.literal("link"),
      href: urlType,
      children
    })
  )
);
var relationship3 = t.recursion(
  "Relationship",
  () => (0, import_io_ts_excess.default)(
    t.type({
      type: t.literal("relationship"),
      relationship: t.string,
      data: t.union([t.null, relationshipData]),
      children
    })
  )
);
var inline = t.union([text2, link, relationship3]);
var layoutArea = t.recursion(
  "Layout",
  () => (0, import_io_ts_excess.default)(
    t.type({
      type: t.literal("layout"),
      layout: t.array(t.number),
      children
    })
  )
);
var onlyChildrenElements = t.recursion(
  "OnlyChildrenElements",
  () => (0, import_io_ts_excess.default)(
    t.type({
      type: t.union([
        t.literal("blockquote"),
        t.literal("layout-area"),
        t.literal("code"),
        t.literal("divider"),
        t.literal("list-item"),
        t.literal("list-item-content"),
        t.literal("ordered-list"),
        t.literal("unordered-list")
      ]),
      children
    })
  )
);
var textAlign = t.union([t.undefined, t.literal("center"), t.literal("end")]);
var heading = t.recursion(
  "Heading",
  () => (0, import_io_ts_excess.default)(
    t.type({
      type: t.literal("heading"),
      textAlign,
      level: t.union([
        t.literal(1),
        t.literal(2),
        t.literal(3),
        t.literal(4),
        t.literal(5),
        t.literal(6)
      ]),
      children
    })
  )
);
var paragraph = t.recursion(
  "Paragraph",
  () => (0, import_io_ts_excess.default)(
    t.type({
      type: t.literal("paragraph"),
      textAlign,
      children
    })
  )
);
var relationshipData = (0, import_io_ts_excess.default)(
  t.type({
    id: t.string,
    label: t.union([t.undefined, t.string]),
    data: t.union([t.undefined, t.record(t.string, t.any)])
  })
);
var componentBlock = t.recursion(
  "ComponentBlock",
  () => (0, import_io_ts_excess.default)(
    t.type({
      type: t.literal("component-block"),
      component: t.string,
      props: t.record(t.string, t.any),
      children
    })
  )
);
var componentProp = t.recursion(
  "ComponentProp",
  () => (0, import_io_ts_excess.default)(
    t.type({
      type: t.union([t.literal("component-inline-prop"), t.literal("component-block-prop")]),
      propPath: t.union([t.array(t.union([t.string, t.number])), t.undefined]),
      children
    })
  )
);
var block = t.recursion(
  "Element",
  () => t.union([layoutArea, onlyChildrenElements, heading, componentBlock, componentProp, paragraph])
);
var children = t.recursion("Children", () => t.array(t.union([block, inline])));
var editorCodec = t.array(block);
function isRelationshipData(val) {
  return relationshipData.validate(val, [])._tag === "Right";
}
function validateDocumentStructure(val) {
  const result = editorCodec.validate(val, []);
  if (result._tag === "Left") {
    throw new Error("Invalid document structure");
  }
}

// fields-document/src/validation.ts
var PropValidationError = class extends Error {
  path;
  constructor(message, path2) {
    super(message);
    this.path = path2;
  }
};
function validateComponentBlockProps(schema, value, relationships, path2) {
  if (schema.kind === "form") {
    if (schema.validate(value)) {
      return value;
    }
    throw new PropValidationError("Invalid form prop value", path2);
  }
  if (schema.kind === "child") {
    return null;
  }
  if (schema.kind === "relationship") {
    if (schema.many) {
      if (Array.isArray(value) && value.every(isRelationshipData)) {
        return value.map((x) => ({ id: x.id }));
      } else {
        throw new PropValidationError(`Invalid relationship value`, path2);
      }
    }
    if (value === null || isRelationshipData(value)) {
      return value === null ? null : { id: value.id };
    } else {
      throw new PropValidationError(`Invalid relationship value`, path2);
    }
  }
  if (schema.kind === "conditional") {
    if (typeof value !== "object" || value === null) {
      throw new PropValidationError("Conditional value must be an object", path2);
    }
    for (const key of Object.keys(value)) {
      if (key !== "discriminant" && key !== "value") {
        throw new PropValidationError(
          `Conditional value only allows keys named "discriminant" and "value", not "${key}"`,
          path2
        );
      }
    }
    const discriminant = value.discriminant;
    const val = value.value;
    const obj = {};
    const discriminantVal = validateComponentBlockProps(
      schema.discriminant,
      discriminant,
      relationships,
      path2.concat("discriminant")
    );
    if (discriminantVal !== void 0) {
      obj.discriminant = discriminantVal;
    }
    const conditionalFieldValue = validateComponentBlockProps(
      schema.values[discriminant],
      val,
      relationships,
      path2.concat("value")
    );
    if (conditionalFieldValue !== void 0) {
      obj.value = conditionalFieldValue;
    }
    return obj;
  }
  if (schema.kind === "object") {
    if (typeof value !== "object" || value === null) {
      throw new PropValidationError("Object value must be an object", path2);
    }
    const allowedKeysSet = new Set(Object.keys(schema.fields));
    for (const key of Object.keys(value)) {
      if (!allowedKeysSet.has(key)) {
        throw new PropValidationError(`Key on object value "${key}" is not allowed`, path2);
      }
    }
    let val = {};
    for (const key of Object.keys(schema.fields)) {
      const propVal = validateComponentBlockProps(
        schema.fields[key],
        value[key],
        relationships,
        path2.concat(key)
      );
      if (propVal !== void 0) {
        val[key] = propVal;
      }
    }
    return val;
  }
  if (schema.kind === "array") {
    if (!Array.isArray(value)) {
      throw new PropValidationError("Array field value must be an array", path2);
    }
    return value.map((innerVal, i) => {
      return validateComponentBlockProps(schema.element, innerVal, relationships, path2.concat(i));
    });
  }
  assertNever(schema);
}
function isText(node) {
  return import_slate27.Text.isText(node);
}
function getValidatedNodeWithNormalizedComponentFormProps(node, componentBlocks, relationships) {
  if (isText(node)) {
    return node;
  }
  if (node.type === "component-block") {
    if (componentBlocks.hasOwnProperty(node.component)) {
      const componentBlock2 = componentBlocks[node.component];
      node = {
        ...node,
        props: validateComponentBlockProps(
          { kind: "object", fields: componentBlock2.schema },
          node.props,
          relationships,
          []
        )
      };
    }
  }
  if (node.type === "relationship") {
    node = {
      type: "relationship",
      data: node.data?.id !== void 0 ? { id: node.data.id, data: void 0, label: void 0 } : null,
      relationship: node.relationship,
      children: node.children
    };
  }
  return {
    ...node,
    children: node.children.map(
      (x) => getValidatedNodeWithNormalizedComponentFormProps(x, componentBlocks, relationships)
    )
  };
}
function validateAndNormalizeDocument(value, documentFeatures, componentBlocks, relationships) {
  validateDocumentStructure(value);
  const children2 = value.map(
    (x) => getValidatedNodeWithNormalizedComponentFormProps(x, componentBlocks, relationships)
  );
  const editor = createDocumentEditor(documentFeatures, componentBlocks, relationships);
  editor.children = children2;
  import_slate27.Editor.normalize(editor, { force: true });
  return editor.children;
}

// fields-document/src/relationship-data.tsx
var import_graphql3 = require("graphql");
var import_weak_memoize2 = __toESM(require("@emotion/weak-memoize"));
var labelFieldAlias = "____document_field_relationship_item_label";
var idFieldAlias = "____document_field_relationship_item_id";
function addRelationshipData(nodes, context, relationships, componentBlocks) {
  return Promise.all(
    nodes.map(async (node) => {
      if (node.type === "relationship") {
        const relationship9 = relationships[node.relationship];
        if (!relationship9)
          return node;
        return {
          ...node,
          data: await fetchDataForOne(
            context,
            relationship9.listKey,
            relationship9.selection || "",
            node.data
          )
        };
      }
      if (node.type === "component-block") {
        const componentBlock2 = componentBlocks[node.component];
        if (componentBlock2) {
          const [props, children2] = await Promise.all([
            addRelationshipDataToComponentProps(
              { kind: "object", fields: componentBlock2.schema },
              node.props,
              (relationship9, data) => fetchRelationshipData(
                context,
                relationship9.listKey,
                relationship9.many,
                relationship9.selection || "",
                data
              )
            ),
            addRelationshipData(node.children, context, relationships, componentBlocks)
          ]);
          return {
            ...node,
            props,
            children: children2
          };
        }
      }
      if ("children" in node && Array.isArray(node.children)) {
        return {
          ...node,
          children: await addRelationshipData(
            node.children,
            context,
            relationships,
            componentBlocks
          )
        };
      }
      return node;
    })
  );
}
async function fetchRelationshipData(context, listKey, many, selection, data) {
  if (!many)
    return fetchDataForOne(context, listKey, selection, data);
  const ids = Array.isArray(data) ? data.filter((item) => item.id != null).map((x) => x.id) : [];
  if (!ids.length)
    return [];
  const labelField = getLabelFieldsForLists(context.graphql.schema)[listKey];
  const val = await context.graphql.run({
    query: `query($ids: [ID!]!) {items:${context.gqlNames(listKey).listQueryName}(where: { id: { in: $ids } }) {${idFieldAlias}:id ${labelFieldAlias}:${labelField}
${selection || ""}}}`,
    variables: { ids }
  });
  return Array.isArray(val.items) ? val.items.map(({ [labelFieldAlias]: label, [idFieldAlias]: id, ...data2 }) => {
    return { id, label, data: data2 };
  }) : [];
}
async function fetchDataForOne(context, listKey, selection, data) {
  const id = data?.id;
  if (id == null)
    return null;
  const labelField = getLabelFieldsForLists(context.graphql.schema)[listKey];
  const val = await context.graphql.run({
    query: `query($id: ID!) {item:${context.gqlNames(listKey).itemQueryName}(where: {id:$id}) {${labelFieldAlias}:${labelField}
${selection}}}`,
    variables: { id }
  });
  if (val.item === null) {
    if (!process.env.TEST_ADAPTER) {
      console.error(
        `Unable to fetch relationship data: listKey: ${listKey}, many: false, selection: ${selection}, id: ${id} `
      );
    }
    return { id, data: void 0, label: void 0 };
  }
  return {
    id,
    label: val.item[labelFieldAlias],
    data: (() => {
      const { [labelFieldAlias]: _ignore, ...otherData } = val.item;
      return otherData;
    })()
  };
}
async function addRelationshipDataToComponentProps(schema, val, fetchData) {
  switch (schema.kind) {
    case "child":
    case "form": {
      return val;
    }
    case "relationship": {
      return fetchData(schema, val);
    }
    case "object": {
      return Object.fromEntries(
        await Promise.all(
          Object.keys(schema.fields).map(async (key) => [
            key,
            val[key] === void 0 ? void 0 : await addRelationshipDataToComponentProps(schema.fields[key], val[key], fetchData)
          ])
        )
      );
    }
    case "conditional": {
      return {
        discriminant: val.discriminant,
        value: await addRelationshipDataToComponentProps(
          schema.values[val.discriminant],
          val.value,
          fetchData
        )
      };
    }
    case "array": {
      return await Promise.all(
        val.map(
          async (innerVal) => addRelationshipDataToComponentProps(schema.element, innerVal, fetchData)
        )
      );
    }
  }
  assertNever(schema);
}
var document = (0, import_graphql3.parse)(`
  query {
    keystone {
      adminMeta {
        lists {
          key
          labelField
        }
      }
    }
  }
`);
var getLabelFieldsForLists = (0, import_weak_memoize2.default)(function getLabelFieldsForLists2(schema) {
  const { data, errors } = (0, import_graphql3.executeSync)({
    schema,
    document,
    contextValue: { isAdminUIBuildProcess: true }
  });
  if (errors?.length) {
    throw errors[0];
  }
  return Object.fromEntries(data.keystone.adminMeta.lists.map((x) => [x.key, x.labelField]));
});

// fields-document/src/DocumentEditor/component-blocks/field-assertions.ts
function assertValidComponentSchema(schema, lists) {
  assertValidComponentSchemaInner(schema, [], [], /* @__PURE__ */ new Set(), lists);
}
function assertValidComponentSchemaInner(schema, schemaAncestors, propPath, seenProps, lists) {
  if (schema.kind === "form" || schema.kind === "child") {
    return;
  }
  if (schema.kind === "relationship") {
    if (lists.has(schema.listKey)) {
      return;
    }
    throw new Error(
      `The relationship field at "${propPath.join(".")}" has the listKey "${schema.listKey}" but no list named "${schema.listKey}" exists.`
    );
  }
  const ancestor = schemaAncestors.indexOf(schema);
  if (ancestor !== -1) {
    throw new Error(
      `The field "${propPath.join(
        "."
      )}" is the same as it's ancestor. Use an array or conditional field for recursive structures.`
    );
  }
  if (seenProps.has(schema)) {
    return;
  }
  propPath.push(schema.kind);
  try {
    seenProps.add(schema);
    if (schema.kind === "array") {
      assertValidComponentSchemaInner(schema.element, [], propPath, seenProps, lists);
      return;
    }
    if (schema.kind === "object") {
      schemaAncestors.push(schema);
      for (const [key, innerProp] of Object.entries(schema.fields)) {
        propPath.push(key);
        if (schema.fields[key] !== innerProp) {
          throw new Error(
            `Fields on an object field must not change over time but the field at "${propPath.join(
              "."
            )}" changes between accesses`
          );
        }
        assertValidComponentSchemaInner(innerProp, schemaAncestors, propPath, seenProps, lists);
        propPath.pop();
      }
      schemaAncestors.pop();
      return;
    }
    if (schema.kind === "conditional") {
      schemaAncestors.push(schema);
      const stringifiedDefaultDiscriminant = schema.discriminant.defaultValue.toString();
      for (const [key, innerProp] of Object.entries(schema.values)) {
        propPath.push(key);
        if (schema.values[key] !== innerProp) {
          throw new Error(
            `Fields on a conditional field must not change over time but the field at "${propPath.join(
              "."
            )}" changes between accesses`
          );
        }
        assertValidComponentSchemaInner(
          innerProp,
          key === stringifiedDefaultDiscriminant ? schemaAncestors : [],
          propPath,
          seenProps,
          lists
        );
        propPath.pop();
      }
      schemaAncestors.pop();
      return;
    }
  } finally {
    propPath.pop();
  }
  assertNever(schema);
}

// fields-document/src/structure.ts
var import_types17 = require("@keystone-6/core/types");
var import_core28 = require("@keystone-6/core");

// fields-document/src/structure-graphql-output.tsx
var import_core26 = require("@keystone-6/core");

// fields-document/src/structure-graphql-input.tsx
var import_core27 = require("@keystone-6/core");

// fields-document/src/index.ts
var document2 = ({
  componentBlocks = {},
  dividers,
  formatting,
  layouts,
  relationships: configRelationships,
  links,
  ...config2
} = {}) => (meta) => {
  const documentFeatures = normaliseDocumentFeatures({
    dividers,
    formatting,
    layouts,
    links
  });
  const relationships = normaliseRelationships(configRelationships, meta);
  const inputResolver3 = (data) => {
    if (data === null) {
      throw new import_apollo_server_errors2.ApolloError("Input error: Document fields cannot be set to null");
    }
    if (data === void 0) {
      return data;
    }
    return validateAndNormalizeDocument(data, documentFeatures, componentBlocks, relationships);
  };
  if (config2.isIndexed === "unique") {
    throw Error("isIndexed: 'unique' is not a supported option for field type document");
  }
  const lists = new Set(Object.keys(meta.lists));
  for (const [name, block2] of Object.entries(componentBlocks)) {
    try {
      assertValidComponentSchema({ kind: "object", fields: block2.schema }, lists);
    } catch (err) {
      throw new Error(
        `Component block ${name} in ${meta.listKey}.${meta.fieldKey}: ${err.message}`
      );
    }
  }
  return (0, import_types18.jsonFieldTypePolyfilledForSQLite)(
    meta.provider,
    {
      ...config2,
      __ksTelemetryFieldTypeName: "@keystone-6/document",
      input: {
        create: {
          arg: import_core29.graphql.arg({ type: import_core29.graphql.JSON }),
          resolve(val) {
            if (val === void 0) {
              val = [{ type: "paragraph", children: [{ text: "" }] }];
            }
            return inputResolver3(val);
          }
        },
        update: { arg: import_core29.graphql.arg({ type: import_core29.graphql.JSON }), resolve: inputResolver3 }
      },
      output: import_core29.graphql.field({
        type: import_core29.graphql.object()({
          name: `${meta.listKey}_${meta.fieldKey}_Document`,
          fields: {
            document: import_core29.graphql.field({
              args: {
                hydrateRelationships: import_core29.graphql.arg({
                  type: import_core29.graphql.nonNull(import_core29.graphql.Boolean),
                  defaultValue: false
                })
              },
              type: import_core29.graphql.nonNull(import_core29.graphql.JSON),
              resolve({ document: document3 }, { hydrateRelationships }, context) {
                return hydrateRelationships ? addRelationshipData(document3, context, relationships, componentBlocks) : document3;
              }
            })
          }
        }),
        resolve({ value }) {
          if (value === null) {
            return null;
          }
          return { document: value };
        }
      }),
      views: "@keystone-6/fields-document/views",
      getAdminMeta() {
        return {
          relationships,
          documentFeatures,
          componentBlocksPassedOnServer: Object.keys(componentBlocks)
        };
      }
    },
    {
      mode: "required",
      default: {
        kind: "literal",
        value: JSON.stringify([{ type: "paragraph", children: [{ text: "" }] }])
      },
      map: config2.db?.map
    }
  );
};
function normaliseRelationships(configRelationships, meta) {
  const relationships = {};
  if (configRelationships) {
    Object.keys(configRelationships).forEach((key) => {
      const relationship9 = configRelationships[key];
      if (meta.lists[relationship9.listKey] === void 0) {
        throw new Error(
          `An inline relationship ${relationship9.label} (${key}) in the field at ${meta.listKey}.${meta.fieldKey} has listKey set to "${relationship9.listKey}" but no list named "${relationship9.listKey}" exists.`
        );
      }
      relationships[key] = { ...relationship9, selection: relationship9.selection ?? null };
    });
  }
  return relationships;
}
function normaliseDocumentFeatures(config2) {
  const formatting = config2.formatting === true ? {
    alignment: true,
    blockTypes: true,
    headingLevels: true,
    inlineMarks: true,
    listTypes: true,
    softBreaks: true
  } : config2.formatting ?? {};
  const documentFeatures = {
    formatting: {
      alignment: formatting.alignment === true ? {
        center: true,
        end: true
      } : {
        center: !!formatting.alignment?.center,
        end: !!formatting.alignment?.end
      },
      blockTypes: formatting?.blockTypes === true ? { blockquote: true, code: true } : {
        blockquote: !!formatting.blockTypes?.blockquote,
        code: !!formatting.blockTypes?.code
      },
      headingLevels: formatting?.headingLevels === true ? [1, 2, 3, 4, 5, 6] : [...new Set(formatting?.headingLevels)].sort(),
      inlineMarks: formatting.inlineMarks === true ? {
        bold: true,
        code: true,
        italic: true,
        keyboard: true,
        strikethrough: true,
        subscript: true,
        superscript: true,
        underline: true
      } : {
        bold: !!formatting.inlineMarks?.bold,
        code: !!formatting.inlineMarks?.code,
        italic: !!formatting.inlineMarks?.italic,
        strikethrough: !!formatting.inlineMarks?.strikethrough,
        underline: !!formatting.inlineMarks?.underline,
        keyboard: !!formatting.inlineMarks?.keyboard,
        subscript: !!formatting.inlineMarks?.subscript,
        superscript: !!formatting.inlineMarks?.superscript
      },
      listTypes: formatting.listTypes === true ? { ordered: true, unordered: true } : {
        ordered: !!formatting.listTypes?.ordered,
        unordered: !!formatting.listTypes?.unordered
      },
      softBreaks: !!formatting.softBreaks
    },
    links: !!config2.links,
    layouts: [...new Set((config2.layouts || []).map((x) => JSON.stringify(x)))].map(
      (x) => JSON.parse(x)
    ),
    dividers: !!config2.dividers
  };
  return documentFeatures;
}

// Schemas/Content.ts
var now = new Date("2019-01-16");
var Content = list({
  access: allowAll,
  fields: {
    pagename: select({
      options: [
        { label: "About us", value: "AboutUs" },
        { label: "Buisness", value: "Buisness" },
        { label: "Home", value: "Home" },
        { label: "Careers", value: "Careers" },
        { label: "SME", value: "SME" },
        { label: "News And Update", value: "NewsAndUpdate" },
        { label: "Driver", value: "Driver" }
      ]
    }),
    image: image({ storage: "localstorage" }),
    type: select({
      options: [
        { label: "Cards", value: "Cards" },
        { label: "Image", value: "Image" },
        { label: "ClientLogo", value: "ClientLogo" },
        { label: "Banner", value: "Banner" }
      ],
      defaultValue: "Cards",
      ui: {
        displayMode: "select"
      }
    }),
    description: text({
      ui: {
        displayMode: "textarea"
      }
    }),
    content: document2({
      formatting: true,
      links: true,
      dividers: true
    }),
    link: text({}),
    heading: text({}),
    Section: select({
      options: [
        { label: "Whats new", value: "Whatsnew" },
        { label: "Clients", value: "Clients" },
        { label: "What they say", value: "WhatTheySay" },
        { label: "What media say about us", value: "WhatMediaSayAboutUs" },
        { label: "Why we are the Best", value: "BestSolution" },
        { label: "Company Milestone", value: "CompanyMilestone" },
        { label: "What Our Driver Says", value: "DriverSays" },
        { label: "Advanced features", value: "AdvancedFeature" },
        { label: "Banner", value: "banner" },
        { label: "Find Us", value: "FindUsHere" },
        { label: "Multicard Slider", value: "MulticardSlider" }
      ],
      defaultValue: "SelectSection",
      ui: {
        displayMode: "select"
      }
    }),
    publishedAt: timestamp({ defaultValue: { kind: "now" } }),
    DisplayEnabled: select({
      options: [
        { label: "Enable", value: "Enable" },
        { label: "Disable", value: "Disable" }
      ],
      ui: {
        displayMode: "radio"
      }
    })
  }
});

// Schemas/Faq.ts
var Faq = list({
  access: allowAll,
  fields: {
    Question: text({ validation: { isRequired: true } }),
    ans: text({
      ui: {
        displayMode: "textarea"
      }
    })
  }
});

// Schemas/JobApplication.ts
var JobApplication = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: true }),
    jobRole: text({ validation: { isRequired: true } }),
    coverLetter: text({
      ui: {
        displayMode: "textarea"
      }
    }),
    CV: file({ storage: "filestorage" })
  }
});

// Schemas/JobRole.ts
var JobRole = list({
  access: allowAll,
  fields: {
    Role: text({ validation: { isRequired: true } }),
    employmenttype: select({
      options: [
        { label: "Full Time Employee (FTE)", value: "Full Time Employee (FTE)" },
        { label: "other", value: "other" }
      ],
      defaultValue: "Full Time Employee (FTE)",
      ui: {
        displayMode: "segmented-control"
      }
    }),
    jobType: select({
      options: [
        { label: "Product", value: "Product" },
        { label: "Commercial", value: "Commercial" },
        { label: "Marketing", value: "Marketing" }
      ],
      defaultValue: "Product",
      ui: {
        displayMode: "select"
      }
    }),
    jobResponsilbilty: document2({
      formatting: true,
      links: true,
      dividers: true,
      layouts: [
        [1, 1],
        [1, 1, 1]
      ]
    }),
    jobRequirement: document2({
      formatting: true,
      links: true,
      dividers: true,
      layouts: [
        [1, 1],
        [1, 1, 1]
      ]
    }),
    jobLocation: text({ validation: { isRequired: true } }),
    ShowVacancy: select({
      options: [
        { label: "Enable", value: "Enable" },
        { label: "Disable", value: "Disable" }
      ],
      defaultValue: "Enable",
      ui: {
        displayMode: "radio"
      }
    })
  }
});

// Schemas/FormQuery.ts
var FormQuery = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    type: select({
      options: [
        { label: "Buisness", value: "Buisness" },
        { label: "General", value: "General" },
        { label: "other", value: "other" }
      ],
      defaultValue: "Buisness",
      ui: {
        displayMode: "select"
      }
    }),
    description: text({
      ui: {
        displayMode: "textarea"
      }
    }),
    buisnessCategory: text({ defaultValue: "" }),
    email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    packagesCount: text({ defaultValue: "" }),
    subject: text({}),
    phone: decimal({ validation: { isRequired: true }, defaultValue: "0" }),
    download: select({
      options: [
        { label: "Enable", value: "Enable" },
        { label: "Disable", value: "Disable" }
      ],
      defaultValue: "Enable",
      ui: {
        displayMode: "segmented-control"
      }
    })
  }
});

// access.ts
var isAdmin = ({ session: session2 }) => session2?.data.isAdmin;

// Schemas/User.ts
var User = list({
  access: {
    operation: {
      query: allowAll,
      create: isAdmin,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ isIndexed: "unique", validation: { isRequired: true } }),
    password: password(),
    createdAt: timestamp(),
    isAdmin: checkbox({ defaultValue: false })
  }
});

// auth.ts
var import_crypto2 = require("crypto");

// auth/src/index.ts
var import_fields10 = require("@keystone-6/core/fields");

// auth/src/schema.ts
var import_types19 = require("@keystone-6/core/types");
var import_graphql5 = require("graphql");
var import_core34 = require("@keystone-6/core");

// auth/src/gql/getBaseAuthSchema.ts
var import_core30 = require("@keystone-6/core");

// auth/src/lib/validateSecret.ts
async function validateSecret(secretFieldImpl, identityField, identity2, secretField, secret, dbItemAPI) {
  const item = await dbItemAPI.findOne({ where: { [identityField]: identity2 } });
  if (!item || !item[secretField]) {
    await secretFieldImpl.generateHash("simulated-password-to-counter-timing-attack");
    return { success: false };
  } else if (await secretFieldImpl.compare(secret, item[secretField])) {
    return { success: true, item };
  } else {
    return { success: false };
  }
}

// auth/src/gql/getBaseAuthSchema.ts
function getBaseAuthSchema({
  listKey,
  identityField,
  secretField,
  gqlNames,
  secretFieldImpl,
  base
}) {
  const ItemAuthenticationWithPasswordSuccess = import_core30.graphql.object()({
    name: gqlNames.ItemAuthenticationWithPasswordSuccess,
    fields: {
      sessionToken: import_core30.graphql.field({ type: import_core30.graphql.nonNull(import_core30.graphql.String) }),
      item: import_core30.graphql.field({ type: import_core30.graphql.nonNull(base.object(listKey)) })
    }
  });
  const ItemAuthenticationWithPasswordFailure = import_core30.graphql.object()({
    name: gqlNames.ItemAuthenticationWithPasswordFailure,
    fields: {
      message: import_core30.graphql.field({ type: import_core30.graphql.nonNull(import_core30.graphql.String) })
    }
  });
  const AuthenticationResult = import_core30.graphql.union({
    name: gqlNames.ItemAuthenticationWithPasswordResult,
    types: [ItemAuthenticationWithPasswordSuccess, ItemAuthenticationWithPasswordFailure],
    resolveType(val) {
      if ("sessionToken" in val) {
        return gqlNames.ItemAuthenticationWithPasswordSuccess;
      }
      return gqlNames.ItemAuthenticationWithPasswordFailure;
    }
  });
  const extension = {
    query: {
      authenticatedItem: import_core30.graphql.field({
        type: import_core30.graphql.union({
          name: "AuthenticatedItem",
          types: [base.object(listKey)],
          resolveType: (root, context) => context.session?.listKey
        }),
        resolve(root, args, { session: session2, db }) {
          if (typeof session2?.itemId === "string" && typeof session2.listKey === "string") {
            return db[session2.listKey].findOne({ where: { id: session2.itemId } });
          }
          return null;
        }
      })
    },
    mutation: {
      [gqlNames.authenticateItemWithPassword]: import_core30.graphql.field({
        type: AuthenticationResult,
        args: {
          [identityField]: import_core30.graphql.arg({ type: import_core30.graphql.nonNull(import_core30.graphql.String) }),
          [secretField]: import_core30.graphql.arg({ type: import_core30.graphql.nonNull(import_core30.graphql.String) })
        },
        async resolve(root, { [identityField]: identity2, [secretField]: secret }, context) {
          if (!context.sessionStrategy) {
            throw new Error("No session implementation available on context");
          }
          const dbItemAPI = context.sudo().db[listKey];
          const result = await validateSecret(
            secretFieldImpl,
            identityField,
            identity2,
            secretField,
            secret,
            dbItemAPI
          );
          if (!result.success) {
            return { code: "FAILURE", message: "Authentication failed." };
          }
          const sessionToken = await context.sessionStrategy.start({
            data: {
              listKey,
              itemId: result.item.id
            },
            context
          });
          return { sessionToken, item: result.item };
        }
      })
    }
  };
  return { extension, ItemAuthenticationWithPasswordSuccess };
}

// auth/src/gql/getInitFirstItemSchema.ts
var import_core31 = require("@keystone-6/core");
var import_graphql4 = require("graphql");
function getInitFirstItemSchema({
  listKey,
  fields: fields2,
  itemData,
  gqlNames,
  graphQLSchema,
  ItemAuthenticationWithPasswordSuccess
}) {
  const createInputConfig = (0, import_graphql4.assertInputObjectType)(
    graphQLSchema.getType(`${listKey}CreateInput`)
  ).toConfig();
  const fieldsSet = new Set(fields2);
  const initialCreateInput = import_core31.graphql.wrap.inputObject(
    new import_graphql4.GraphQLInputObjectType({
      ...createInputConfig,
      fields: Object.fromEntries(
        Object.entries(createInputConfig.fields).filter(([fieldKey]) => fieldsSet.has(fieldKey))
      ),
      name: gqlNames.CreateInitialInput
    })
  );
  return {
    mutation: {
      [gqlNames.createInitialItem]: import_core31.graphql.field({
        type: import_core31.graphql.nonNull(ItemAuthenticationWithPasswordSuccess),
        args: { data: import_core31.graphql.arg({ type: import_core31.graphql.nonNull(initialCreateInput) }) },
        async resolve(rootVal, { data }, context) {
          if (!context.sessionStrategy) {
            throw new Error("No session implementation available on context");
          }
          const dbItemAPI = context.sudo().db[listKey];
          const count = await dbItemAPI.count({});
          if (count !== 0) {
            throw new Error("Initial items can only be created when no items exist in that list");
          }
          const item = await dbItemAPI.createOne({ data: { ...data, ...itemData } });
          const sessionToken = await context.sessionStrategy.start({
            data: { listKey, itemId: item.id.toString() },
            context
          });
          return { item, sessionToken };
        }
      })
    }
  };
}

// auth/src/gql/getPasswordResetSchema.ts
var import_core32 = require("@keystone-6/core");

// auth/src/lib/createAuthToken.ts
var import_crypto = require("crypto");
function generateToken(length) {
  return (0, import_crypto.randomBytes)(length).toString("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, length);
}
async function createAuthToken(identityField, identity2, dbItemAPI) {
  const item = await dbItemAPI.findOne({ where: { [identityField]: identity2 } });
  if (item) {
    return { success: true, itemId: item.id, token: generateToken(20) };
  } else {
    return { success: false };
  }
}

// auth/src/lib/validateAuthToken.ts
function sanitiseValidForMinsConfig(input) {
  const parsed = Number.parseFloat(input);
  return parsed ? Math.max(1 / 6, Math.min(parsed, 60 * 24)) : 10;
}
async function validateAuthToken(listKey, secretFieldImpl, tokenType, identityField, identity2, tokenValidMins, token, dbItemAPI) {
  const result = await validateSecret(
    secretFieldImpl,
    identityField,
    identity2,
    `${tokenType}Token`,
    token,
    dbItemAPI
  );
  if (!result.success) {
    return { success: false, code: "FAILURE" };
  }
  const { item } = result;
  const fieldKeys = { issuedAt: `${tokenType}IssuedAt`, redeemedAt: `${tokenType}RedeemedAt` };
  if (item[fieldKeys.redeemedAt]) {
    return { success: false, code: "TOKEN_REDEEMED" };
  }
  if (!item[fieldKeys.issuedAt] || typeof item[fieldKeys.issuedAt].getTime !== "function") {
    throw new Error(
      `Error redeeming authToken: field ${listKey}.${fieldKeys.issuedAt} isn't a valid Date object.`
    );
  }
  const elapsedMins = (Date.now() - item[fieldKeys.issuedAt].getTime()) / (1e3 * 60);
  const validForMins = sanitiseValidForMinsConfig(tokenValidMins);
  if (elapsedMins > validForMins) {
    return { success: false, code: "TOKEN_EXPIRED" };
  }
  return { success: true, item };
}

// auth/src/lib/getErrorMessage.ts
function getAuthTokenErrorMessage({ code }) {
  switch (code) {
    case "FAILURE":
      return "Auth token redemption failed.";
    case "TOKEN_EXPIRED":
      return "The auth token provided has expired.";
    case "TOKEN_REDEEMED":
      return "Auth tokens are single use and the auth token provided has already been redeemed.";
  }
}

// auth/src/gql/getPasswordResetSchema.ts
var errorCodes = ["FAILURE", "TOKEN_EXPIRED", "TOKEN_REDEEMED"];
var PasswordResetRedemptionErrorCode = import_core32.graphql.enum({
  name: "PasswordResetRedemptionErrorCode",
  values: import_core32.graphql.enumValues(errorCodes)
});
function getPasswordResetSchema({
  listKey,
  identityField,
  secretField,
  gqlNames,
  passwordResetLink,
  passwordResetTokenSecretFieldImpl
}) {
  const getResult = (name) => import_core32.graphql.object()({
    name,
    fields: {
      code: import_core32.graphql.field({ type: import_core32.graphql.nonNull(PasswordResetRedemptionErrorCode) }),
      message: import_core32.graphql.field({ type: import_core32.graphql.nonNull(import_core32.graphql.String) })
    }
  });
  const ValidateItemPasswordResetTokenResult = getResult(
    gqlNames.ValidateItemPasswordResetTokenResult
  );
  const RedeemItemPasswordResetTokenResult = getResult(gqlNames.RedeemItemPasswordResetTokenResult);
  return {
    mutation: {
      [gqlNames.sendItemPasswordResetLink]: import_core32.graphql.field({
        type: import_core32.graphql.nonNull(import_core32.graphql.Boolean),
        args: { [identityField]: import_core32.graphql.arg({ type: import_core32.graphql.nonNull(import_core32.graphql.String) }) },
        async resolve(rootVal, { [identityField]: identity2 }, context) {
          const dbItemAPI = context.sudo().db[listKey];
          const tokenType = "passwordReset";
          const result = await createAuthToken(identityField, identity2, dbItemAPI);
          if (result.success) {
            const { token, itemId } = result;
            await dbItemAPI.updateOne({
              where: { id: `${itemId}` },
              data: {
                [`${tokenType}Token`]: token,
                [`${tokenType}IssuedAt`]: new Date().toISOString(),
                [`${tokenType}RedeemedAt`]: null
              }
            });
            await passwordResetLink.sendToken({ itemId, identity: identity2, token, context });
          }
          return true;
        }
      }),
      [gqlNames.redeemItemPasswordResetToken]: import_core32.graphql.field({
        type: RedeemItemPasswordResetTokenResult,
        args: {
          [identityField]: import_core32.graphql.arg({ type: import_core32.graphql.nonNull(import_core32.graphql.String) }),
          token: import_core32.graphql.arg({ type: import_core32.graphql.nonNull(import_core32.graphql.String) }),
          [secretField]: import_core32.graphql.arg({ type: import_core32.graphql.nonNull(import_core32.graphql.String) })
        },
        async resolve(rootVal, { [identityField]: identity2, token, [secretField]: secret }, context) {
          const dbItemAPI = context.sudo().db[listKey];
          const tokenType = "passwordReset";
          const result = await validateAuthToken(
            listKey,
            passwordResetTokenSecretFieldImpl,
            tokenType,
            identityField,
            identity2,
            passwordResetLink.tokensValidForMins,
            token,
            dbItemAPI
          );
          if (!result.success) {
            return { code: result.code, message: getAuthTokenErrorMessage({ code: result.code }) };
          }
          const itemId = result.item.id;
          await dbItemAPI.updateOne({
            where: { id: itemId },
            data: { [`${tokenType}RedeemedAt`]: new Date().toISOString() }
          });
          await dbItemAPI.updateOne({
            where: { id: itemId },
            data: { [secretField]: secret }
          });
          return null;
        }
      })
    },
    query: {
      [gqlNames.validateItemPasswordResetToken]: import_core32.graphql.field({
        type: ValidateItemPasswordResetTokenResult,
        args: {
          [identityField]: import_core32.graphql.arg({ type: import_core32.graphql.nonNull(import_core32.graphql.String) }),
          token: import_core32.graphql.arg({ type: import_core32.graphql.nonNull(import_core32.graphql.String) })
        },
        async resolve(rootVal, { [identityField]: identity2, token }, context) {
          const dbItemAPI = context.sudo().db[listKey];
          const tokenType = "passwordReset";
          const result = await validateAuthToken(
            listKey,
            passwordResetTokenSecretFieldImpl,
            tokenType,
            identityField,
            identity2,
            passwordResetLink.tokensValidForMins,
            token,
            dbItemAPI
          );
          if (!result.success) {
            return { code: result.code, message: getAuthTokenErrorMessage({ code: result.code }) };
          }
          return null;
        }
      })
    }
  };
}

// auth/src/gql/getMagicAuthLinkSchema.ts
var import_core33 = require("@keystone-6/core");
var errorCodes2 = ["FAILURE", "TOKEN_EXPIRED", "TOKEN_REDEEMED"];
var MagicLinkRedemptionErrorCode = import_core33.graphql.enum({
  name: "MagicLinkRedemptionErrorCode",
  values: import_core33.graphql.enumValues(errorCodes2)
});
function getMagicAuthLinkSchema({
  listKey,
  identityField,
  gqlNames,
  magicAuthLink,
  magicAuthTokenSecretFieldImpl,
  base
}) {
  const RedeemItemMagicAuthTokenFailure = import_core33.graphql.object()({
    name: gqlNames.RedeemItemMagicAuthTokenFailure,
    fields: {
      code: import_core33.graphql.field({ type: import_core33.graphql.nonNull(MagicLinkRedemptionErrorCode) }),
      message: import_core33.graphql.field({ type: import_core33.graphql.nonNull(import_core33.graphql.String) })
    }
  });
  const RedeemItemMagicAuthTokenSuccess = import_core33.graphql.object()({
    name: gqlNames.RedeemItemMagicAuthTokenSuccess,
    fields: {
      token: import_core33.graphql.field({ type: import_core33.graphql.nonNull(import_core33.graphql.String) }),
      item: import_core33.graphql.field({ type: import_core33.graphql.nonNull(base.object(listKey)) })
    }
  });
  const RedeemItemMagicAuthTokenResult = import_core33.graphql.union({
    name: gqlNames.RedeemItemMagicAuthTokenResult,
    types: [RedeemItemMagicAuthTokenSuccess, RedeemItemMagicAuthTokenFailure],
    resolveType(val) {
      return "token" in val ? gqlNames.RedeemItemMagicAuthTokenSuccess : gqlNames.RedeemItemMagicAuthTokenFailure;
    }
  });
  return {
    mutation: {
      [gqlNames.sendItemMagicAuthLink]: import_core33.graphql.field({
        type: import_core33.graphql.nonNull(import_core33.graphql.Boolean),
        args: { [identityField]: import_core33.graphql.arg({ type: import_core33.graphql.nonNull(import_core33.graphql.String) }) },
        async resolve(rootVal, { [identityField]: identity2 }, context) {
          const dbItemAPI = context.sudo().db[listKey];
          const tokenType = "magicAuth";
          const result = await createAuthToken(identityField, identity2, dbItemAPI);
          if (result.success) {
            const { token, itemId } = result;
            await dbItemAPI.updateOne({
              where: { id: `${itemId}` },
              data: {
                [`${tokenType}Token`]: token,
                [`${tokenType}IssuedAt`]: new Date().toISOString(),
                [`${tokenType}RedeemedAt`]: null
              }
            });
            await magicAuthLink.sendToken({ itemId, identity: identity2, token, context });
          }
          return true;
        }
      }),
      [gqlNames.redeemItemMagicAuthToken]: import_core33.graphql.field({
        type: import_core33.graphql.nonNull(RedeemItemMagicAuthTokenResult),
        args: {
          [identityField]: import_core33.graphql.arg({ type: import_core33.graphql.nonNull(import_core33.graphql.String) }),
          token: import_core33.graphql.arg({ type: import_core33.graphql.nonNull(import_core33.graphql.String) })
        },
        async resolve(rootVal, { [identityField]: identity2, token }, context) {
          if (!context.sessionStrategy) {
            throw new Error("No session implementation available on context");
          }
          const dbItemAPI = context.sudo().db[listKey];
          const tokenType = "magicAuth";
          const result = await validateAuthToken(
            listKey,
            magicAuthTokenSecretFieldImpl,
            tokenType,
            identityField,
            identity2,
            magicAuthLink.tokensValidForMins,
            token,
            dbItemAPI
          );
          if (!result.success) {
            return { code: result.code, message: getAuthTokenErrorMessage({ code: result.code }) };
          }
          await dbItemAPI.updateOne({
            where: { id: result.item.id },
            data: { [`${tokenType}RedeemedAt`]: new Date().toISOString() }
          });
          const sessionToken = await context.sessionStrategy.start({
            data: {
              listKey,
              itemId: result.item.id.toString()
            },
            context
          });
          return { token: sessionToken, item: result.item };
        }
      })
    }
  };
}

// auth/src/schema.ts
function assertSecretFieldImpl(impl, listKey, secretField) {
  if (!impl || typeof impl.compare !== "function" || impl.compare.length < 2 || typeof impl.generateHash !== "function") {
    const s = JSON.stringify(secretField);
    let msg = `A createAuth() invocation for the "${listKey}" list specifies ${s} as its secretField, but the field type doesn't implement the required functionality.`;
    throw new Error(msg);
  }
}
function getSecretFieldImpl(schema, listKey, fieldKey) {
  const gqlOutputType = (0, import_graphql5.assertObjectType)(schema.getType(listKey));
  const secretFieldImpl = gqlOutputType.getFields()?.[fieldKey].extensions?.keystoneSecretField;
  assertSecretFieldImpl(secretFieldImpl, listKey, fieldKey);
  return secretFieldImpl;
}
var getSchemaExtension = ({
  identityField,
  listKey,
  secretField,
  gqlNames,
  initFirstItem,
  passwordResetLink,
  magicAuthLink,
  sessionData
}) => import_core34.graphql.extend((base) => {
  const uniqueWhereInputType = (0, import_graphql5.assertInputObjectType)(
    base.schema.getType(`${listKey}WhereUniqueInput`)
  );
  const identityFieldOnUniqueWhere = uniqueWhereInputType.getFields()[identityField];
  if (identityFieldOnUniqueWhere?.type !== import_graphql5.GraphQLString && identityFieldOnUniqueWhere?.type !== import_graphql5.GraphQLID) {
    throw new Error(
      `createAuth was called with an identityField of ${identityField} on the list ${listKey} but that field doesn't allow being searched uniquely with a String or ID. You should likely add \`isIndexed: 'unique'\` to the field at ${listKey}.${identityField}`
    );
  }
  const baseSchema = getBaseAuthSchema({
    identityField,
    listKey,
    secretField,
    gqlNames,
    secretFieldImpl: getSecretFieldImpl(base.schema, listKey, secretField),
    base
  });
  const query = `query($id: ID!) { ${(0, import_types19.getGqlNames)({
    listKey,
    pluralGraphQLName: ""
  }).itemQueryName}(where: { id: $id }) { ${sessionData} } }`;
  let ast;
  try {
    ast = (0, import_graphql5.parse)(query);
  } catch (err) {
    throw new Error(
      `The query to get session data has a syntax error, the sessionData option in your createAuth usage is likely incorrect
${err}`
    );
  }
  const errors = (0, import_graphql5.validate)(base.schema, ast);
  if (errors.length) {
    throw new Error(
      `The query to get session data has validation errors, the sessionData option in your createAuth usage is likely incorrect
${errors.join(
        "\n"
      )}`
    );
  }
  return [
    baseSchema.extension,
    initFirstItem && getInitFirstItemSchema({
      listKey,
      fields: initFirstItem.fields,
      itemData: initFirstItem.itemData,
      gqlNames,
      graphQLSchema: base.schema,
      ItemAuthenticationWithPasswordSuccess: baseSchema.ItemAuthenticationWithPasswordSuccess
    }),
    passwordResetLink && getPasswordResetSchema({
      identityField,
      listKey,
      secretField,
      passwordResetLink,
      gqlNames,
      passwordResetTokenSecretFieldImpl: getSecretFieldImpl(
        base.schema,
        listKey,
        "passwordResetToken"
      )
    }),
    magicAuthLink && getMagicAuthLinkSchema({
      identityField,
      listKey,
      magicAuthLink,
      gqlNames,
      magicAuthTokenSecretFieldImpl: getSecretFieldImpl(base.schema, listKey, "magicAuthToken"),
      base
    })
  ].filter((x) => x !== void 0);
});

// auth/src/templates/signin.ts
var signinTemplate = ({
  gqlNames,
  identityField,
  secretField
}) => {
  return `import { getSigninPage } from '@keystone-6/auth/pages/SigninPage'

export default getSigninPage(${JSON.stringify({
    identityField,
    secretField,
    mutationName: gqlNames.authenticateItemWithPassword,
    successTypename: gqlNames.ItemAuthenticationWithPasswordSuccess,
    failureTypename: gqlNames.ItemAuthenticationWithPasswordFailure
  })});
`;
};

// auth/src/templates/init.ts
var initTemplate = ({ listKey, initFirstItem }) => {
  return `import { getInitPage } from '@keystone-6/auth/pages/InitPage';

const fieldPaths = ${JSON.stringify(initFirstItem.fields)};

export default getInitPage(${JSON.stringify({
    listKey,
    fieldPaths: initFirstItem.fields,
    enableWelcome: !initFirstItem.skipKeystoneWelcome
  })});
`;
};

// auth/src/index.ts
function createAuth({
  listKey,
  secretField,
  initFirstItem,
  identityField,
  magicAuthLink,
  passwordResetLink,
  sessionData = "id"
}) {
  const gqlNames = {
    authenticateItemWithPassword: `authenticate${listKey}WithPassword`,
    ItemAuthenticationWithPasswordResult: `${listKey}AuthenticationWithPasswordResult`,
    ItemAuthenticationWithPasswordSuccess: `${listKey}AuthenticationWithPasswordSuccess`,
    ItemAuthenticationWithPasswordFailure: `${listKey}AuthenticationWithPasswordFailure`,
    CreateInitialInput: `CreateInitial${listKey}Input`,
    createInitialItem: `createInitial${listKey}`,
    sendItemPasswordResetLink: `send${listKey}PasswordResetLink`,
    SendItemPasswordResetLinkResult: `Send${listKey}PasswordResetLinkResult`,
    validateItemPasswordResetToken: `validate${listKey}PasswordResetToken`,
    ValidateItemPasswordResetTokenResult: `Validate${listKey}PasswordResetTokenResult`,
    redeemItemPasswordResetToken: `redeem${listKey}PasswordResetToken`,
    RedeemItemPasswordResetTokenResult: `Redeem${listKey}PasswordResetTokenResult`,
    sendItemMagicAuthLink: `send${listKey}MagicAuthLink`,
    SendItemMagicAuthLinkResult: `Send${listKey}MagicAuthLinkResult`,
    redeemItemMagicAuthToken: `redeem${listKey}MagicAuthToken`,
    RedeemItemMagicAuthTokenResult: `Redeem${listKey}MagicAuthTokenResult`,
    RedeemItemMagicAuthTokenSuccess: `Redeem${listKey}MagicAuthTokenSuccess`,
    RedeemItemMagicAuthTokenFailure: `Redeem${listKey}MagicAuthTokenFailure`
  };
  const fieldConfig = {
    access: () => false,
    ui: {
      createView: { fieldMode: "hidden" },
      itemView: { fieldMode: "hidden" },
      listView: { fieldMode: "hidden" }
    }
  };
  const tokenFields = (tokenType) => ({
    [`${tokenType}Token`]: (0, import_fields10.password)({ ...fieldConfig }),
    [`${tokenType}IssuedAt`]: (0, import_fields10.timestamp)({ ...fieldConfig }),
    [`${tokenType}RedeemedAt`]: (0, import_fields10.timestamp)({ ...fieldConfig })
  });
  const fields2 = {
    ...passwordResetLink && tokenFields("passwordReset"),
    ...magicAuthLink && tokenFields("magicAuth")
  };
  const authGetAdditionalFiles = () => {
    const filesToWrite = [
      {
        mode: "write",
        src: signinTemplate({ gqlNames, identityField, secretField }),
        outputPath: "pages/signin.js"
      }
    ];
    if (initFirstItem) {
      filesToWrite.push({
        mode: "write",
        src: initTemplate({ listKey, initFirstItem }),
        outputPath: "pages/init.js"
      });
    }
    return filesToWrite;
  };
  const authPublicPages = ["/signin"];
  const extendGraphqlSchema = getSchemaExtension({
    identityField,
    listKey,
    secretField,
    gqlNames,
    initFirstItem,
    passwordResetLink,
    magicAuthLink,
    sessionData
  });
  const validateConfig = (keystoneConfig) => {
    const listConfig = keystoneConfig.lists[listKey];
    if (listConfig === void 0) {
      const msg = `A createAuth() invocation specifies the list "${listKey}" but no list with that key has been defined.`;
      throw new Error(msg);
    }
    const identityFieldConfig = listConfig.fields[identityField];
    if (identityFieldConfig === void 0) {
      const i = JSON.stringify(identityField);
      const msg = `A createAuth() invocation for the "${listKey}" list specifies ${i} as its identityField but no field with that key exists on the list.`;
      throw new Error(msg);
    }
    const secretFieldConfig = listConfig.fields[secretField];
    if (secretFieldConfig === void 0) {
      const s = JSON.stringify(secretField);
      const msg = `A createAuth() invocation for the "${listKey}" list specifies ${s} as its secretField but no field with that key exists on the list.`;
      throw new Error(msg);
    }
    for (const field2 of initFirstItem?.fields || []) {
      if (listConfig.fields[field2] === void 0) {
        const f = JSON.stringify(field2);
        const msg = `A createAuth() invocation for the "${listKey}" list specifies the field ${f} in initFirstItem.fields array but no field with that key exist on the list.`;
        throw new Error(msg);
      }
    }
  };
  const withItemData = (_sessionStrategy) => {
    const { get, ...sessionStrategy } = _sessionStrategy;
    return {
      ...sessionStrategy,
      get: async ({ context }) => {
        const session2 = await get({ context });
        const sudoContext = context.sudo();
        if (!session2 || !session2.listKey || session2.listKey !== listKey || !session2.itemId || !sudoContext.query[session2.listKey]) {
          return;
        }
        try {
          const data = await sudoContext.query[listKey].findOne({
            where: { id: session2.itemId },
            query: sessionData
          });
          if (!data)
            return;
          return { ...session2, itemId: session2.itemId, listKey, data };
        } catch (e) {
          return;
        }
      }
    };
  };
  async function hasInitFirstItemConditions(context) {
    if (!initFirstItem)
      return false;
    if (context.session)
      return false;
    const count = await context.sudo().db[listKey].count({});
    return count === 0;
  }
  async function authMiddleware({
    context,
    isValidSession: wasAccessAllowed
  }) {
    const { req } = context;
    const { pathname } = new URL(req.url, "http://_");
    if (pathname !== "/init" && await hasInitFirstItemConditions(context)) {
      return { kind: "redirect", to: "/init" };
    }
    if (pathname === "/init" && !await hasInitFirstItemConditions(context)) {
      return { kind: "redirect", to: "/" };
    }
    if (wasAccessAllowed)
      return;
    if (pathname === "/")
      return { kind: "redirect", to: "/signin" };
    return {
      kind: "redirect",
      to: `/signin?from=${encodeURIComponent(req.url)}`
    };
  }
  function defaultIsAccessAllowed({ session: session2, sessionStrategy }) {
    return session2 !== void 0;
  }
  const withAuth2 = (keystoneConfig) => {
    validateConfig(keystoneConfig);
    let { ui } = keystoneConfig;
    if (!ui?.isDisabled) {
      const {
        getAdditionalFiles = [],
        isAccessAllowed = defaultIsAccessAllowed,
        pageMiddleware,
        publicPages = []
      } = ui || {};
      ui = {
        ...ui,
        publicPages: [...publicPages, ...authPublicPages],
        getAdditionalFiles: [...getAdditionalFiles, authGetAdditionalFiles],
        isAccessAllowed: async (context) => {
          if (await hasInitFirstItemConditions(context))
            return true;
          return isAccessAllowed(context);
        },
        pageMiddleware: async (args) => {
          const shouldRedirect = await authMiddleware(args);
          if (shouldRedirect)
            return shouldRedirect;
          return pageMiddleware?.(args);
        }
      };
    }
    if (!keystoneConfig.session)
      throw new TypeError("Missing .session configuration");
    const session2 = withItemData(keystoneConfig.session);
    const existingExtendGraphQLSchema = keystoneConfig.extendGraphqlSchema;
    const listConfig = keystoneConfig.lists[listKey];
    return {
      ...keystoneConfig,
      ui,
      session: session2,
      lists: {
        ...keystoneConfig.lists,
        [listKey]: { ...listConfig, fields: { ...listConfig.fields, ...fields2 } }
      },
      extendGraphqlSchema: existingExtendGraphQLSchema ? (schema) => existingExtendGraphQLSchema(extendGraphqlSchema(schema)) : extendGraphqlSchema
    };
  };
  return {
    withAuth: withAuth2
  };
}

// core/src/session/index.ts
var cookie = __toESM(require("cookie"));
var import_iron = __toESM(require("@hapi/iron"));
var import_uid_safe = require("uid-safe");
var TOKEN_NAME = "keystonejs-session";
var MAX_AGE = 60 * 60 * 8;
function statelessSessions({
  secret,
  maxAge = MAX_AGE,
  path: path2 = "/",
  secure = process.env.NODE_ENV === "production",
  ironOptions = import_iron.default.defaults,
  domain,
  sameSite = "lax"
}) {
  if (!secret) {
    throw new Error("You must specify a session secret to use sessions");
  }
  if (secret.length < 32) {
    throw new Error("The session secret must be at least 32 characters long");
  }
  return {
    async get({ context }) {
      if (!context?.req) {
        return;
      }
      const cookies = cookie.parse(context.req.headers.cookie || "");
      const bearer = context.req.headers.authorization?.replace("Bearer ", "");
      const token = bearer || cookies[TOKEN_NAME];
      if (!token)
        return;
      try {
        return await import_iron.default.unseal(token, secret, ironOptions);
      } catch (err) {
      }
    },
    async end({ context }) {
      if (!context?.res)
        return;
      context.res.setHeader(
        "Set-Cookie",
        cookie.serialize(TOKEN_NAME, "", {
          maxAge: 0,
          expires: new Date(),
          httpOnly: true,
          secure,
          path: path2,
          sameSite,
          domain
        })
      );
    },
    async start({ context, data }) {
      if (!context?.res)
        return;
      const sealedData = await import_iron.default.seal(data, secret, { ...ironOptions, ttl: maxAge * 1e3 });
      context.res.setHeader(
        "Set-Cookie",
        cookie.serialize(TOKEN_NAME, sealedData, {
          maxAge,
          expires: new Date(Date.now() + maxAge * 1e3),
          httpOnly: true,
          secure,
          path: path2,
          sameSite,
          domain
        })
      );
      return sealedData;
    }
  };
}

// auth.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto2.randomBytes)(32).toString("hex");
}
var { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  sessionData: "name createdAt isAdmin",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password", "isAdmin"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var baseUrl = "http://localhost:3000";
var localstorage = {
  kind: "local",
  type: "image",
  generateUrl: (path2) => `${baseUrl}/images${path2}`,
  serverRoute: {
    path: "/images"
  },
  storagePath: "public/images"
};
var filestorage = {
  kind: "local",
  type: "file",
  generateUrl: (path2) => `${baseUrl}/files${path2}`,
  serverRoute: {
    path: "/files"
  },
  storagePath: "public/files"
};
var keystone_default = withAuth(
  config({
    db: {
      provider: "mysql",
      url: "mysql://root:root@localhost:3306/keystone"
    },
    server: {
      cors: { origin: "*" }
    },
    lists: {
      Client,
      Faq,
      Content,
      FormQuery,
      JobRole,
      JobApplication,
      User
    },
    storage: { localstorage, filestorage },
    session
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
