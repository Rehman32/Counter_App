export default function InputStep({ stepCount, onStepChange }) {
    return (
      <>
        <input
          className="w-full py-1 px-2 border text-center rounded shadow-inner"
          type="number"
          value={stepCount}
          onChange={onStepChange}
          min="1"
          max="10"
          placeholder="0"
        />
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Set Step Size (1-10)
        </p>
      </>
    );
  }