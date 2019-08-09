const models =  require('../models');
const Op = require('sequelize').Op; 

module.exports = { 

    create: async (req,res) => {
        const userId = req.user.id;
        const {photo,caption} = req.body;
        
        try{
            const posts = await models.post.create({
                userId:userId,
                photo,
                caption
            })
    
            if(posts){
                res.status(201).json({
                    'status': 'OK',
                    'messages': 'Posts berhasil ditambahkan',
                    'data': posts,
                  })
            }
        }
        catch(e){
            res.status(500).json({
                'message':'error',
                'error':e
            })
        }
    },
    getPosts: async (req,res) => {
        try{
            const userId =  req.user;
            
            const posts = await models.post.findAll({
                include: [{
                    model: models.user,
                    required: false
                }],
                order:[
                    ['id','DESC']
                ]
            });

            if(posts){
                res.status(200).json({
                    'message':'succses',
                    'data':posts,
                    'user':userId
                })

            }
        }
        catch(e){
            res.status(500).json({
                'message':'error',
                'error':e
            })
        }
    },
    destroyPost: async (req,res) => {
        try{
            const post = await models.post.destroy({
                where:{
                    'id':req.params.id
                }
            })

            if(post){
                res.status(200).json({
                    'message':'succses deleted',
                })
            }
            else{
                res.status(400).json({
                    'message':'failed deleted',
                })
            }
        }
        catch(e){
            res.status(500).json({
                'message':'error',
                'error':e
            })
        }
    },
    updatePost: async (req,res) =>{
        try{
            const {photo,caption} = req.body;

            const post = await models.post.update(
                {photo,caption},
                {where:{
                    'id':req.params.id
                }}
                
            )

            if(post){
                res.status(200).json({
                    'message':'succses updated',
                })
            }
        }
        catch(e){
            res.status(500).json({
                'message':'error',
                'error':e
            })
        }

    }


    

}