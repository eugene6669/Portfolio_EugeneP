export const techIcons = {
  javascript: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
      <path d="M12.5 15.5V17.5C12.5 18.33 11.83 19 11 19C10.17 19 9.5 18.33 9.5 17.5V15.5H7.5V17.5C7.5 19.43 9.07 21 11 21C12.93 21 14.5 19.43 14.5 17.5V15.5H12.5Z" fill="#000000"/>
      <path d="M18.5 15.5C18.5 14.67 17.83 14 17 14H16C15.17 14 14.5 14.67 14.5 15.5C14.5 16.33 15.17 17 16 17H17C17.83 17 18.5 17.67 18.5 18.5C18.5 19.33 17.83 20 17 20H16C15.17 20 14.5 19.33 14.5 18.5H12.5C12.5 20.43 14.07 22 16 22H17C18.93 22 20.5 20.43 20.5 18.5C20.5 17.12 19.62 15.95 18.5 15.29V15.5Z" fill="#000000"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#339933"/>
      <path d="M12 22V12L3 7M12 22L21 17M12 22V12L21 7" stroke="#8CC84B" strokeWidth="0.5"/>
      <path d="M11.5 13.5C11.5 13.78 11.28 14 11 14C10.72 14 10.5 13.78 10.5 13.5V10.5C10.5 10.22 10.72 10 11 10C11.28 10 11.5 10.22 11.5 10.5V13.5Z" fill="white"/>
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="2" fill="#000000"/>
      <path d="M4 9L11 9M11 9L13 7M11 9L13 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 15L13 15M13 15L11 13M13 15L11 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  mssql: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.58 21 12 21C16.42 21 20 19.21 20 17V7C20 4.79 16.42 3 12 3Z" fill="#CC2927"/>
      <ellipse cx="12" cy="7" rx="8" ry="4" fill="#A91D22"/>
      <path d="M4 11C4 13.21 7.58 15 12 15C16.42 15 20 13.21 20 11" stroke="#CC2927" strokeWidth="2"/>
      <ellipse cx="12" cy="11" rx="8" ry="4" fill="#CC2927"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 10C16.5 10 16.42 9.92 16.28 9.78C15.42 8.92 13.92 9 12 9C10.08 9 8.58 8.92 7.72 9.78C7.58 9.92 7.5 10 7.5 10V14C7.5 14 7.58 14.08 7.72 14.22C8.58 15.08 10.08 15 12 15C13.92 15 15.42 15.08 16.28 14.22C16.42 14.08 16.5 14 16.5 14V10Z" fill="#00758F"/>
      <path d="M7.5 10C7.5 10.55 9.47 11 12 11C14.53 11 16.5 10.55 16.5 10C16.5 9.45 14.53 9 12 9C9.47 9 7.5 9.45 7.5 10Z" fill="#00758F"/>
      <ellipse cx="12" cy="10" rx="4.5" ry="1.5" fill="#F29111"/>
      <path d="M16.5 12C16.5 12.55 14.53 13 12 13C9.47 13 7.5 12.55 7.5 12" stroke="#F29111" strokeWidth="1"/>
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 3L7.5 12H11L9.5 20L18.5 10H14L13.5 3Z" fill="url(#azureGradient)"/>
      <defs>
        <linearGradient id="azureGradient" x1="7.5" y1="3" x2="18.5" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0078D4"/>
          <stop offset="1" stopColor="#5EA0EF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.62 11.11L12.89 2.38C12.4 1.89 11.6 1.89 11.11 2.38L9.5 4L11.8 6.3C12.3 6.1 12.9 6.2 13.3 6.6C13.7 7 13.8 7.6 13.6 8.1L15.8 10.3C16.3 10.1 16.9 10.2 17.3 10.6C17.9 11.2 17.9 12.1 17.3 12.7C16.7 13.3 15.8 13.3 15.2 12.7C14.8 12.3 14.7 11.7 14.9 11.2L12.9 9.2V14.5C13.1 14.6 13.2 14.7 13.4 14.9C14 15.5 14 16.4 13.4 17C12.8 17.6 11.9 17.6 11.3 17C10.7 16.4 10.7 15.5 11.3 14.9C11.5 14.7 11.7 14.6 11.9 14.5V9.2C11.7 9.1 11.5 9 11.3 8.8C10.9 8.4 10.8 7.8 11 7.3L8.7 5L2.38 11.11C1.89 11.6 1.89 12.4 2.38 12.89L11.11 21.62C11.6 22.11 12.4 22.11 12.89 21.62L21.62 12.89C22.11 12.4 22.11 11.6 21.62 11.11Z" fill="#F05032"/>
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 2.5L7 12L3.5 9.5L2 10.5L7 15.5L19 4.5L17.5 2.5Z" fill="#007ACC"/>
      <path d="M17.5 22L7 12L3.5 14.5L2 13.5L7 8.5L19 19.5L17.5 22Z" fill="#007ACC"/>
      <path d="M17.5 2.5V22L22 19.5V5L17.5 2.5Z" fill="#005A9E"/>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6C15 7.66 13.66 9 12 9C10.34 9 9 7.66 9 6Z" fill="#F24E1E"/>
      <path d="M9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12Z" fill="#A259FF"/>
      <path d="M9 18C9 16.34 10.34 15 12 15C13.66 15 15 16.34 15 18C15 19.66 13.66 21 12 21C10.34 21 9 19.66 9 18Z" fill="#0ACF83"/>
      <circle cx="18" cy="12" r="3" fill="#1ABCFE"/>
      <path d="M6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6Z" fill="#FF7262"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="2" fill="#3178C6"/>
      <path d="M8 8V10H10V19H12V10H14V8H8Z" fill="white"/>
      <path d="M16 8V10.5H14.5V12H16V15C16 16.1 16.9 17 18 17H19V15H18V12H19V10.5H18V8H16Z" fill="white"/>
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2L4.5 20L12 22L19.5 20L21 2H3Z" fill="#E34F26"/>
      <path d="M12 4V20L17.5 18.5L18.5 4H12Z" fill="#EF652A"/>
      <path d="M12 9H16L15.5 13.5L12 14.5V16.5L16.5 15L17 9.5L12 9.5V7.5H17.5L17.7 6H12V9Z" fill="white"/>
      <path d="M12 9H7.5L7.7 10.5H12V9ZM7.8 11H12V13L9.5 13.7L9.3 12H7.3L7.5 15L12 16.5V14.5L9.7 13.8L7.8 11Z" fill="#EBEBEB"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="2" fill="currentColor"/>
      <path d="M6 9H9V18H6V9ZM7.5 5C8.33 5 9 5.67 9 6.5C9 7.33 8.33 8 7.5 8C6.67 8 6 7.33 6 6.5C6 5.67 6.67 5 7.5 5Z" fill="var(--color-surface)"/>
      <path d="M11 9H14V10.5C14.5 9.5 15.8 9 17 9C19.2 9 20 10.3 20 12.5V18H17V13C17 11.9 16.5 11.5 15.5 11.5C14.5 11.5 14 12.2 14 13V18H11V9Z" fill="var(--color-surface)"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <path d="M13.5 9.5V11H15L14.7 13H13.5V19H11V13H9V11H11V9.2C11 7.3 12.3 6 14 6H15.5V8H14.5C14 8 13.5 8.2 13.5 9V9.5Z" fill="var(--color-surface)"/>
    </svg>
  ),
  discord: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.83 4.3 14.64 4.71 14.5 5.03C12.92 4.79 11.36 4.79 9.8 5.03C9.66 4.71 9.47 4.3 9.3 4C7.8 4.26 6.36 4.71 5.03 5.33C2.44 9.24 1.73 13.05 2.08 16.81C3.86 18.09 5.59 18.87 7.29 19.38C7.68 18.85 8.03 18.29 8.34 17.7C7.78 17.5 7.24 17.25 6.73 16.96C6.87 16.85 7.01 16.74 7.14 16.63C10.33 18.08 13.69 18.08 16.86 16.63C16.99 16.74 17.13 16.85 17.27 16.96C16.76 17.25 16.22 17.5 15.66 17.7C15.97 18.29 16.32 18.85 16.71 19.38C18.41 18.87 20.14 18.09 21.92 16.81C22.32 12.48 21.21 8.7 19.27 5.33ZM8.68 14.81C7.69 14.81 6.88 13.92 6.88 12.83C6.88 11.74 7.67 10.85 8.68 10.85C9.69 10.85 10.5 11.74 10.48 12.83C10.48 13.92 9.69 14.81 8.68 14.81ZM15.32 14.81C14.33 14.81 13.52 13.92 13.52 12.83C13.52 11.74 14.31 10.85 15.32 10.85C16.33 10.85 17.14 11.74 17.12 12.83C17.12 13.92 16.33 14.81 15.32 14.81Z" fill="currentColor"/>
    </svg>
  ),
};

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#logoGradient)"/>
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#22D3B7"/>
        <stop offset="1" stopColor="#1A9D8A"/>
      </linearGradient>
    </defs>
    <text x="50%" y="50%" textAnchor="middle" dy=".35em" fill="white" fontSize="20" fontWeight="bold" fontFamily="Plus Jakarta Sans, sans-serif">
      EP
    </text>
  </svg>
);
