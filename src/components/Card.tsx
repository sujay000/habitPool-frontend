


const Card = ({children}:{children: React.ReactNode} ) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
            {children}
      </div>
    </div>
  );
};

export default Card;
