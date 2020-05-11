const functions = require("firebase-functions");
const fetch = require("node-fetch");
require("dotenv").config();
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.getVideos = functions
  .region("asia-east2") //region of cloud firestore
  .pubsub.schedule("0 0 * * *") //run every day
  .timeZone("Asia/Kolkata")
  .onRun(async (context) => {
    const channelUrl = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YT_API_KEY}&channelId=UCYAyEnZHbSDIenU18KsD3HQ&part=snippet,id&order=date&maxResults=20`;
    const videoURl = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.YT_API_KEY}&part=statistics&id=`;
    try {
      const res = await fetch(channelUrl);
      const json = await res.json();

      const videoId = json.items
        .filter((i) => i.id.kind != "youtube#channel")
        .map((i) => i.id.videoId);
      const videoData = videoId.map(async (id) => {
        const r = await fetch(videoURl + id);
        const j = await r.json();
        return {
          likes: j.items[0].statistics.likeCount,
          views: j.items[0].statistics.viewCount,
        };
      });
      videoData.forEach(async (e, i) => {
        db.collection("test")
          .doc(videoId[i])
          .set({
            stat: await e,
            title: json.items[i].snippet.title,
            thumbnail: json.items[i].snippet.thumbnails.high.url,
            id: videoId[i],
          });
      });
      response.json(json);
    } catch (error) {
      console.log(error);
    }
  });
