const prisma = require("../lib/prisma");

async function getAllPosts(req, res) {
    const posts = await prisma.post.findMany({
        orderBy: { created_date: "asc" },
        include: { author: true },
    });
    res.json({ posts });
}

async function createPost(req, res) {
    const { title, content, authorId } = req.body;
    const created_date = (updated_date = new Date());
    const post = await prisma.post.create({
        data: { title, content, authorId, created_date, updated_date },
    });
    res.json({ post });
}

async function updatePost(req, res) {
    const { postId } = req.params;
    const { title, content } = req.body;
    const updated_date = new Date();
    const post = await prisma.post.update({
        where: { id: Number(postId) },
        data: { title, content, updated_date },
    });
    res.json({ post });
}

async function deletePost(req, res) {
    const { postId } = req.params;
    const post = await prisma.post.delete({
        where: { id: Number(postId) },
    });
    res.json({ post });
}

module.exports = { getAllPosts, createPost, updatePost, deletePost };
