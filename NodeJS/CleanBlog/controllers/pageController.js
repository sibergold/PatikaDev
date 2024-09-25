const Post= require('../models/Post')

exports.getAddPage = (req, res) => {
    res.render('add')
};

exports.getAboutPage = (req, res) => {
    res.render('about')
}

exports.getEditPage = async (req, res) => {
    const post = await Post.findOne({_id:req.params.id});
    res.render('edit',{
        post
    })
}