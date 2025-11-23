const mongoose = require('mongoose');

const guildConfigSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  robloxLink: { type: String, default: '' },
  embedConfig: {
    title: { type: String, default: 'Server Startup' },
    description: { type: String, default: 'Join the server now!' },
    color: { type: String, default: '#ff0000' },
    footer: { type: String, default: 'Roman Utilities' },
    timestamp: { type: Boolean, default: true }
  }
});

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.GuildConfig || mongoose.model('GuildConfig', guildConfigSchema);
