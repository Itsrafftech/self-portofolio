"use client";

import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLang } from "@/hooks/useLanguage";
import type { SocialLink } from "@/types";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Itsrafftech", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rafialarifi", icon: "linkedin" },
  { label: "Email", href: "mailto:itsrafftech@gmail.com", icon: "mail" },
];

const socialIconMap = { github: Github, linkedin: Linkedin, mail: Mail } as const;

type FormStatus = "idle" | "success" | "error";

export function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<FormStatus>("idle");

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t("contact.errorName")),
        email: z.string().email(t("contact.errorEmail")),
        subject: z.string().min(5, t("contact.errorSubject")),
        message: z.string().min(20, t("contact.errorMessage")),
      }),
    [t],
  );

  type ContactFormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Contact form submission:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-24" aria-label="Contact">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="05"
          heading={t("contact.heading")}
          subheading={t("contact.subheading")}
          align="center"
        />

        <div className="mb-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-secondary">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-green-500" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            {t("contact.openToWork")}
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-text-primary">
                {t("contact.name")}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t("contact.namePlaceholder")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                {...register("name")}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-text-primary">
                {t("contact.email")}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-sm font-medium text-text-primary">
              {t("contact.subject")}
            </label>
            <input
              id="subject"
              type="text"
              placeholder={t("contact.subjectPlaceholder")}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className="rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent"
              {...register("subject")}
            />
            {errors.subject && (
              <p id="subject-error" role="alert" className="text-xs text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-text-primary">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder={t("contact.messagePlaceholder")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="resize-none rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent"
              {...register("message")}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="mt-2 self-start">
            {isSubmitting ? t("contact.sending") : t("contact.send")}
          </Button>

          {status === "success" && (
            <p role="status" className="text-sm text-green-500">
              {t("contact.success")}
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-red-500">
              {t("contact.error")}
            </p>
          )}
        </form>

        <div className="mt-12 flex justify-center gap-4">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
