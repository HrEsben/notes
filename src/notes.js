"use strict";

console.log("Testing availabilty 1 ");

import { createClient } from "/node_modules/@supabase/supabase-js";
const supabaseUrl = "https://ibozznrkyqqfrqkripwy.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Testing availabilty 2");
console.log(supabase);
