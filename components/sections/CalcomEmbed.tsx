"use client";

import "@calcom/atoms/globals.min.css";

import { BookerEmbed } from "@calcom/atoms";

interface CalcomEmbedProps {
  eventType: "rdv-decouverte";
}

export function CalcomEmbed({ eventType }: CalcomEmbedProps) {
  return <BookerEmbed eventSlug={eventType} view="MONTH_VIEW" username="tcaweb" userLocale="fr" />;
}
