'use strict'

exports.succses = function(values, res){
    var data = {
        'status': 200,
        'data': values
    };

    res.json(data);
    res.end();
}