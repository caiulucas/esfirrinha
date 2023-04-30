import { useCallback, useRef, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

interface ControllerProps {
  onChange?: (value: number) => void;
}

export function Controller({ onChange }: ControllerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [quantity, setQuantity] = useState(0);

  const handleMinus = useCallback(() => {
    const newValue = Math.max(0, quantity - 1);
    onChange?.(newValue);
    setQuantity(newValue);
  }, [onChange, quantity]);

  const handlePlus = useCallback(() => {
    const newValue = quantity + 1;
    onChange?.(newValue);
    setQuantity(newValue);
  }, [onChange, quantity]);

  const handleChange = useCallback(
    (value: number) => {
      if (value < 0 || Number.isNaN(value)) {
        onChange?.(0);
        return setQuantity(0);
      }

      onChange?.(value);
      setQuantity(value);
    },
    [onChange]
  );

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
        ref={inputRef}
        placeholder="0"
        value={quantity}
        min={0}
        onChange={({ currentTarget }) =>
          handleChange(currentTarget.valueAsNumber)
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
