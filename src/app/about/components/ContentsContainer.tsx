import Builds from "./contents/Builds";
import Connect from "./contents/Connect";
import Intro from "./contents/Intro";

export default function ContentsContainer({
  isTab,
}: {
  isTab: "Intro" | "Builds" | "Connect";
}) {
  return (
    <>
      {isTab === "Intro" ? (
        <Intro />
      ) : isTab === "Builds" ? (
        <Builds />
      ) : (
        <Connect />
      )}
    </>
  );
}
