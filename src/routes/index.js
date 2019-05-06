const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/',async (req,res)=>{
  const users = await User.find();      
res.render('index',{
    users
})
});



router.post('/add',async (req,res)=>{
    const user = new User(req.body);   
      await user.save()   
    res.redirect('/');
})

router.get('/turn/:id',async (req,res)=>{
    const { id } = req.params
    const user = await User.findById(id)
    user.active = !user.active
    await user.save()
    res.redirect('/')
})

//Para eliminar
router.get('/delete/:id',async (req,res)=>{
    const { id }=req.params;    
   await  User.remove({_id: id})
    res.redirect('/');
})


router.post('/edit/:id',async(req,res)=>{
    const { id }=req.params;   
   await User.update({_id:id},req.body)
   res.redirect('/');
})

router.get('/edit/:id',async (req,res)=>{
    const { id }=req.params;   
    const user = await User.findById(id)
    res.render('edit',{
        user
    })
})
//


module.exports = router;

