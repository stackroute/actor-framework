const seneca = require('seneca');
const nodeService = seneca();

const nodePlugin = require('./nodePlugin');

nodeService
    .use(nodePlugin)
    .listen();
