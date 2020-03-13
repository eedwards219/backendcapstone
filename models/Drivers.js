// const { Model } = require("objection");

// class Operators extends Model {
//   static get tableName() {
//     return "operators";
//   }

//   static get relationMappings() {
//     const Supervisors = require("./Supervisors");
//     return {
//       supervisors: {
//         relation: Model.HasManyRelation,
//         modelClass: Supervisors,
//         join: {
//           from: "supervisors.id",
//           through: {
//             // users_appointments is the join table.
//             from: "supervisors_operators.operator_id",
//             to: "supervisors_operators.supervisor_id"
//           },
//           to: "operators.id"
//         }
//       }
//     };
//   }
//   static get jsonSchema() {
//     return {
//       type: "object",
//       required: ["time", "location"],

//       properties: {
//         id: { type: "integer" },
//         supervisor_id: { type: "integer" },
//         operator_id: { type: "integer" }
//       }
//     };
//   }
// }

// module.exports = Operators;

const { Model } = require("objection");

class Drivers extends Model {
  static get tableName() {
    return "drivers";
  }

  static get relationMappings() {
    const Passengers = require("./Passengers");
    return {
      // supervisors: {
      //   relation: Model.HasManyRelation,
      //   modelClass: Supervisors,
      //   join: {
      //     from: "operators.id",
      //     to: "supervisors.id"
      //   }
      // }
      passengers: {
        relation: Model.ManyToManyRelation,
        modelClass: Passengers,
        join: {
          from: "drivers.id",
          through: {
            // users_appointments is the join table.
            from: "rides.driver_id",
            to: "rides.passenger_id"
          },
          to: "passengers.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "vehicle", "isAvailable", "rideConfirmed"],

      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        vehicle: { type: "string" },
        isAvailable: { type: "boolean" },
        rideConfirmed: { type: "boolena" }
      }
    };
  }
}

module.exports = Drivers;
