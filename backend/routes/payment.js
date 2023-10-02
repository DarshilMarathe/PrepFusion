const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

const User = require("../models/User");

const fetchuser = require('../middleware/fetchuser')

router.post("/orders", async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

router.post("/verify", async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully",status:true,razorpay_order_id, razorpay_payment_id });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" ,status:false});
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});



router.put('/status/:id',fetchuser,async (req,res)=>{

    try {
        const {} = req.body;

    //create newnote object
    const newnote = {};
    // if(title) {newnote.title = title};
    // if(description) {newnote.description = description};
    // if(tag) {newnote.tag = tag};
    if(true) {newnote.isPremium = true};

    //Find note to be updated
    let user = await User.findById(req.params.id); // params.id -> from url
    if(!user) {return res.status(404).send("Not Found")}

    // if(note.user.toString() !== req.user.id){
    //     return res.status(401).send("Not Alllowed");
    // }

    note = await User.findByIdAndUpdate(req.params.id,{$set : newnote}, {new : true})
    // Usually when you perform update operations in mongoose, it returns the previous state of the document (before it was updated) and not the updated one. By setting "new" to true in the third argument of the object in "findByIdAndUpdate()", we tell mongoose to return the updated state of the object instead of its default behaviour
    res.json(note)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error Occured");
    }
    

})

module.exports = router;