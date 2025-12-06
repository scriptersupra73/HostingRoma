require('dotenv').config();
const { REST, Routes, SlashCommandBuilder } = require('discord.js');

// Define all slash commands
const commands = [
  new SlashCommandBuilder()
    .setName('ticket')
    .setDescription('Create a ticket panel'),

  new SlashCommandBuilder()
    .setName('close')
    .setDescription('Close the current ticket channel'),

  new SlashCommandBuilder()
    .setName('importance')
    .setDescription('Set ticket importance')
    .addStringOption(option =>
      option.setName('level')
        .setDescription('Importance level')
        .setRequired(true)
        .addChoices(
          { name: 'Normal', value: 'normal' },
          { name: 'Quick Support', value: 'quick' },
          { name: 'Admin Needed Now', value: 'admin' }
        )
    ),

  // ✅ New SSU command
  new SlashCommandBuilder()
    .setName('ssu')
    .setDescription('Start SSU and announce to everyone')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('🚀 Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands },
    );

    console.log('✅ Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
