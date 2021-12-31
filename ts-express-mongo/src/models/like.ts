import mongoose from 'mongoose'

const likeSchema = new mongoose.Schema(
	{
		post: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Post',
			index: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
			index: true,
		},
	},
	{ timestamps: { createdAt: true, updatedAt: false } }
)

likeSchema.index({ post: 1, user: 1 }, { unique: true })

export default mongoose.model('Like', likeSchema)
