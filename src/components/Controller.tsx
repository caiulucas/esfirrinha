import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

export function Controller() {
  const [quantity, setQuantity] = useState(0);

  function handleMinus() {
    setQuantity((oldState) => oldState - 1);
  }

  function handlePlus() {
    setQuantity((oldState) => oldState + 1);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleMinus}
        className="bg-yellow-500 hover:bg-yellow-400 p-2 h-8 rounded
        flex items-center justify-center text-black"
      >
        <FiMinus />
      </button>
      <input
        type="number"
        placeholder="0"
        value={quantity}
        onChange={({ currentTarget }) =>
          setQuantity(currentTarget.valueAsNumber)
        }
        className="w-16 text-center"
      />
      <button
        type="button"
        onClick={handlePlus}
        className="bg-yellow-500 hover:bg-yellow-400 p-2 h-8 rounded
        flex items-center justify-center text-black"
      >
        <FiPlus />
      </button>
    </div>
  );
}
