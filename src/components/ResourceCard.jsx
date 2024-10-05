
// eslint-disable-next-line react/prop-types
const ResourceCard = ({ title, description }) => {
    return (
      <div className="bg-black text-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center mb-4">
          <img src="/path/to/javascript-icon.png" alt={title} className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
export default ResourceCard;