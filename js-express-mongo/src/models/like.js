const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
	{
		postId: { type: mongoose.Schema.Types.ObjectId, required: true },
		user: { type: mongoose.Schema.Types.ObjectId, required: true },
	},
	{ timestamps: { createdAt: true, updatedAt: false } }
)

module.exports = mongoose.model('Post', postSchema)
