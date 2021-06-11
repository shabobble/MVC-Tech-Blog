const { Post } = require('../models');

const postData = [
    {
        title: "I Miss the Dreamy, Lo-Fi Mystery of the Windows 95 Maze Screensaver",
        post_content: "In the 1990s, computers were like portals to a fever dream. The internet was still steeped in all of its weird, early glory, coated wall-to-wall in clunky pixel art, dead GeoCities pages and unwelcome porn popups, and its unregulated weirdness was mirrored in the operating systems of the day. Maybe that’s why, more than anything, I miss the 3D Maze screensaver from Windows 95.",
        user_id: 3
    },
    {
        title: "Apple Really Wants You to Think of the Apple Watch as a 'Must-Have' Accessory",
        post_content: "One of the best things about iOS 14.5 was it introduced the “Unlock with Apple Watch” feature—a clever solution to masks mucking up FaceID in the pandemic. Now as folks begin digging through the iOS 15 developer beta, it looks like Apple’s planning on expanding this feature to Siri.",
        user_id: 1
    },
    {
        title: "Space Jam: A New Legacy's Trailer Ups the Drama and the Looniness",
        post_content: "When a man’s child is kidnapped, he must use his very particular set of skills; skills he has acquired over a very long career. Skills that make him a nightmare for people...like nefarious A.I.s played by Don Cheadle who make the preposterous mistake of challenging Lebron James to basketball.",
        user_id: 2

    },
    {
        title: "Keystone Light made the must-not-have wearable of the summer",
        post_content: "If you've ever felt the need to look the opposite of cool while having easy access to cold beer when you're outdoors, then, goodness, does Keystone Light have the wearable for you. The Smooth Operator vest has a compartment with enough space for six beers and two cold packs but no room for dignity.",
        user_id: 5
    },
    {
        title: "What to expect at E3 2021",
        post_content: "After a year off, the summer’s largest video game conference officially starts on Saturday, June 12th, featuring four days of major news and fresh trailers, all virtual and totally free for anyone to watch. It's time for E3 2021.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;