"use server";
import { db } from "@/lib/database/db";

export async function getUsers() {
  try {
    return await db.selectFrom("user").selectAll().execute();
  } catch (error) {
    return "Error getting users";
  }
}
