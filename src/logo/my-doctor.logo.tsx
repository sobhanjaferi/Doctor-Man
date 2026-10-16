import { ReactElement, SVGProps } from "react";

export default function MyDocotorLogo(
  props: SVGProps<SVGSVGElement>,
): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 208 178"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M44 4 H61" />
      <path d="M4 36 C4 17 18 4 37 4 H44" />
      <path d="M4 36 V69 C4 92 23 112 47 112 H55" />
      <path d="M61 4 H70" />
      <path d="M55 112 C55 137 73 155 98 155 C123 155 143 137 143 112" />
      <circle cx="143" cy="48" r="60" />
      <path d="M143 20 V48 H173" />
      <path d="M47 112 C47 137 65 155 90 155" />
    </svg>
  );
}
