"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core8 = require("@keystone-6/core");

// Schemas/Client.ts
var import_fields = require("@keystone-6/core/fields");
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var Client = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields.text)({ validation: { isRequired: true } }),
    description: (0, import_fields.text)({
      ui: {
        displayMode: "textarea"
      }
    }),
    photo: (0, import_fields.image)({
      storage: "localstorage"
    }),
    status: (0, import_fields.select)({
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
    email: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
    phone: (0, import_fields.integer)({ validation: { isRequired: true } })
  }
});

// Schemas/Content.ts
var import_fields2 = require("@keystone-6/core/fields");
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var Content = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    pagename: (0, import_fields2.select)({
      options: [
        { label: "about us", value: "AboutUs" }
      ]
    }),
    image: (0, import_fields2.image)({ storage: "localstorage" }),
    type: (0, import_fields2.select)({
      options: [
        { label: "Cards", value: "Cards" },
        { label: "Image", value: "Image" }
      ],
      defaultValue: "Cards",
      ui: {
        displayMode: "select",
        createView: { fieldMode: "hidden" }
      }
    }),
    description: (0, import_fields2.text)({
      ui: {
        displayMode: "textarea"
      }
    }),
    heading: (0, import_fields2.text)({}),
    Section: (0, import_fields2.select)({
      options: [
        { label: "section1", value: "Section1" },
        { label: "section2", value: "Section2" }
      ],
      defaultValue: "Section1",
      ui: {
        displayMode: "select",
        createView: { fieldMode: "hidden" }
      }
    })
  }
});

// Schemas/Faq.ts
var import_fields3 = require("@keystone-6/core/fields");
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var Faq = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    Question: (0, import_fields3.text)({ validation: { isRequired: true } }),
    ans: (0, import_fields3.text)({
      ui: {
        displayMode: "textarea"
      }
    })
  }
});

// Schemas/JobApplication.ts
var import_fields4 = require("@keystone-6/core/fields");
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var JobApplication = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    name: (0, import_fields4.text)({ validation: { isRequired: true } }),
    email: (0, import_fields4.text)({ validation: { isRequired: true }, isIndexed: true }),
    jobRole: (0, import_fields4.text)({ validation: { isRequired: true } }),
    coverLetter: (0, import_fields4.text)({
      ui: {
        displayMode: "textarea"
      }
    })
  }
});

// Schemas/JobRole.ts
var import_fields5 = require("@keystone-6/core/fields");
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var JobRole = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    jobrole: (0, import_fields5.text)({ validation: { isRequired: true } }),
    employmenttype: (0, import_fields5.select)({
      options: [
        { label: "Full Time Employee (FTE)", value: "Full Time Employee (FTE)" },
        { label: "other", value: "other" }
      ],
      defaultValue: "Full Time Employee (FTE)",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" }
      }
    }),
    jobType: (0, import_fields5.select)({
      options: [
        { label: "Product", value: "PRODUCT" },
        { label: "Commercial", value: "COMMERCIAL" },
        { label: "Marketing", value: "MARKETING" }
      ],
      defaultValue: "PRODUCT",
      ui: {
        displayMode: "select",
        createView: { fieldMode: "hidden" }
      }
    }),
    jobResponsilbilties: (0, import_fields5.text)({
      ui: {
        displayMode: "textarea"
      }
    }),
    jobRequirements: (0, import_fields5.text)({
      ui: {
        displayMode: "textarea"
      }
    }),
    jobLocation: (0, import_fields5.text)({ validation: { isRequired: true } })
  }
});

// Schemas/FormQuery.ts
var import_fields6 = require("@keystone-6/core/fields");
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var FormQuery = (0, import_core6.list)({
  access: import_access6.allowAll,
  fields: {
    name: (0, import_fields6.text)({ validation: { isRequired: true } }),
    type: (0, import_fields6.select)({
      options: [
        { label: "Buisness", value: "Buisness" },
        { label: "other", value: "other" }
      ],
      defaultValue: "CURRENT",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" }
      }
    }),
    description: (0, import_fields6.text)({
      ui: {
        displayMode: "textarea"
      }
    }),
    buisnessCategory: (0, import_fields6.text)({}),
    email: (0, import_fields6.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
    packagesCount: (0, import_fields6.text)({}),
    subject: (0, import_fields6.text)({})
  }
});

// Schemas/User.ts
var import_core7 = require("@keystone-6/core");
var import_access7 = require("@keystone-6/core/access");
var import_fields7 = require("@keystone-6/core/fields");
var User = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    name: (0, import_fields7.text)({ validation: { isRequired: true } }),
    email: (0, import_fields7.text)({ isIndexed: "unique", validation: { isRequired: true } }),
    password: (0, import_fields7.password)(),
    createdAt: (0, import_fields7.timestamp)()
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
  sessionData: "name createdAt",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
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
  (0, import_core8.config)({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db"
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