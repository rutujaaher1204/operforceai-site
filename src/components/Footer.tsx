// import { Link } from "react-router-dom";
// export default function Footer() {
//   return (
//     <footer className="py-8 text-center bg-transparent">
//       <div className="mb-4 font-semibold text-lg">
//         OperforceAI
//       </div>

//       <div className="flex flex-wrap justify-center gap-6 text-sm">
//         <span>© 2025 OperforceAI All Rights Reserved.</span>
//         <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
//         <Link to="/terms" className="hover:underline">Terms of Use</Link>
//         <Link to="/pricing" className="hover:underline">Pricing</Link>
//         <Link to="/payments" className="hover:underline">Payments</Link>
//         <Link to="/refund" className="hover:underline">Refund Policy</Link>
//         <Link to="/ip-rights" className="hover:underline">IP Rights</Link>
//         <Link to="/contact" className="hover:underline">Contact Us</Link>
//       </div>
//     </footer>
//   );
// }


import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-4 text-center bg-transparent">
      <h4 className="text-lg font-semibold mb-3">OperforceAI</h4>

      <p className="text-sm mb-6">© 2025 OperforceAI. All rights reserved.</p>

      <nav className="flex flex-wrap justify-center gap-5 text-sm">
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline">Terms of Use</Link>
        <Link to="/pricing" className="hover:underline">Pricing</Link>
        <Link to="/payments" className="hover:underline">Payments</Link>
        <Link to="/refund" className="hover:underline">Refund Policy</Link>
        <Link to="/ip-rights" className="hover:underline">IP Rights</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </nav>
    </footer>
  )
}
