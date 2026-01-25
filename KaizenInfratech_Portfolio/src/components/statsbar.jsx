import AnimatedCounter from '../components/animated-counter.jsx';

function StatsBar() {
  return (
    <section className=" py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-font-Tertiary">

        <Stat
          value={25}
          label="Years of Proven Expertise"
          showDivider
        />

        <Stat
          value={5}
          label="States Served"
          showDivider
        />

        <Stat
          value={1100}
          label="Projects Completed"
          showDivider
        />

        <Stat
          value={40}
          label="Employees"
        />

      </div>
    </section>
  );
}

function Stat({ value, label, showDivider }) {
  return (
    <div className="relative px-8">
      <h2 className=" font-normal tracking-wide text-white font-secondary">
        <AnimatedCounter value={value} />
      </h2>

      <p className="text-md text-font-Tertiary font-primary mt-2">
        {label}
      </p>

      {showDivider && (
        <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-0.5 bg-yellow-400" />
      )}
    </div>
  );
}

export default StatsBar;
