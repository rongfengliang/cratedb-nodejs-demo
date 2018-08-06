var crate = require('node-crate');
crate.connect('localhost', 4200);
crate.execute("select * from appdemofirst", []).then((res) => {
    console.log('Success', res.json, res.duration, res.rowcount, res.cols, res.rows)
})
 