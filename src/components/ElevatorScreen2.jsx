import { useEffect, useRef, useState, useCallback } from 'react';

export default function ElevatorScreen2() {
  const svgRef = useRef(null);
  const [nodes, setNodes] = useState(() => generateNodes(5));

  function generateNodes(count) {
    return Array.from({ length: count }, () => ({
      x: 20 + Math.random() * 60,
      y: 15 + Math.random() * 70,
    }));
  }

  const shuffleNodes = useCallback(() => {
    setNodes((prev) =>
      prev.map((n) => ({
        x: Math.max(10, Math.min(90, n.x + (Math.random() - 0.5) * 30)),
        y: Math.max(10, Math.min(90, n.y + (Math.random() - 0.5) * 30)),
      }))
    );
  }, []);

  /* Listen for custom scroll events dispatched from ElevatorLayout */
  useEffect(() => {
    const handler = () => shuffleNodes();
    window.addEventListener('elevator-scroll', handler);
    return () => window.removeEventListener('elevator-scroll', handler);
  }, [shuffleNodes]);

  /* Edges: connect every node to its 2 nearest neighbors */
  const edges = [];
  nodes.forEach((a, i) => {
    const dists = nodes
      .map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .filter((d) => d.j !== i)
      .sort((x, y) => x.d - y.d);
    for (let k = 0; k < Math.min(2, dists.length); k++) {
      const key = [Math.min(i, dists[k].j), Math.max(i, dists[k].j)].join('-');
      if (!edges.find((e) => e.key === key)) {
        edges.push({ key, from: i, to: dists[k].j });
      }
    }
  });

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden p-2">
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className="w-full h-full max-w-[140px] md:max-w-none opacity-80"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Blueprint-style connecting edges */}
        {edges.map((e) => (
          <line
            key={e.key}
            x1={nodes[e.from].x}
            y1={nodes[e.from].y}
            x2={nodes[e.to].x}
            y2={nodes[e.to].y}
            stroke="rgba(186,215,247,0.18)"
            strokeWidth="0.75"
            strokeDasharray="2 1"
            style={{ transition: 'all 0.6s ease' }}
          />
        ))}
        {/* Nodes with luminous frost aura */}
        {nodes.map((n, i) => (
          <g key={i}>
            {/* Outer halo */}
            <circle
              cx={n.x}
              cy={n.y}
              r="4"
              fill={i === 0 ? "rgba(102,58,243,0.18)" : "rgba(186,215,247,0.1)"}
              style={{ transition: 'all 0.5s ease' }}
            />
            {/* Core */}
            <circle
              cx={n.x}
              cy={n.y}
              r="1.75"
              fill={i === 0 ? "#663af3" : "#d1e4fa"}
              style={{ transition: 'all 0.5s ease' }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
