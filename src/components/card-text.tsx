import { useState } from 'react';

interface CardTextProps {
  text: string;
  maxLength: number;
}

function CardText({ text, maxLength }: CardTextProps) {
  const [showFullText, setShowFullText] = useState(false);

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='max-w-xl mx-auto'>
      <p className='overflow-hidden whitespace-nowrap overflow-ellipsis'>
        {showFullText ? text : text.slice(0, maxLength)}
        {!showFullText && text.length > maxLength && '...'}
      </p>
      {text.length > maxLength && (
        <button
          className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          onClick={handleClick}
        >
          {showFullText ? 'Show less' : 'Read all'}
        </button>
      )}
    </div>
  );
}

export default CardText;
