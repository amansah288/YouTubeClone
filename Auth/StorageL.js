import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tnhbmqpxlyhbqaienowg.supabase.co/storage/v1/s3";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuaGJtcXB4bHloYnFhaWVub3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyODQzOTcsImV4cCI6MjAzNjg2MDM5N30.LxVfKY3YXBOW3UyLnkC0rv9c5hJw9u6Q5OGILezSNts";
export const supabaseStorage = createClient(supabaseUrl, supabaseKey).storage;
