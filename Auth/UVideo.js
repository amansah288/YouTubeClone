import { supabaseStorage } from "./StorageL";
import * as DocumentPicker from "expo-document-picker";
import { Alert } from "react-native";

export const uploadVideo = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: "video/*",
    });

    if (result.type === "cancel") {
      console.log("User cancelled document picker");
      return;
    }

    console.log("Document selected:", result);

    // Fetch the file from the local URI
    const response = await fetch(result.uri);
    const videoBlob = await response.blob();

    console.log("Video file fetched and converted to blob");

    const { data, error } = await supabaseStorage
      .from("videos") // Assuming your bucket is named 'videos'
      .upload(`public/${result.name}`, videoBlob, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Error from Supabase:", error);
      throw error;
    }

    console.log("Video uploaded:", data);
    Alert.alert("Success", "Video uploaded successfully!");
    return data;
  } catch (error) {
    console.error("Error uploading video:", error);
    Alert.alert("Error", "Failed to upload video");
  }
};
