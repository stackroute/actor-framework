const seneca = require('seneca');
const nodeService = seneca().client();
const serializeArgs = require('./serializeArgs');

const data = {
    operations: [{
        operator: 'filter',
        args: [i => i%2 !== 0]
    }, {
        operator: 'map',
        args: [i => i*2]
    }],
    values: [2, 3, 4, 5]
}

nodeService.act('role:fw,cmd:createActor', serializeArgs(data), (err, response) => {
    console.log('Response is:', response);
});
