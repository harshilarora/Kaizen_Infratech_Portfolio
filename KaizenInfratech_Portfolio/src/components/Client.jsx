function Client({ name, image }) {
  return (
    <div className="min-w-[161px] h-[188px] bg-gray-100 px-4 pt-6 flex-shrink-0 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-32 h-16 object-contain mx-auto"
      />
      <p className="pt-3 text-xs font-light text-gray-600 text-center">
        {name}
      </p>
    </div>
  );
}
export default Client;
