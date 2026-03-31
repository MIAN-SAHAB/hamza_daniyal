import '../../index.css';

export default function LetterLoader() {
  const letters = ['H', 'A', 'M', 'Z', 'A'];

  return (
    <div className="flex items-center justify-center h-screen gap-3">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="text-[150px] font-valturin font-bold text-green bounce-letter"
          style={{ animationDelay: `${index * 0.2}s` }} // stagger letters
        >
          {letter}
        </span>
      ))}
    </div>
  );
}