import mongoose from 'mongoose';
const { Schema } = mongoose;

const institutionSchema = new Schema({
  id: String,
  name: String,
  address: String,
  country: String,
  region: String,
});

export const InstitutionModel = mongoose.model('institutions', institutionSchema);
