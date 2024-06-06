"use strict";

// import dotenv from "dotenv"; // Kun til lokal server
import * as SBFunctions from "/src/functions.js";
import { SupabaseClient } from "@supabase/supabase-js";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { readData } from "./functions";
dotenv.config();

// writeData("note", "Her er en ny entry note");

// readData("note", "*");

SBFunctions.displayNotes();
