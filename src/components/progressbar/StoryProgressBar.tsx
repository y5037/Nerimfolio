export default function StoryProgressBar({
  slideIndex,
}: {
  slideIndex: number;
}) {
  return (
    <div className="w-full h-[4px] z-20 overflow-hidden">
      <div key={slideIndex} className="h-full bg-white animate-progress" />
    </div>
  );
}
