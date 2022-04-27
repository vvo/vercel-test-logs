import Image from "next/image";
import dogImage from "../public/dog.jpg";

export default function ImageRequestTestPage() {
  return <Image src={dogImage} alt="Thisis a dog" width={750} height={500} />;
}
