const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "I feel personally attacked by this relatable content."
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "And then everyone applauded."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I'll take things that didn't happen for $200, Alex."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Great writing."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Bazinga!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "#winning"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Love everything about this."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Five stars!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;