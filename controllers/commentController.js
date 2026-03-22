const prisma = require("../lib/prisma");

async function getAllComments(req, res) {
    const comments = await prisma.comment.findMany();
    res.json({ comments });
}

async function createComment(req, res) {
    const { postId } = req.params;
    const { content, userId } = req.body;
    const created_date = (updated_date = new Date());
    const comment = await prisma.comment.create({
        data: {
            content,
            created_date,
            updated_date,
            userId: Number(userId),
            postId: Number(postId),
        },
    });
    res.json({ comment });
}

async function updateComment(req, res) {
    const { commentId } = req.params;
    const { content } = req.body;
    const updated_date = new Date();
    const comment = await prisma.comment.update({
        where: { id: Number(commentId) },
        data: {
            content,
            updated_date,
        },
    });
    res.json({ comment });
}

async function deleteComment(req, res) {
    const { commentId } = req.params;
    const comment = await prisma.comment.delete({
        where: { id: Number(commentId) },
    });
    res.json({ comment });
}

module.exports = {
    getAllComments,
    createComment,
    updateComment,
    deleteComment,
};
