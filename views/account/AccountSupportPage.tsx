"use client";

import { useState, type JSX } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paperclip } from "lucide-react";

import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
import { AccountShell } from "@/components/pages/account/account-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  supportTicketSchema,
  type SupportTicketFormValues,
  SUPPORTED_ATTACHMENT_TYPES,
  MAX_ATTACHMENT_SIZE,
} from "@/validation/account";

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  return `${value.toFixed(value >= 10 || value % 1 === 0 ? 0 : 1)} ${sizes[i]}`;
}

function AccountSupportContent(): JSX.Element {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SupportTicketFormValues>({
    resolver: yupResolver(supportTicketSchema) as any,
    defaultValues: {
      subject: "",
      description: "",
      // Make attachment optional by omitting it from defaultValues
    },
  });

  const descriptionValue = watch("description") ?? "";
  const attachmentValue = watch("attachment");

  const onSubmit = async (values: SupportTicketFormValues) => {
    setSubmitMessage(null);

    await new Promise(resolve => setTimeout(resolve, 600));

    setSubmitMessage(
      `Support ticket submitted${values.subject ? `: ${values.subject}` : ""}.`
    );
    reset({ subject: "", description: "", attachment: null });
  };

  return (
    <AccountShell className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-exo2-semibold text-gray-900 dark:text-white">
          Message To Support
        </h2>
        <p className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/80">
          Submit a ticket here. Our team will respond as soon as possible.
        </p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm dark:border-gray-500/30 dark:bg-gray-500/20"
        noValidate
      >
        <div className="space-y-2">
          <label
            htmlFor="support-subject"
            className="text-sm font-exo2-medium text-gray-700 dark:text-gray-100"
          >
            Subject
          </label>
          <Input
            id="support-subject"
            placeholder="Subject"
            {...register("subject")}
          />
          {errors.subject ? (
            <p className="text-sm font-exo2-regular text-alert-200">
              {errors.subject.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="support-description"
            className="text-sm font-exo2-medium text-gray-700 dark:text-gray-100"
          >
            Description
          </label>
          <textarea
            id="support-description"
            placeholder="Describe your request"
            className="h-44 w-full rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm font-exo2-regular text-gray-600 shadow-sm outline-none transition focus-visible:border-orange-200 focus-visible:ring-2 focus-visible:ring-orange-200 dark:border-gray-500/30 dark:bg-gray-600/40 dark:text-white"
            maxLength={500}
            {...register("description")}
          />
          <div className="flex items-center justify-between text-xs font-exo2-regular text-gray-400 dark:text-gray-200/70">
            <span>
              {errors.description ? errors.description.message : "\u00A0"}
            </span>
            <span>{descriptionValue.length}/500</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-exo2-medium text-gray-700 dark:text-gray-100">
            Attachment
          </p>
          <label
            htmlFor="support-attachment"
            className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-gray-200 bg-white px-4 py-4 text-sm font-exo2-regular text-gray-500 transition hover:bg-gray-50 dark:border-gray-500/40 dark:bg-gray-600/40 dark:text-gray-200"
          >
            <span className="flex items-center gap-3">
              <Paperclip className="h-4 w-4" />
              Attach Document
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-200/70">
              {SUPPORTED_ATTACHMENT_TYPES.map(type => type.split("/")[1])
                .join(", ")
                .toUpperCase()}{" "}
              · up to {formatFileSize(MAX_ATTACHMENT_SIZE)}
            </span>
          </label>
          <input
            id="support-attachment"
            type="file"
            className="hidden"
            {...register("attachment")}
            aria-describedby="support-attachment-info"
          />
          {attachmentValue && attachmentValue.length > 0 ? (
            <ul
              id="support-attachment-info"
              className="space-y-1 text-sm font-exo2-regular text-gray-500 dark:text-gray-200"
            >
              {Array.from(attachmentValue).map(file => (
                <li key={file.name}>
                  {file.name} • {formatFileSize(file.size)}
                </li>
              ))}
            </ul>
          ) : (
            <p
              id="support-attachment-info"
              className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/70"
            >
              Optional: Include screenshots or documents that provide more
              context.
            </p>
          )}
          {errors.attachment ? (
            <p className="text-sm font-exo2-regular text-alert-200">
              {errors.attachment.message}
            </p>
          ) : null}
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            className="px-8"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </div>

        {submitMessage ? (
          <div className="rounded-xl bg-success-100 px-4 py-3 text-sm font-exo2-medium text-success-400 dark:bg-success-200/20 dark:text-success-200">
            {submitMessage}
          </div>
        ) : null}
      </form>
    </AccountShell>
  );
}

export const AccountSupportPage = withResponsiveLayout(AccountSupportContent, {
  role: "merchant",
  header: (
    <span className="font-exo2-semibold text-black dark:text-white">
      Account
    </span>
  ),
  sidebarTitle: (
    <span className="text-sm font-semibold uppercase text-gray-400">
      Account
    </span>
  ),
  searchPlaceholder: "Search account",
});
