import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image
        src="https://img.freepik.com/free-vector/flat-404-error-template_23-2147740353.jpg?t=st=1770112596~exp=1770116196~hmac=c519dcadf37d604f239ba7a3d8e4407b60374cc7ecc97cbe23525c54016ff685"   // 👈 your error image
        alt="Page Not Found"
        width={400}
        height={300}
      />

      <h1 style={{ fontSize: "28px", marginTop: "20px" }}>
        Page Not Found
      </h1>

      <Link href="/" style={{ marginTop: "10px", color: "blue" }}>
        Go Back Home
      </Link>
    </div>
  );
}
