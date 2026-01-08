

// export default function IconLocation() 
// {
//   return (
//     <svg
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       width="14"
//       height="14"
//       style={{ display: "inline-block", verticalAlign: "middle" }}
//     >
//       <path
//         fillRule="evenodd"
//         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }

// export function IconDots() {
//   return (
//     <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
//       <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//     </svg>
//   );
// }

// export function IconGrid() {
//   return (
//     <svg fill="currentColor" viewBox="0 0 20 20">
//       <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
//     </svg>
//   );
// }

// export function IconChevronDown() {
//   return (
//     <svg fill="currentColor" viewBox="0 0 20 20">
//       <path
//         fillRule="evenodd"
//         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }



export function IconLocation() {
  return (
    <svg className="w-3.5 h-3.5 text-[#98989d] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6z" />
    </svg>
  );
}

export function IconDots() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

export function IconGrid() {
  return (
    <svg className="w-6 h-6 text-[#98989d]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
    </svg>
  );
}

export function IconChevronDown() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 3.99a.75.75 0 01-1.04 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}