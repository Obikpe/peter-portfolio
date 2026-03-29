interface SectionWrapperProps {
  children: React.ReactNode;
  title?: string;
}

export default function SectionWrapper({ children, title }: SectionWrapperProps) {
  return (
    // Reduced py-20 to py-10
    <section className="py-4 px-16 max-w-6xl mx-auto">
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-white">{title}</h2>
      )}
      {children}
    </section>
  );
}