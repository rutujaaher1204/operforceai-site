
// export default function Capabilities() {
//   const cols = [
//     [
//       { k: 'AI INVENTORY', d: 'AI-aware inventory, ML models, and enterprise rules automate and optimize your inventory control and operations.' },
//     ],
//     [
//       { k: 'AI Material Management', d: 'Vendor management with AI and ML. New models predicted in materials; approvals seeded automatically by AI.' },
//     ],
//     [
//       { k: 'AI PRODUCTION', d: 'AI will automate production processes like never before.' },
//     ]
//   ]
//   return (
//     <section className="section pb-24">
//       <div className="grid md:grid-cols-3 gap-6">
//         {cols.map((col, i) => (
//           <div key={i} className="glass rounded-2xl p-6 space-y-6">
//             {col.map(item => (
//               <div key={item.k}>
//                 <div className="font-bold">{item.k}</div>
//                 <p className="mt-2 text-sm lead">{item.d}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }


export default function Capabilities() {
  const features = [
    {
      title: "AI Inventoryyyy",
      desc: "AI-aware inventory, ML models, and enterprise rules help automate and optimize inventory control and operations."
    },
    {
      title: "AI Material Management",
      desc: "Vendor management powered by AI/ML. Predictive models for materials with AI-driven approvals."
    },
    {
      title: "AI Production",
      desc: "Automating production processes with AI for better efficiency and control."
    }
  ]

  return (
    <section className="w-full py-20 px-6">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="rounded-2xl bg-white/60 backdrop-blur-md shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
