import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const readData = async function (table, columns) {
  const { data, error } = await supabase.from(table).select(columns);
  if (error) {
    console.error("Error:", error);
    return null;
  } else {
    return data;
  }
};

export async function displayNotes() {
  try {
    const entries = await readData("note", "*");
    console.log("Entries fetched:", entries);

    const notesArray = [];
    const noteContainerEl = document.querySelector(".note-container");

    if (entries && entries.length > 0) {
      entries.forEach((entry) => {
        notesArray.push(entry);
      });

      notesArray.forEach((entry) => {
        const noteElement = document.createElement("div");
        noteElement.textContent = entry.note;
        noteElement.className = "note-single";
        noteContainerEl.appendChild(noteElement);
      });
    } else {
      console.log("No entries found.");
    }
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
}

export const writeData = async function (table, note) {
  const { error } = await supabase.from(table).insert([{ note: note }]);
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Note added");
  }
};
