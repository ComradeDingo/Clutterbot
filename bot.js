{
    let CONFIG = require('./config.json');
    let quotes = CONFIG.quotes;
    let prefix = CONFIG.prefix;
    let token = CONFIG.token;
//I added this token line as it seemed to be needed. 
    let quote = Math.floor(Math.random() * quotes.length);

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
        if (command === config.command) {
            message.channel.send(quotes[quote]);
        }
    }
}
