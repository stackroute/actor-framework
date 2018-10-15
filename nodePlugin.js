const { Subject } = require('rxjs');

const deserializeArgs = require('./deserializeArgs');

function nodePlugin() {
    this.add('role:fw,cmd:createActor', (msg, response) => {
        const m = deserializeArgs(msg);
        const {Subject} = require('rxjs');
        const { map, filter } = require('rxjs/operators');

        const s = new Subject();

        console.log('operations', m.operations[0].args[0]);

        console.log('filter 3', m.operations[0].args[0](3));

        const arr1 = m.operations.map(o => {
            const op = require('rxjs/operators')[o.operator];
            return op.apply(op, o.args); // filter(i => i%2 === 0)
        });

        s.pipe.apply(s, arr1).subscribe(console.log, console.log);

        m.values.forEach(i => s.next(i));

        s.complete();
                response(null, {answer: 'ok'});
            });
        }

module.exports = nodePlugin;
