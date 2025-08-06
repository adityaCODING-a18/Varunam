import * as z from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),

  fullname: z
    .string()
    .min(3, "Full name must be at least 3 characters long")
    .max(50, "Full name must be at most 50 characters long")
    .regex(/^[a-zA-Z ]+$/, "Full name must contain only letters and spaces"),

  email: z
  .string()
  .email("Invalid email format")
  .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Only Gmail addresses are allowed"),

  standard: z
    .string()
    .regex(/^(?:[6-9]|1[0-2])$/, "Standard must be a number between 6 and 12"),

  avatar: z.any(),
  signUpAs: z.enum(["student", "teamMember"])
});
