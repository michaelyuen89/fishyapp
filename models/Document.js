const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// library for handling autoincrement in mongoose
// https://github.com/ramiel/mongoose-sequence
const AutoIncrement = require("mongoose-sequence")(mongoose);

let documentSchema = new Schema(
    {
        document_id: { type: Number, default: 0 },
        description: { type: String },
        fileLink: { type: String },
        s3_key: { type: String },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        fish: {
            type: Schema.Types.ObjectId,
            ref: 'fish'
        }
    },
    {
        // createdAt,updatedAt fields are automatically added into records
        timestamps: true
    }
);

documentSchema.plugin(AutoIncrement, { inc_field: "document_id" });

module.exports = mongoose.model("Document", documentSchema);