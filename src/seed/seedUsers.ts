import { User } from "../app/modules/user/user.model";

export const seedUsers = async () => {
  const ownerEmail = process.env.OWNER_EMAIL;
  const ownerPassword = process.env.OWNER_PASSWORD;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!ownerEmail || !ownerPassword || !adminEmail || !adminPassword) {
    console.error("❌ OWNER or ADMIN credentials not set in .env");
    return;
  }

  // Seed Owner
  const ownerExists = await User.findOne({ role: "owner" });
  if (!ownerExists) {
    await User.create({
      name: "System Owner",
      email: ownerEmail,
      password: ownerPassword,
      role: "owner",
    });
    console.log("✅ Owner created");
  } else {
    console.log("✅ Owner already exists");
  }

  // Seed Admin
  const adminExists = await User.findOne({ role: "admin" });
  if (!adminExists) {
    await User.create({
      name: "System Admin",
      email: adminEmail,
      password: adminPassword,
      role: "admin",
    });
    console.log("✅ Admin created");
  } else {
    console.log("✅ Admin already exists");
  }
};
