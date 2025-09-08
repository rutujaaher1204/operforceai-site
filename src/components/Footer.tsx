// import { Link } from "react-router-dom";
// export default function Footer() {
//   return (
//     <footer className="w-full py-10 px-4 text-center bg-transparent">
//       <h4 className="font-footer text-body16 text-white font-semibold mb-3">OperforceAI</h4>

//       <p className="text-sm text-white mb-6">© 2025 OperforceAI. All rights reserved.</p>

//       <nav className="flex flex-wrap justify-center text-white gap-5 text-sm">
//         <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
//         <Link to="/terms" className="hover:underline">Terms of Use</Link>
//         <Link to="/pricing" className="hover:underline">Pricing</Link>
//         <Link to="/payments" className="hover:underline">Payments</Link>
//         <Link to="/refund" className="hover:underline">Refund Policy</Link>
//         <Link to="/ip-rights" className="hover:underline">IP Rights</Link>
//         <Link to="/contact" className="hover:underline">Contact Us</Link>
//       </nav>
//     </footer>
//   )
// }



import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-4 text-center bg-transparent">
      <h4 className="font-footer text-body16 text-white font-semibold mb-3">
        OperforceAI
      </h4>

      <p className="text-sm text-white mb-6">
        © 2025 OperforceAI. All rights reserved.
      </p>

      {/* Responsive nav */}
      <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center text-white gap-3 sm:gap-5 text-sm">
        <Link to="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:underline">
          Terms of Use
        </Link>
        <Link to="/pricing" className="hover:underline">
          Pricing
        </Link>
        <Link to="/payments" className="hover:underline">
          Payments
        </Link>
        <Link to="/refund" className="hover:underline">
          Refund Policy
        </Link>
        <Link to="/ip-rights" className="hover:underline">
          IP Rights
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact Us
        </Link>
      </nav>
    </footer>
  );
}
