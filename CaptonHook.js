module.exports = {
    name: "Capton Hook",
    author: ["KeksGauner#0624"],
    version: "1.0.0",
    changelog: "nothing",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Message",
    html: function(data) {
        return `
        <small>Currently <strong>Using caption Hook mod v1.0.0</small> 
        <div class="form-group">
        <label><span style="font-weight: bold">Note:</span> You need BetterMods v2.0.0!<br> <span style="color: orange; font-weight: bold;">Any issues?</span>Please DM KeksGauner#0624</label>
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <label>Webhook Username</label>
                        <input class="form-control" name="webhookusername" value="Spidey Bot"></input><br>
                    </div>
                    <div class="col">
                        <label>Webhook URL</label>
                        <input class="form-control" name="webhookurl" value="https://discord.com/api/webhooks/[ID]/[Thoken]"></input><br>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label>Variable Type *</label>
                        <select name="vartype" class="form-control">
                            <option value="temp">Temp Variable</option>
                            <option value="server">Server Variable</option>
                            <option value="global">Global Variable</option>
                        </select><br>
                    </div>

                    <div class="col">
                        <label>Variable Name *</label>
                        <input class="form-control" name="storeresult" value="myVar"></input><br>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label>Webhook Title *</label>
                        <input class="form-control" name="webhooktitle" value="Yay we did something right"></input><br>
                    </div>
                    <div class="col">
                        <label>Webhook Color *</label>
                        <input class="form-control" name="webhookusercolor" value="#ffe900"></input><br>
                    </div>
                </div>

                <p>Having issues? Press <code>Alt + F4</code> and go to Bed<br>
                Create a Webhook; Example https://discord.com/api/webhooks/[ID]/[Thoken]
                </p>
            </div>
        `;
    },
    init: function(DBS) {
        console.log("Loaded Capton Hook");
        DBS.BetterMods.requireModule("webhook-discord");
    },
    mod: async function(DBS, message, action, args, command, index) {
        const webhook = require("webhook-discord");
        const result = DBS.BetterMods.getVar(action.vartype,  action.storeresult, message.guild);
        try {
            const Hook = new webhook.Webhook(action.webhookurl);
            const msg = new webhook.MessageBuilder()
                .setName(action.webhookusername)
                .setColor(action.webhookusercolor)
                .setTitle(action.webhooktitle)
                .setDescription(result);
            Hook.send(msg);
        } catch (e) {
            console.log('Error trying to send: ', e);
        };
        DBS.callNextAction(command, message, args, index + 1);
    }
};