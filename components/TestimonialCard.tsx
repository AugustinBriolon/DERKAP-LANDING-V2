import React from 'react';

export default function TestimonialCard({
  name,
  role,
  text,
  image,
}: {
  name: string;
  role: string;
  text: string;
  image: string;
}) {
  return (
    <div className="flex w-sm flex-col items-start justify-start gap-4 rounded-2xl border-t-3 border-t-white/10 bg-black/40 p-6 backdrop-blur-md select-none md:w-lg">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            fill="none"
            height="32"
            viewBox="0 0 32 32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask height="32" id="mask0_66_1330" maskUnits="userSpaceOnUse" width="32" x="0" y="0">
              <rect fill="#D9D9D9" height="32" width="32" />
            </mask>
            <g mask="url(#mask0_66_1330)">
              <path
                d="M16 23.944L9.69856 27.7659C9.42019 27.9443 9.12916 28.0207 8.82547 27.9952C8.52179 27.9697 8.25606 27.8678 8.0283 27.6895C7.80054 27.5111 7.62339 27.2882 7.49686 27.0206C7.37032 26.7531 7.34501 26.4537 7.42093 26.1225L9.0912 18.8991L3.51101 14.0453C3.25794 13.816 3.09977 13.5548 3.0365 13.2618C2.97323 12.9688 2.99221 12.6821 3.09344 12.4019C3.19467 12.1216 3.34651 11.8923 3.54897 11.7139C3.75142 11.5356 4.0298 11.4209 4.3841 11.37L11.7484 10.7202L14.5955 3.91726C14.722 3.6115 14.9181 3.38219 15.1839 3.22931C15.4496 3.07644 15.7216 3 16 3C16.2784 3 16.5504 3.07644 16.8162 3.22931C17.0819 3.38219 17.278 3.6115 17.4045 3.91726L20.2516 10.7202L27.6159 11.37C27.9702 11.4209 28.2486 11.5356 28.451 11.7139C28.6535 11.8923 28.8053 12.1216 28.9066 12.4019C29.0078 12.6821 29.0268 12.9688 28.9635 13.2618C28.9002 13.5548 28.7421 13.816 28.489 14.0453L22.9088 18.8991L24.5791 26.1225C24.655 26.4537 24.6297 26.7531 24.5031 27.0206C24.3766 27.2882 24.1995 27.5111 23.9717 27.6895C23.7439 27.8678 23.4782 27.9697 23.1745 27.9952C22.8708 28.0207 22.5798 27.9443 22.3014 27.7659L16 23.944Z"
                fill="#9747FF"
              />
            </g>
          </svg>
        ))}
      </div>
      <h4 className="min-h-32 space-x-1 text-2xl text-white">
        <span className="text-primary">“</span>
        {text}
        <span className="text-primary">”</span>
      </h4>
      <div className="flex items-center gap-2">
        <img alt={name} className="h-16 w-16 rounded-full object-cover" src={image} />
        <div className="flex flex-col items-start justify-start">
          <h5 className="text-xl font-bold text-white">{name}</h5>
          <p className="text-white-second">{role}</p>
        </div>
      </div>
    </div>
  );
}
