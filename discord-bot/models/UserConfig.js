const mongoose = require('mongoose');

const userConfigSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  ssuCount: { type: Number, default: 0 },
  lastSSU: { type: Date, default: null }
});

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.UserConfig || mongoose.model('UserConfig', userConfigSchema);
