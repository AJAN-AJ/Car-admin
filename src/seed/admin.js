import bcrypt from "bcryptjs";
import { prisma } from "../config/db.js";

async function seedAdmin() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.admin.create({
    data: {
      email: "admin@example.com",
      password: hashedPassword,
    },
  });

  console.log("Admin created");
}

seedAdmin();
