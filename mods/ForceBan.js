module.exports = {
    name: "ForceBan",
    author: ["aoe#4851"],
    version: "1.0.0",
    changelog: "Added ForceBan Mod ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "User Action",
    html: function(data) {
        return `
        <small>Currently <strong>Using Force Ban v.1.1.0</small> 
        <div class="form-group">
        <label><span style="font-weight: bold">Note:</span><br> <span style="color: orange; font-weight: bold;">Any issues?</span>Please Contact Miro#6969</label>
        </div>
        <hr>  
        <div class="form-group">
            <label>The User</label>
            <textarea class="form-control needed-field" name="user" rows="1" ></textarea>
            <div class="input-group-append">
            <a class="btn btn-outline-primary" role="button" id="variables" forinput="user">Insert Variable</a>
            </div>
        </div>
        <div class="form-group">
            <label>The reason fo the forceban *</label>
            <textarea class="form-control needed-field" name="reason1" rows="1" ></textarea>
            <div class="input-group-append">
            <a class="btn btn-outline-primary" role="button" id="variables" forinput="reason1">Insert Variable</a>
            </div>
        </div>
        <div class="form-group">
        <label>Embed Colour</label>
        <input class="form-control jscolor" id="color" placeholder="#FFFFFF" name="Color">
        <small class="form-text text-muted">Hex color for the embed</small>
        </div>
        <div class="form-group">
            <label>The Description of the Embed *</label>
            <textarea class="form-control needed-field" name="forcedesc" rows="1" ></textarea>
            <div class="input-group-append">
            <a class="btn btn-outline-primary" role="button" id="variables" forinput="forcedesc">Insert Variable</a>
            </div>
        </div>
        `;
    },
    init: function() {
        console.log("Loaded CreateCategory Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
        const Discord = require("discord.js");
        var target = DBS.BetterMods.parseAction(action.user, message);
        var reason = DBS.BetterMods.parseAction(action.reason1, message)
        message.guild.members.ban(target, {reason: reason.length < 1 ? 'No reason supplied.': reason});
        const embed = new Discord.MessageEmbed()
        .setColor(action.Color)
        .setDescription(DBS.BetterMods.parseAction(action.forcedesc, message));
        message.channel.send(embed);   
    DBS.callNextAction(command, message, args, index + 1);
    }
};