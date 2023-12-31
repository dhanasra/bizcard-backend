const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _contactSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    cardId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        default: "active"
    },
    connectedAt: { 
        type: Date, 
        default: Date.now 
    }
})

const getContactModel = () => {
    return mongoose.model("Contacts", _contactSchema, "Contacts");
};

module.exports = {
    getContactModel
};