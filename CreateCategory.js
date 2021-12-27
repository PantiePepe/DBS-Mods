module.exports = {
    name: "CreateCategory",
    author: ["aoe#4851"],
    version: "1.0.0",
    changelog: "Added CreateCategory Mod ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Channel Action",
    html: function(data) {
        return `
        <small>Currently <strong>Using Create Category mod v1.0.1</small> 
        <div class="form-group">
        <label><span style="font-weight: bold">Note:</span> You need BetterMods v2.0.0!<br> <span style="color: orange; font-weight: bold;">Any issues?</span>Please DM Aoe</label>
        <div class="form-group">
            <label>The Category Name *</label>
            <textarea class="form-control needed-field" name="name" rows="1" ></textarea>
        </div>
        `;
    },
    init: function() {
        console.log("Loaded CreateCategory Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
    message.guild.channels.create(action.name, { type: 'category' });
    DBS.callNextAction(command, message, args, index + 1);
  }
};