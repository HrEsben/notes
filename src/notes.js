"use strict";

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const readData = async function (table, columns) {
  const { data, error } = await supabase.from(table).select(columns);
  if (error) {
    console.error("Error:", error);
  } else {
    console.log(data);
  }
};

// Definer variablen 'table' og 'columns'
const table = "note"; // Udskift med dit tabelnavn
const columns = "*"; // Udskift med de kolonner du vil hente, f.eks. 'id, name' eller '*' for alle kolonner

readData(table, columns);
