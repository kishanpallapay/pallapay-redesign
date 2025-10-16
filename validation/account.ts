import * as yup from "yup";

const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_ATTACHMENT_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
] as const;

export const supportTicketSchema = yup.object({
  subject: yup
    .string()
    .trim()
    .required("Subject is required")
    .max(80, "Subject must be 80 characters or less"),
  description: yup
    .string()
    .trim()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be 500 characters or less"),
  attachment: yup
    .mixed<FileList | null>()
    .test("fileSize", "File must be 5MB or less", value => {
      if (!value || value.length === 0) return true;
      return Array.from(value).every(file => file.size <= MAX_ATTACHMENT_SIZE);
    })
    .test("fileType", "Unsupported file type", value => {
      if (!value || value.length === 0) return true;
      return Array.from(value).every(file =>
        SUPPORTED_ATTACHMENT_TYPES.includes(file.type as (typeof SUPPORTED_ATTACHMENT_TYPES)[number])
      );
    })
    .nullable()
    .optional(),
});

export type SupportTicketFormValues = yup.InferType<typeof supportTicketSchema>;
export { SUPPORTED_ATTACHMENT_TYPES, MAX_ATTACHMENT_SIZE };
