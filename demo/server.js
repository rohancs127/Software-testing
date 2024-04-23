const express = require("express");

const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://doqdbgszuybudatrzfey.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvcWRiZ3N6dXlidWRhdHJ6ZmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NTE3OTEsImV4cCI6MjAyOTQyNzc5MX0.YraNhFEA5c7fOrXF0zju13n89oFQ0QBFJW4zZGbD7Zo"
);

console.log(supabase);
