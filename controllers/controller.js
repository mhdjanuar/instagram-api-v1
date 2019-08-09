'use strict'

var response = require('../res');
var connection = require('../conn');
const models =  require('../models');
const Op = require('sequelize').Op; 
const fetch = require('node-fetch');
// const redis = require('redis');

// const client = redis.createClient(6379)

// client.on('error',(err) => {
//     console.log(err);
// })

exports.users = function(req, res){
    const userId = req.user.id

    connection.query('SELECT * FROM users', function(error,rows,fields){
        if(error){
            console.log(error)
        }
        else{
            // response.succses(rows, res)
            res.send({'status':'succes','data':rows, user:userId})
        }
    })
}

exports.index = async function(req, res){
    response.succses("Hello from the Node JS RESTful side!", res)

    // models.Try.all().then((users) => {
    //     res.status(200).json({
    //       users
    //     });
    //   }).catch((err) => {
    //     res.status(500).json({
    //       message: err.message
    //     });
    //   });

    // const a = await models.Try.findAll({});
    // try{
    //     res.json({
    //         'status': 'OK',
    //         'messages': '',
    //         'data': a
    //       })
    // }catch(e){
    //     console.log(e);
    // }
}

// exports.getPhoto = (req,res) => {

//     // key to store results in Redis store
//     const photosRedisKey = 'user:photos';
 
//     // Try fetching the result from Redis first in case we have it cached
//     return client.get(photosRedisKey, (err, photos) => {
 
//         // If that key exists in Redis store
//         if (photos) {
 
//             return res.json({ source: 'cache', data: JSON.parse(photos) })
 
//         } else { // Key does not exist in Redis store
 
//             // Fetch directly from remote api
//             fetch('https://jsonplaceholder.typicode.com/photos')
//                 .then(response => response.json())
//                 .then(photos => {
 
//                     // Save the  API response in Redis store,  data expire time in 3600 seconds, it means one hour
//                     client.setex(photosRedisKey, 3600, JSON.stringify(photos))
 
//                     // Send JSON response to client
//                     return res.json({ source: 'api', data: photos })
 
//                 })
//                 .catch(error => {
//                     // log error message
//                     console.log(error)
//                     // send error to the client 
//                     return res.json(error.toString())
//                 })
//         }
    // });
// }