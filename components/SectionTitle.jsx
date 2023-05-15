const SectionTitle = ({ span, h2, p }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="uppercase text-sm font-bold tracking-widest">
        {span}
      </span>
      <h2 className="text-6xl">{h2}</h2>
      <p className="w-3/5 text-gray-700">{p}</p>
    </div>
  );
};

export default SectionTitle;
