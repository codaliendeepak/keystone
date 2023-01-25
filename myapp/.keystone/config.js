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
var import_core3 = require("@keystone-6/core");
var fs = __toESM(require("fs"));

// Schemas/User.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");

// access.ts
var isAdmin = ({ session: session2 }) => session2?.data.isAdmin;

// Schemas/User.ts
var User = (0, import_core.list)({
  access: {
    operation: {
      query: import_access.allowAll,
      create: isAdmin,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    name: (0, import_fields.text)({ validation: { isRequired: true } }),
    email: (0, import_fields.text)({ isIndexed: "unique", validation: { isRequired: true } }),
    password: (0, import_fields.password)(),
    createdAt: (0, import_fields.timestamp)(),
    isAdmin: (0, import_fields.checkbox)({ defaultValue: false })
  }
});

// Schemas/Booking.ts
var import_fields2 = require("@keystone-6/core/fields");
var import_core2 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var Booking = (0, import_core2.list)({
  ui: {
    listView: {
      defaultFieldMode: ({ session: session2, context }) => "read",
      initialColumns: ["name", "Duration", "Timing", "agenda"],
      initialSort: { field: "name", direction: "ASC" },
      pageSize: 50
    }
  },
  access: import_access3.allowAll,
  fields: {
    name: (0, import_fields2.text)({ validation: { isRequired: true } }),
    agenda: (0, import_fields2.text)({
      ui: {
        displayMode: "textarea"
      }
    }),
    subject: (0, import_fields2.text)(),
    Meeting_Room_Name: (0, import_fields2.select)({
      type: "integer",
      options: [
        { label: "Room Number 1 (10 seater)", value: 1 },
        { label: "Room Number 2 (4 seater Green room)", value: 2 },
        { label: "Room Number 3 (4 seater Red room)", value: 3 }
      ],
      defaultValue: 1,
      ui: {
        displayMode: "select"
      },
      validation: { isRequired: true }
    }),
    Duration: (0, import_fields2.select)({
      type: "integer",
      options: [
        { label: "15 min", value: 15 },
        { label: "30 min", value: 30 },
        { label: "45 min", value: 45 },
        { label: "1 hr", value: 60 },
        { label: "1 hr 15 min", value: 75 },
        { label: "1 hr 30 min", value: 90 },
        { label: "1 hr 45 min", value: 105 },
        { label: "2 hr", value: 120 }
      ],
      defaultValue: 1,
      ui: {
        displayMode: "select"
      },
      validation: { isRequired: true }
    }),
    Timing: (0, import_fields2.timestamp)({ validation: { isRequired: true } }),
    meeting_type: (0, import_fields2.select)({
      options: [
        { label: "Buisness Meeting", value: "Buisness Meeting" },
        { label: "Design Meeting", value: "Design Meeting" },
        { label: "Interview Meeting", value: "Interview" },
        { label: "Other", value: "Other" }
      ],
      defaultValue: "other",
      ui: {
        displayMode: "select"
      }
    }),
    email: (0, import_fields2.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
    phone: (0, import_fields2.bigInt)({ validation: { isRequired: true } })
  }
});

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name createdAt isAdmin",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password", "isAdmin"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var baseUrl = "http://localhost:3000";
var localstorage = {
  kind: "local",
  type: "image",
  generateUrl: (path) => `${baseUrl}/images${path}`,
  serverRoute: {
    path: "/images"
  },
  storagePath: "public/images"
};
var filestorage = {
  kind: "local",
  type: "file",
  generateUrl: (path) => `${baseUrl}/files${path}`,
  serverRoute: {
    path: "/files"
  },
  storagePath: "public/files"
};
var keystone_default = withAuth(
  (0, import_core3.config)({
    db: {
      provider: "mysql",
      url: "mysql://root:root!234@localhost:3306/Meetingroom"
    },
    server: {
      cors: { origin: "*" },
      extendExpressApp: (app) => {
        app.post("/download", async (req, res) => {
          console.log("request body");
          console.log(req.body);
          let file = "./tempfile.txt";
          try {
            fs.writeFileSync(file, JSON.stringify(req.body));
          } catch (e) {
            console.log(e);
          }
          res.download(file);
        });
      }
    },
    lists: {
      User,
      Booking
    },
    storage: { localstorage, filestorage },
    session
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
