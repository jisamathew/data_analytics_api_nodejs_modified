const mongoose = require('mongoose');
// Define collection and schema
//LEISAVELOGS
let LEISchema = new mongoose.Schema({
    lei: { type: String },
    status: { type: String },
    legalName: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    postalCode: { type: String },
    category: { type: String },
    dateTime: { type: String },
    userType: { type: String },
})
let UserSchema = new mongoose.Schema({
    address: { type: String },
    alias: { type: String },
    bankAddress: { type: String },
    bankName: { type: String },
    city: { type: String },
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    legalName: { type: String },
    leiName: { type: String },
    leiNo: { type: String },
    profile: { type: String },
    telephone: { type: String },
    userRole: { type: String },
    wallet: { type: String },

})

let LEILogSchema = new mongoose.Schema({
    orderNumber: { type: String },
    leiArray: [LEISchema],
    verifiedDate: { type: String },
    verifiedBy: [UserSchema], // wallet
})

module.exports = mongoose.model('Leilog', LEILogSchema)
