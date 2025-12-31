import Image from "next/image";
import Loading from ".././../../public/dearly logo (1).gif"
export default function Load() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <div className="animate-spin w-10 h-10 border-4 border-[#007200] border-t-transparent rounded-full"></div> */}

          <Image
      src={Loading}
      alt="Description of GIF"
      width={400} // Required
      height={300} // Required
      unoptimized // CRITICAL: This keeps the GIF animated
    />
    </div>
  );
}
