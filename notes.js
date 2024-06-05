"use strict";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ibozznrkyqqfrqkripwy.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Testing availabilty");