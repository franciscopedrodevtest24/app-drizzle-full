import CountUp from "./CountUp";

export function Stats() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Projetos Concluídos",
    },
    {
      value: 15,
      suffix: "+",
      label: "Anos de Experiência",
    },
    {
      value: 98,
      label: "Satisfação do Cliente",
      suffix: "%",
    },
  ];

  return (
    <section className="relative z-10 -mt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="relative text-center">
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl md:text-5xl font-bold  text-yellow-500/90 mb-2"
              />
              <span className="text-2xl md:text-3xl font-bold  text-yellow-500/90">{stat.suffix}</span>

              <div className="text-base md:text-lg text-yellow-500/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
