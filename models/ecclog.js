const mongoose = require('mongoose');
let ECCSchema = new mongoose.Schema({
    cname:{ type: String},
    countryStatus:{type : String},
    category: { type: String },
    countryType: { type: String },
    dateTime: { type: String }
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
// Define collection and schema
let ECCLogSchema = new mongoose.Schema({
   orderNumber: { type: String },
   ECCArray:[ECCSchema],
   verifiedDate:{type: String},
   verifiedBy: [UserSchema]// wallet
})
module.exports = mongoose.model('Ecclog', ECCLogSchema)
