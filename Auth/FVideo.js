import { supabase } from "../Auth/Client";

export const fetchVideos = async () => {
  try {
    const { data, error } = await supabase.storage
      .from("videos") // Assuming your bucket is named 'videos'
      .list("public", { limit: 10 });

    if (error) {
      throw error;
    }

    const videoUrls = data.map((file) => {
      return supabase.storage.from("videos").getPublicUrl(`public/${file.name}`)
        .publicURL;
    });

    return videoUrls;
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Failed to fetch videos");
  }
};
