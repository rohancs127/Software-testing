const express = require("express");
const app = express();

const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://doqdbgszuybudatrzfey.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvcWRiZ3N6dXlidWRhdHJ6ZmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzg1MTc5MSwiZXhwIjoyMDI5NDI3NzkxfQ.Juzrdof2lHj5m-au0F3LPwCNponULweuYaw5ZgKjPWA"
);

app.get("/", async (req, res) => {
  try {
    const { data: users, error } = await supabase
      .from("dummy shrath")
      .select("*");
    //console.log(data);

    if (error) {
      throw error;
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// console.log(supabase);
