import cx from "classnames";

export interface FeaturesProps {
  className?: string;
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

export function Features({
  className,
  title,
  description,
  features,
}: FeaturesProps) {
  return (
    <section className={cx("relative w-full", className)}>
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mx-auto max-w-xl text-balance text-center text-3xl font-bold text-gray-950">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-balance text-center text-base leading-snug text-gray-800">
          {description}
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative w-full rounded-md bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10"
            >
              <div className="absolute inset-x-0 top-0 mx-auto -mt-6 flex size-12 items-center justify-center rounded-md bg-gradient-to-br from-blue-800 to-blue-600 shadow-sm">
                <feature.icon className="block h-auto w-8 text-white" />
              </div>

              <dt className="text-center font-spline text-xl font-medium text-gray-950">
                {feature.title}
              </dt>

              <dd className="mt-4 text-balance text-center text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
