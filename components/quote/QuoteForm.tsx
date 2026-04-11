"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { ContactStep } from "@/components/quote/steps/ContactStep";
import { DeliveryStep } from "@/components/quote/steps/DeliveryStep";
import { FeaturesStep } from "@/components/quote/steps/FeaturesStep";
import { PagesStep } from "@/components/quote/steps/PagesStep";
import { PaymentsStep } from "@/components/quote/steps/PaymentsStep";
import { PriceOptionStep } from "@/components/quote/steps/PriceOptionStep";
import { SuccessStep } from "@/components/quote/steps/SuccessStep";
import { WebsiteTypeStep } from "@/components/quote/steps/WebsiteTypeStep";
import { Progress } from "@/components/quote/ui/Progress";
import { submitQuote } from "@/lib/actions";
import { quoteSchema } from "@/lib/schemas";

export function QuoteForm() {
  const formRef = useRef<HTMLDivElement>(null);

  const { control, watch, handleSubmit, trigger } = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      features: [],
      payments: [],
      delivery: [],
      contact: {
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
      },
    },
    mode: "onChange",
  });

  const [submitted, setSubmitted] = useState(false);
  const [index, setIndex] = useState(0);

  const websiteType = watch("websiteType");

  const steps = useMemo(() => {
    const base = [
      "websiteType",
      "pages",
      "features",
      ...(websiteType === "ecommerce" ? (["payments", "delivery"] as const) : []),
      "priceOption",
      "contact",
    ] as const;

    return base;
  }, [websiteType]);

  const scrollToTop = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const next = async () => {
    const currentName = steps[index];
    const valid = await trigger(currentName, { shouldFocus: true });

    if (!valid) {
      return;
    }

    setIndex((i) => Math.min(i + 1, steps.length - 1));
    scrollToTop();
  };

  const back = () => {
    setIndex((i) => Math.max(i - 1, 0));
    scrollToTop();
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await submitQuote(values);

      if (res?.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to submit quote:", error);
    }
  });

  const totalSteps = steps.length;
  const completedSteps = index;

  if (submitted) {
    return <SuccessStep />;
  }

  return (
    <div ref={formRef} className="scroll-mt-28 space-y-3">
      <Progress current={completedSteps} total={totalSteps} />

      <form className="space-y-6" onSubmit={onSubmit}>
        {steps[index] === "websiteType" && <WebsiteTypeStep control={control} onNext={next} />}

        {steps[index] === "pages" && <PagesStep control={control} onBack={back} onNext={next} />}

        {steps[index] === "features" && (
          <FeaturesStep control={control} onBack={back} onNext={next} />
        )}

        {steps[index] === "payments" && (
          <PaymentsStep control={control} onBack={back} onNext={next} />
        )}

        {steps[index] === "delivery" && (
          <DeliveryStep control={control} onBack={back} onNext={next} />
        )}

        {steps[index] === "priceOption" && (
          <PriceOptionStep control={control} onBack={back} onNext={next} />
        )}

        {steps[index] === "contact" && (
          <ContactStep control={control} onBack={back} onSubmit={onSubmit} />
        )}
      </form>
    </div>
  );
}
