const express=require('express')
const multer=require('multer')
var upload = multer({ dest: 'uploads/' })
const router=express.Router()
const {RoomCategory}=require('../models/roomCategory')
const {authenticateUser}=require('../middleware/user-authentication')

router.get('/',(req,res)=>{
    RoomCategory.find()
    .then(rooms=>{
        res.json(rooms)
    })
    .catch(err=>{
        res.json(err)
    })
})

router.post('/', upload.single("image"),(req,res)=>{
    const dest = req.file.destination;
		const imagePath =
			"http://localhost:3006" + dest.slice(1) + req.file.filename;
    const body=req.body  
        const roomCategory=new RoomCategory(body)
        roomCategory.save()
        .then(roomcategory=>{
            res.json(roomcategory)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    // else{
    //     res.json({notice:"authenticate user"})
    // }
)

router.put('/:id',authenticateUser,(req,res)=>{
    const id=req.params.id
    const body=req.body
    if(req.user){
        RoomCategory.findOneAndUpdate({_id:id},{$set:body},{new:true})
        .then(roomcategory=>{
            res.json(roomcategory)
        })
        .catch(err=>{
            res.json(err)
        })
    }
})
router.get('/:id',(req,res)=>{
    const id=req.params.id
    RoomCategory.findById(id)
    .then(roomcategory=>{
        res.json(roomcategory)
    })
    .catch(err=>{
        res.json(err)
    })
})

var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		//with out function callback use directely destination:"./public/uploads/"
		callback(null, "./public/uploads/");
	},
	filename: function(req, file, callback) {
		callback(null, Date.now() + "-" + file.originalname);
	}
});
function fileFilter(req, file, callback) {
	if (file.mimetype == "image/jpg" || file.mimetype == "image/png") {
		// To accept the file pass `true`, like so:
		callback(null, true);
	} else {
		// To reject this file pass `false`, like so:
		callback(null, false);
	}
	// You can always pass an error if something goes wrong:
	callback(new Error("check image logic once"));
}
var upload = multer(
	{ storage },
	{ limits: { fileSize: 1024 * 1024 * 5 } },
	{ fileFilter }
);
router.post("/", upload.single("image"), function(req, res, next) {
	console.log(req.file);
	res.send("Successfully uploaded " + req.file.location + " file!");
});

const RoomCategoryRouter=router

module.exports=RoomCategoryRouter