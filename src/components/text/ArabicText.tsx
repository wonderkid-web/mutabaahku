import { quranFont } from "@/helper";

type Props = {
  text: string;
  className?: string;
};

function ArabicText({ text, className }: Props) {
  return <p className={`${className} ${quranFont.className}`}>{text}</p>;
}

export default ArabicText;
